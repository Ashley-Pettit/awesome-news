# Tidying a town's ground plan by inference

No imagery: only the street lines (`town.json`), property boundaries (the Queensland cadastre, `parcels.geojson`),
building outlines and the ground plan itself (`surface/*.webp`).

1. Decode the surface blocks into one map of kinds (lawn, asphalt, concrete) and rasterise the buildings and the
   property boundaries on the same 0.4 m grid (`kind.npy`, `roof.npy`, `lots.npy`, `cw.npy`, `geo.json` beside
   these scripts; see `base.py`).
2. `python3 clean.py`: verges, car parks and scraps (rules at the top of the file) into `kind_new.npy`.
3. Re-encode only within 6 cells of a change: 128 + 80 x signed distance (m) per kind, lossless WebP.
4. `python3 paths_fix.py town.json town_new.json <dir>`: footpaths joined up along each street.

## Moorooka beyond the designed square (the whole suburb)

Inference only, from the street lines, the cadastre (`parcels.geojson`), buildings, trees and sports fields. Pools
are the one thing read off the aerial photograph (`scripts/moorooka/find_pools.py` in ai-forge writes `pools.json`).

1. `python3 suburb_streets.py town.json parcels.geojson`: carriageway widths from each street's road reserve, and
   which sides have a footpath (written to `town.json`).
2. `python3 suburb_ground.py town.json parcels.geojson surface/ <work> --pools pools.json --write`: designs the 15
   squares of 4 x 4 blocks round the designed square (about 2.5 minutes each; `--only R,C` for some) and writes the
   blocks and `surface/index.json`. Also leaves each property's frame in `<work>` for the next two steps. Run it for
   square 1,1 too (the designed square: frames only, its blocks are not touched).
3. `python3 suburb_cars.py <town.json from before step 1> town.json <work>`: parked cars to suit.
4. `python3 suburb_yards.py town.json <work> surface/ pools.json yards.bin`: what stands in the backyards.
