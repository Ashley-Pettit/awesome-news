# Moorooka flood simulation

Our own flood model for Explore Moorooka. No council flood maps, studies or levels go in. Council's mapping is only
used afterwards, to check the results (`publish.py --compare`).

## Run it

```
pip install --break-system-packages numba scipy pillow
python3 tools/flood/prep.py  /tmp/fl/prep.npz          # terrain, buildings, hard surfaces from town3d/moorooka
python3 -c "import sys; sys.path.insert(0,'tools/flood'); import numpy as np; from flowacc import flow; \
  p=np.load('/tmp/fl/prep.npz'); f,t,a=flow(p['z'],5.0); np.savez_compressed('/tmp/fl/flow.npz',fill=f,to=t,acc=a)"
python3 tools/flood/run.py /tmp/fl/prep.npz /tmp/fl/flow.npz /tmp/fl/out          # all seven floods, ~5 min each
python3 tools/flood/publish.py /tmp/fl/prep.npz /tmp/fl/out town3d/moorooka          # flood-*.png and floods.json
python3 tools/flood/publish.py --compare /tmp/fl/prep.npz /tmp/fl/out <old flood pngs>
```

Then bump `moorooka-model.js?v=` in `app.html` so phones fetch the new files.

## What goes in

| | Source |
| --- | --- |
| Ground heights | The 3D model's 5 m terrain (`height.png`), State of Queensland survey |
| Buildings, roads | The 3D model's `town.json` (State of Queensland) |
| Rain | Bureau of Meteorology 2016 design rainfall (IFD) for -27.535, 153.026, including the rare-rainfall table |
| River level | Bureau's recorded Brisbane City gauge peaks: 1974 5.45 m, 2011 4.46 m, 2022 3.85 m |

## How it works

1. `prep.py`: ground heights, building footprints and roads on the 5 m grid; how much of each cell is hard surface.
2. `flowacc.py`: which way water drains, and how much ground drains through each cell (finds the creeks).
3. `run.py`:
   - Creek beds are graded through road and rail embankments (the survey sees the embankment, not the culvert).
   - A 3 hour "nested" design storm (every duration from 5 minutes to 3 hours reaches its design depth).
   - Losses: gardens and parks 15 mm then 1 mm an hour; roofs, roads and paving 1 mm. Soaked ground for 1974 and 2022.
   - Stormwater pipes take up to 30 mm an hour from the built-up streets to the nearest creek.
   - `sim.py` moves the water: a 2D local inertial shallow-water model (Bates et al. 2010) on the 5 m grid, with
     buildings 2 m proud, Manning's n from 0.02 (roads) to 0.08 (bush), and free outflow at the edges.
   - River floods: everything below the river level that joins the western edge fills to that level.
   - Each design flood is the higher of its storm and its river flood; flooded means 10 cm deep or more.
4. `publish.py`: writes the levels in the 3D model's format (16-bit level in red and green, flooded in blue).

## Limits

- 5 m cells: narrow channels, kerbs and small walls are smoothed out. Floor levels aren't known.
- Culverts are opened up, not sized: a crossing that really chokes in a big storm will look better here than it is.
- Pipes are one figure for the whole suburb; real pipe sizes aren't known.
- Creeks starting outside the 3.3 km square only bring the rain that falls inside it.
- The Oxley Creek and river levels are estimates from the city gauge, about 22 km downstream.

## Checked against council's mapping

See the table in the pull request or commit that last changed these results.
