import requests
from bs4 import BeautifulSoup
import time
import json
import os

BASE_URL = "https://valorant.fandom.com"
MAIN_URL = f"{BASE_URL}/wiki/Battle_Pass"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

# Đường dẫn output: backend/tools/valorant_battlepass.json
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_JSON = os.path.join(SCRIPT_DIR, "valorant_battlepass.json")


def get_act_links(main_url: str):
    """Crawl trang Battle_Pass → lấy list Season/Act + URL chi tiết."""
    resp = requests.get(main_url, headers=HEADERS)
    print("Main page status:", resp.status_code, "URL thực:", resp.url)

    # Nếu status != 200 thì nhiều khả năng bị redirect / block
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "lxml")

    acts = []

    # Dựa vào href kiểu "/wiki/Season_xxxx:_Act_x" để sinh key động: season_xxxx_act_x
    for a in soup.find_all("a", href=True):
        href = a["href"]
        text = a.get_text(strip=True)

        # Chỉ quan tâm các link Season_XXXX:_Act_YY
        if not href.startswith("/wiki/Season_"):
            continue

        # Lấy phần page name sau "/wiki/"
        page_name = href.split("/wiki/")[-1]  # vd: "Season_xxxx:_Act_y"
        if ":_" in page_name:
            season_part, act_part = page_name.split(":_", 1)  # "Season_xxxx", "Act_x"
        else:
            # fallback an toàn
            season_part = "Season_Unknown"
            act_part = page_name

        season_key = season_part.lower()         # "season_xxxx"
        act_key = act_part.lower()              # "act_x"
        key = f"{season_key}_{act_key}"         # "season_xxxx_act_x"

        full_url = f"{BASE_URL}{href}"

        acts.append(
            {
                "season": season_key,
                "act": act_key,
                "key": key,
                "full_name": text or page_name.replace("_", " "),
                "url": full_url,
                "start_date": "",
            }
        )

    # Loại trùng (nếu có)
    unique = {}
    for act in acts:
        unique[act["key"]] = act
    acts = list(unique.values())

    if not acts:
        debug_path = os.path.join(SCRIPT_DIR, "debug_battlepass.html")
        with open(debug_path, "w", encoding="utf-8") as f:
            f.write(resp.text)
        print("Found 0 Acts – đã ghi HTML debug vào:", debug_path)

    return acts


def parse_rewards(act_url: str):
    """Crawl 1 trang Act → parse bảng rewards (Tier, Track, Image, Item, Category)."""
    resp = requests.get(act_url, headers=HEADERS)
    print("Act page status:", resp.status_code, "URL:", resp.url)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "lxml")

    # Xác định id caption mong muốn từ URL, ví dụ: "Season_2025:_Act_6"
    # → Ta chỉ muốn crawl đúng 1 table có caption này (3 phần: caption / thead / tbody).
    page_id = None
    if "/wiki/" in act_url:
        page_id = act_url.split("/wiki/")[-1].split("?", 1)[0].split("#", 1)[0]

    table = None

    # Cách 1: tìm trực tiếp <span id="Season_2025:_Act_6" ...> rồi lấy table cha
    if page_id:
        span = soup.find("span", id=page_id)
        if span:
            table_candidate = span.find_parent("table")
            if table_candidate:
                thead = table_candidate.find("thead")
                if thead:
                    ths = thead.find_all("th")
                    th_texts = [th.get_text(strip=True) for th in ths]
                    required = ["Tier", "Track", "Image", "Item", "Category"]
                    if all(col in th_texts for col in required):
                        table = table_candidate
                        caption = table.find("caption")
                        caption_text = (
                            caption.get_text(strip=True) if caption else page_id
                        )
                        print(f"Tim thay bang theo span id: {caption_text}")

    # Cách 2: nếu cách 1 fail, thử lại bằng cách duyệt table + caption giống HTML mẫu
    if not table and page_id:
        for table_elem in soup.find_all("table"):
            caption = table_elem.find("caption")
            if not caption:
                continue

            headline_span = caption.find("span", class_="mw-headline")
            if not headline_span:
                continue

            span_id = headline_span.get("id", "")
            caption_text = headline_span.get_text(strip=True)

            if span_id != page_id:
                continue

            thead = table_elem.find("thead")
            if not thead:
                continue

            ths = thead.find_all("th")
            th_texts = [th.get_text(strip=True) for th in ths]
            required = ["Tier", "Track", "Image", "Item", "Category"]
            if all(col in th_texts for col in required):
                table = table_elem
                print(f"Tim thay bang voi caption (duyet table): {caption_text}")
                break

    # Cách 3 (fallback cuối): tìm bất kỳ table có thead chứa Tier + Track
    if not table:
        for th in soup.find_all("th"):
            if "Tier" in th.get_text():
                next_th = th.find_next_sibling("th")
                if next_th and "Track" in next_th.get_text():
                    table = th.find_parent("table")
                    print("Tim thay bang theo thead (fallback)")
                    break

    if not table:
        print("Không tìm thấy bảng rewards trong", act_url)
        debug_path = os.path.join(SCRIPT_DIR, "debug_act.html")
        with open(debug_path, "w", encoding="utf-8") as f:
            f.write(resp.text)
        print("Đã ghi HTML debug act vào:", debug_path)
        return []

    tbody = table.find("tbody") or table
    rewards = []

    current_tier = ""
    current_track = ""
    tier_pending = 0
    track_pending = 0

    for row in tbody.find_all("tr"):
        tds = row.find_all("td")
        if len(tds) < 3:
            continue

        col_idx = 0

        # Cột Tier (có thể rowspan hoặc data-sort-value cho Epilogue)
        if tier_pending > 0:
            tier_pending -= 1
        else:
            if col_idx < len(tds):
                tier_td = tds[col_idx]
                # Ưu tiên data-sort-value (Epilogue 1, 2, ...)
                current_tier = tier_td.get("data-sort-value") or tier_td.get_text(
                    strip=True
                )
                tier_pending = int(tier_td.get("rowspan", 1)) - 1
                col_idx += 1

        # Cột Track (Premium/Free)
        if track_pending > 0:
            track_pending -= 1
        else:
            if col_idx < len(tds):
                track_td = tds[col_idx]
                current_track = track_td.get_text(strip=True)
                track_pending = int(track_td.get("rowspan", 1)) - 1
                col_idx += 1

        # Cột Image (full URL ở <a class="... image ..."> hoặc trong <img>)
        img_url = None
        if col_idx < len(tds):
            img_td = tds[col_idx]
            # class có thể là "image" hoặc "mw-file-description image"
            img_a = img_td.find(
                "a", class_=lambda x: x and "image" in x if x else False
            )
            if img_a:
                href = img_a.get("href")
                if href and not href.startswith("data:"):
                    if href.startswith("http"):
                        img_url = href
                    else:
                        img_url = BASE_URL + href if not href.startswith(
                            "/"
                        ) else BASE_URL + href

                # Nếu không có href hợp lệ, fallback sang <img>
                if not img_url:
                    img_tag = img_a.find("img")
                    if img_tag:
                        img_url = img_tag.get("data-src") or img_tag.get("src")
                        if img_url and img_url.startswith("data:image"):
                            img_url = None
                        elif img_url and not img_url.startswith("http"):
                            img_url = BASE_URL + img_url if not img_url.startswith(
                                "/"
                            ) else BASE_URL + img_url
            col_idx += 1

        # Cột Item
        item = ""
        if col_idx < len(tds):
            item_td = tds[col_idx]
            item = item_td.get_text(separator=" ", strip=True)
            col_idx += 1

        # Cột Category
        category = ""
        if col_idx < len(tds):
            cat_td = tds[col_idx]
            category = cat_td.get_text(separator=" ", strip=True)

        if current_tier and current_track and item:
            rewards.append(
                {
                    "tier": current_tier,
                    "track": current_track,
                    "image": img_url,
                    "item": item,
                    "category": category,
                }
            )

    return rewards


def create_act_from_url(url: str):
    """Tạo act object từ URL trực tiếp (có thể là full URL hoặc chỉ page name)."""
    # Chuẩn hóa URL
    if not url.startswith("http"):
        if url.startswith("/wiki/"):
            url = f"{BASE_URL}{url}"
        else:
            url = f"{BASE_URL}/wiki/{url}"

    # Lấy page_name: Season_2025:_Act_6
    if "/wiki/" in url:
        page_name = url.split("/wiki/")[-1].split("?", 1)[0].split("#", 1)[0]
    else:
        page_name = url.split("/")[-1]

    if not page_name.startswith("Season_"):
        return None

    # Tách Season_xxx và Act_x
    if ":_" in page_name:
        season_part, act_part = page_name.split(":_", 1)
    else:
        season_part = "Season_Unknown"
        act_part = page_name

    season_key = season_part.lower()
    act_key = act_part.lower()
    key = f"{season_key}_{act_key}"

    return {
        "season": season_part.replace("_", " "),
        "act": act_part.replace("_", " "),
        "key": key,
        "full_name": page_name.replace("_", " ").replace(":", ": "),
        "url": url,
        "start_date": "",
    }


def main():
    import sys

    # Nếu user truyền URL cụ thể (có thể là full URL như
    # "https://valorant.fandom.com/wiki/Season_2025:_Act_6"
    # hoặc chỉ page name "Season_2025:_Act_6")
    if len(sys.argv) > 1:
        raw_url = sys.argv[1]
        print(f"Crawl truc tiep tu URL: {raw_url}")

        act = create_act_from_url(raw_url)
        if not act:
            print(f"Khong the parse URL: {raw_url}")
            print(
                "URL phai co format: Season_2025:_Act_6 "
                "hoac /wiki/Season_2025:_Act_6 hoac full URL"
            )
            return

        battlepasses = {}
        print(f"Crawling {act['full_name']}: {act['url']}")
        try:
            rewards = parse_rewards(act["url"])
            battlepasses[act["key"]] = rewards
            print(f"Tim thay {len(rewards)} rewards")
        except Exception as e:
            print(f"Loi crawl: {e}")
            import traceback

            traceback.print_exc()
            return

        # Merge với JSON hiện tại nếu có
        if os.path.exists(OUTPUT_JSON):
            try:
                with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                    existing_data = json.load(f)
                existing_data.update(battlepasses)
                battlepasses = existing_data
            except Exception:
                pass

        with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
            json.dump(battlepasses, f, indent=2, ensure_ascii=False)

        print(f"Done! Da ghi du lieu vao: {OUTPUT_JSON}")
        return

    # Mặc định: crawl từ trang Battle_Pass
    print("Đang crawl danh sách Acts từ:", MAIN_URL)
    acts = get_act_links(MAIN_URL)
    print(f"Found {len(acts)} Acts tổng cộng")

    if not acts:
        return

    battlepasses = {}
    for act in acts:
        print(f"Crawling {act['full_name']}: {act['url']}")
        try:
            rewards = parse_rewards(act["url"])
            battlepasses[act["key"]] = rewards
            print(f"  -> {len(rewards)} rewards")
            time.sleep(2)  # tránh spam
        except Exception as e:
            print("  !! Lỗi crawl:", e)

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(battlepasses, f, indent=2, ensure_ascii=False)

    print("Done! Đã ghi dữ liệu vào:", OUTPUT_JSON)


if __name__ == "__main__":
    main()