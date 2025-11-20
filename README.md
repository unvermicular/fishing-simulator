# Fishing Simulator

A responsive browser-based fishing RPG that recreates the Aurora Angling Guild experience. Cast from ten unique locations, unlock twelve rods and eleven bait types, and discover 700 unique fish with Gaussian weight rolls, rarity-driven payouts, and a flexible leveling curve.

## Features

### 🌍 Dynamic Biomes
Change your fishing location to completely re-theme the interface and access different fish pools:
- **10 Unique Locations** – Each with distinct visual themes (gradients, accent colors) and atmospheric descriptions
- **Seamless Theme Transitions** – Background, accent colors, and UI elements adapt to match the current location
- **Location-Specific Fish** – Every biome hosts a unique set of 70 fish species across six rarity tiers

### 🎣 Accurate Fishing Logic
Realistic fishing mechanics powered by advanced algorithms:
- **RNG-Based Rarity System** – Luck stat influences catch probability across Common, Uncommon, Rare, Epic, Legendary, and Mythic tiers
- **Secret Fish Encounters** – Five hidden secret tiers with extremely rare, high-value fish
- **Gaussian Weight Generation** – Fish weights follow a bell curve distribution between minimum and maximum values for realistic variation
- **Rod Capacity Checks** – Each rod has a weight limit; exceeding it results in losing the catch
- **Rarity-Weighted Pricing** – Sale values scale based on both rarity tier and actual caught weight

### 📊 Progression System
Deep RPG mechanics with meaningful advancement:
- **XP Per Catch** – Gain experience from every successful catch (5 XP base, scaled by rarity)
- **Dynamic Level Requirements** – 1,000 XP for Level 1, then 5,000 × level (Levels 2-20), then 10,000 × level (21+)
- **Stat Displays** – Track coins, luck points, line speed percentage, and rod weight capacity in real-time
- **Visual Progress Bar** – XP progress displayed with current/next level indicators

### 🛒 Dual Shops
Comprehensive equipment upgrade system:
- **Rod Shop** – 12 rods ranging from free Driftwood Rod to 75M coin Leviathan Crown Rod
  - Each rod provides: Luck bonus, Line Speed, and Weight Capacity
  - Example: Starcaller Rod (15,000 coins) → 100 luck, 320% speed, 625 KG capacity
- **Bait Shop** – 11 bait types spanning Common to Relic rarities
  - Each bait adds luck bonus to improve catch rates
  - Example: Aurora Bait (2.4M coins) → 415 luck bonus
- **Equip System** – Purchase gear and equip/unequip anytime via dual action buttons
- **Starter Loadout** – Begin with Driftwood Rod, Dewdrop Pebble Bait (10% luck), and 100 coins

### 📦 Inventory & Marketplace
Complete catch management system:
- **Catch Tracking** – Every fish caught appears in a scrollable table with name, rarity, weight, value, and location
- **Selective Selling** – Checkbox selection system to sell specific catches
- **Bulk Liquidation** – "Sell All" button to instantly convert entire inventory to coins
- **Value Calculation** – Dynamic pricing based on fish base value and weight ratio

### 💾 Persistence Tools
Never lose your progress:
- **Autosave** – Game state automatically saved to LocalStorage every 15 seconds
- **Manual Save** – Click "Save" button for instant save confirmation
- **Export System** – Download your save file as JSON for backup
- **Import System** – Upload previously exported save files to restore progress
- **Saved Data Includes** – Location, level, XP, coins, inventory, equipped rod, equipped bait

## Game Mechanics

### Rarity Tiers & Drop Rates
Six standard tiers plus five secret tiers:

| Rarity | Base Drop Rate | Luck Scaling | Fish Per Location |
|--------|---------------|--------------|-------------------|
| Common | 45% | Low influence | 10 |
| Uncommon | 25% | Low influence | 10 |
| Rare | 15% | Moderate | 10 |
| Epic | 10% | High | 10 |
| Legendary | 4% | Very High | 10 |
| Mythic | 1% | Extreme | 10 |
| Secret 1-5 | 0.05% - 0.001% | Extreme | 2 each |

**Luck System**: Effective luck is calculated using logarithmic scaling to normalize gear values:
- Formula: `effectiveLuck = Math.log10(1 + rodLuck + baitLuck) × 50`
- Capped at 20,000 points maximum
- Higher luck increases probability of rarer catches

### Weight Generation
Fish weights use **Gaussian distribution** (Box-Muller transform):
- Each fish species has a minimum and maximum weight range
- Mean = (min + max) / 2
- Standard Deviation = (max - min) / 6
- Results in realistic bell-curve weight distribution
- Values clamped to stay within defined range

### XP & Leveling
Progressive leveling system designed for long-term engagement:

```
Level 1: 1,000 XP required
Levels 2-20: 5,000 × level (10k, 15k, 20k... 100k)
Levels 21+: 10,000 × level (210k, 220k, 230k...)
```

XP rewards per catch:
- Base: 5 XP
- Multiplied by rarity weight (Common ×1, Rare ×5, Mythic ×20, etc.)

### Sale Price Calculation
Fish value determined by two factors:

```javascript
salePrice = baseValue × (weight / meanWeight)
```

Example: 
- Aetherfin (Mythic): Base value 88,560 coins, weight range 8,000 lbs
- Catch weighing 10,000 lbs: 88,560 × (10,000 / 8,000) = 110,700 coins

## Locations

### Available Biomes

1. **Mistvale Lake**  
   *Mist-veiled shallows with luminous reeds and echoing birdsong*  
   Theme: Cool blues (#8ff3ff accent)

2. **Shalequartz Rapids**  
   *Crystalline rapids and chiseled canyons that roar with wind*  
   Theme: Warm ambers (#ffc983 accent)

3. **Emberhollow Lagoon**  
   *Smouldering mangroves crackle above ember-lit water*  
   Theme: Volcanic oranges (#ff9b53 accent)

4. **Verdant Expanse**  
   *A bioluminescent marsh carpeted in moss and fireflies*  
   Theme: Vibrant greens (#7df0b5 accent)

5. **Glacial Halo**  
   *A mirrored lagoon of obsidian ice and geothermal steam*  
   Theme: Icy cyans (#c6f1ff accent)

6. **Sapphire Depths**  
   *Ocean trench carved in sapphire glass and cold starlight*  
   Theme: Deep blues (#4de0ff accent)

7. **Starlit Abyss**  
   *Endless nightwaters peppered with aurora constellations*  
   Theme: Cosmic purples (#d5a9ff accent)

8. **Solstice Delta**  
   *Radiant floodplains drenched in sunflare, mirrors, and lilies*  
   Theme: Golden yellows (#ffda66 accent)

9. **Whispering Tidepool**  
   *Moonlit pools cradle ancient shells, where the ocean hums forgotten lullabies*  
   Theme: Teal blues (#7dd3e8 accent)

10. **Cinderbloom Marsh**  
    *Volcanic soil births crimson blossoms that float on ashen streams*  
    Theme: Crimson reds (#ff6b6b accent)

## Equipment Guide

### Rod Progression

| Rod Name | Cost | Luck | Speed | Weight Capacity |
|----------|------|------|-------|-----------------|
| Driftwood Rod | Free | 0 | 0% | 35 KG |
| Emberfiber Rod | 500 | 50 | 60% | 55 KG |
| Frostline Rod | 750 | 30 | 92% | 90 KG |
| Verdantwhip Rod | 4,000 | 60 | 215% | 250 KG |
| Starcaller Rod | 15,000 | 100 | 320% | 625 KG |
| Stormcoil Rod | 45,000 | 200 | 245% | 5,400 KG |
| Prismweave Rod | 135,000 | 450 | 630% | 10,500 KG |
| Inferno Rod | 545,400 | 675 | 3,685% | 92,000 KG |
| Aether Rod | 1,204,000 | 875 | 8,595% | 340,000 KG |
| Prismbloom Rod | 4,690,000 | 1,210 | 5,484% | 720,000 KG |
| Roselight Rod | 15,000,000 | 1,512 | 9,583% | 2,600,000 KG |
| Leviathan Crown Rod | 75,000,000 | 2,832 | 21,854% | 3,200,000 KG |

### Bait Progression

| Bait Name | Rarity | Cost | Luck Bonus |
|-----------|--------|------|------------|
| Dewdrop Pebble Bait | Common | Free | 10 |
| Riverlily Bait | Common | 2,000 | 30 |
| Firefly Pearl Bait | Uncommon | 4,000 | 28 |
| Sunset Minnow Bait | Uncommon | 9,000 | 45 |
| Moonpetal Swarm Bait | Rare | 30,000 | 95 |
| Stormsong Shrimp Bait | Rare | 65,000 | 150 |
| Opal Jelly Bait | Epic | 360,000 | 270 |
| Emberrose Bait | Epic | 880,000 | 290 |
| Aurora Bait | Legendary | 2,400,000 | 415 |
| Celestial Bait | Mythic | 8,000,000 | 540 |
| Leviathan Lullaby Bait | Relic | 26,000,000 | 750 |

## User Interface

### Hero Section
- **Title & Subtitle** – Game branding with atmospheric tagline
- **Save Panel** – Manual save, export, and import buttons
- **Player Stats Grid** – Four stat cards showing Level, Coins, Luck, and Speed
- **XP Progress Bar** – Visual representation of progress to next level

### Main Sections

1. **Locations Panel**  
   Grid of clickable location cards with names and descriptions

2. **Fishing Action Panel**  
   - Cast button with dynamic state (Fishing/Cast)
   - Catch preview display showing last caught fish
   - Line status indicator

3. **Inventory Panel**  
   - Header with "Sell Selected" and "Sell All" buttons
   - Scrollable table with checkboxes for selective selling
   - Columns: Fish, Rarity, Weight (lbs), Value, Location

4. **Rod Shop Panel**  
   List of all rods with names, stats, and Buy/Equip buttons

5. **Bait Shop Panel**  
   List of all baits with rarity, stats, and Buy/Equip buttons

6. **Activity Log**  
   Recent game events (catches, sales, level-ups) in reverse chronological order

## Development

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No server or build tools required

### Installation
1. Download or clone the project files
2. Ensure all three files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in your browser

### File Structure
```
fishing-simulator/
├── index.html      # DOM structure and layout
├── styles.css      # Responsive design system with theme variables
└── script.js       # Game logic, state management, and persistence
```

### Technical Details

**Architecture**:
- Vanilla JavaScript (ES6+) – No frameworks or dependencies
- CSS Variables for dynamic theming
- LocalStorage for persistence
- Single-page application architecture

**Browser APIs Used**:
- LocalStorage (save/load game state)
- File API (export/import save files)
- CSS Custom Properties (dynamic theming)

**Key Functions**:
- `gaussianWeight()` – Box-Muller transform for realistic weight distribution
- `effectiveLuck()` – Logarithmic scaling for balanced luck system
- `attemptCatch()` – RNG-based fishing logic with tier probabilities
- `applyTheme()` – Dynamic CSS variable injection for location themes
- `saveGame()` / `loadGame()` – LocalStorage persistence layer

## Tips & Strategies

### Early Game (Levels 1-5)
- Focus on catching any fish to build XP and coins
- Upgrade to Emberfiber or Frostline Rod as soon as possible
- Common and Uncommon fish provide steady income

### Mid Game (Levels 6-15)
- Save for Starcaller Rod (15,000 coins) – major luck boost
- Invest in Moonpetal Swarm Bait to improve rare catch rates
- Start targeting Epic and Legendary fish for higher payouts

### Late Game (Levels 16+)
- Optimize luck stat with highest-tier rod + bait combinations
- Hunt for Mythic fish (8,000 lbs, 88,560 base value)
- Switch locations frequently to access different fish pools
- Look for secret fish – extremely rare but worth 78,000 - 2.3M coins

### Advanced Tactics
- **Weight Management**: Ensure your rod capacity exceeds the maximum weight of fish in your target location
- **Location Rotation**: Some locations may have more valuable rare fish – experiment to find optimal spots
- **Selective Selling**: Keep rare fish for potential future value increases (if system updates)
- **Backup Strategy**: Export save files before major gambling (hunting expensive fish)

## Future Enhancements (Potential)
- Achievements and milestones system
- Fishing tournaments with time limits
- Multiplayer leaderboards
- Seasonal events with exclusive fish
- Upgrade system for rod/bait enhancements
- Mini-games for bonus XP or coins

## Credits

**Design Inspiration**: Aurora Angling Guild aesthetic  
**Font**: Space Grotesk (Google Fonts)  
**Color Palette**: Custom gradient system with 10 unique biome themes  
**Fish Database**: 700 unique species across 10 locations

**Enjoy the tranquility of the Mythic Waters. Cast your line and discover what lies beneath! 🎣**
