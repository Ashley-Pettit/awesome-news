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

- **The switch:** a signpost button beside Share in Explore, or **N** on a keyboard. Off to start with (Ash, 14
  November 2026: "Names start off"), and the choice is remembered on this device for every model (`localStorage` key `an3d-streets`). Logan's own chips for some of its
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

## Explore's top buttons

Ash, 14 November 2026: "Optimise top btn layout". The tools (Share, Street names, Tide, Time, Flood) sit in one pill,
built like Walk and Fly, so the top reads as a few groups: Exit explore, Walk or Fly, Jump to, then the height and the
tools. On a phone or tablet that is two rows. From 1000 px wide it is one row: Exit explore and the height on the left,
Walk or Fly in the middle, the tools and Jump to on the right (the CSS after `.bs-town-flood` in `app.html`).

## Moorooka: shops and places, straight footpaths, no stray lanes (14 November 2026)

Ash: "Add known businesses to moorooka. Do a google search for businesses and add the popular ones. For example make
the post office look like a post office. Fix up footpaths so that they don't end randomly. Make sure the footpaths use
straight lines not wavey", with no satellite images and minimal changes.

- **Shops and places** (`MOO_SHOPS` and `townShops` in `app.html`, placed by `tools/ground/shops.py`): eleven popular
  places from a web search, each on its own building's street wall (address point and lot from the Queensland address
  register). A sign on the wall (above the awning line on the Beaudesert Road strip, so it reads from across the street),
  and a "Shops and places" group in Jump to that stands you across the street looking at it. The post office has a red
  band and a red "POST OFFICE" sign with an envelope, and a red and a yellow post box at the kerb. Names only, no logos.
  The post office and the community centre were already in Jump to (the model's own places), so they only get the sign.
- **No stray lanes over the ground** (`moorooka-model.js`, `?v=17`): the model no longer lays its flat ribbons for
  lanes, tracks, footways and cycleways (classes 4 to 7) or their round end caps. The ground plan already draws them, and
  the ribbons sat on the terrain only at points a few metres apart, so they came and went through it as ragged pale and
  dark patches in car parks and on verges. Streets (classes 0 to 3), bridges, kerbs and line markings are as before. The
  matching source change in ai-forge is in `c_` (the streets builder in `scene`/`roads`): draw a ribbon only for a
  bridge or class 3 and under, and end caps only for class 3 and under.
- **The ground plan** (`surface/*.webp`): tidied by `tools/ground/tidy.py` (see its README).

## Moorooka: drawn by distance (the lag fix)

Ash, 14 November 2026: "Optimise around lag". Measured first: at the start point the model drew about 670,000
triangles a frame on the app's light setting and 3.4 million on a phone's sharp one, most of it spread over the whole
suburb whatever the camera could see. Every parked car was drawn in full (round wheels, mirrors, door handles:
984,000 triangles), every tree, every kerb (one piece, so never skipped), every fence, and on the sharp setting all
of it again for shadows. The model (script `?v=18`) now draws by distance:

| What | Near the view | Further off |
| --- | --- | --- |
| Parked and moving cars | in full, within 90 to 220 m | a 26 triangle body out to 800 to 1,600 m, then nothing |
| Trees | in full, within 200 to 480 m | a plain 8 triangle crown |
| Buildings | with windows and solar panels, within 260 to 700 m | walls and roofs only |
| Kerbs, fences (sharp settings) | within about 400 m | not drawn |
| Shadows | cast by what is near | none from the far versions |

(The smaller distance is the light setting, the larger the sharpest.) Nothing about the layout, the ground or the
data changes. Triangles a frame, same three views, before and after:

| Setting | Before | After |
| --- | --- | --- |
| Light, in the app (start point, a street on foot, from 420 m up) | 669,000 / 650,000 / 785,000 | 241,000 / 240,000 / 276,000 |
| Sharp on a phone, in the model's own viewer (start point) | 3,376,000 | 818,000 |

The work the page's own script does each frame for this is about 0.3 thousandths of a second.

## Moorooka: shop rows from photos, one road surface, footpaths to the corner (14 November 2026)

Ash: "Improve, fix roads, footpaths, add more businesses. No satitile photos for roads or footpaths. You can use real
photos to model businesses if you can".

- **Shop rows** (`MOO_FRONTS` and `townShops` in `app.html`, replacing `MOO_SHOPS`): each building's front is modelled as
  a row, from street-level photos (Google Street View, looked at for each row: who is there, in what order, what the
  front is like). Names are plain lettering in each business's colours, no logos. Kinds of front:
  - `strip`: glass shopfronts with a door each under an awning, the name on the awning's edge. Each shop steps down
    with the footpath (Beaudesert Road falls 0.8 m along 145-147), with a plinth so nothing shows under it.
  - `verandah`: the post office row at 131 (Butcher, Post Office, Domino's): a corrugated verandah on posts, a gable
    over the post office door with the red sign across it, and the red and yellow post boxes by the door.
  - `centre`: Moorooka Central (Commonwealth Bank, H&R Block, Aussie, Jao Jorm Thai): glass fronts, a canopy and one
    dark sign band.
  - `pub`: the Red Lion: name and TAB sign on the wall, and the low white wall of banners by the footpath.
  - `sign`: one sign on the wall (Rising Sun International Church, Starbucks, Vizzeto Woodfire, the community centre).
  New names this round: Butcher, H&R Block, Aussie, Jao Jorm Thai, a barber (two), Moorooka Mall (Ethiopian Village),
  A La Mode Hair & Beauty, Afro Restaurant, Rannchhod Arcade (Arhibu), an optometrist, Baba Burger, Zeitoon, the TAB.
  143 Beaudesert Road is an RSPCA op shop in the photos (it was listed as Salvos). Shopfronts whose name could not be
  read are left plain. Tenants change: check a row against a current photo before adding to it.
  The model's heights are metres AHD (checked: ground 41 to 47 m along the strip), which is how `eave` sets a wall's
  height.
- **One road surface** (`moorooka-model.js`, `?v=19`): the model no longer lays flat ribbons for any street, only for
  bridges. The ground plan already draws every road, and a ribbon over it showed as a second, darker road with a ragged
  edge, worst where streets meet. Line markings and kerbs used to sit 0.11 to 0.34 m up to clear the ribbons; they
  now sit on the ground (0.02 to 0.1 m). In ai-forge the matching change is in `c_` (the streets builder): draw a
  ribbon only for a bridge, no end caps, and the two lift tables (the road's, all 0.05, and the kerbs', all 0.02;
  `Vh` and `rv` in the `?v=19` bundle). It was patched onto the bundle built for the drawn-by-distance change above.
- **Footpaths to the corner** (`surface/*.webp`, by `tools/ground/tidy.py`): see its README.

## Admin mode: paint the ground and take things out (14 November 2026)

Ash: "can you an an admin mode here i can self add path, grass or road? if user is ash or ashley. Also delete cars or
people etc...". Moorooka only for now (it is the model whose ground is drawn by kind).

- **Who sees it:** the pencil in the tools shows when the name in Settings is Ash or Ashley (`isAsh()`), and the model
  has `setGroundEdits`. Everyone else sees no button. This is a convenience, not security: nothing a visitor does in
  their own browser reaches anyone else, because edits are only published by a pull request (below).
- **Tools** (`townAdmin` in `app.html`): Path (concrete, 1.3 m), Grass (2.5 m) and Road (asphalt, 6 m) paint by dragging
  on the ground: a straight line from where the finger goes down to where it lifts, or freehand (the toggle; freehand
  lines have their wobble taken out). Width with the minus and plus. Delete takes out the parked car or tree tapped, or
  one of Ash's own strokes; tapping a person keeps everyone from being drawn within 12 m of that spot (walkers are made
  up as you go, so there is no one person to remove). Undo, and the bin (asks once) to clear everything on the device.
- **Moving about with a tool on:** two fingers drag, turn and zoom the map when flying (the sticks hide to make room);
  when walking, the sticks stay and a finger on the view above them draws.
- **Where edits live:** on the device (`localStorage["an3d-edits-moo"]`), drawn straight away. Copy puts them on the
  clipboard with a line saying what they are. Ash pastes that to Claude; `python3 tools/town/add_edits.py <file>` adds
  them to `town3d/moorooka/edits.json`, which every copy of the app fetches and lays over the model. One edit to a line:
  to take a published edit back out, delete its line. Once an edit is published it drops off the device's own list.
- **In the model** (`moorooka-model.js`, `?v=20`; ai-forge `claude/moorooka-admin-mode`): `setGroundEdits(strokes)` lays
  strokes into the blocks of ground by kind as they come in (the same distance fields the plan uses, so edges are as
  sharp as the plan's; a block in view is fetched again when a stroke over it changes), `groundUnder(x, y)` and
  `pickThing(x, y)` say what a point on the screen is on, `setRemoved({cars, trees, people})` hides things by where
  they stand, and `frameCost()` gives the last frame's triangles and draw calls.
- **Limits:** painted ground shows where the ground is drawn by kind (within a few hundred metres of the view, on
  devices that draw it), not on the far ground picture. People only exist on the medium and sharp settings. Moving
  traffic, buildings, fences and what stands in backyards cannot be taken out yet. The road change of the round before
  (no ribbons) is now in the source too (`groundDrawsRoads`), and a car parked at the kerb sits on the ground.

## Pilot: number 6's neighbours in number 6's detail (14 November 2026)

Ash asked how long all of Moorooka would take in the detail of 6 Beaudesert Road and whether it could stay lag free,
then: do it within 40 m of number 6.

- **What is in it:** the five houses within 40 m of number 6's lot (1RP130916, 1RP65197, 2RP130916, 2RP65197,
  1RP57597), built by the same detailed builder as number 6: stumps and battens under a high-set house, weatherboards,
  windows with hoods, doors, front and back steps, a picket fence with a gate and letterbox where the lot fronts a
  street, paling fences down the sides and across the rear, a path to the front steps, a clothes hoist, shrubs.
- **How they were made:** by rule, with no imagery (ai-forge `scripts/moorooka/neighbours.py`, branch
  `claude/moorooka-neighbours-pilot` at `1db0312`): the lot from the cadastre, the house's outline, heights and roof
  colour from the survey. Wall and trim colours come by turn from a short list, and every house gets number 6's roof
  form: both are guesses. Their ground stays as the plan draws it. A 42 m by 6 m building on a sixth lot (3RP59613) and
  a 456 m2 one on a seventh are not houses and are left as the general model draws them.
- **Drawn by distance** (`?v=21`): each property is in full within 110 m (light), 160 m (phone sharp) or 260 m
  (sharpest) and a plain house of 21 to 29 triangles beyond.
- **What it costs** (`frameCost()` in the app, software renderer, so triangles not frame rates): the five cost 15,233
  triangles in full, 3,047 each on average (number 6 itself is 4,969). A frame near them:

  | Setting and view | Before | After |
  | --- | --- | --- |
  | Light, phone, on foot | 477,162 | 483,696 (+1.4%) |
  | Light, phone, 7 m up | 521,705 | 535,005 (+2.5%) |
  | Phone sharp, phone, on foot | 782,690 | 800,044 (+2.2%) |
  | Phone sharp, 1100 px wide, 75 m up | 453,317 | 475,690 (+4.9%) |

  (The sharp settings draw near things twice, once for shadows. The last three rows were measured with six
  properties, before the long building was dropped.) Scaled up: about 100 houses stand within 160 m of a point in the
  residential streets, which would be about 300,000 triangles, so the whole suburb would need full detail kept to
  about 60 m and a middle level where pickets and battens are a picture on a flat panel.

## Driving: Enter gets you into the nearest parked car (14 November 2026)

Ash: "Add a feature where if i press enter when walking i get into the car." Moorooka only for now (its model hands
over its parked cars).

- **Getting in and out** (`townCar` in `app.html`): walking within 8 m of a parked car shows a Get in the car button
  above Up and Down. Enter, or the button, puts you in the nearest one; with none in reach a message says how far the
  nearest is. Enter or Get out again and you step out of the driver's door, on the right. Flying, jumping to a place or
  starting again gets you out too. Enter is left to a focused button (Exit, Jump to, the tools), so those still work
  from the keyboard.
- **Driving:** W or the up arrow (or the left stick forward) goes, S or down brakes and then reverses, A and D or left
  and right steer (less lock the faster you go), Space is the handbrake. About 0 to 60 km/h in 8 seconds, 70 km/h flat
  out, 20 km/h in reverse. The height chip shows the speed.
- **The view** follows from behind and above, swinging round after the car. The right stick or a drag looks round it,
  and the view settles back once you drive on. It moves in closer where a building is behind the car.
- **What the car does:** follows the ground and tips with the slope; stops with a bump at buildings (their surveyed
  outlines), deep water and the edge of the model; stays where you leave it until the page is reloaded. It goes
  straight through fences, trees, other cars and people, and has no sound.
- **In the model** (`moorooka-model.js`, `?v=22`; ai-forge `claude/moorooka-drive` at `78a2231`): `nearestCar(x, z, reach)`,
  `driveCar(x0, z0, x, y, z, heading, pitch, roll)` (the car is known by where it was first parked; up to twelve can be
  driven off in one visit) and `solidAt(x, z)`.
