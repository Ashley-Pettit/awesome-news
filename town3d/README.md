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
model's canvas (`#bsTown`) over the weather's. Both **Virtually explore Inverloch** and Admin's button open it. If the
model cannot load, Virtually explore Inverloch carries on in the weather's own town.

Every frame the app passes the camera Explore is moving to `model.setCamera(...)`, and the time slider to
`model.setMinutes(...)`. The app owns the camera in both modes:

- **Walk** (how it opens, at the clock): Explore's sticks and keys, with your eyes 3 m above the ground, following it
  up hill and down.
- **Fly**: rises above where you were standing. The sticks fly, Up and Down sit between them, and the view itself
  can be dragged (pinch or scroll to zoom, two fingers or right-drag to turn). The tide slider shows here.
  Going back to Walk puts you down on the ground you were looking at.
- **Jump to…** lists the clock, Norman Rd and the model's own places. Walking, it stands you there; flying, it shows
  the place from above.
- **The Rotary clock and number 11 Norman Road** are copied out of the weather's Inverloch when the model opens
  (`townModelGuests`) and stood in the model where they really are. The weather's scenes are not changed. The clock's
  hands and lit faces, the koala, the wombats and the windows' glow keep following the originals.

## Where it comes from

These files are built, not written by hand. The source is the `ai-forge` repository:

- model code: `src/features/inverloch3d/` (entry point `embed.ts`)
- data pipeline: `scripts/inverloch/`

To update, run `npm run build:inverloch-embed` there and copy the four files from `dist-embed/` into this folder.
If the script changes, bump the `?v=` on `inverloch-model.js` in `app.html` so phones fetch the new one.

## Credits

Map data © OpenStreetMap contributors (ODbL). Elevation © Commonwealth of Australia (Geoscience Australia) 2025,
CC BY 4.0. The model shows this credit on screen.
