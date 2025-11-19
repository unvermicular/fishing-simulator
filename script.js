const locations = {
  'Mistvale Lake': {
    description: 'Mist-veiled shallows with luminous reeds and echoing birdsong.',
    theme: {
      bg: 'linear-gradient(120deg, #1a2231, #34506d)',
      accent: '#8ff3ff'
    }
  },
  'Shalequartz Rapids': {
    description: 'Crystalline rapids and chiseled canyons that roar with wind.',
    theme: {
      bg: 'linear-gradient(120deg, #1d2333, #3d3f54)',
      accent: '#ffc983'
    }
  },
  'Emberhollow Lagoon': {
    description: 'Smouldering mangroves crackle above ember-lit water.',
    theme: {
      bg: 'linear-gradient(120deg, #2a1914, #663020)',
      accent: '#ff9b53'
    }
  },
  'Verdant Expanse': {
    description: 'A bioluminescent marsh carpeted in moss and fireflies.',
    theme: {
      bg: 'linear-gradient(120deg, #0f271c, #0f4733)',
      accent: '#7df0b5'
    }
  },
  'Glacial Halo': {
    description: 'A mirrored lagoon of obsidian ice and geothermal steam.',
    theme: {
      bg: 'linear-gradient(120deg, #102132, #2a4e65)',
      accent: '#c6f1ff'
    }
  },
  'Sapphire Depths': {
    description: 'Ocean trench carved in sapphire glass and cold starlight.',
    theme: {
      bg: 'linear-gradient(120deg, #071421, #0c2746)',
      accent: '#4de0ff'
    }
  },
  'Starlit Abyss': {
    description: 'Endless nightwaters peppered with aurora constellations.',
    theme: {
      bg: 'linear-gradient(120deg, #140b2f, #310f4f)',
      accent: '#d5a9ff'
    }
  },
  'Solstice Delta': {
    description: 'Radiant floodplains drenched in sunflare, mirrors, and lilies.',
    theme: {
      bg: 'linear-gradient(120deg, #1a1200, #52340e)',
      accent: '#ffda66'
    }
  }
};

const rods = [
  { name: 'Driftwood Rod', cost: 0, luck: 0, speed: 0, weight: 20 },
  { name: 'Emberfiber Rod', cost: 500, luck: 20, speed: 10, weight: 35 },
  { name: 'Frostline Rod', cost: 1500, luck: 30, speed: 12, weight: 80 },
  { name: 'Verdantwhip Rod', cost: 5000, luck: 40, speed: 15, weight: 200 },
  { name: 'Starcaller Rod', cost: 15000, luck: 60, speed: 20, weight: 525 },
  { name: 'Stormcoil Rod', cost: 45000, luck: 90, speed: 25, weight: 1400 },
  { name: 'Prismweave Rod', cost: 135000, luck: 130, speed: 30, weight: 3500 },
  { name: 'Inferno Rod', cost: 400000, luck: 190, speed: 36, weight: 9200 },
  { name: 'Aether Rod', cost: 1200000, luck: 275, speed: 44, weight: 24000 },
  { name: 'Prismbloom Rod', cost: 3600000, luck: 400, speed: 54, weight: 62000 },
  { name: 'Roselight Rod', cost: 10000000, luck: 580, speed: 65, weight: 160000 },
  { name: 'Leviathan Crown Rod', cost: 35000000, luck: 90000, speed: 7500, weight: 32000000 }
];

const baits = [
  { name: 'Dewdrop Pebble Bait', rarity: 'Common', cost: 0, luck: 5 },
  { name: 'Riverlily Bait', rarity: 'Common', cost: 1000, luck: 10 },
  { name: 'Firefly Pearl Bait', rarity: 'Uncommon', cost: 3000, luck: 18 },
  { name: 'Sunset Minnow Bait', rarity: 'Uncommon', cost: 8000, luck: 25 },
  { name: 'Moonpetal Swarm Bait', rarity: 'Rare', cost: 20000, luck: 35 },
  { name: 'Stormsong Shrimp Bait', rarity: 'Rare', cost: 55000, luck: 50 },
  { name: 'Opal Jelly Bait', rarity: 'Epic', cost: 160000, luck: 70 },
  { name: 'Emberrose Bait', rarity: 'Epic', cost: 480000, luck: 90 },
  { name: 'Aurora Bait', rarity: 'Legendary', cost: 1400000, luck: 115 },
  { name: 'Celestial Bait', rarity: 'Mythic', cost: 4000000, luck: 140 },
  { name: 'Leviathan Lullaby Bait', rarity: 'Relic', cost: 12000000, luck: 180 }
];

const fishDatabase = {
  'Mistvale Lake': {
    common: [
      ['Mistfin Perch', 0.3, 1.2],
      ['Whisper Minnow', 0.3, 1.2],
      ['Cloudscale Chub', 0.3, 1.2],
      ['Silver Spriteling', 0.3, 1.2],
      ['Dawnthread Smelt', 0.3, 1.2]
    ],
    uncommon: [
      ['Fogglenose Roach', 1.5, 8],
      ['Shimmer Pike', 1.5, 8],
      ['Dreamtail Carp', 1.5, 8],
      ['Mossback Roach', 1.5, 8],
      ['Emberstripe Burbot', 1.5, 8]
    ],
    rare: [
      ['Veiled Eel', 9, 280],
      ['Glimmerscale Char', 9, 280],
      ['Twilight Catfish', 9, 280],
      ['Mute Moon Loach', 9, 280],
      ['Dewdrop Perch', 9, 280]
    ],
    epic: [
      ['Luminous Sturgeon', 300, 1000],
      ['Spiritscale Pike', 300, 1000],
      ['Stormroot Gar', 300, 1000],
      ['Magelight Paddlefish', 300, 1000],
      ['Nightveil Tigerfish', 300, 1000]
    ],
    legendary: [
      ['Phantom Trout', 1000, 7000],
      ['Aurora Arowana', 1000, 7000],
      ['Ironjaw Barramundi', 1000, 7000],
      ['Starflash Catfish', 1000, 7000],
      ['Poltergeist Gudgeon', 1000, 7000]
    ],
    mythic: [
      ['Cloudreaper Piraiba', 7000, 38500],
      ['Opaline Runebass', 7000, 38500],
      ['Skyshroud Silverscale', 7000, 38500],
      ['Lantern Abyss Grouper', 7000, 38500],
      ['Stormgleam Pangasius', 7000, 38500]
    ],
    secret1: [ ['Lucid Leviathan', 39000, 78000] ],
    secret2: [ ['Forgotten Eidolon', 80000, 230000] ],
    secret3: [ ['Rift Mirrorfish', 460000, 750000] ]
  },
  'Shalequartz Rapids': {
    common: [
      ['Quicksilver Goby', 0.3, 1.2],
      ['Stonefin Darter', 0.3, 1.2],
      ['Stormstripe Minnow', 0.3, 1.2],
      ['Jade Lantern Tetra', 0.3, 1.2],
      ['Rapids Dartfish', 0.3, 1.2]
    ],
    uncommon: [
      ['Vortex Charr', 1.5, 8],
      ['Boulder Pike', 1.5, 8],
      ['Sparkjaw Catlet', 1.5, 8],
      ['Shalejaw Loach', 1.5, 8],
      ['Ripplefin Snakehead', 1.5, 8]
    ],
    rare: [
      ['Torrent Gar', 9, 280],
      ['Stoneveil Eel', 9, 280],
      ['Quartzscale Sheatfish', 9, 280],
      ['Osprey Longfin', 9, 280],
      ['Iridescent Ladyfish', 9, 280]
    ],
    epic: [
      ['Bagheera Tigerfish', 300, 1000],
      ['Crystalback Paddlefish', 300, 1000],
      ['Gilded Taimen', 300, 1000],
      ['Arrowroot Barb', 300, 1000],
      ['Roaring Night Pike', 300, 1000]
    ],
    legendary: [
      ['Rapids Goliath Keta', 1000, 7000],
      ['Tidecaller Grouper', 1000, 7000],
      ['Ghosthead Batfish', 1000, 7000],
      ['Earthsplitter Roach', 1000, 7000],
      ['Thunderjaw Sturgeon', 1000, 7000]
    ],
    mythic: [
      ['Cryolite Emperor', 7000, 38500],
      ['Moonshadow Sungill', 7000, 38500],
      ['Amberbeard Pangasius', 7000, 38500],
      ['Glacial Dorado', 7000, 38500],
      ['Geyserblade Lunkhead', 7000, 38500]
    ],
    secret1: [ ['Spectral Titan', 39000, 78000] ],
    secret2: [ ['Quake Leviathan', 80000, 230000] ],
    secret3: [ ['Fossil Dreamfish', 460000, 750000] ]
  },
  'Emberhollow Lagoon': {
    common: [
      ['Emberling Dace', 0.3, 1.2],
      ['Ashen Minnow', 0.3, 1.2],
      ['Smolder Threadfin', 0.3, 1.2],
      ['Bramble Goby', 0.3, 1.2],
      ['Flamekissed Chub', 0.3, 1.2]
    ],
    uncommon: [
      ['Scarlet Pike', 1.5, 8],
      ['Fireflash Barb', 1.5, 8],
      ['Emberjaw Roach', 1.5, 8],
      ['Cinder Eel', 1.5, 8],
      ['Blazefin Loach', 1.5, 8]
    ],
    rare: [
      ['Pyre Sheatfish', 9, 280],
      ['Lava Glass Catfish', 9, 280],
      ['Ashen Core Loach', 9, 280],
      ['Solar Char', 9, 280],
      ['Ignis Veil', 9, 280]
    ],
    epic: [
      ['Firegem Gar', 300, 1000],
      ['Smelted Marlin', 300, 1000],
      ['Crimson Sturgeon', 300, 1000],
      ['Furnace Taimen', 300, 1000],
      ['Cinnabar Lancer', 300, 1000]
    ],
    legendary: [
      ['Volcanic Longfin', 1000, 7000],
      ['Emberbeard Grouper', 1000, 7000],
      ['Inferno Sungill', 1000, 7000],
      ['Mythic Blaze Barramundi', 1000, 7000],
      ['Burnt Arowana', 1000, 7000]
    ],
    mythic: [
      ['Pyroclast Pangasius', 7000, 38500],
      ['Searing Titanfish', 7000, 38500],
      ['Magma Spine Cod', 7000, 38500],
      ['Regenesis Leviathan', 7000, 38500],
      ['Daybreak Piraiba', 7000, 38500]
    ],
    secret1: [ ['Ifrit Meanderer', 39000, 78000] ],
    secret2: [ ['Ember Eidolon', 80000, 230000] ],
    secret3: [ ['Scorch Dreamfish', 460000, 750000] ]
  },
  'Verdant Expanse': {
    common: [
      ['Leafwing Chub', 0.3, 1.2],
      ['River Spritelight', 0.3, 1.2],
      ['Jade Gudgeon', 0.3, 1.2],
      ['Mossroot Whiptail', 0.3, 1.2],
      ['Forest Darter', 0.3, 1.2]
    ],
    uncommon: [
      ['Canopy Roach', 1.5, 8],
      ['Fern Pike', 1.5, 8],
      ['Verdant Loach', 1.5, 8],
      ['Glenshine Carp', 1.5, 8],
      ['Blossom Catlet', 1.5, 8]
    ],
    rare: [
      ['Sapscale Paddlefish', 9, 280],
      ['Grove Eel', 9, 280],
      ['Eogreen Char', 9, 280],
      ['Duskfeather Barb', 9, 280],
      ['Springtail Marlin', 9, 280]
    ],
    epic: [
      ['Boletus Grouper', 300, 1000],
      ['Canopy Sturgeon', 300, 1000],
      ['Vinebreaker Pike', 300, 1000],
      ['Nightroot Dorado', 300, 1000],
      ['Wildshade Taimen', 300, 1000]
    ],
    legendary: [
      ['Elderthorn Sungill', 1000, 7000],
      ['Ranian Paragon Eel', 1000, 7000],
      ['Woodland Cyclonefish', 1000, 7000],
      ['Rootspinner Barramundi', 1000, 7000],
      ['Sylvan Flashcat', 1000, 7000]
    ],
    mythic: [
      ['Grove Leviathan', 7000, 38500],
      ['Sylph Titanfish', 7000, 38500],
      ['Fae Greenwood Whale', 7000, 38500],
      ['Mossbeard Pangasius', 7000, 38500],
      ['Thornshade Piraiba', 7000, 38500]
    ],
    secret1: [ ['Archanet Eidolon', 39000, 78000] ],
    secret2: [ ['Petal Dreamserpent', 80000, 230000] ],
    secret3: [ ['Mystery Bloomfin', 460000, 750000] ]
  },
  'Glacial Halo': {
    common: [
      ['Emberling Dace', 0.3, 1.2],
      ['Ashen Minnow', 0.3, 1.2],
      ['Smolder Threadfin', 0.3, 1.2],
      ['Bramble Goby', 0.3, 1.2],
      ['Flamekissed Chub', 0.3, 1.2]
    ],
    uncommon: [
      ['Scarlet Pike', 1.5, 8],
      ['Fireflash Barb', 1.5, 8],
      ['Emberjaw Roach', 1.5, 8],
      ['Cinder Eel', 1.5, 8],
      ['Blazefin Loach', 1.5, 8]
    ],
    rare: [
      ['Pyre Sheatfish', 9, 280],
      ['Lava Glass Catfish', 9, 280],
      ['Ashen Core Loach', 9, 280],
      ['Solar Char', 9, 280],
      ['Ignis Veil', 9, 280]
    ],
    epic: [
      ['Firegem Gar', 300, 1000],
      ['Smelted Marlin', 300, 1000],
      ['Crimson Sturgeon', 300, 1000],
      ['Furnace Taimen', 300, 1000],
      ['Cinnabar Lancer', 300, 1000]
    ],
    legendary: [
      ['Volcanic Longfin', 1000, 7000],
      ['Emberbeard Grouper', 1000, 7000],
      ['Inferno Sungill', 1000, 7000],
      ['Mythic Blaze Barramundi', 1000, 7000],
      ['Burnt Arowana', 1000, 7000]
    ],
    mythic: [
      ['Pyroclast Pangasius', 7000, 38500],
      ['Searing Titanfish', 7000, 38500],
      ['Magma Spine Cod', 7000, 38500],
      ['Regenesis Leviathan', 7000, 38500],
      ['Daybreak Piraiba', 7000, 38500]
    ],
    secret1: [ ['Ifrit Meanderer', 39000, 78000] ],
    secret2: [ ['Ember Eidolon', 80000, 230000] ],
    secret3: [ ['Scorch Dreamfish', 460000, 750000] ]
  },
  'Sapphire Depths': {
    common: [
      ['Sapphire Darter', 0.3, 1.2],
      ['Bluechrome Goby', 0.3, 1.2],
      ['Glassfin Spriteling', 0.3, 1.2],
      ['Surfacelight Tetra', 0.3, 1.2],
      ['Chillwhisk Minnow', 0.3, 1.2]
    ],
    uncommon: [
      ['Azure Pike', 1.5, 8],
      ['Iceglass Roach', 1.5, 8],
      ['Glitterjaw Loach', 1.5, 8],
      ['Frostbarb Catlet', 1.5, 8],
      ['Shimmerdrift Eel', 1.5, 8]
    ],
    rare: [
      ['Deepsea Sturgeon', 9, 280],
      ['Brilliant Paddlefish', 9, 280],
      ['Glistenspine Char', 9, 280],
      ['Seastrand Salmon', 9, 280],
      ['Crystal Ladyfish', 9, 280]
    ],
    epic: [
      ['Prism Barramundi', 300, 1000],
      ['Blueblade Grouper', 300, 1000],
      ['Twilight Marlin', 300, 1000],
      ['Skydance Dorado', 300, 1000],
      ['Iceveil Pangasius', 300, 1000]
    ],
    legendary: [
      ['Glacierbeard Tuna', 1000, 7000],
      ['Sapphire Cyclonefish', 1000, 7000],
      ['Shinejaw Sungill', 1000, 7000],
      ['Oceanic Starlancer', 1000, 7000],
      ['Auroral Sheatfish', 1000, 7000]
    ],
    mythic: [
      ['Frost Leviathan', 7000, 38500],
      ['Starlight Megador', 7000, 38500],
      ['Icewhale Goliath', 7000, 38500],
      ['Aurora Whale', 7000, 38500],
      ['Deepcryst Pangasius', 7000, 38500]
    ],
    secret1: [ ['Celestine Eidolon', 39000, 78000] ],
    secret2: [ ['Haunt of Polaris', 80000, 230000] ],
    secret3: [ ['Worldrind Mirrorfish', 460000, 750000] ]
  },
  'Starlit Abyss': {
    common: [
      ['Nightsky Minnow', 0.3, 1.2],
      ['Duskglow Darter', 0.3, 1.2],
      ['Moonglint Chub', 0.3, 1.2],
      ['Twilight Spritelight', 0.3, 1.2],
      ['Cometthread Tetra', 0.3, 1.2]
    ],
    uncommon: [
      ['Astral Pike', 1.5, 8],
      ['Eclipse Roach', 1.5, 8],
      ['Nebula Loach', 1.5, 8],
      ['Celestrial Catlet', 1.5, 8],
      ['Supernova Eel', 1.5, 8]
    ],
    rare: [
      ['Eventide Grouper', 9, 280],
      ['Polaris Sturgeon', 9, 280],
      ['Astroweave Char', 9, 280],
      ['Galaxy Marlin', 9, 280],
      ['Wanderer Salmon', 9, 280]
    ],
    epic: [
      ['Quasar Pangasius', 300, 1000],
      ['Voidtail Catfish', 300, 1000],
      ['Meteorroot Dorado', 300, 1000],
      ['Eclipse Titanfish', 300, 1000],
      ['Spiralstar Gar', 300, 1000]
    ],
    legendary: [
      ['Blackhole Whale', 1000, 7000],
      ['Cosmos Sungill', 1000, 7000],
      ['Osiris Cyclonefish', 1000, 7000],
      ['Nebular Sheatfish', 1000, 7000],
      ['Penumbra Tuna', 1000, 7000]
    ],
    mythic: [
      ['Helios Goliath', 7000, 38500],
      ['Falling Star Megador', 7000, 38500],
      ['Voidreaver Leviathan', 7000, 38500],
      ['Darkmatter Whale', 7000, 38500],
      ['Cometglade Pangasius', 7000, 38500]
    ],
    secret1: [ ['Distant Eidolon', 39000, 78000] ],
    secret2: [ ['Starshadow Dreamfish', 80000, 230000] ],
    secret3: [ ['Rift Titan', 460000, 750000] ]
  },
  'Solstice Delta': {
    common: [
      ['Sunspark Dace', 0.3, 1.2],
      ['Dawnthread Tetra', 0.3, 1.2],
      ['Brightfin Minnow', 0.3, 1.2],
      ['Solar Spritelight', 0.3, 1.2],
      ['Goldenthread Chub', 0.3, 1.2]
    ],
    uncommon: [
      ['Aurora Carp', 1.5, 8],
      ['Rayglen Pike', 1.5, 8],
      ['Lightweave Loach', 1.5, 8],
      ['Goldrush Catlet', 1.5, 8],
      ['Sunpetal Roach', 1.5, 8]
    ],
    rare: [
      ['Embergill Grouper', 9, 280],
      ['Halo Marlin', 9, 280],
      ['Corona Sturgeon', 9, 280],
      ['Dawnslicer Barbel', 9, 280],
      ['Radiantrush Salmon', 9, 280]
    ],
    epic: [
      ['Raystone Pangasius', 300, 1000],
      ['Sunflare Barramundi', 300, 1000],
      ['Luminight Dorado', 300, 1000],
      ['Novasky Gar', 300, 1000],
      ['Prismbreaker Catfish', 300, 1000]
    ],
    legendary: [
      ['Radiant Whale', 1000, 7000],
      ['Sunstrike Sungill', 1000, 7000],
      ['Goldflare Cyclonefish', 1000, 7000],
      ['Arclight Tuna', 1000, 7000],
      ['Celestial Sheatfish', 1000, 7000]
    ],
    mythic: [
      ['Halo Leviathan', 7000, 38500],
      ['Solspire Megador', 7000, 38500],
      ['Eclipsing Whale', 7000, 38500],
      ['Dawnbreak Pangasius', 7000, 38500],
      ['Corona Titanfish', 7000, 38500]
    ],
    secret1: [ ['Sunshroud Eidolon', 39000, 78000] ],
    secret2: [ ['Luminous Dreamwyrm', 80000, 230000] ],
    secret3: [ ['Fusion Mirrorfin', 460000, 750000] ]
  }
};

const rarityOrder = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];
const rarityDisplay = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  epic: 'Epic',
  legendary: 'Legendary',
  mythic: 'Mythic',
  secret1: 'Secret (1 in 350k)',
  secret2: 'Secret (1 in 1.2m)',
  secret3: 'Secret (1 in 4m)'
};

const rarityColors = {
  common: '#b7c8d8',
  uncommon: '#7fffd4',
  rare: '#4db5ff',
  epic: '#b987ff',
  legendary: '#ffdf6f',
  mythic: '#ff8bd9',
  secret1: '#ff997b',
  secret2: '#ffa6ff',
  secret3: '#fff'
};

const xpRewards = {
  common: 120,
  uncommon: 250,
  rare: 600,
  epic: 1200,
  legendary: 2200,
  mythic: 4000,
  secret1: 6000,
  secret2: 7500,
  secret3: 10000
};

const sellMultipliers = {
  common: 4,
  uncommon: 9,
  rare: 25,
  epic: 45,
  legendary: 110,
  mythic: 260,
  secret1: 450,
  secret2: 650,
  secret3: 1000
};

const secretOdds = {
  secret1: 1 / 350000,
  secret2: 1 / 850000,
  secret3: 1 / 4250000
};

const baseWeights = {
  common: 42,
  uncommon: 24,
  rare: 15,
  epic: 10,
  legendary: 6,
  mythic: 3
};

const luckShift = {
  common: -0.12,
  uncommon: 0.02,
  rare: 0.05,
  epic: 0.08,
  legendary: 0.11,
  mythic: 0.15
};

const defaultState = {
  coins: 40000000,
  level: 1,
  xp: 0,
  rod: 'Driftwood Rod',
  rodsOwned: ['Driftwood Rod'],
  bait: 'Dewdrop Pebble Bait',
  baitsOwned: ['Dewdrop Pebble Bait'],
  location: 'Mistvale Lake',
  inventory: []
};

let state = { ...defaultState };
let fishingTimeout = null;
const SAVE_KEY = 'aurora-fishing-save';

const uuid = () => (typeof crypto !== 'undefined' && crypto.randomUUID)
  ? crypto.randomUUID()
  : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

const elements = {
  locationGrid: document.getElementById('location-grid'),
  locationDescription: document.getElementById('location-description'),
  castButton: document.getElementById('cast-button'),
  lastCatch: document.getElementById('last-catch'),
  lineStatus: document.getElementById('line-status'),
  inventoryBody: document.getElementById('inventory-body'),
  rodShop: document.getElementById('rod-shop'),
  baitShop: document.getElementById('bait-shop'),
  log: document.getElementById('activity-log'),
  level: document.getElementById('player-level'),
  coins: document.getElementById('coins'),
  luck: document.getElementById('luck'),
  speed: document.getElementById('speed'),
  capacity: document.getElementById('capacity'),
  xpProgress: document.getElementById('xp-progress'),
  currentXp: document.getElementById('current-xp'),
  nextLevelXp: document.getElementById('next-level-xp'),
  manualSave: document.getElementById('manual-save'),
  exportSave: document.getElementById('export-save'),
  importSave: document.getElementById('import-save'),
  sellSelected: document.getElementById('sell-selected'),
  sellAll: document.getElementById('sell-all')
};

function formatCoins(value) {
  return `${value.toLocaleString()} coins`;
}

function formatWeight(weight) {
  if (weight >= 1000) {
    const tons = weight / 1000;
    return `${weight.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} KG (${tons.toFixed(2)} Ton)`;
  }
  return `${weight.toFixed(2)} KG`;
}

function gaussianWeight(min, max) {
  const mean = (min + max) / 2;
  const stdDev = (max - min) / 6;
  let u1 = Math.random();
  let u2 = Math.random();
  u1 = u1 === 0 ? 1e-9 : u1;
  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  const value = mean + z0 * stdDev;
  return Math.min(Math.max(value, min), max);
}

function xpNeededForLevel(level) {
  if (level === 1) return 1000;
  if (level <= 20) return 5000 * level;
  return 10000 * level;
}

function totalLuck() {
  const base = 8000;
  const rodLuck = rods.find(r => r.name === state.rod)?.luck ?? 0;
  const baitLuck = baits.find(b => b.name === state.bait)?.luck ?? 0;
  return base + rodLuck + baitLuck;
}

function rodSpeed() {
  return rods.find(r => r.name === state.rod)?.speed ?? 0;
}

function rodCapacity() {
  return rods.find(r => r.name === state.rod)?.weight ?? 20;
}

function addLog(message) {
  const li = document.createElement('li');
  li.textContent = message;
  elements.log.prepend(li);
  while (elements.log.children.length > 30) {
    elements.log.removeChild(elements.log.lastChild);
  }
}

function updateStats() {
  elements.level.textContent = state.level;
  elements.coins.textContent = state.coins.toLocaleString();
  elements.luck.textContent = `${totalLuck().toFixed(0)}%`;
  elements.speed.textContent = `${rodSpeed().toFixed(0)}%`;
  elements.capacity.textContent = `${rodCapacity().toLocaleString()} KG`;
  elements.currentXp.textContent = state.xp.toLocaleString();
  const needed = xpNeededForLevel(state.level);
  elements.nextLevelXp.textContent = needed.toLocaleString();
  const percent = Math.min(100, (state.xp / needed) * 100);
  elements.xpProgress.style.width = `${percent}%`;
}

function applyTheme() {
  const { bg, accent } = locations[state.location].theme;
  document.documentElement.style.setProperty('--bg', bg);
  document.documentElement.style.setProperty('--accent', accent);
  document.documentElement.style.setProperty('--accent-soft', hexToRGBA(accent, 0.2));
}

function hexToRGBA(hex, alpha) {
  const cleaned = hex.replace('#', '');
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function renderLocations() {
  elements.locationGrid.innerHTML = '';
  Object.entries(locations).forEach(([name, info]) => {
    const card = document.createElement('div');
    card.className = 'location-card';
    if (state.location === name) card.classList.add('active');
    card.innerHTML = `<h3>${name}</h3><p>${info.description}</p>`;
    card.addEventListener('click', () => {
      state.location = name;
      elements.locationDescription.textContent = info.description;
      renderLocations();
      applyTheme();
      addLog(`Relocated to ${name}. The atmosphere shifts entirely.`);
      saveGame();
    });
    elements.locationGrid.appendChild(card);
  });
  elements.locationDescription.textContent = locations[state.location].description;
}

function createShopItem(item, type) {
  const template = document.getElementById('shop-item-template');
  const node = template.content.cloneNode(true);
  node.querySelector('.item-name').textContent = item.name;
  const meta = type === 'rod'
    ? `Luck +${item.luck}% · Speed +${item.speed}% · Capacity ${item.weight.toLocaleString()} KG`
    : `${item.rarity} · Luck +${item.luck}%`;
  node.querySelector('.item-meta').textContent = meta;
  node.querySelector('.item-cost').textContent = formatCoins(item.cost);
  const button = node.querySelector('button');
  if (type === 'rod') {
    if (state.rodsOwned.includes(item.name)) {
      if (state.rod === item.name) {
        button.textContent = 'Equipped';
        button.disabled = true;
      } else {
        button.textContent = 'Equip';
        button.addEventListener('click', () => equipRod(item.name));
      }
    } else {
      button.textContent = 'Purchase';
      button.addEventListener('click', () => purchaseItem(item, type));
    }
  } else {
    if (state.baitsOwned.includes(item.name)) {
      if (state.bait === item.name) {
        button.textContent = 'Equipped';
        button.disabled = true;
      } else {
        button.textContent = 'Equip';
        button.addEventListener('click', () => equipBait(item.name));
      }
    } else {
      button.textContent = 'Purchase';
      button.addEventListener('click', () => purchaseItem(item, type));
    }
  }
  return node;
}

function renderShops() {
  elements.rodShop.innerHTML = '';
  rods.forEach(rod => {
    elements.rodShop.appendChild(createShopItem(rod, 'rod'));
  });
  elements.baitShop.innerHTML = '';
  baits.forEach(bait => {
    elements.baitShop.appendChild(createShopItem(bait, 'bait'));
  });
}

function purchaseItem(item, type) {
  if (state.coins < item.cost) {
    addLog('Not enough coins.');
    return;
  }
  state.coins -= item.cost;
  if (type === 'rod') {
    if (!state.rodsOwned.includes(item.name)) state.rodsOwned.push(item.name);
    state.rod = item.name;
    addLog(`Purchased and equipped ${item.name}.`);
  } else {
    if (!state.baitsOwned.includes(item.name)) state.baitsOwned.push(item.name);
    state.bait = item.name;
    addLog(`Purchased and equipped ${item.name}.`);
  }
  renderShops();
  updateStats();
  saveGame();
}

function equipRod(name) {
  if (!state.rodsOwned.includes(name)) return;
  state.rod = name;
  addLog(`Equipped ${name}.`);
  renderShops();
  updateStats();
  saveGame();
}

function equipBait(name) {
  if (!state.baitsOwned.includes(name)) return;
  state.bait = name;
  addLog(`Equipped ${name}.`);
  renderShops();
  updateStats();
  saveGame();
}

function rollRarity() {
  const luck = totalLuck();
  const luckMultiplier = 1 + luck / 100;
  // secret rolls
  for (const tier of ['secret3', 'secret2', 'secret1']) {
    const base = secretOdds[tier];
    if (!base) continue;
    const chance = Math.min(0.8, base * luckMultiplier);
    if (Math.random() < chance) {
      return tier;
    }
  }
  const scores = rarityOrder.map(rarity => {
    const base = baseWeights[rarity];
    const score = Math.max(1, base + luck * luckShift[rarity]);
    return { rarity, score };
  });
  const totalScore = scores.reduce((sum, entry) => sum + entry.score, 0);
  let roll = Math.random() * totalScore;
  for (const { rarity, score } of scores) {
    if (roll < score) return rarity;
    roll -= score;
  }
  return 'common';
}

function pickFish(rarity) {
  const locationFish = fishDatabase[state.location];
  const pool = locationFish[rarity];
  if (!pool || pool.length === 0) return null;
  const [name, min, max] = pool[Math.floor(Math.random() * pool.length)];
  const weight = gaussianWeight(min, max);
  return { name, rarity: rarityDisplay[rarity], rarityKey: rarity, weight };
}

function fishOnce() {
  const rarityKey = rollRarity();
  const fish = pickFish(rarityKey);
  if (!fish) {
    addLog('Nothing bit the hook.');
    elements.lastCatch.textContent = 'Nothing was reeled in.';
    return;
  }
  const capacity = rodCapacity();
  if (fish.weight > capacity) {
    elements.lastCatch.textContent = `${fish.name} (${formatWeight(fish.weight)}) snapped the line (capacity ${capacity.toLocaleString()} KG).`;
    elements.lineStatus.textContent = 'Catch failed - upgrade rod capacity.';
    addLog(`${fish.name} was too heavy for your ${state.rod}.`);
    return;
  }
  const value = Math.round(fish.weight * sellMultipliers[rarityKey]);
  const entry = {
    id: uuid(),
    name: fish.name,
    rarity: fish.rarity,
    rarityKey,
    weight: fish.weight,
    value,
    location: state.location
  };
  state.inventory.unshift(entry);
  elements.lastCatch.textContent = `Caught ${fish.name} (${fish.rarity}) weighing ${formatWeight(fish.weight)}.`;
  elements.lineStatus.textContent = 'Fish stored in inventory.';
  addLog(`Caught ${fish.name} at ${state.location}.`);
  gainXp(xpRewards[rarityKey] ?? 0);
  renderInventory();
}

function gainXp(amount) {
  state.xp += amount;
  let needed = xpNeededForLevel(state.level);
  while (state.xp >= needed) {
    state.xp -= needed;
    state.level += 1;
    needed = xpNeededForLevel(state.level);
    addLog(`Reached level ${state.level}!`);
  }
  updateStats();
}

function renderInventory() {
  elements.inventoryBody.innerHTML = '';
  state.inventory.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="checkbox" data-id="${item.id}" /></td>
      <td>${item.name}</td>
      <td style="color:${rarityColors[item.rarityKey]}">${item.rarity}</td>
      <td>${formatWeight(item.weight)}</td>
      <td>${item.value.toLocaleString()} coins</td>
      <td>${item.location}</td>
    `;
    elements.inventoryBody.appendChild(tr);
  });
}

function sellFish(filterFn) {
  const selling = state.inventory.filter(filterFn);
  if (selling.length === 0) return;
  const earnings = selling.reduce((sum, fish) => sum + fish.value, 0);
  state.inventory = state.inventory.filter(item => !filterFn(item));
  state.coins += earnings;
  addLog(`Sold ${selling.length} fish for ${earnings.toLocaleString()} coins.`);
  renderInventory();
  updateStats();
  saveGame();
}

function handleSellSelected() {
  const ids = Array.from(elements.inventoryBody.querySelectorAll('input:checked')).map(cb => cb.dataset.id);
  sellFish(fish => ids.includes(fish.id));
}

function handleSellAll() {
  sellFish(() => true);
}

function castLine() {
  if (fishingTimeout) return;
  elements.castButton.disabled = true;
  elements.lineStatus.textContent = 'Line cast... waiting for a bite.';
  const wait = 4000 / (1 + rodSpeed() / 100);
  fishingTimeout = setTimeout(() => {
    fishingTimeout = null;
    elements.castButton.disabled = false;
    fishOnce();
    saveGame();
  }, Math.max(900, wait));
}

function saveGame() {
  const data = JSON.stringify(state);
  localStorage.setItem(SAVE_KEY, data);
}

function manualSave() {
  saveGame();
  addLog('Manual save complete.');
}

function loadGame() {
  const data = localStorage.getItem(SAVE_KEY);
  if (!data) return;
  try {
    const parsed = JSON.parse(data);
    state = { ...defaultState, ...parsed };
    state.inventory ??= [];
    state.rodsOwned ??= ['Driftwood Rod'];
    state.baitsOwned ??= ['Dewdrop Pebble Bait'];
  } catch (err) {
    console.error('Save corrupted', err);
  }
}

function exportSave() {
  const blob = new Blob([JSON.stringify(state)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'aurora-fishing-save.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importSave(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = event => {
    try {
      const data = JSON.parse(event.target.result);
      state = { ...defaultState, ...data };
      renderLocations();
      renderShops();
      renderInventory();
      updateStats();
      applyTheme();
      saveGame();
      addLog('Save imported successfully.');
    } catch (err) {
      addLog('Import failed: invalid file.');
    }
    elements.importSave.value = '';
  };
  reader.readAsText(file);
}

function restoreUI() {
  renderLocations();
  renderShops();
  renderInventory();
  updateStats();
  applyTheme();
}

function init() {
  loadGame();
  restoreUI();
  elements.castButton.addEventListener('click', castLine);
  elements.manualSave.addEventListener('click', manualSave);
  elements.exportSave.addEventListener('click', exportSave);
  elements.importSave.addEventListener('change', event => importSave(event.target.files[0]));
  elements.sellSelected.addEventListener('click', handleSellSelected);
  elements.sellAll.addEventListener('click', handleSellAll);
  setInterval(saveGame, 15000);
}

init();
