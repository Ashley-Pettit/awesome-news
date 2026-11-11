# Inverloch 3D model

The whole-town model behind **Admin > 3D scenes > Inverloch 3D model**. It is separate from the weather's own
Inverloch scenes (the Rotary clock, A'Beckett Street, Norman Road, the surf beach), which are built inside `app.html`.

| File | What it is |
| --- | --- |
| `inverloch-model.js` | The model as one script (`window.InverlochModel`), with its own copy of three.js |
| `height.png` | Terrain heights, including the Anderson Inlet sandbars |
| `ground.webp` | Ground colour: land cover, sand, paddocks, roads |
| `town.json` | Streets, mapped buildings, generated houses, trees, cars |

Nothing here is downloaded until someone opens the model. `build.py` copies this folder into the site.

## How the app uses it

`app.html` (search for `townModelOpen`) opens the weather's 3D view on Inverloch, goes into Explore, and lays the
model's canvas (`#bsTown`) over the weather's. Explore's own controls fly it: each frame the app passes the camera it
is flying to `model.setCamera(...)`, and the time slider to `model.setMinutes(...)`. The Jump button steps through the
model's places.

## Where it comes from

These files are built, not written by hand. The source is the `ai-forge` repository:

- model code: `src/features/inverloch3d/` (entry point `embed.ts`)
- data pipeline: `scripts/inverloch/`

To update, run `npm run build:inverloch-embed` there and copy the four files from `dist-embed/` into this folder.
If the script changes, bump the `?v=` on `inverloch-model.js` in `app.html` so phones fetch the new one.

## Credits

Map data © OpenStreetMap contributors (ODbL). Elevation © Commonwealth of Australia (Geoscience Australia) 2025,
CC BY 4.0. The model shows this credit on screen.
