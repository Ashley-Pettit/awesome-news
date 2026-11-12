"""Moorooka flood simulation, step 3: the storms and river levels, run through sim.py.

  python3 run.py <prep.npz> <flow.npz> <out_dir> [event ...]

Rain: Bureau of Meteorology 2016 design rainfall (IFD) for Moorooka (-27.535, 153.026), as a 3 hour "nested" storm
(5 minute blocks arranged so every duration from 5 minutes to 3 hours reaches its design depth, peaking a third of
the way in). The 0.2% storm uses the Bureau's rare-rainfall table (1 hour 129 mm) and its 1 hour ratio below an hour.
Creek and river: Oxley Creek and the Brisbane River back up into the western flats in big river floods. That level is
set on the western edge, from the Brisbane City gauge's recorded peaks and an estimated rise upstream to Oxley Creek
(see LEVELS below). It is the least certain input here.
"""
import json, os, sys, time
import numpy as np
from scipy.ndimage import distance_transform_edt, uniform_filter, label
from sim import Sim

# Bureau of Meteorology IFD for Moorooka, depths in mm (2016 IFDs). Durations in minutes.
DUR = np.array([5, 10, 15, 20, 25, 30, 45, 60, 90, 120, 180])
IFD = {
    "aep5": [19.5, 31.6, 40.1, 46.6, 51.8, 56.2, 66.2, 73.5, 84.5, 93.0, 106],
    "aep2": [22.8, 36.8, 46.7, 54.3, 60.5, 65.7, 77.8, 86.8, 100, 111, 128],
    "aep1": [25.4, 40.7, 51.6, 60.1, 67.1, 73.0, 86.7, 97.1, 113, 125, 144],
    "aep50": [10.4, 17.2, 21.8, 25.3, 28.0, 30.3, 35.3, 38.9, 44.2, 48.2, 54.6],
}
# 1 in 500: rare table from 1 hour up (129, 149, 165, 190 mm at 1, 1.5, 2, 3 h); below 1 hour, the 1% depths x 129/97.1
r = 129 / 97.1
IFD["aep02"] = [round(v * r, 1) for v in IFD["aep1"][:7]] + [129, 149, 165, 190]

# Brisbane River / Oxley Creek level on the model's western edge (m AHD). Recorded Brisbane City gauge peaks
# (BoM: 1974 5.45 m, 2011 4.46 m, 2022 3.85 m) raised by an estimated 0.22 m per km of river to Oxley Creek
# (about 22 km upstream) and up the creek to Rocklea. The design levels place 2011 near a 1% flood and 1974 near a
# 0.2% flood at the city, as the Brisbane River Catchment Flood Study did. All of these are estimates.
LEVELS = {"1974": 10.3, "2011": 9.3, "2022": 8.7, "aep5": 6.5, "aep2": 8.0, "aep1": 9.3, "aep02": 10.8}

EVENTS = {
    # id: (storm, initial loss on gardens mm, continuing loss mm/h, river level, name, kind)
    "aep5": ("aep5", 15, 1.0, LEVELS["aep5"], "5% AEP flood", "design"),
    "aep2": ("aep2", 15, 1.0, LEVELS["aep2"], "2% AEP flood", "design"),
    "aep1": ("aep1", 15, 1.0, LEVELS["aep1"], "1% AEP flood", "design"),
    "aep02": ("aep02", 15, 1.0, LEVELS["aep02"], "0.2% AEP flood", "design"),
    # historic: days of rain had soaked the ground first, so little soaks in
    "1974": ("aep5", 0, 0.5, LEVELS["1974"], "January 1974", "historic"),
    "2011": ("aep50", 5, 0.5, LEVELS["2011"], "January 2011", "historic"),
    "2022": ("aep5", 0, 0.5, LEVELS["2022"], "February 2022", "historic"),
}


def nested(depths, block=5, total=180, peak=1 / 3):
    """Alternating-block storm: block depths (mm) in time order."""
    t = np.arange(block, total + block, block)
    cum = np.exp(np.interp(np.log(t), np.log(DUR), np.log(np.asarray(depths, float))))
    inc = np.diff(np.concatenate([[0], cum]))
    order = np.argsort(-inc)  # biggest first
    n = len(inc); pos = [int(round(peak * (n - 1)))]
    left, right = pos[0] - 1, pos[0] + 1
    while len(pos) < n:  # alternate after, before, after... keeping within the storm
        if right < n and (len(pos) % 2 == 1 or left < 0): pos.append(right); right += 1
        elif left >= 0: pos.append(left); left -= 1
        else: pos.append(right); right += 1
    out = np.zeros(n); out[pos] = inc[order]
    return out


def excess(blocks, il, cl, block=5):
    """Rain left after losses, per block (mm)."""
    left, out = il, []
    for b in blocks:
        a = min(b, left); left -= a; b -= a
        b = max(0.0, b - cl * block / 60)
        out.append(b)
    return np.array(out)


def carve(z, fill, to, acc, min_km2, look=60):
    """Where a creek's path rises over an embankment, grade the bed straight through it, from the bed upstream to the
    first point downstream that is lower, like a culvert. Bigger creeks get a wider opening (5 m up to 2 hectares..1
    square kilometre, 15 m above that)."""
    nz, nx = z.shape; zc = z.ravel().copy(); t = to.ravel(); a = acc.ravel()
    order = np.argsort(-fill.ravel())  # from the top of the hills down
    cut = 0
    for i in order:
        j = t[i]
        if j < 0 or a[i] < min_km2 or zc[j] <= zc[i]:
            continue
        path, k = [], j
        while k >= 0 and len(path) < look and zc[k] > zc[i]:
            path.append(k); k = t[k]
        end = zc[k] if k >= 0 and zc[k] <= zc[i] else zc[i]
        n = len(path) + 1
        for m, p in enumerate(path):
            bed = zc[i] + (end - zc[i]) * (m + 1) / n
            if bed < zc[p]:
                zc[p] = bed; cut += 1
                if a[i] >= 1.0:  # a wide crossing for a big creek
                    r, c = divmod(p, nx)
                    for rr, cc in ((r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)):
                        if 0 <= rr < nz and 0 <= cc < nx:
                            q = rr * nx + cc
                            zc[q] = min(zc[q], bed)
    print("culvert cells carved:", cut, file=sys.stderr)
    return zc.reshape(nz, nx)


def setup(prep, flow):
    z = prep["z"].astype(np.float64).copy()
    bad = z <= -5.99  # a patch with no survey in the north-west corner: take the nearest surveyed height
    if bad.any():
        idx = distance_transform_edt(bad, return_distances=False, return_indices=True)
        z = z[tuple(idx)]
    bfrac, road, imp = prep["bfrac"], prep["road"], prep["imp"]
    acc = flow["acc"] * 25 / 1e6  # km2 draining through each cell
    # Culverts and bridges: the survey shows the top of a road or rail embankment, not the pipe underneath, so water
    # would pond behind every crossing. Along each creek and gully (from 2 hectares of catchment) the bed is graded
    # through embankments, as flood modellers do for culverts (see carve).
    z = carve(z, flow["fill"], flow["to"], acc, 0.02)
    # Checking how much the answer depends on what the survey can't see: FLOOD_DEEPEN lowers the beds of the bigger
    # creeks (over half a square kilometre) by that many metres, as if their channels were deeper than surveyed.
    deepen = float(os.environ.get("FLOOD_DEEPEN", "0"))
    if deepen:
        z = np.where(acc >= 0.5, z - deepen, z)
    bld = bfrac > 0.5
    zb = z + 2.0 * bld
    near = uniform_filter(bfrac.astype(float), 9)
    n = np.where(near > 0.05, 0.06, np.where(z > 30, 0.08, 0.045))
    n = np.where(road > 0.5, 0.02, n)
    n = np.where(bld, 0.1, n)
    n = np.where(acc > 0.3, 0.04, n)  # creek beds
    # stormwater pipes: in the built-up streets, not in the creeks themselves
    urban = (near > 0.05) & (acc < 0.1)
    cap = np.where(urban, float(os.environ.get("FLOOD_PIPES", "30")) / 1000 / 3600, 0.0)  # mm an hour
    to = flow["to"].ravel(); nz, nx = z.shape
    pipe_to = np.full(nz * nx, -1, np.int64)
    a = acc.ravel()
    for i in np.flatnonzero(urban.ravel()):
        j, k = i, 0
        while j >= 0 and a[j] < 0.1 and k < 2000:
            j = to[j]; k += 1
        pipe_to[i] = j if j >= 0 and a[j] >= 0.1 else -1
    return z, zb, n, cap, pipe_to, imp.astype(np.float64), bld


def run_event(eid, base, dx):
    z, zb, n, cap, pipe_to, imp, bld = base
    storm, il, cl, level, name, kind = EVENTS[eid]
    blocks = nested(IFD[storm])
    e_imp = excess(blocks, 1.0, 0.0); e_per = excess(blocks, il, cl)
    rate = lambda k: (imp * e_imp[k] + (1 - imp) * e_per[k]) / 1000 / 300  # m/s
    rates = [rate(k) for k in range(len(blocks))]
    zero = np.zeros_like(z)
    # local rain, with Oxley Creek at an ordinary level (water leaves the western edge freely)
    s = Sim(zb, n, cap, pipe_to, dx)
    t0 = time.time()
    s.run(5 * 3600, lambda t: rates[int(t // 300)] if t < 180 * 60 else zero)
    hmax = s.hmax.copy(); hmax[bld] = 0
    rain_level = z + hmax
    # the river backing up: everything below its level and joined to the western edge
    wet_river = np.zeros_like(bld)
    if level is not None:
        lab, nl = label(z < level, structure=np.ones((3, 3)))
        edge = set(np.unique(lab[:, 0])) - {0}
        wet_river = np.isin(lab, list(edge))
    level_map = np.where(wet_river, np.maximum(rain_level, level), rain_level)
    depth = level_map - z
    wet = (depth >= 0.10) & ~bld
    info = {"id": eid, "name": name, "kind": kind, "seconds": round(time.time() - t0),
            "rain_mm_3h": round(float(blocks.sum()), 1), "peak_5min_mm": round(float(blocks.max()), 1),
            "river_level": level, "wet_km2": round(float(wet.sum()) * dx * dx / 1e6, 3),
            "wet_km2_rain_only": round(float(((hmax >= 0.10) & ~bld).sum()) * dx * dx / 1e6, 3)}
    return level_map, wet, depth, info


if __name__ == "__main__":
    prep, flow, out = np.load(sys.argv[1]), np.load(sys.argv[2]), sys.argv[3]
    ids = sys.argv[4:] or list(EVENTS)
    os.makedirs(out, exist_ok=True)
    dx = float(prep["dx"])
    base = setup(prep, flow)
    for eid in ids:
        lv, wet, depth, info = run_event(eid, base, dx)
        np.savez_compressed(os.path.join(out, f"{eid}.npz"), level=lv.astype(np.float32), wet=wet, depth=depth.astype(np.float32))
        print(json.dumps(info), flush=True)
