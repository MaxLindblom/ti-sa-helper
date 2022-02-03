const races = [
  'Arborec',
  'Creuss',
  'Hacan',
  'Jol-Nar',
  'Krotoan',
  'Letnev',
  'Lizix',
  'Mentak',
  'Muaat',
  'Naalu',
  'Saar',
  'Sardakk',
  'Sol',
  'Winnu',
  'Xxcha',
  'Yin',
  'Yssaril',
];

const cardImages = [
  '../../strategy-cards/xLeadership.jpg',
  '../../strategy-cards/xDiplomacy.jpg',
  '../../strategy-cards/xAssemblyTC.jpg',
  '../../strategy-cards/xProduction.jpg',
  '../../strategy-cards/xTrade.jpg',
  '../../strategy-cards/xWarfare.jpg',
  '../../strategy-cards/xTechnology.jpg',
  '../../strategy-cards/xBureaucracy.jpg',
  '../../strategy-cards/xProspect.jpg',
];

const unitTypes = [
  'War sun',
  'Dreadnought',
  'Cruiser',
  'Destroyer',
  'Carrier',
  'Fighter',
  'Flagship',
  'PDS',
  'Mech',
  'Ground force',
  'Shock troop',
];

const techColors = {
  red: 'red',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
};

const techs = [
  {
    name: 'Enviro Compensator',
    color: techColors.yellow,
    description: 'Your Space Docks gain +1 production capacity.',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Transfabrication',
    color: techColors.yellow,
    description:
      'When producing units at a Space Dock, you may scuttle ships in the system to add their cost in resources and production cap to that of your Space Dock. You may also exhaust your unactivated, unexhausted Space Docks on the board to increase production capacity by 3 each.',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Hylar V Laser',
    color: techColors.red,
    description:
      'Cruisers and Destroyers receive +1 to combat rolls (which are not granted or modified by other red Technologies).',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Impulsion Shields',
    color: techColors.red,
    description:
      'During your actions, once each round, ignore one hit from combat rolls (or Space Mines).',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Antimass Deflectors',
    color: techColors.blue,
    description:
      'Your units may move through Asteroid Fields and Asteroid Belts.',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Ion Drive',
    color: techColors.blue,
    description: 'Once each round, gain +1 movement to one non-War Sun ship.',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Stasis Capsules',
    color: techColors.green,
    description: 'Dreadnoughts and Cruisers may carry 1 Ground Force.',
    requires: ['Enviro Compensator', 'Transfabrication'],
    requiresAll: false,
  },
  {
    name: 'Sarween Tools',
    color: techColors.yellow,
    description:
      'When producing units at one or more Space Docks during your Tactical Actions, receive 2 free resources to spend on the build.',
    requires: ['Enviro Compensator', 'Transfabrication'],
    requiresAll: false,
  },
  {
    name: 'Automated Turrets',
    color: techColors.red,
    description:
      'During Anit-Fighter barrage, Destroyers receive one extra combat die and +2 to their rolls.',
    requires: ['Hylar V Laser', 'Impulsion Shields'],
    requiresAll: false,
  },
  {
    name: 'Deep Space Cannon',
    color: techColors.red,
    description:
      'Your PDS (Space Cannon) have range into adjacent systems, but not through wormholes.',
    requires: ['Hylar V Laser', 'Impulsion Shields'],
    requiresAll: false,
  },
  {
    name: 'XRD Transporters',
    color: techColors.blue,
    description: 'Your Carriers receive +1 movement.',
    requires: ['Antimass Deflectors', 'Ion Drive'],
    requiresAll: false,
  },
  {
    name: 'Cybernetics',
    color: techColors.green,
    description: 'Fighters receive +1 to combat rolls.',
    requires: ['Antimass Deflectors', 'Ion Drive', 'Stasis Capsules'],
    requiresAll: false,
  },
  {
    name: 'Micro Technology',
    color: techColors.yellow,
    description:
      'When placing Trade Goods on your Trade Agreements, you may place 2 extra on one Trade Agreement and 1 extra on another. You may spend influence instead of resources when producing Trade Goods in Status Phase.',
    requires: ['Stasis Capsules', 'Sarween Tools'],
    requiresAll: false,
  },
  {
    name: 'War Sun',
    color: techColors.red,
    description:
      'You may build War Suns. Your War Suns receive +1 movement and +2 combat dice during bombardment.',
    requires: ['Sarween Tools', 'Deep Space Cannon'],
    requiresAll: true,
  },
  {
    name: 'Magen Defense Grid',
    color: techColors.red,
    description:
      '+1 to combat rolls of PDS and ground units defending planets containing your PDS. Planetary Shields not used during bombardment may now instead be used to cancel a hit during combat rounds of the Invastion Combat.',
    requires: ['Deep Space Cannon'],
    requiresAll: true,
  },
  {
    name: 'Maneuvering Jets',
    color: techColors.blue,
    description:
      'Space Mines and Space Cannons rolls against your ships receive -1 (-2 if firing from an adjacent system). Ion Storms and Gravity Rifts do not impair movement.',
    requires: ['XRD Transporters', 'Ion Drive'],
    requiresAll: false,
  },
  {
    name: 'Neural Motivator',
    color: techColors.green,
    description: 'Receive +1 Action Card in Status Phase.',
    requires: ['Stasis Capsules', 'Micro Technology'],
    requiresAll: false,
  },
  {
    name: 'Nano Robotics',
    color: techColors.yellow,
    description:
      'Your units are repaired at the end of your actions. Planets are acquired refreshed (except during the Surrendering procedure).',
    requires: ['Micro Technology'],
    requiresAll: true,
  },
  {
    name: 'Graviton Laser System',
    color: techColors.yellow,
    description:
      'Each action, one of your PDS (Space Cannon) gains one extra combat roll. Your PDS (Space Cannon) may now fire through Asteroids, but will then receive -1 on the combat roll.',
    requires: ['Deep Space Cannon'],
    requiresAll: true,
  },
  {
    name: 'Light Wave Deflectors',
    color: techColors.blue,
    description: 'Enemy fleets do not block your movement.',
    requires: ['Magen Defense Grid', 'XRD Transporters'],
    requiresAll: true,
  },
  {
    name: 'Gen Synthesis',
    color: techColors.green,
    description:
      'Ground Forces receive +1 to combat rolls. One extra Ground Force is upgraded to a Schock Troop after successful Invasion Combats (as the attacker).',
    requires: ['Cybernetics'],
    requiresAll: true,
  },
  {
    name: 'Integrated Economy',
    color: techColors.yellow,
    description:
      'Planets may produce units during tactical actions, with production capacity equal to the resource value, even if they were just acquired or do not contain a Space Dock. This ability cannot be used at the same time as producing at a Space Dock. Free reallocation of Command Counters at the end of your turns.',
    requires: ['Cybernetics', 'Micro Technology'],
    requiresAll: true,
  },
  {
    name: 'Dacxive Animators',
    color: techColors.green,
    description:
      'After successful Invasion Combats as the attacker, roll one die for each ground unit destroyed on both sides. On 6+, receive 1 Ground Force on the planet.',
    requires: ['Neural Motivator'],
    requiresAll: true,
  },
  {
    name: 'Assault Cannons',
    color: techColors.red,
    description: 'Dreadnoughts and Cruisers receive 1 pre-combat roll.',
    requires: ['Automated Turrets', 'Cybernetics'],
    requiresAll: true,
  },
  {
    name: 'Hyper Metabolism',
    color: techColors.green,
    description:
      'Gain one additional Command Counter during Status Phase. At the end of the Status Phase, you may recycle one Action Card.',
    requires: ['Gen Synthesis'],
    requiresAll: true,
  },
  {
    name: 'Xenopsychology',
    color: techColors.green,
    description:
      'You receive +3 votes. Diplomacy secondary ability becomes: Spend 1 Command Counter from Strategy Allocation and 2 influence to choose a planet* in or adjacent to a system containing friendly planets or units. Its owner must destory a ground unit there. Claim the planet if no ground units remain on it. *Except Home System planets, planets of the holder of the Diplomacy card, planets claimed via this ability during this action and planets with Custodian Domain Counters.',
    requires: [],
    requiresAll: false,
  },
  {
    name: 'Graviton Negator',
    color: techColors.red,
    description:
      'You gain +1 to all bombardment rolls. Your Fighters and Cruisers receive the bombardment ability.',
    requires: ['Dacxive Animators', 'Assault Cannons'],
    requiresAll: false,
  },
  {
    name: 'Type IV Drive',
    color: techColors.blue,
    description: 'Your Dreadnoughts and Cruisers receive +1 movement.',
    requires: ['Neural Motivator', 'XRD Transporters'],
    requiresAll: true,
  },
  {
    name: 'Transit Diodes',
    color: techColors.yellow,
    description:
      'As an action, pay 1CC from Strategy Allocation to move up to 6 ground units in unactivated systems between friendly planets or fleets.',
    requires: [
      'Light Wave Deflectors',
      'Hyper Metabolism',
      'Dacxive Animators',
    ],
    requiresAll: false,
  },
  {
    name: 'Fleet Logistics',
    color: techColors.blue,
    description:
      'Once per round, as an action, you may spend 1 CC from Strategy Allocation to remove one of your Command Counters on the board. Exhaust (flip) your Space Docks in the system.',
    requires: ['Graviton Negator'],
    requiresAll: true,
  },
  {
    name: 'Advanced Fighters',
    color: techColors.blue,
    description:
      'Your fighters may move independently with movement of 2, and receive +1 to their combat rolls. Unsupported Fighters count towards Fleet Supply limit.',
    requires: ['Type IV Drive'],
    requiresAll: true,
  },
  {
    name: 'X-89 Bacterial Weapon',
    color: techColors.green,
    description:
      'Before bombarding, you may roll one die for each ground unit present on the planet; on a result of 3+, the defender must assign one hit on their army. Then discard half of your Action Cards (round down) and either exhaust or lose control of a planet.',
    requires: ['Assault Cannons', 'Transit Nodes'],
    requiresAll: false,
  },
];

export { races, cardImages, unitTypes, techs, techColors };
