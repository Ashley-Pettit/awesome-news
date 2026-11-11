# The whole-town 3D models

Two models, each separate from the weather's own scenes of the same place (which are built inside `app.html`):

- **Inverloch** (this folder): the whole town, behind **Virtually explore Inverloch** and
  **Admin > 3D scenes > Inverloch 3D model**.
- **Moorooka** (`moorooka/`): the suburb and its edges, a 3.3 km square, behind **Virtually explore Moorooka**
  (in Moorooka News, and wherever Moorooka is the chosen area) and **Admin > 3D scenes > Moorooka 3D model**.

| File | What it is |
| --- | --- |
| `inverloch-model.js` | The Inverloch model as one script (`window.InverlochModel`), with its own copy of three.js |
| `height.png` | Terrain heights, including the Anderson Inlet sandbars |
| `ground.webp` | Ground colour: land cover, sand, paddocks, roads |
| `town.json` | Streets, mapped buildings, generated houses, trees, cars |
| `moorooka/moorooka-model.js` | The Moorooka model as one script (`window.MoorookaModel`), with its own copy of three.js |
| `moorooka/height.png` | Terrain heights, from the river flats up to Toohey Forest |
| `moorooka/ground.webp` | Ground colour: lawns, tree cover, sealed ground, streets, rail beds |
| `moorooka/town.json` | Streets, railway, every surveyed building with its roof height and colour, trees, cars |

Nothing here is downloaded until someone opens a model. `build.py` copies this folder into the site.

## How the app uses them

`app.html` (search for `townModelOpen`; the two models are listed in `TOWNS`) opens the weather's 3D view on the
place, goes into Explore, and lays the model's canvas (`#bsTown`) over the weather's. If the model cannot load,
Virtually explore carries on in the weather's own town.

Every frame the app passes the camera Explore is moving to `model.setCamera(...)`, and the time slider to
`model.setMinutes(...)`. The app owns the camera in both modes:

- **Walk** (how it opens: Inverloch at the clock, Moorooka at the shops on Beaudesert Road): Explore's sticks and
  keys, with your eyes 3 m above the ground, following it up hill and down.
- **Fly**: rises above where you were standing. The sticks fly, Up and Down sit between them, and the view itself
  can be dragged (pinch or scroll to zoom, two fingers or right-drag to turn). Inverloch's tide slider shows here;
  Moorooka has no tide, so it has none. Going back to Walk puts you down on the ground you were looking at.
- **Jump to…** lists the model's own places (and, in Inverloch, the clock and Norman Rd). Walking, it stands you
  there; flying, it shows the place from above. Moorooka's model gives each place a spot on the kerb of the nearest
  street to stand on; Inverloch's stands you a few steps back from the place.
- **The Rotary clock and number 11 Norman Road** are copied out of the weather's Inverloch when that model opens
  (`townModelGuests`) and stood in the model where they really are. The weather's scenes are not changed. The clock's
  hands and lit faces, the koala, the wombats and the windows' glow keep following the originals. Moorooka has no
  guests of this kind.

## Where they come from

These files are built, not written by hand. The source is the `ai-forge` repository:

| | Inverloch | Moorooka |
| --- | --- | --- |
| model code | `src/features/inverloch3d/` (entry point `embed.ts`) | `src/features/moorooka3d/` (entry point `embed.ts`) |
| shared viewer | `src/features/town3d/` | `src/features/town3d/` |
| data pipeline | `scripts/inverloch/` | `scripts/moorooka/` |
| build | `npm run build:inverloch-embed` | `npm run build:moorooka-embed` |
| output | `dist-embed/` | `dist-embed/moorooka/` |

To update one, run its build there and copy its four files into its folder here. If the script changes, bump the
`?v=` on it in `TOWNS` in `app.html` so phones fetch the new one.

## Credits

Inverloch: map data © OpenStreetMap contributors (ODbL). Elevation © Commonwealth of Australia (Geoscience
Australia) 2025, CC BY 4.0.

Moorooka: buildings, streets, railway, terrain and imagery © State of Queensland, CC BY 4.0. Parks © Brisbane City
Council, CC BY 4.0.

Each model shows its credit on screen.
