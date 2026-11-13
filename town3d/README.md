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
| `moorooka/surface/` | What the ground is made of (lawn, asphalt, concrete) across the whole model, in 256 blocks of about 206 m (0.2 m detail), with `index.json` listing them and holding the car parks' painted lines. Fetched only close to the ground, four at a time, on devices that can draw it (see below) |
| `moorooka/yards.bin` | What stands in the backyards: pools, clothes lines, sheds, trampolines, tanks, outdoor settings, bins, letterboxes, front fences, shrubs, the odd dog (about 25,000 things, 300 KB). Fetched once the model is up, not on the slowest devices; only the yards near the camera are built |
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
  sent to the graphics card a few strips per frame, and while tiles are on their way a tiny spinner turns in the
  bottom right corner of the model (Ash: "make it just a tiny spin in corner"). Screen readers are still told
  "Loading sharper ground", and it stands still for people who ask for reduced motion.

## Moorooka in close detail, the whole suburb

The detail of the Browns Plains block in Logan, done across all of Moorooka (Ash: "Do the same over all of moorooka",
"Consider lag", "There are mistakes in roads and paths to fix up"). The ground is inferred, not traced: no imagery
(Ash's rule for Moorooka's ground). The one exception Ash agreed to is pools, read off the aerial photograph.

- **The ground everywhere** (beyond the designed square, which stays as `design.py` drew it): every street at its
  width with rounded corners, lawn verges, footpaths on the sides that have them carried round corners, crossovers,
  and on each property by what stands on it: a house gets a driveway (down the side with room for a car, else to a
  garage in the house), most a path to the front door, a garden bed along the front and a patio out the back; units
  share a driveway; shops, works and schools get asphalt round the buildings with lawn beyond; parks are lawn, bush
  floor under thick trees; the railway sits on ballast. `tools/ground/suburb_ground.py`.
- **Streets fixed:** outside the designed square every local street was drawn at a 7.2 m default and every
  connector at 6 m, so verges were far too wide. Each now gets 52% of its own road reserve (property line to property
  line), between 7.2 and 10.6 m, which is what the designed square's measured streets come to. Footpaths no longer
  run down the median of a divided road (Beaudesert Road), local streets have one on the side with the wider verge,
  and the raised footpath strips are hidden wherever the ground draws its own (they used to double up).
  `tools/ground/suburb_streets.py`.
- **Cars:** those at the kerb moved out with the wider streets, those left on lawn by the new ground gone, and a car
  on about half the side driveways and a third of the garage ones. `tools/ground/suburb_cars.py`.
- **Backyards** (`yards.bin`, `tools/ground/suburb_yards.py`): 336 pools from the photograph, each with a concrete
  surround and a black pool fence; the rest placed by rule on the ground plan, never on a building, a driveway, a
  pool or a tree, the same every time.
- **People walking** the footpaths near the camera, about a third with a dog on a lead. Generated as you go.
- **Lag:** the yards are built only within about 220 m of the view (140 m on phones), a 90 m cell a frame, and let go
  behind it; none above about 330 m. Walkers are a handful of draw calls in all and only show below 240 m. Nothing new
  on the slowest tier. The ground blocks are fetched four at a time as before (about 75 KB each).

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
- **Cars park properly** (in the pilot area): they stand in the painted bays found in each car park, square to
  the row, and along the street a little in from the measured kerb, facing the way the traffic goes. Cars that
  stood in a traffic lane, or loose in a car park whose bays were found, are gone. These are in `town.json`, so
  every device gets them.
- **Beaudesert Road is two lanes each way:** traffic on a one-way carriageway keeps to two lanes counted out
  from the median, and the kerb lane is left for parked cars. It used to spread over three.
- **Shop signs are twice as sharp**, and the cafe at Moorooka Square has its name. Only businesses seen in Ash's
  street photographs are named (the supermarket, the dental and medical practices, the cafe).
- **Streets and car parks are worked out, not copied patch by patch** (Ash: "do some inference to fix car parks,
  roads, footpaths"):
  - each street's carriageway is as wide as its asphalt really reaches either side of the surveyed centre line
    (1.5 m wider than the street data on average), so the kerbs stand on the real edge;
  - the verge, from the kerb to the property boundary, is lawn; a driveway is drawn where sealed ground crosses
    the whole verge; outside shops (a building on the boundary) the footpath is paved to the wall;
  - a footpath is drawn on the sides where the photograph shows one along at least a third of the street, at
    its usual distance from the kerb, and not on the sides where it shows none;
  - a car park is one surface (worn and patched asphalt is not concrete), and its bay lines are redrawn at a
    steady pitch with the gaps filled in; lines that fit no row are dropped.
  The street widths and footpath sides are in `town.json` (`footpaths`), so every device gets them.
- The edges are smooth curves, so square corners come out rounded, and a few patches are misread (worn asphalt
  as concrete, deep shade guessed from the ground beside it).
- Not every device gets it: never the slowest tier, a device reporting under 4 GB of memory, or one asking to
  save data; and only once the model has been seen to draw at 24 frames a second or better. If the rate falls
  away later, it is dropped and the model carries on as before. `?sharp=1` on the address forces it on,
  `?sharp=0` off.

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
- **Cars park properly** (in the pilot area): they stand in the painted bays found in each car park, square to
  the row, and along the street a little in from the measured kerb, facing the way the traffic goes. Cars that
  stood in a traffic lane, or loose in a car park whose bays were found, are gone. These are in `town.json`, so
  every device gets them.
- **Beaudesert Road is two lanes each way:** traffic on a one-way carriageway keeps to two lanes counted out
  from the median, and the kerb lane is left for parked cars. It used to spread over three.
- **Shop signs are twice as sharp**, and the cafe at Moorooka Square has its name. Only businesses seen in Ash's
  street photographs are named (the supermarket, the dental and medical practices, the cafe).
- **Streets and car parks are worked out, not copied patch by patch** (Ash: "do some inference to fix car parks,
  roads, footpaths"):
  - each street's carriageway is as wide as its asphalt really reaches either side of the surveyed centre line
    (1.9 m wider than the street data on average), so the kerbs stand on the real edge;
  - the verge, from the kerb to the property boundary, is lawn; a driveway is drawn where sealed ground crosses
    the whole verge; outside shops (a building on the boundary) the footpath is paved to the wall;
  - a footpath is drawn on the sides where the photograph shows one along at least a third of the street, at
    its usual distance from the kerb, and not on the sides where it shows none;
  - a car park is one surface (worn and patched asphalt is not concrete), and its bay lines are redrawn at a
    steady pitch with the gaps filled in; lines that fit no row are dropped.
  The street widths and footpath sides are in `town.json` (`footpaths`), so every device gets them.
- **Every property is drawn as a plan, not as a picture** (Ash, after the last round: "Paths and roads grass
  still don't make sense. Use inference"). The wavy blobs of lawn, concrete and soil were mostly tree canopy read
  as lawn, and each property copied patch by patch. Now:
  - a tree's canopy (darker and rougher than mown grass) is not lawn. Like deep shade it hides the ground, which
    is filled in from beside it and is not counted as evidence of anything;
  - a property has one main surface: lawn for a house and its yard, asphalt for a car park, concrete for a paved
    yard, whichever covers most of the open ground that shows;
  - whatever else is there (a drive, a patio, a lawn beside a car park) is drawn as rectangles, square to the
    property or along the piece's own length. Garden beds, bare earth and pieces that fit no rectangle take the
    main surface;
  - the street land left over between the streets, verges and properties (corners, parking lanes, traffic
    islands) is done the same way, square to the street beside it.
  So a curved drive or a round garden bed comes out squared off, and a small path or bed (under 6 to 10 square
  metres) is not drawn at all.
- The edges are smooth curves, so square corners come out rounded, and a few patches are misread (worn asphalt
  as concrete, deep shade guessed from the ground beside it).
- Not every device gets it: never the slowest tier, a device reporting under 4 GB of memory, or one asking to
  save data; and only once the model has been seen to draw at 24 frames a second or better. If the rate falls
  away later, it is dropped and the model carries on as before. `?sharp=1` on the address forces it on,
  `?sharp=0` off.

- **Reviewed: designed, not traced** (Ash, 13 November 2026: "infer correct design of car parks, driveways, roads,
  footpaths ... removing the literalness in the place of inferring something that makes sense"). After the plan
  above, `scripts/moorooka/design_lots.py` in `ai-forge` draws each block as it would have been built:
  - a house block is a lawn with one driveway, 3 m of concrete square to the street, with its crossover across the
    verge. It goes where the photograph shows the most sealed ground along the frontage, or else down the wider
    side of the house if a car fits, and runs into the garage or 6 m past the front of the house. Concrete right
    against the house (8 m2 or more) stays as a patio; everything else on the block is lawn;
  - units and townhouses share one 3.5 m driveway down a side of the block to the last of them;
  - any sealed ground off the street of 500 m2 or more is an asphalt car park (pale asphalt was read as concrete);
  - blocks it can't read (shops, yards, blocks behind others) keep the plan above.
- **Tidied by inference only** (Ash, 13 November 2026: "Dont use images, dont use a satellite, infer only. Make the
  smallest change you can to make things sensible like connected roads, paths, no random grass patches").
  `tools/ground/` works only from the street lines, property boundaries, buildings and the plan itself:
  - verges are read a metre at a time along each side of each street: asphalt to the kerb for 4 m or more is an
    entry, anything shorter is lawn, and lawn gaps under 3 m inside an entry are asphalt. Concrete is left alone;
  - on a property that is mostly sealed (a car park), lawn scraps under 150 m2 and loose concrete under 20 m2 are
    asphalt; so are lawn scraps under 60 m2 ringed by asphalt on street land;
  - footpaths are joined up along each street: main roads have one both sides the whole way, gaps under 60 m are
    filled, a side with a path on 60% of it gets one the whole way, and a lone path under 30 m goes. A new path
    sits 2.3 m from the kerb, or in the middle of a narrower verge;
  - roads were already joined up and are unchanged.

- **Designed at 0.2 m** (Ash, 13 November 2026: "Still tonnes of mistakes. Fix em up! Infer. Draw road lines. Fix
  paths. Fix roads, fix grass fix car placement, fix concrete, fix barriers, improve res"). `tools/ground/design.py`
  redraws the square's ground at twice the sharpness (blocks of 1024 px), from the street lines, property boundaries,
  buildings and the plan itself:
  - corners where streets meet are rounded (5 m), on street land only;
  - verges are read a metre at a time: paved to the property line (6 m or more of concrete), driveway crossovers (at
    least 3 m wide, kerb to property line), car park entries (4 m or more of asphalt), lawn everywhere else;
  - footpaths are drawn in the ground, 1.3 m wide at the street's own distance from the kerb, across crossovers and
    entries and round the corners to meet the cross street's. Inside the square the model's raised footpath strips
    are no longer drawn (they stopped short at every corner); outside it they are as before;
  - bare earth patches under 150 m2 take the ground around them, and loose concrete and asphalt on house blocks is
    drawn as the rectangle it fills, square to the property.
- **Cars and fences** (`tools/ground/cars_fences.py`, the whole suburb): cars at the kerb are set square to the street,
  1.1 m in from the kerb and following its curve; none over the kerb, in a junction, across a driveway or car park
  entry, or on a verge. Fences across streets, through buildings or through car parks are gone.
- **The model's own code** (`moorooka-model.js`, patched): a dashed centre line on every street 6.5 m wide or more,
  broken give way lines where a street meets a bigger or equal one, and kerbs kept clear of every street's carriageway
  (they used to poke into junctions).

## Inverloch tidied by inference

Ash, 13 November 2026: "Do the same for Inverloch, find things that look out of place and infer correctness". With
no imagery, only the street data, buildings and houses in `town.json` (`tools/ground/inverloch/fix_inv.py`):

- 57 street and path ends that stopped 0.3 to 6 m short of another street or path now meet it (a path runs to the
  kerb, a street to the other street's centre line). Roundabouts and closed loops are left alone;
- 46 trees whose trunks stood inside a house or on a path, lane or driveway are gone;
- 2 caravan-park cabins standing on a road are gone;
- checked and fine as they were: no grass islands inside car parks or paving in the close-up ground, every painted
  road matches a street, no houses on streets or overlapping, no parked cars off sealed ground.

## Inverloch's power poles cast no shadows

Ash, 13 November 2026: "remove power pole shadows from Inverloch". The timber power poles and their wires along the
streets (street-level detail round the clock and number 11) are now their own mesh, `power-poles`, a child of
`street-detail`, that does not cast shadows. Letterboxes and bins still do. The change is in the built
`inverloch-model.js` (`?v=14`); the matching source change, if the model is rebuilt from ai-forge, is in
`buildStreetDetail` in `src/features/inverloch3d/landmarks.ts`: draw the poles and wires with a second builder and
give that mesh `castShadow = false`.

## Moorooka's floods

**Flood** in Explore Moorooka works the way it does in the Logan model (see `logan/README.md`), through the same
code in `app.html`: a list of floods, the water rising to its peak,
and a card offering to fly to where it flooded if it did not flood where you are. The list has January 1974,
January 2011 and February 2022, and 1%, 2%, 5% and 0.2% AEP floods.

Three things are different, and Ash asked for each:

- The first press shows a notice that has to be accepted before the list opens: this is not official flood
  information, do not rely on this model, it is experimental, and it is not endorsed by Brisbane City Council.
- A banner says the same for as long as a flood is showing.
- There is no **Water** slider (the one that reads "At the peak" and lowers the water): the flood rises to its
  peak and stays there. Logan keeps its slider. It is `noFloodSlider` in Moorooka's entry of `TOWNS`.

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

## Moorooka: the designed ground is what every device draws

Ash (13 November 2026): "its a bit laggy, quite a few roads and pathways are broken. lots of wavey paths rather
than straight", and "the aerial photos are not by themselves reliable enough. After using them you need to infer
correctness". Two things were still showing the old ground painted from the photograph:

- **The clean ground dropped out when the phone was slow.** The ground blocks came in only after the model was seen
  to draw at 24 frames a second, and went again when frames were slow, so lag and wavy paths arrived together. Now
  they come in straight away and stay (still not on the slowest tier, a device reporting under 4 GB, or one asking to
  save data). Their cost, four texture reads, is nothing beside the model's geometry: drawing work per frame was
  counted in the version Ash called fast and in this morning's, and it was the same (about 1.4 to 2 million
  triangles in 30 to 55 draw calls at the highest quality).
- **The ground under the blocks was still the old painting.** `detail/*.webp` (0.4 m) and `ground.webp` (0.8 m) show
  wherever the blocks are not drawn: while they load, on the slowest tier, and from further off. They are now painted
  from the blocks themselves: sealed ground (streets, drives, footpaths, car parks) from the plan; unsealed ground
  keeps the old painting where it is green or water (parks, playing fields, bushland, creeks) and becomes plain lawn
  where it was a blot of grey, brown or pale. Made by `scripts/moorooka/ground_base.py` in ai-forge.

The blocks, `town.json` and `yards.bin` are untouched: they are the other Moorooka chat's (#53). On the slowest tier
only `ground.webp` is drawn, at 0.8 m, so the gain there is small.

**The crisp ground is drawn on the light setting too.** Since 13 November the app opens every phone on its light
setting (the model's lowest quality) and only moves to the sharp one if the phone holds 60 frames a second. The
ground blocks were left out of the lowest quality, so on most phones none of the designed ground was ever drawn:
only `ground.webp` at 0.8 m, which is where "edges soft and wobbly" came from. The model (script `?v=16`) now draws
the blocks on every quality setting, except on a device reporting under 4 GB of memory or asking to save data.

**Street corridors drawn exactly** (Ash, asked what was wrong: "edges soft and wobbly"). In the 240 blocks outside
the square round the shops (that square is the Awesome News chat's, redrawn in `tools/ground/design2.py`) the
street land is redrawn from the street centre lines by geometry: kerb lines as offsets of the centre line, true 5 m
arcs where two streets meet, the footpath as one 1.3 m band carried round each corner, and crossovers, car park
entries and paved frontages as straight-sided pieces square to the street. Their places are read from #53's blocks,
so driveways, cars and backyards still line up. Before, those distances were measured on a picture of the plan,
good only to half a pixel, which made footpaths and kerb lines lumpy. Properties are untouched. Made by
`scripts/moorooka/street_corridor.py` in ai-forge.

An alternative set of blocks for the whole suburb, worked out from the photograph first and then designed (real
driveways, car parks and footpath sides rather than ones placed by rule), is in ai-forge at commit 828c929 on
`claude/eager-bohr-p8oslj`. It is not used here.

## Street names in every model

Ash, 13 November 2026: "On each of the models I want to be able to turn street names on or off. Follow best practices
for this". The app draws the names over the model (`townStreetNames` in `app.html`), so Inverloch, Moorooka and Logan
follow the same rules:

- **The switch:** a signpost button beside Share in Explore, or **N** on a keyboard. On to start with, and the choice is
  remembered on this device for every model (`localStorage` key `an3d-streets`). Logan's own chips for some of its
  main roads go off with the rest.
- **Where a name goes:** each street is joined up end to end and offered a name about every 120 m, on its straightest
  stretch. A name shows only where that stretch is long enough on screen to hold it. It runs along the street, never
  upside down and never steeper than 65 degrees.
- **How many:** main roads first, and readable from further off (motorways about 2.2 km, local streets about 500 m), so
  names thin out as you fly higher. At most 18 on a phone and 36 on a bigger screen. No overlaps with each other, the
  model's place names or the buttons and sticks. A street the model already names isn't named again. Names that are
  showing keep their place (no flicker) and fade in and out (not with reduced motion).
- **Walking:** only streets you could see, with no building in the way (from each model's building outlines), within
  400 m. Each nearby street is also named where it passes closest to a point 22 m ahead of you, so a cross street in
  front is named and the name slides along as you walk.
- **Data:** the same files the model loaded (`town.json`; Logan's `roads.bin`, `map.json` and, when you walk,
  `buildings.bin`), fetched from the same addresses so the browser has them cached. Paths, tracks and unnamed lanes get
  no name. Logan's setup runs in small pieces so the model keeps moving.
