# Fishing Simulator

A responsive browser-based fishing RPG that recreates the Aurora Angling Guild experience. Cast from eight locations, unlock rods and bait, and discover 288 unique fish with Gaussian weight rolls, rarity-driven payouts, and a flexible leveling curve.

## Features

- **Dynamic Biomes** – Changing the fishing spot re-themes the entire interface and swaps the local fish table.
- **Accurate Fishing Logic** – RNG-based rarity rolls, luck scaling, secret-fish odds, Gaussian weight generation, rod capacity checks, and rarity-weighted sell prices.
- **Progression System** – XP per catch, level requirements (1k ➜ 5k multiples ➜ 10k multiples) and stat displays for coins, luck, line speed, and rod weight limits.
- **Dual Shops** – Purchase or equip rods and bait with distinct stats. Starter loadout includes Driftwood Rod, Dewdrop Pebble Bait, 100 coins, and innate 10% luck.
- **Inventory + Marketplace** – Track every catch, select items to sell, or liquidate everything at once. Sale prices scale with rarity and actual weight.
- **Persistence Tools** – Autosave every 15 seconds, manual save button, plus export/import of save files (JSON) via LocalStorage.

## Development

Open `index.html` in any modern browser. No build step is required; all styling and JavaScript logic are provided via `styles.css` and `script.js`.
