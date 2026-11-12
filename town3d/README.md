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
| `detail.json`, `detail-*.webp` | Sharp close-up ground for the town centre and Norman Road (`-lo` = half size, for older phones). Optional: without them the ground is the one picture |
| `town.json` | Streets, mapped buildings, generated houses, trees, cars |
| `moorooka/moorooka-model.js` | The Moorooka model as one script (`window.MoorookaModel`), with its own copy of three.js |
| `moorooka/height.png` | Terrain heights, from the river flats up to Toohey Forest |
| `moorooka/ground.webp` | Ground colour: lawns, tree cover, sealed ground, streets, rail beds |
| `moorooka/town.json` | Streets, railway, every surveyed building with its roof height and colour, trees, cars, back fences |
| `moorooka/detail/` | The ground at twice the sharpness, in 16 tiles. The model fetches the ones nearest the camera (not on the slowest devices) |
| `moorooka/surface/` | A pilot: what the ground is made of (lawn, asphalt, concrete) for about 825 m square around Moorooka Square and the Beaudesert Road shops, in 16 small blocks, with `index.json` listing them and holding the car parks' painted lines. Fetched only close to the ground, on devices that can draw it (see below) |
| `moorooka/floods.json`, `moorooka/flood-1974.png`, `flood-2011.png`, `flood-2022.png`, `flood-aep1.png`, `flood-aep2.png`, `flood-aep5.png`, `flood-aep02.png` | Moorooka's floods: what they were, and each one's water levels. Fetched only when Flood is used |

Nothing here is downloaded until someone opens a model. `build.py` copies this folder into the site.

The Logan map, a whole city with its floods, is in `logan/` with a README of its own. It is opened and flown by the
same code (the third entry in `TOWNS`).

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
- **Jump to…** lists the model's own places (and, in Inverloch, the clock, the bakery, the war memorial and
  Norman Rd). Walking, it stands you there; flying, it shows the place from above. Moorooka's model gives each place
  a spot on the kerb of the nearest street to stand on; Inverloch's stands you a few steps back from the place.
- **The town centre round the clock and number 11 Norman Road** are copied out of the weather's Inverloch when that
  model opens (`townModelGuests`) and stood in the model where they really are. The weather's scenes are not changed.
  The clock's hands and lit faces, the flags, the koala, the wombats and the windows' glow keep following the
  originals. Moorooka has no guests of this kind.

### Inverloch's town centre

The block round the clock comes across whole (`townModelBlock`): the Hub and library, the war memorial, the shops
along Reilly Street and on both sides of A'Beckett Street (the bakery among them), with their verandahs and signs,
the streets, footpaths, parked cars, lamps, banners and trees. Its outline is `TOWN_BLOCK` in `app.html`, in the
weather town's own metres. Inside it the model keeps only its ground, so nothing is shown twice.

The model adds a few things of its own there (`townModelExtras`). The corner of A'Beckett and Reilly Streets is
laid out as it really is, checked against Google Maps satellite imagery: one brick plaza with the war memorial at its
lawn end and the Rotary clock a few metres on, by the zebra crossing, the four mosaic blocks between them. (The
weather's town has the clock where the memorial belongs and the memorial up by Reilly Street; in the model both are
moved, see `TOWN_PLAZA`, `TOWN_MEMORIAL` and `TOWN_CLOCK` in `app.html`.) Also tables and chairs outside the bakery
and The Larder, a sandwich board for each named shop, and the signs at the zebra crossing. Round the clock and round
number 11 the model is asked for street-level detail (`detailLatLon`): cars with proper shapes, a letterbox and bins
out the front of the houses, and power lines along the streets.

The weather's town is flat and the model's ground slopes, so each shape is handed over with heights measured from
the ground and the model lays it down along the terrain. Anything added to the weather's town centre later shows up
in the model too, as long as it stands inside the block.

## Moorooka close up

So the suburb holds up from walking height (none of this is on the slowest devices' cut-down version except the
ground texture and the cars):

- **The ground:** within about 300 m of the camera the ground picture's pixel edges are roughened and texture is
  added: clumps, blades and dry patches on lawn, stains and grit on sealed ground and on the streets. Generated in
  the model's shader, not surveyed, and no extra download.
- **Kerbs and footpaths:** a kerb on every street; a concrete footpath beyond a grass strip on both sides of the
  bigger streets and one side of local streets. Generated: which streets really have a footpath is not surveyed.
- **Cars:** sedans with a sloping bonnet and boot, a glazed cabin, round wheels, bumpers, plates, door seams and
  lights, in place of the earlier blocks. Generated.

- **Ground tiles load a strip at a time:** the sharper ground tiles near the camera used to arrive whole, which
  held up a frame each time (a tile is 16 MB once unpacked). Each tile is now fetched and unpacked on a worker and
  sent to the graphics card a few strips per frame, with a small "Loading sharper ground" note under the top
  buttons while tiles are on their way (it stands still for people who ask for reduced motion).

## Moorooka's ground drawn by kind (a pilot)

Around Moorooka Square and the Beaudesert Road shops (about 825 m square) the model knows what the ground is made
of: lawn, asphalt or concrete, sorted from the 10 cm Queensland aerial photograph. It does not show the
photograph. It draws each kind itself with a generated surface (blades and dry patches, aggregate and cracks,
weathered concrete), so the edge between a lawn and a path stays sharp however close you get, and nothing the
photograph caught on the day (parked cars, shadows) is painted on the ground. Car parks also get their painted
lines, found on the photograph.

- Each block stores, for each kind, how far every point is inside or outside it, at 0.4 m. Read back smoothly,
  the edge is good to about 20 cm. A block is about 120 KB to fetch and 1 MB on the graphics card (the reversed
  10 cm photo tiles were 16 MB each).
- What is none of the three (garden beds, bare earth) is drawn as soil and mulch. Close up, nothing in a block
  is the ground picture: Ash did not like pictures on the ground from near. Its broad colour still tints the
  lawn and soil (read very coarsely, so no pixels or blotches show), and from further off the picture takes over.
- Pools are not sorted yet, so a pool shows as soil.
- The edges are smooth curves, so square corners come out rounded, and a few patches are misread (worn asphalt
  as concrete, deep shade guessed from the ground beside it).
- Not every device gets it: never the slowest tier, a device reporting under 4 GB of memory, or one asking to
  save data; and only once the model has been seen to draw at 24 frames a second or better. If the rate falls
  away later, it is dropped and the model carries on as before. `?sharp=1` on the address forces it on,
  `?sharp=0` off.

## Moorooka's floods

**Flood** in Explore Moorooka works the way it does in the Logan model (see `logan/README.md`), through the same
code in `app.html`: a list of floods, the water rising to its peak, a **Water** slider that lowers it by up to 8 m,
and a card offering to fly to where it flooded if it did not flood where you are. The list has January 1974,
January 2011 and February 2022, and 1%, 2%, 5% and 0.2% AEP floods.

Two things are different, and Ash asked for both:

- The first press shows a notice that has to be accepted before the list opens: this is not official flood
  information, do not rely on this model, it is experimental, and it is not endorsed by Brisbane City Council.
- A banner says the same for as long as a flood is showing.

The floods are **our own simulation**, not council mapping (Ash, 12 November 2026: "make it as accurate as possible
using your own modelling. Don't just use the council's existing mapping"). The code is in `tools/flood/` in this
repository, which also builds `moorooka/floods.json` and the `flood-*.png` files:

- **The ground:** the model's own 5 m terrain (State of Queensland survey), with buildings standing 2 m proud so water
  goes round them. Creek beds are graded through road and rail embankments where the survey shows the embankment
  but not the culvert under it.
- **The rain:** the Bureau of Meteorology's 2016 design rainfall for Moorooka, as a 3 hour storm in which every
  duration from 5 minutes to 3 hours reaches its design depth. Gardens and parks soak up the first 15 mm and 1 mm an
  hour; roofs and roads 1 mm. Stormwater pipes in the streets take up to 30 mm an hour to the nearest creek.
- **The water:** a 2D shallow-water model ("local inertial", the method in LISFLOOD-FP and in rain-on-grid models)
  moves the water over the grid for five hours. Water 10 cm deep or more counts as flooded.
- **Oxley Creek and the Brisbane River:** in big river floods they back up into the western flats. That level is
  worked out from the Bureau's recorded Brisbane City gauge peaks (1974, 2011, 2022), raised for the distance up the
  river. It is the least certain input. Each design flood is the higher of its storm and a matching river flood.
- **Checked against council's mapping, not built from it:** see `tools/flood/README.md`.

Water from creeks that start outside the model's 3.3 km square is not included. If the 3D model is rebuilt from
`ai-forge`, keep these flood files: they come from `tools/flood/`, not from the model build.

## Where they come from

These files are built, not written by hand. The source is the `ai-forge` repository:

| | Inverloch | Moorooka |
| --- | --- | --- |
| model code | `src/features/inverloch3d/` (entry point `embed.ts`) | `src/features/moorooka3d/` (entry point `embed.ts`) |
| shared viewer | `src/features/town3d/` | `src/features/town3d/` |
| data pipeline | `scripts/inverloch/` | `scripts/moorooka/` |
| build | `npm run build:inverloch-embed` | `npm run build:moorooka-embed` |
| output | `dist-embed/` | `dist-embed/moorooka/` |

To update one, run its build there and copy its four files (and Moorooka's `detail/` folder) into its folder here. If the script changes, bump the
`?v=` on it in `TOWNS` in `app.html` so phones fetch the new one.

## Credits

Inverloch: map data © OpenStreetMap contributors (ODbL). Elevation © Commonwealth of Australia (Geoscience
Australia) 2025, CC BY 4.0.

Moorooka: buildings, streets, railway, terrain and imagery © State of Queensland, CC BY 4.0. Parks © Brisbane City
Council, CC BY 4.0.

Each model shows its credit on screen.
