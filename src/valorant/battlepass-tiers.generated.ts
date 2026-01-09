// AUTO-GENERATED từ tools/generate-battlepass-tiers.js
// Season: season_2026_act_1
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

export const CURRENT_BP_SEASON = 'season_2026_act_1';

export const CURRENT_BP_CONTRACT_ID = 'sample-contract-id-thay-bang-that';

export const BATTLEPASS_SAMPLE_TIERS: BattlepassTier[] = [
    {
      level: 1,
      free: [],
      premium: [
        {
          name: 'Stormborne Sheriff',
          image: 'https://static.wikia.nocookie.net/valorant/images/3/33/Stormborne_Sheriff.png/revision/latest?cb=20260106171503',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 0
    },
    {
      level: 2,
      free: [],
      premium: [
        {
          name: 'Stormborne Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/1/13/Stormborne_Buddy.png/revision/latest?cb=20260106175530',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 2000
    },
    {
      level: 3,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 4750
    },
    {
      level: 4,
      free: [],
      premium: [
        {
          name: 'Superset Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/a/a7/Superset_Card_Large.png/revision/latest?cb=20260106172214',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 8250
    },
    {
      level: 5,
      free: [
        {
          name: 'Bandit Schema Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/7/77/Bandit_Schema_Card_Large.png/revision/latest?cb=20260106172116',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        },
        {
          name: 'Sweaty Title',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
          itemTypeID: '',
          itemID: '',
          category: 'Player Titles'
        }
      ],
      premium: [
        {
          name: 'Superset Marshal',
          image: 'https://static.wikia.nocookie.net/valorant/images/e/e1/Superset_Marshal.png/revision/latest?cb=20260106171506',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 12500
    },
    {
      level: 6,
      free: [],
      premium: [
        {
          name: 'Peek Performance Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/b5/Peek_Performance_Spray.png/revision/latest?cb=20260108130238',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 17500
    },
    {
      level: 7,
      free: [],
      premium: [
        {
          name: 'Tactical Expressionism Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/a/a3/Tactical_Expressionism_Spray.png/revision/latest?cb=20260108130246',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 23250
    },
    {
      level: 8,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 29750
    },
    {
      level: 9,
      free: [],
      premium: [
        {
          name: 'Montage Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/1/11/Montage_Card_Large.png/revision/latest?cb=20260106172205',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 37000
    },
    {
      level: 10,
      free: [
        {
          name: 'V26 ACT I Coin Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/8/89/V26_ACT_I_Coin_Buddy.png/revision/latest?cb=20260106175542',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      premium: [
        {
          name: 'Montage Spectre',
          image: 'https://static.wikia.nocookie.net/valorant/images/3/3a/Montage_Spectre.png/revision/latest?cb=20260106171455',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 45000
    },
    {
      level: 11,
      free: [],
      premium: [
        {
          name: 'Stormborne Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/6/65/Stormborne_Card_Large.png/revision/latest?cb=20260106172211',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 53750
    },
    {
      level: 12,
      free: [],
      premium: [
        {
          name: 'Stormborne Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/1/17/Stormborne_Spray.png/revision/latest?cb=20260108130242',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 63250
    },
    {
      level: 13,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 73500
    },
    {
      level: 14,
      free: [],
      premium: [
        {
          name: 'Superset Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/8/85/Superset_Buddy.png/revision/latest?cb=20260106175531',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 84500
    },
    {
      level: 15,
      free: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        },
        {
          name: 'Six Seven Title',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
          itemTypeID: '',
          itemID: '',
          category: 'Player Titles'
        }
      ],
      premium: [
        {
          name: 'Stormborne Guardian',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/b1/Stormborne_Guardian.png/revision/latest?cb=20260106171501',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 96250
    },
    {
      level: 16,
      free: [],
      premium: [
        {
          name: 'Cardio Claws Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/9/94/Cardio_Claws_Card_Large.png/revision/latest?cb=20260106172119',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 108750
    },
    {
      level: 17,
      free: [],
      premium: [
        {
          name: 'Checkmate Protocol Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/b8/Checkmate_Protocol_Card_Large.png/revision/latest?cb=20260106172123',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 122000
    },
    {
      level: 18,
      free: [],
      premium: [
        {
          name: 'Superset Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/46/Superset_Spray.png/revision/latest?cb=20260108130244',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 136000
    },
    {
      level: 19,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 150750
    },
    {
      level: 20,
      free: [
        {
          name: 'Riptide Ripped Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/6/6b/Riptide_Ripped_Spray.png/revision/latest?cb=20260108130241',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      premium: [
        {
          name: 'Superset Classic',
          image: 'https://static.wikia.nocookie.net/valorant/images/8/88/Superset_Classic.png/revision/latest?cb=20260106171505',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 166250
    },
    {
      level: 21,
      free: [],
      premium: [
        {
          name: 'Iso-lated Aim Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/7/70/Iso-lated_Aim_Spray.png/revision/latest?cb=20260108130236',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 182500
    },
    {
      level: 22,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 199500
    },
    {
      level: 23,
      free: [],
      premium: [
        {
          name: 'Protocol Dummy Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/d/df/Protocol_Dummy_Buddy.png/revision/latest?cb=20260106175528',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 217250
    },
    {
      level: 24,
      free: [],
      premium: [
        {
          name: 'Montage Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/6/6d/Montage_Spray.png/revision/latest?cb=20260108130237',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 235750
    },
    {
      level: 25,
      free: [
        {
          name: 'Venomous Succession Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/3/34/Venomous_Succession_Card_Large.png/revision/latest?cb=20260106175343',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        },
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      premium: [
        {
          name: 'Montage Phantom',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/b3/Montage_Phantom.png/revision/latest?cb=20260106171452',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 255000
    },
    {
      level: 26,
      free: [],
      premium: [
        {
          name: 'Arrow On Cooldown Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/8/81/Arrow_On_Cooldown_Spray.png/revision/latest?cb=20260108130232',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 275000
    },
    {
      level: 27,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 295750
    },
    {
      level: 28,
      free: [],
      premium: [
        {
          name: 'Predator\'s Eye Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/d/da/Predator%27s_Eye_Spray.png/revision/latest?cb=20260108130240',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 317250
    },
    {
      level: 29,
      free: [],
      premium: [
        {
          name: 'DUO //
            Boom on Lock Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/7/74/DUO_Boom_on_Lock_Card_Large.png/revision/latest?cb=20260106172129',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 339500
    },
    {
      level: 30,
      free: [
        {
          name: 'Fresh Frags Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/5a/Fresh_Frags_Buddy.png/revision/latest?cb=20260106175524',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      premium: [
        {
          name: 'Stormborne Bucky',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/56/Stormborne_Bucky.png/revision/latest?cb=20260106171501',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 362500
    },
    {
      level: 31,
      free: [],
      premium: [
        {
          name: 'Unstoppable // Chamber Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/bd/Unstoppable_Chamber_Card_Large.png/revision/latest?cb=20260106172216',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 386250
    },
    {
      level: 32,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 410750
    },
    {
      level: 33,
      free: [],
      premium: [
        {
          name: 'Montage Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/e/ed/Montage_Buddy.png/revision/latest?cb=20260106175527',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 436000
    },
    {
      level: 34,
      free: [],
      premium: [
        {
          name: 'Surveillance Served Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/2/27/Surveillance_Served_Spray.png/revision/latest?cb=20260108130245',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 462000
    },
    {
      level: 35,
      free: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        },
        {
          name: 'Performative Title',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/5d/Player_Title_image.png/revision/latest?cb=20210104061536',
          itemTypeID: '',
          itemID: '',
          category: 'Player Titles'
        }
      ],
      premium: [
        {
          name: 'Montage Ares',
          image: 'https://static.wikia.nocookie.net/valorant/images/c/c5/Montage_Ares.png/revision/latest?cb=20260106171443',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 488750
    },
    {
      level: 36,
      free: [],
      premium: [
        {
          name: 'Site Control Society Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/f/f8/Site_Control_Society_Spray.png/revision/latest?cb=20260108130241',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 516250
    },
    {
      level: 37,
      free: [],
      premium: [
        {
          name: 'Grizzly Drip Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/3/30/Grizzly_Drip_Buddy.png/revision/latest?cb=20260106175525',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 544500
    },
    {
      level: 38,
      free: [],
      premium: [
        {
          name: 'Operation: Oversteer Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/7/71/Operation_Oversteer_Card_Large.png/revision/latest?cb=20260106172208',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 573500
    },
    {
      level: 39,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 603250
    },
    {
      level: 40,
      free: [
        {
          name: 'TactiForce: Go! Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/f/fc/TactiForce_Go%21_Spray.png/revision/latest?cb=20260108130247',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      premium: [
        {
          name: 'Stormborne Operator',
          image: 'https://static.wikia.nocookie.net/valorant/images/9/9c/Stormborne_Operator.png/revision/latest?cb=20260106171502',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 633750
    },
    {
      level: 41,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 665000
    },
    {
      level: 42,
      free: [],
      premium: [
        {
          name: 'Meditation is for Mortals Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/42/Meditation_is_for_Mortals_Card_Large.png/revision/latest?cb=20260106172202',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 697000
    },
    {
      level: 43,
      free: [],
      premium: [
        {
          name: 'Gun Juggling Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/8/8d/Gun_Juggling_Spray.png/revision/latest?cb=20260108130235',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 729750
    },
    {
      level: 44,
      free: [],
      premium: [
        {
          name: 'Fast Break Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/d/d6/Fast_Break_Spray.png/revision/latest?cb=20260108130234',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 763250
    },
    {
      level: 45,
      free: [
        {
          name: 'H2-Oh! Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/c/c2/H2-Oh%21_Buddy.png/revision/latest?cb=20260106175526',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      premium: [
        {
          name: 'Superset Vandal',
          image: 'https://static.wikia.nocookie.net/valorant/images/2/2b/Superset_Vandal.png/revision/latest?cb=20260106171507',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 797500
    },
    {
      level: 46,
      free: [],
      premium: [
        {
          name: 'Ballistic Smolder Spray',
          image: 'https://static.wikia.nocookie.net/valorant/images/c/c0/Ballistic_Smolder_Spray.png/revision/latest?cb=20260108130233',
          itemTypeID: '',
          itemID: '',
          category: 'Sprays'
        }
      ],
      xpRequired: 832500
    },
    {
      level: 47,
      free: [],
      premium: [
        {
          name: 'Referee TactiDuck Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/f/f8/Referee_TactiDuck_Buddy.png/revision/latest?cb=20260106175529',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      xpRequired: 868250
    },
    {
      level: 48,
      free: [],
      premium: [
        {
          name: 'Dive In Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/c/c0/Dive_In_Card_Large.png/revision/latest?cb=20260106172126',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      xpRequired: 904750
    },
    {
      level: 49,
      free: [],
      premium: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      xpRequired: 942000
    },
    {
      level: 50,
      free: [
        {
          name: 'Amplify Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/b/ba/Amplify_Card_Large.png/revision/latest?cb=20260106172110',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        },
        {
          name: 'Montage Frenzy',
          image: 'https://static.wikia.nocookie.net/valorant/images/3/3a/Montage_Frenzy.png/revision/latest?cb=20260106171449',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      premium: [
        {
          name: 'Montage Axe',
          image: 'https://static.wikia.nocookie.net/valorant/images/d/d6/Montage_Axe.png/revision/latest?cb=20260106171446',
          itemTypeID: '',
          itemID: '',
          category: 'Weapon Skins'
        }
      ],
      xpRequired: 980000
    },
    {
      level: 51,
      free: [
        {
          name: 'Epilogue : Protocol Dummy Buddy',
          image: 'https://static.wikia.nocookie.net/valorant/images/c/cc/Epilogue_Protocol_Dummy_Buddy.png/revision/latest?cb=20260106175523',
          itemTypeID: '',
          itemID: '',
          category: 'Buddies'
        }
      ],
      premium: [],
      xpRequired: 1016500
    },
    {
      level: 52,
      free: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      premium: [],
      xpRequired: 1053000
    },
    {
      level: 53,
      free: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      premium: [],
      xpRequired: 1089500
    },
    {
      level: 54,
      free: [
        {
          name: '10 Radianite Points',
          image: 'https://static.wikia.nocookie.net/valorant/images/4/47/Radianite_Points.png/revision/latest?cb=20200408015457',
          itemTypeID: '',
          itemID: '',
          category: 'Radianite Points'
        }
      ],
      premium: [],
      xpRequired: 1126000
    },
    {
      level: 55,
      free: [
        {
          name: 'Epilogue : Checkmate Protocol Card',
          image: 'https://static.wikia.nocookie.net/valorant/images/5/56/Epilogue_Checkmate_Protocol_Card_Large.png/revision/latest?cb=20260106172132',
          itemTypeID: '',
          itemID: '',
          category: 'Player Cards'
        }
      ],
      premium: [],
      xpRequired: 1162500
    }
  ];
