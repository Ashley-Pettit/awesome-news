"""Moorooka flood simulation, step 4: write the simulated floods in the 3D model's format, and compare them with
the floods the model showed before (Brisbane City Council's mapping), as a check only.

  python3 publish.py <prep.npz> <runs_dir> <out_dir>    writes flood-<id>.png and floods.json into out_dir
  python3 publish.py --compare <prep.npz> <runs_dir> <old_dir>
"""
import json, os, sys
import numpy as np
from PIL import Image

OFFSET, SCALE = 10.0, 400.0
ORDER = ["1974", "2011", "2022", "aep1", "aep2", "aep5", "aep02"]
NOTES = {
    "1974": "January 1974: days of rain from Cyclone Wanda on soaked ground, and the Brisbane River backing up Oxley Creek "
            "(about 10.3 m, worked out from the 5.45 m peak at the city gauge).",
    "2011": "January 2011: mostly the Brisbane River backing up Oxley Creek (about 9.3 m, from the 4.46 m peak at the city "
            "gauge), with ordinary rain here.",
    "2022": "February 2022: record rain on soaked ground, with the creeks and the river backing up Oxley Creek (about 8.7 m, "
            "from the 3.85 m peak at the city gauge).",
    "aep1": "A 1 in 100 chance in any year: the Bureau's 1% design storm on Moorooka (97 mm in an hour, 144 mm in three), "
            "or a river flood like 2011, whichever is higher.",
    "aep2": "A 1 in 50 chance in any year: the Bureau's 2% design storm (87 mm in an hour), or the matching river flood.",
    "aep5": "A 1 in 20 chance in any year: the Bureau's 5% design storm (74 mm in an hour), or the matching river flood.",
    "aep02": "A 1 in 500 chance in any year: the Bureau's rare-rainfall storm (129 mm in an hour), or a river flood above 1974's.",
}
NAMES = {"1974": "January 1974", "2011": "January 2011", "2022": "February 2022", "aep1": "1% AEP flood",
         "aep2": "2% AEP flood", "aep5": "5% AEP flood", "aep02": "0.2% AEP flood"}


def write(prep, runs, out):
    z = prep["z"]; dx = float(prep["dx"])
    events = []
    for eid in ORDER:
        f = os.path.join(runs, f"{eid}.npz")
        if not os.path.exists(f):
            continue
        d = np.load(f); wet = d["wet"]; lv = np.where(wet, d["level"], z)
        v = np.clip(np.round((lv + OFFSET) * SCALE), 0, 65535).astype(np.uint16)
        rgb = np.stack([(v >> 8).astype(np.uint8), (v & 255).astype(np.uint8), np.where(wet, 255, 0).astype(np.uint8)], -1)
        Image.fromarray(rgb, "RGB").save(os.path.join(out, f"flood-{eid}.png"), optimize=True)
        dep = np.where(wet, d["level"] - z, 0)
        events.append({"id": eid, "kind": "design" if eid.startswith("aep") else "historic", "name": NAMES[eid], "note": NOTES[eid],
                       "areaKm2": round(float(wet.sum()) * dx * dx / 1e6, 2), "deepest": round(float(dep.max()), 1),
                       "levels": [round(float(d["level"][wet].min()), 1), round(float(d["level"][wet].max()), 1)]})
    doc = {"grid": list(z.shape[::-1]), "levelOffset": OFFSET, "levelScale": SCALE, "drop": 8.0, "events": events,
           "sources": "Our own flood simulation: terrain and buildings (c) State of Queensland, CC BY 4.0; design rainfall "
                      "(c) Bureau of Meteorology (2016 IFDs for Moorooka); river levels worked out from the Bureau's recorded "
                      "Brisbane City gauge peaks. A guide only: no council flood mapping is used."}
    json.dump(doc, open(os.path.join(out, "floods.json"), "w"), separators=(",", ":"))
    return doc


def old_wet(path):
    a = np.asarray(Image.open(path).convert("RGB")).astype(np.int32)
    return a[..., 2] > 127, (a[..., 0] * 256 + a[..., 1]) / SCALE - OFFSET


def compare(prep, runs, old):
    dx = float(prep["dx"]); px = dx * dx / 1e6; rows = []
    house = (131, 279)
    for eid in ORDER:
        f = os.path.join(runs, f"{eid}.npz"); o = os.path.join(old, f"flood-{eid}.png")
        if not (os.path.exists(f) and os.path.exists(o)):
            continue
        d = np.load(f); ours = d["wet"]; theirs, tl = old_wet(o)
        both = (ours & theirs).sum(); rows.append({
            "id": eid, "ours_km2": round(ours.sum() * px, 2), "council_km2": round(theirs.sum() * px, 2),
            "council_area_we_also_flood_%": round(100 * both / max(1, theirs.sum())),
            "our_area_council_also_floods_%": round(100 * both / max(1, ours.sum())),
            "ours_deep_over_0.3m_km2": round(float((ours & (d["depth"] >= 0.3)).sum()) * px, 2),
            "house_area_max_depth_m": round(float(np.where(ours, d["depth"], 0)[house[0] - 4:house[0] + 5, house[1] - 4:house[1] + 5].max()), 2),
            "council_wet_near_house": bool(theirs[house[0] - 4:house[0] + 5, house[1] - 4:house[1] + 5].any())})
    return rows


if __name__ == "__main__":
    if sys.argv[1] == "--compare":
        for r in compare(np.load(sys.argv[2]), sys.argv[3], sys.argv[4]):
            print(json.dumps(r))
    else:
        print(json.dumps(write(np.load(sys.argv[1]), sys.argv[2], sys.argv[3]), indent=1)[:1500])
