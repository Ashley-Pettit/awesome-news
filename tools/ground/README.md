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

## Moorooka tidied (14 November 2026)

Ash: "Fix up footpaths so that they don't end randomly. Make sure the footpaths use straight lines not wavey ... There
are random bits of footpath on concrete that don't make sense or where grass should be ... Where roads connect try to
connect them properly ... without using satellite images", and "check again for random patches of footpaths, concrete
or grass in spots that don't make sense ... making minimal changes".

- `python3 tidy.py surface/ town.json parcels.geojson <work> --write` (about 1.5 minutes a square; `--only R,C` for
  some): specks and slivers, stray patches by what surrounds them, footpath gaps under 30 m joined and lone stubs taken
  out, then every block stored again with each kind's distance smoothed over 0.28 m. The rules are at the top of the
  file. Across the suburb it changed about 16,000 m2 (0.15%) and joined about 2,000 footpath gaps.
- The wobble Ash saw close up was the plan's 0.2 m pixel steps along slanting edges (the model draws an edge where two
  kinds' stored distances meet). The stronger smoothing makes those edges straight.
- `python3 shops.py town.json parcels.geojson shops.json`: where each business's sign goes (see `MOO_FRONTS` in
  `app.html`).

## Moorooka: footpaths to the corner (14 November 2026, second round)

Ash: "Improve, fix roads, footpaths ... No satitile photos for roads or footpaths."

`tidy.py` gained a rule per block side (a side of a street between one side street and the next), still from the plan
and the street lines alone. Only stretches of 8 m or more count as footpath (shorter pieces are crossovers):

- a footpath carries on across a break, and on to the side street's kerb at each end (so the paths either side of a
  side street line up to cross it), where that is 40 m or less and the footpath already runs along a third or more of
  the side, or 12 m or less where it runs along less;
- past that nothing is laid: the plan gives no reason to think there is a footpath there, and a made-up one outside
  someone's house is worse than a path that stops;
- an end still left in the grass, not at a crossover, gets a short link across the verge to the kerb;
- concrete with a road just beyond it (a median, an island) is not taken for a footpath;
- path is laid only where the line is not paved already, so crossovers and existing paths are left exactly as they are.

Two mistakes on the way, worth knowing before changing these rules:

- The first try laid the path's full width along every stretch the scan could not measure, which put a 0.2 m sliver
  beside paths that were already there (and a second run added another): about five times the change for no gain.
  Check a rule by running it twice: the second run should lay next to nothing.
- It also ran a path to the end of the side however far that was (119 m in one place) and let crossovers count towards
  the third. Tag what each rule paints (a second image, one value per rule) and add up how much of it was already
  paved: that showed both.

Totals are in the pull request that brought this in.
