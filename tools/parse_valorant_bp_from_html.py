from bs4 import BeautifulSoup
import json
import os
import sys

BASE_URL = "https://valorant.fandom.com"

# Đường dẫn output: backend/tools/valorant_battlepass.json
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_JSON = os.path.join(SCRIPT_DIR, "valorant_battlepass.json")


def parse_rewards_from_html(html_content: str, page_id: str = None):
    """Parse bảng rewards từ HTML string (Tier, Track, Image, Item, Category)."""
    soup = BeautifulSoup(html_content, "lxml")

    table = None

    # Cách 1: tìm trực tiếp <span id="Season_2026:_Act_1" ...> rồi lấy table cha
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
        print("Không tìm thấy bảng rewards trong HTML")
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
                        # Ưu tiên data-src (lazy load), sau đó mới src
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


def create_act_from_page_id(page_id: str):
    """Tạo act object từ page_id (ví dụ: "Season_2026:_Act_1")."""
    if not page_id.startswith("Season_"):
        return None

    # Tách Season_xxx và Act_x
    if ":_" in page_id:
        season_part, act_part = page_id.split(":_", 1)
    else:
        season_part = "Season_Unknown"
        act_part = page_id

    season_key = season_part.lower()
    act_key = act_part.lower()
    key = f"{season_key}_{act_key}"

    return {
        "season": season_part.replace("_", " "),
        "act": act_part.replace("_", " "),
        "key": key,
        "full_name": page_id.replace("_", " ").replace(":", ": "),
        "url": f"{BASE_URL}/wiki/{page_id}",
        "start_date": "",
    }


def main():
    # Nếu user truyền file HTML
    if len(sys.argv) > 1:
        html_file = sys.argv[1]
        
        # Lấy page_id từ argument thứ 2 (nếu có), nếu không thì tự detect từ HTML
        page_id = sys.argv[2] if len(sys.argv) > 2 else None
        
        print(f"Doc HTML tu file: {html_file}")
        
        if not os.path.exists(html_file):
            print(f"File khong ton tai: {html_file}")
            return
        
        with open(html_file, "r", encoding="utf-8") as f:
            html_content = f.read()
        
        # Nếu không có page_id, thử tìm trong HTML
        if not page_id:
            soup = BeautifulSoup(html_content, "lxml")
            headline_span = soup.find("span", class_="mw-headline")
            if headline_span:
                page_id = headline_span.get("id", "")
                print(f"Tim thay page_id trong HTML: {page_id}")
        
        if not page_id:
            print("Khong tim thay page_id. Vui long truyen page_id lam argument thu 2")
            print("Vi du: python parse_valorant_bp_from_html.py file.html Season_2026:_Act_1")
            return
        
        act = create_act_from_page_id(page_id)
        if not act:
            print(f"Khong the parse page_id: {page_id}")
            print("page_id phai co format: Season_2026:_Act_1")
            return
        
        battlepasses = {}
        print(f"Parsing {act['full_name']}")
        try:
            rewards = parse_rewards_from_html(html_content, page_id)
            battlepasses[act["key"]] = rewards
            print(f"Tim thay {len(rewards)} rewards")
        except Exception as e:
            print(f"Loi parse: {e}")
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
    
    # Nếu không có argument, đọc HTML từ stdin hoặc yêu cầu input
    print("Chua co file HTML. Vui long truyen file HTML lam argument")
    print("Vi du: python parse_valorant_bp_from_html.py file.html Season_2026:_Act_1")
    print("\nHoac paste HTML vao day (nhan Ctrl+D hoac Ctrl+Z de ket thuc):")
    
    try:
        html_content = sys.stdin.read()
        if html_content.strip():
            # Thử tìm page_id trong HTML
            soup = BeautifulSoup(html_content, "lxml")
            headline_span = soup.find("span", class_="mw-headline")
            if headline_span:
                page_id = headline_span.get("id", "")
                print(f"Tim thay page_id: {page_id}")
                
                act = create_act_from_page_id(page_id)
                if act:
                    battlepasses = {}
                    print(f"Parsing {act['full_name']}")
                    try:
                        rewards = parse_rewards_from_html(html_content, page_id)
                        battlepasses[act["key"]] = rewards
                        print(f"Tim thay {len(rewards)} rewards")
                        
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
                    except Exception as e:
                        print(f"Loi parse: {e}")
                        import traceback
                        traceback.print_exc()
                else:
                    print(f"Khong the parse page_id: {page_id}")
            else:
                print("Khong tim thay page_id trong HTML")
    except KeyboardInterrupt:
        print("\nDa huy")
    except EOFError:
        print("\nKhong co du lieu")


if __name__ == "__main__":
    main()
