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

    # Tìm table có thead chứa 'Tier' + 'Track'
    table = None
    for th in soup.find_all("th"):
        if "Tier" in th.get_text():
            next_th = th.find_next_sibling("th")
            if next_th and "Track" in next_th.get_text():
                table = th.find_parent("table")
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

        # Cột Tier (có thể rowspan)
        if tier_pending > 0:
            tier_pending -= 1
        else:
            tier_td = tds[col_idx]
            current_tier = tier_td.get_text(strip=True)
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

        # Cột Image (lấy full URL từ <a class="image" href="...">)
        img_url = None
        if col_idx < len(tds):
            img_td = tds[col_idx]
            img_a = img_td.find("a", class_="image")
            if img_a and img_a.get("href"):
                img_url = img_a["href"]
                if not img_url.startswith("http"):
                    img_url = BASE_URL + img_url
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


def main():
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