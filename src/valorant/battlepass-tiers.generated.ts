// AUTO-GENERATED từ tools/generate-battlepass-tiers.js
// Season: season_2026_act_2
// ContractDefinitionID: sample-contract-id-thay-bang-that

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

export const CURRENT_BP_SEASON = 'season_2026_act_2';

export const CURRENT_BP_CONTRACT_ID = 'sample-contract-id-thay-bang-that';

export const BATTLEPASS_SAMPLE_TIERS: BattlepassTier[] = [
  {
    level: 1,
    free: [],
    premium: [
      {
        name: 'Dragon Gate Shorty',
        image:
          'https://static.wikia.nocookie.net/valorant/images/1/1b/Dragon_Gate_Shorty.png/revision/latest?cb=20260317170006',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 0,
  },
  {
    level: 2,
    free: [],
    premium: [
      {
        name: 'Happy Petal Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/a/a2/Happy_Petal_Buddy.png/revision/latest?cb=20260317165455',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 2000,
  },
  {
    level: 3,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 4750,
  },
  {
    level: 4,
    free: [],
    premium: [
      {
        name: 'Miks ID Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/2d/Miks_ID_Card_Large.png/revision/latest?cb=20260317165741',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 8250,
  },
  {
    level: 5,
    free: [
      {
        name: 'Paintbrush Tactics Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/9/94/Paintbrush_Tactics_Card_Large.png/revision/latest?cb=20260317165807',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
      {
        name: 'Tea Title',
        image: '',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Paceline Stinger',
        image:
          'https://static.wikia.nocookie.net/valorant/images/9/97/Paceline_Stinger.png/revision/latest?cb=20260317170029',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 12500,
  },
  {
    level: 6,
    free: [],
    premium: [
      {
        name: 'Beware of Dog Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/f/fe/Beware_of_Dog_Spray.png/revision/latest?cb=20260318144255',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 17500,
  },
  {
    level: 7,
    free: [],
    premium: [
      {
        name: 'No Zipline Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/22/No_Zipline_Spray.png/revision/latest?cb=20260318144302',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 23250,
  },
  {
    level: 8,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 29750,
  },
  {
    level: 9,
    free: [],
    premium: [
      {
        name: 'Soulburst Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/f/f3/Soulburst_Card_Large.png/revision/latest?cb=20260317165818',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 37000,
  },
  {
    level: 10,
    free: [
      {
        name: 'V26 ACT II Coin Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/e4/V26_ACT_II_Coin_Buddy.png/revision/latest?cb=20260317165502',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Soulburst Outlaw',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/06/Soulburst_Outlaw.png/revision/latest?cb=20260317170043',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 45000,
  },
  {
    level: 11,
    free: [],
    premium: [
      {
        name: 'Dragon Gate Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/4a/Dragon_Gate_Card_Large.png/revision/latest?cb=20260317165732',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 53750,
  },
  {
    level: 12,
    free: [],
    premium: [
      {
        name: 'Dragon Gate Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d2/Dragon_Gate_Spray.png/revision/latest?cb=20260318144259',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 63250,
  },
  {
    level: 13,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 73500,
  },
  {
    level: 14,
    free: [],
    premium: [
      {
        name: 'Dragon Gate Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/3/33/Dragon_Gate_Buddy.png/revision/latest?cb=20260317165453',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 84500,
  },
  {
    level: 15,
    free: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
      {
        name: 'Gnarly Title',
        image: '',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Dragon Gate Ares',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/27/Dragon_Gate_Ares.png/revision/latest?cb=20260317170003',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 96250,
  },
  {
    level: 16,
    free: [],
    premium: [
      {
        name: 'Paceline Frenzy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/a/ad/Paceline_Frenzy.png/revision/latest?cb=20260317170027',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 108750,
  },
  {
    level: 17,
    free: [],
    premium: [
      {
        name: 'Bomb Buddy Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/66/Bomb_Buddy_Card_Large.png/revision/latest?cb=20260317165727',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 122000,
  },
  {
    level: 18,
    free: [],
    premium: [
      {
        name: 'Soulburst Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b5/Soulburst_Spray.png/revision/latest?cb=20260318144308',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 136000,
  },
  {
    level: 19,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 150750,
  },
  {
    level: 20,
    free: [
      {
        name: 'Acorn Ops Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/1/16/Acorn_Ops_Spray.png/revision/latest?cb=20260318144251',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    premium: [
      {
        name: 'Soulburst Spectre',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b4/Soulburst_Spectre.png/revision/latest?cb=20260317170046',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 166250,
  },
  {
    level: 21,
    free: [],
    premium: [
      {
        name: 'Rush Zone Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/1/1b/Rush_Zone_Spray.png/revision/latest?cb=20260318144306',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 182500,
  },
  {
    level: 22,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 199500,
  },
  {
    level: 23,
    free: [],
    premium: [
      {
        name: 'Super Saver Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b2/Super_Saver_Buddy.png/revision/latest?cb=20260317165501',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 217250,
  },
  {
    level: 24,
    free: [],
    premium: [
      {
        name: 'Paceline Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b7/Paceline_Spray.png/revision/latest?cb=20260318144304',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 235750,
  },
  {
    level: 25,
    free: [
      {
        name: 'Tacti-Ops Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/0b/Tacti-Ops_Card_Large.png/revision/latest?cb=20260317165823',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    premium: [
      {
        name: 'Paceline Vandal',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/52/Paceline_Vandal.png/revision/latest?cb=20260317170030',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 255000,
  },
  {
    level: 26,
    free: [],
    premium: [
      {
        name: 'Arctic Snare Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/81/Arctic_Snare_Spray.png/revision/latest?cb=20260318144252',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 275000,
  },
  {
    level: 27,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 295750,
  },
  {
    level: 28,
    free: [],
    premium: [
      {
        name: 'Tacti Tears Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/85/Tacti_Tears_Spray.png/revision/latest?cb=20260318144310',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 317250,
  },
  {
    level: 29,
    free: [],
    premium: [
      {
        name: 'Sidekicks Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/86/Sidekicks_Card_Large.png/revision/latest?cb=20260317165813',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 339500,
  },
  {
    level: 30,
    free: [
      {
        name: 'Nest Egg Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/7/7c/Nest_Egg_Buddy.png/revision/latest?cb=20260317165457',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Dragon Gate Judge',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b2/Dragon_Gate_Judge.png/revision/latest?cb=20260317170004',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 362500,
  },
  {
    level: 31,
    free: [],
    premium: [
      {
        name: 'Paceline Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/1/1a/Paceline_Card_Large.png/revision/latest?cb=20260317165744',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 386250,
  },
  {
    level: 32,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 410750,
  },
  {
    level: 33,
    free: [],
    premium: [
      {
        name: 'Paceline Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/9/92/Paceline_Buddy.png/revision/latest?cb=20260317165458',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 436000,
  },
  {
    level: 34,
    free: [],
    premium: [
      {
        name: 'Barrier Boost Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/f/f9/Barrier_Boost_Spray.png/revision/latest?cb=20260318144254',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 462000,
  },
  {
    level: 35,
    free: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
      {
        name: 'Unc Title',
        image: '',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Paceline Guardian',
        image:
          'https://static.wikia.nocookie.net/valorant/images/f/f6/Paceline_Guardian.png/revision/latest?cb=20260317170028',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 488750,
  },
  {
    level: 36,
    free: [],
    premium: [
      {
        name: 'Cosmic Eyes Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/45/Cosmic_Eyes_Spray.png/revision/latest?cb=20260318144258',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 516250,
  },
  {
    level: 37,
    free: [],
    premium: [
      {
        name: 'Soulburst Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/83/Soulburst_Buddy.png/revision/latest?cb=20260317165459',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 544500,
  },
  {
    level: 38,
    free: [],
    premium: [
      {
        name: 'Flick of the Wrist Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/c0/Flick_of_the_Wrist_Card_Large.png/revision/latest?cb=20260317165738',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 573500,
  },
  {
    level: 39,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 603250,
  },
  {
    level: 40,
    free: [
      {
        name: 'BooBat Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d3/BooBat_Spray.png/revision/latest?cb=20260318144256',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    premium: [
      {
        name: 'Soulburst Bulldog',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b6/Soulburst_Bulldog.png/revision/latest?cb=20260317170039',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 633750,
  },
  {
    level: 41,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 665000,
  },
  {
    level: 42,
    free: [],
    premium: [
      {
        name: 'Baited Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d4/Baited_Card_Large.png/revision/latest?cb=20260317165716',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 697000,
  },
  {
    level: 43,
    free: [],
    premium: [
      {
        name: 'Brimstone Geometry Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b6/Brimstone_Geometry_Spray.png/revision/latest?cb=20260318144257',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 729750,
  },
  {
    level: 44,
    free: [],
    premium: [
      {
        name: 'Dragon Gate Flex',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/45/Dragon_Gate_Flex.png/revision/latest?cb=20260317165532',
        itemTypeID: '',
        itemID: '',
        category: 'Flex',
      },
    ],
    xpRequired: 763250,
  },
  {
    level: 45,
    free: [
      {
        name: 'Student TactiBear Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d5/Student_TactiBear_Buddy.png/revision/latest?cb=20260317165500',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Dragon Gate Phantom',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b9/Dragon_Gate_Phantom.png/revision/latest?cb=20260317170005',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 797500,
  },
  {
    level: 46,
    free: [],
    premium: [
      {
        name: 'Scribble Lightspeed Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/04/Scribble_Lightspeed_Spray.png/revision/latest?cb=20260318144307',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 832500,
  },
  {
    level: 47,
    free: [],
    premium: [
      {
        name: 'Orange Juice Dreams Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/3/33/Orange_Juice_Dreams_Buddy.png/revision/latest?cb=20260317165458',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    xpRequired: 868250,
  },
  {
    level: 48,
    free: [],
    premium: [
      {
        name: 'Perfect View Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/0b/Perfect_View_Card_Large.png/revision/latest?cb=20260317165809',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    xpRequired: 904750,
  },
  {
    level: 49,
    free: [],
    premium: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    xpRequired: 942000,
  },
  {
    level: 50,
    free: [
      {
        name: 'The Cost Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/5d/The_Cost_Card_Large.png/revision/latest?cb=20260317165826',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
      {
        name: 'Soulburst Bandit',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/6a/Soulburst_Bandit.png/revision/latest?cb=20260317170035',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    premium: [
      {
        name: "Paceline 's Edge",
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/86/Paceline%27s_Edge.png/revision/latest?cb=20260317170031',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    xpRequired: 980000,
  },
  {
    level: 51,
    free: [
      {
        name: 'Epilogue: Super Saver Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/cc/Epilogue_Super_Saver_Buddy.png/revision/latest?cb=20260317165454',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [],
    xpRequired: 1016500,
  },
  {
    level: 52,
    free: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    premium: [],
    xpRequired: 1053000,
  },
  {
    level: 53,
    free: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    premium: [],
    xpRequired: 1089500,
  },
  {
    level: 54,
    free: [
      {
        name: '10 Radianite Points',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
        itemTypeID: '',
        itemID: '',
        category: 'Radianite Points',
      },
    ],
    premium: [],
    xpRequired: 1126000,
  },
  {
    level: 55,
    free: [
      {
        name: 'Epilogue: Bomb Buddy Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/ea/Epilogue_Bomb_Buddy_Card_Large.png/revision/latest?cb=20260317165735',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    premium: [],
    xpRequired: 1162500,
  },
];
