// AUTO-GENERATED HELPER SCRIPT (you can edit SEASON_KEY / CONTRACT_ID as needed)
// Dùng: từ thư mục backend, chạy:
//   node tools/generate-battlepass-tiers.js
//
// Yêu cầu:
// - Đã có file tools/valorant_battlepass.json do script Python crawl Fandom tạo ra
//   với cấu trúc { "season_2025_act_6": [ { tier, track, image, item, category }, ... ] }

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// ==== CONFIG TÙY SEASON ====
const INPUT_JSON = path.join(__dirname, 'valorant_battlepass.json');
// Key trong JSON do script Python tạo, ví dụ: "season_2025_act_6"
const SEASON_KEY = process.argv[2];

// ContractDefinitionID thật của battlepass (xem từ /contracts)
const CONTRACT_ID = 'sample-contract-id-thay-bang-that';

// File TS output (Nest sẽ import từ đây)
const OUTPUT_TS = path.join(
    __dirname,
    '../src/valorant/battlepass-tiers.generated.ts',
);

// ==== HÀM HỖ TRỢ ====

// Tính cumulative XP để đạt tới mỗi tier theo wiki:
// Tier 1: 0 (đã hoàn thành)
// Tier 2: +2000
// Từ Tier 3 trở đi: mỗi tier +750 XP so với tier trước
function computeXpRequiredPerTier(maxTier) {
    const result = {};
    let cumulative = 0;
    let delta = 0;

    for (let level = 1; level <= maxTier; level++) {
        if (level === 1) {
            result[level] = 0;
            continue;
        }
        if (level === 2) {
            delta = 2000;
        } else {
            delta += 750;
        }
        cumulative += delta;
        result[level] = cumulative;
    }
    return result;
}

function main() {
    if (!fs.existsSync(INPUT_JSON)) {
        console.error('Không tìm thấy file', INPUT_JSON);
        process.exit(1);
    }

    const raw = fs.readFileSync(INPUT_JSON, 'utf8');
    const allData = JSON.parse(raw);
    const actData = allData[SEASON_KEY];

    if (!actData || !Array.isArray(actData)) {
        console.error('Không tìm thấy key', SEASON_KEY, 'trong valorant_battlepass.json');
        process.exit(1);
    }

    // Gom rewards theo tier
    const tiersMap = new Map();

    for (const r of actData) {
        const tierStr = String(r.tier ?? '').trim();

        // Hỗ trợ Epilogue: map "Epilogue 1..5" -> level 51..55 để đồng nhất với UI
        let level = parseInt(tierStr, 10);
        if (Number.isNaN(level)) {
            const epiMatch = tierStr.match(/^Epilogue\s+(\d+)/i);
            if (epiMatch) {
                const epiIndex = parseInt(epiMatch[1], 10);
                if (!Number.isNaN(epiIndex)) {
                    level = 50 + epiIndex; // Epilogue 1 => 51, v.v.
                }
            }
        }

        if (!level || Number.isNaN(level)) continue;

        if (!tiersMap.has(level)) {
            tiersMap.set(level, {
                level,
                // hỗ trợ nhiều reward Free/Premium trong cùng 1 level
                free: [],
                premium: [],
            });
        }
        const tierObj = tiersMap.get(level);

        const baseReward = {
            name: r.item,
            image: r.image,
            itemTypeID: '',
            itemID: '',
            category: r.category,
        };

        const track = (r.track || '').toLowerCase();

        if (track.includes('free')) {
            tierObj.free.push(baseReward);
        } else if (track.includes('premium')) {
            tierObj.premium.push(baseReward);
        }
    }

    const tiersArray = Array.from(tiersMap.values()).sort(
        (a, b) => a.level - b.level,
    );
    const maxTier = tiersArray.reduce(
        (max, t) => (t.level > max ? t.level : max),
        0,
    );
    const xpRequiredByTier = computeXpRequiredPerTier(maxTier);

    for (const t of tiersArray) {
        t.xpRequired = xpRequiredByTier[t.level] ?? 0;
    }

    const ts = `// AUTO-GENERATED từ tools/generate-battlepass-tiers.js
// Season: ${SEASON_KEY}
// ContractDefinitionID: ${CONTRACT_ID}

export interface BattlepassTierReward {
  itemTypeID: string;
  itemID: string;
  name?: string;
  image?: string;
  category?: string;
}

export interface BattlepassTier {
  level: number;
  free?: BattlepassTierReward | BattlepassTierReward[] | null;
  premium?: BattlepassTierReward | BattlepassTierReward[] | null;
  xpRequired?: number;
}

export const CURRENT_BP_SEASON = '${SEASON_KEY}';

export const CURRENT_BP_CONTRACT_ID = '${CONTRACT_ID}';

export const BATTLEPASS_SAMPLE_TIERS: BattlepassTier[] = ${JSON.stringify(
        tiersArray,
        null,
        2,
    )};
`;

    fs.writeFileSync(OUTPUT_TS, ts, 'utf8');
    console.log('Đã sinh file TS:', OUTPUT_TS);
}

main();


