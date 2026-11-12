# Tidying a town's ground plan by inference

No imagery: only the street lines (`town.json`), property boundaries (the Queensland cadastre, `parcels.geojson`),
building outlines and the ground plan itself (`surface/*.webp`).

1. Decode the surface blocks into one map of kinds (lawn, asphalt, concrete) and rasterise the buildings and the
   property boundaries on the same 0.4 m grid (`kind.npy`, `roof.npy`, `lots.npy`, `cw.npy`, `geo.json` beside
   these scripts; see `base.py`).
2. `python3 clean.py`: verges, car parks and scraps (rules at the top of the file) into `kind_new.npy`.
3. Re-encode only within 6 cells of a change: 128 + 80 x signed distance (m) per kind, lossless WebP.
4. `python3 paths_fix.py town.json town_new.json <dir>`: footpaths joined up along each street.
