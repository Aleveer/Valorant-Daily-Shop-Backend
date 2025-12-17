// AUTO-GENERATED từ tools/generate-battlepass-tiers.js
// Season: season_2025_act_6
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

export const CURRENT_BP_SEASON = 'season_2025_act_6';

export const CURRENT_BP_CONTRACT_ID = 'sample-contract-id';

export const BATTLEPASS_SAMPLE_TIERS: BattlepassTier[] = [
  {
    level: 1,
    free: [],
    premium: [
      {
        name: 'Heartseeker Shorty',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/e0/Heartseeker_Shorty.png/revision/latest?cb=20251014172334',
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
        name: 'Heartseeker Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/6d/Heartseeker_Buddy.png/revision/latest?cb=20251014172636',
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
        name: '5 Years: Saltswept Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/59/5_Years_Saltswept_Card_Large.png/revision/latest?cb=20251014172457',
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
        name: 'Veto ID Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/26/Veto_ID_Card_Large.png/revision/latest?cb=20251014172513',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
      {
        name: 'Harmony Title',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Heartbreaker Bulldog',
        image:
          'https://static.wikia.nocookie.net/valorant/images/9/99/Heartbreaker_Bulldog.png/revision/latest?cb=20251014172327',
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
        name: 'Polish and Punish Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/e5/Polish_and_Punish_Spray.png/revision/latest?cb=20251015152146',
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
        name: 'Heartseeker Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/8f/Heartseeker_Spray.png/revision/latest?cb=20251015152142',
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
        name: 'Heartseeker Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/4d/Heartseeker_Card_Large.png/revision/latest?cb=20251014172508',
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
        name: 'V25 ACT VI Coin Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/4f/V25_ACT_VI_Coin_Buddy.png/revision/latest?cb=20251014172644',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Heartseeker Stinger',
        image:
          'https://static.wikia.nocookie.net/valorant/images/8/89/Heartseeker_Stinger.png/revision/latest?cb=20251014172335',
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
        name: '5 Years: Ade On Keys Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d0/5_Years_Ade_On_Keys_Card_Large.png/revision/latest?cb=20251014172455',
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
        name: 'Percussion Protocol Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/6c/Percussion_Protocol_Spray.png/revision/latest?cb=20251015152145',
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
        name: 'Heartbreaker Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/b/b3/Heartbreaker_Buddy.png/revision/latest?cb=20251014172635',
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
        name: 'In Sync Title',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Heartbreaker Odin',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/2b/Heartbreaker_Odin.png/revision/latest?cb=20251014172328',
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
        name: 'Heartseeker Outlaw',
        image:
          'https://static.wikia.nocookie.net/valorant/images/a/ac/Heartseeker_Outlaw.png/revision/latest?cb=20251014172332',
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
        name: 'Pop Pawstars Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/08/Pop_Pawstars_Card_Large.png/revision/latest?cb=20251014172510',
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
        name: 'Agent On Route Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/54/Agent_On_Route_Spray.png/revision/latest?cb=20251015152134',
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
        name: 'Storm Surge Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/61/Storm_Surge_Spray.png/revision/latest?cb=20251015152148',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    premium: [
      {
        name: 'PB&J',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/ec/PB%26J_Flex.png/revision/latest?cb=20251014172613',
        itemTypeID: '',
        itemID: '',
        category: 'Flex',
      },
    ],
    xpRequired: 166250,
  },
  {
    level: 21,
    free: [],
    premium: [
      {
        name: 'Angry Ade Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/a/ab/Angry_Ade_Spray.png/revision/latest?cb=20251015152135',
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
        name: 'Ult Bias: Iso Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/4b/Ult_Bias_Iso_Buddy.png/revision/latest?cb=20251014172641',
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
        name: 'Heartstopper Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/eb/Heartstopper_Spray.png/revision/latest?cb=20251015152143',
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
        name: '5 Years: Why We Fight Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/7/73/5_Years_Why_We_Fight_Card_Large.png/revision/latest?cb=20251014172459',
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
        name: 'Heartstopper Vandal',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/68/Heartstopper_Vandal.png/revision/latest?cb=20251014172343',
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
        name: 'Headbang Havoc Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/ca/Headbang_Havoc_Spray.png/revision/latest?cb=20251015152139',
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
        name: 'Heartbreaker Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/65/Heartbreaker_Spray.png/revision/latest?cb=20251015152141',
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
        name: 'Heartbreaker Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/6b/Heartbreaker_Card_Large.png/revision/latest?cb=20251014172507',
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
        name: '5 Years: Beads Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/e/e6/5_Years_Beads_Buddy.png/revision/latest?cb=20251014172632',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Heartbreaker Sheriff',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d7/Heartbreaker_Sheriff.png/revision/latest?cb=20251014172330',
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
        name: '5 Years: Redemption Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/5b/5_Years_Redemption_Card_Large.png/revision/latest?cb=20251014172456',
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
        name: 'Heartstopper Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/a/ab/Heartstopper_Buddy.png/revision/latest?cb=20251014172637',
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
        name: 'Tech-nically Speaking Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/7/78/Tech-nically_Speaking_Spray.png/revision/latest?cb=20251015152149',
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
        name: 'Superstar Title',
        image:
          'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
        itemTypeID: '',
        itemID: '',
        category: 'Player Titles',
      },
    ],
    premium: [
      {
        name: 'Heartseeker Guardian',
        image:
          'https://static.wikia.nocookie.net/valorant/images/7/7b/Heartseeker_Guardian.png/revision/latest?cb=20251014172331',
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
        name: 'Radiant Riffs Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/4/4e/Radiant_Riffs_Spray.png/revision/latest?cb=20251015152147',
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
        name: 'Ult Bias: Yoru Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/24/Ult_Bias_Yoru_Buddy.png/revision/latest?cb=20251014172643',
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
        name: 'Fur of the Fallen Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/d0/Fur_of_the_Fallen_Card_Large.png/revision/latest?cb=20251014172506',
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
        name: 'Five and Flawless Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/0d/Five_and_Flawless_Spray.png/revision/latest?cb=20251015152138',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    premium: [
      {
        name: 'Heartbreaker Operator',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/c7/Heartbreaker_Operator.png/revision/latest?cb=20251014172329',
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
        name: 'Boomerproof Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/2e/Boomerproof_Card_Large.png/revision/latest?cb=20251014172500',
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
        name: 'Wingman Solo Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/6/6f/Wingman_Solo_Spray.gif/revision/latest?cb=20251015152150',
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
        name: 'Detonation Dab Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/2/27/Detonation_Dab_Spray.png/revision/latest?cb=20251015152137',
        itemTypeID: '',
        itemID: '',
        category: 'Sprays',
      },
    ],
    xpRequired: 763250,
  },
  {
    level: 45,
    free: [
      {
        name: 'Shock & Roll Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/3/35/Shock_%26_Roll_Buddy.png/revision/latest?cb=20251014172640',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [
      {
        name: 'Heartseeker Phantom',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/04/Heartseeker_Phantom.png/revision/latest?cb=20251014172333',
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
        name: 'Agent of Chaos Spray',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/c8/Agent_of_Chaos_Spray.gif/revision/latest?cb=20251015152133',
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
        name: 'Ult Bias: Jett Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/9/9c/Ult_Bias_Jett_Buddy.png/revision/latest?cb=20251014172642',
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
        name: 'Heartstopper Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/0d/Heartstopper_Card_Large.png/revision/latest?cb=20251014172509',
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
        name: 'Triple Threat Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/d/dc/Triple_Threat_Card_Large.png/revision/latest?cb=20251014172512',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
      {
        name: 'Heartstopper Ghost',
        image:
          'https://static.wikia.nocookie.net/valorant/images/f/fd/Heartstopper_Ghost.png/revision/latest?cb=20251014172340',
        itemTypeID: '',
        itemID: '',
        category: 'Weapon Skins',
      },
    ],
    premium: [
      {
        name: 'Heart Splitter',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/08/Heart_Splitter.png/revision/latest?cb=20251014172326',
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
        name: 'Epilogue: 5 Years: Beads Buddy',
        image:
          'https://static.wikia.nocookie.net/valorant/images/c/cb/Epilogue_5_Years_Beads_Buddy.png/revision/latest?cb=20251014172635',
        itemTypeID: '',
        itemID: '',
        category: 'Buddies',
      },
    ],
    premium: [],
    xpRequired: 1018750,
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
    xpRequired: 1058250,
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
    xpRequired: 1098500,
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
    xpRequired: 1139500,
  },
  {
    level: 55,
    free: [
      {
        name: 'Epilogue: Pop Pawstars Card',
        image:
          'https://static.wikia.nocookie.net/valorant/images/0/02/Epilogue_Pop_Pawstars_Card_Large.png/revision/latest?cb=20251014172505',
        itemTypeID: '',
        itemID: '',
        category: 'Player Cards',
      },
    ],
    premium: [],
    xpRequired: 1181250,
  },
];
