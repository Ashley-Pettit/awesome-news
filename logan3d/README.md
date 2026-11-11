# Logan 3D model

The whole-city map behind **Virtually explore Logan** (in The Logan Wire, for anyone whose news area is Logan, and from the link `…/logan/#explore`)
and **Admin > 3D scenes > Logan 3D model**. It is separate from the weather's own Logan scene (the river, the koala,
the motorway bridge), which is built inside `app.html`.

It covers the City of Logan and its surrounds, 53 km by 45: LiDAR terrain at true scale, every street, about
174,000 surveyed buildings, bushland, the railway, suburb boundaries, and the council's administration centre
precinct on Wembley Road in detail.

| File | What it is |
| --- | --- |
| `logan-model.js` | The map as one script (`window.LoganModel`), with its own copy of three.js |
| `height.png`, `relief.webp` | Terrain heights, and the terrain's shading and water |
| `ground.webp`, `lights.webp`, `cover.png` | Ground colour, the city's lights at night, and where the bushland is |
| `roads.bin`, `buildings.bin` | Streets and surveyed building outlines |
| `map.json` | Suburbs, council divisions, the railway, street names, the council precinct |
| `precinct.png` | Car parks, paths and lawns around the council's administration centre |
| `flood.json`, `flood-1974.png`, `flood-2017.png`, `flood-2022.png`, `flood-aep1.png` | The floods: what they were, and each one's water levels |

Nothing here is downloaded until someone opens the map (about 9 MB the first time). `build.py` copies this folder
into the site.

## Links that open it directly

- `https://ashley-pettit.github.io/awesome-news/logan/#explore`: The Logan Wire, straight into the map.
- `https://ashley-pettit.github.io/awesome-news/#explore-logan`: the same from Awesome News (or any of the local apps).

Either shows a "Loading Logan 3D model" screen at once, over the whole app, and lifts it only when the map is up, the
view has held still and the buildings and trees around the camera are all in (`model.settled()`), so nothing jumps or
pops in. `#explore` on its own opens the model of the app's own area; `#explore-inverloch` names Inverloch's.

## How the app uses it

The same way as the Inverloch model in `town3d/`, and through the same code: `app.html` (search for `townModelOpen`
and `TOWN_MODELS`) opens the weather's 3D view on Logan, goes into Explore, and lays the map's canvas (`#bsTown`)
over the weather's. If the map cannot load, Virtually explore Logan carries on in the weather's own Logan scene.

Every frame the app passes the camera Explore is moving to `model.setCamera(...)`, and the time slider to
`model.setMinutes(...)`.

- **Fly** (how it opens, over the council's administration centre, behind the loading screen): the sticks fly, and the view itself can be
  dragged (pinch or scroll to zoom, two fingers or right-drag to turn). You can pull back far enough to see the
  whole city.
- **Walk**: puts you down on the ground you were looking at, with your eyes 3 m up. The council precinct is the
  place to do it; elsewhere the buildings are plain blocks.
- **Jump to…** lists the whole city, the council's administration centre and the map's other places.
- **Flood** lists the January 1974, March 2017 and February 2022 floods and an estimated 1% AEP flood. Choosing one
  lays its water over the map (`model.setFlood(id)`), rising to its peak, and says what the flood was. If none of the water is in view, the
  camera glides to the lower Logan River, where the floods are widest. The **Water** slider then lowers the water
  from its peak by up to 8 m (`model.setFloodLevel(...)`). On foot, you stand on the water's surface.

## The floods

- 2017: the Queensland Government mapped this flood from the air. Where that outline meets the terrain gives the
  water level along the Logan and Albert rivers.
- 1974 and 2022: the 2017 water surface, raised or lowered by how much higher or lower each flood peaked at each
  river gauge (Bureau of Meteorology records).
- 1% AEP: an estimate. For nine floods since 1947, the rain that fell on each river's catchment is set against the
  peak recorded at its gauges; that relation is read at the Bureau's 1% AEP design rainfall.

They are a guide only, not Logan City Council's adopted flood mapping, and the app says so in the Flood list. The
method and its limits are written up in `scripts/logan/README.md` in the `ai-forge` repository.

## Where it comes from

These files are built, not written by hand. The source is the `ai-forge` repository:

- map code: `src/features/logan3d/` (entry point `embed.ts`)
- data pipeline: `scripts/logan/`

To update, run `npm run build:logan-embed` there and copy everything in `dist-embed-logan/` into this folder. If the
script changes, bump the `?v=` on `logan-model.js` in `app.html` (in `TOWN_MODELS`) so phones fetch the new one.

## Credits

Map and flood data © State of Queensland, CC BY 4.0.
Elevation © Commonwealth of Australia (Geoscience Australia), CC BY 4.0. Rainfall, design rainfall and river
heights © Commonwealth of Australia (Bureau of Meteorology), CC BY 4.0. The app shows these credits in Settings, under About (the map's own credit line is hidden,
as Inverloch's is).
