"""Publish map edits made in admin mode (Explore, the pencil button, Ash only).

  python3 tools/town/add_edits.py <file with the pasted text>      (or pipe the text in)

Ash paints ground and takes things out on his own device, taps Copy edits and pastes the text to Claude. This adds
what he pasted to the town's edits.json (town3d/<town>/edits.json), which every copy of the app lays over the model
when it opens. Edits already in the file are not added twice. Then send it in as a pull request like anything else.

The pasted text is a line of words and then one JSON object:
  {"town": "moorooka", "v": 1,
   "paint": [{"k": 1 lawn | 2 asphalt | 3 concrete, "w": width in metres, "p": [x, z, x, z, ...]}],
   "gone": {"cars": [[x, z]], "trees": [[x, z]], "people": [[x, z, radius]]}}
x and z are model metres (x east, z south). To take a published edit back out, delete its line from edits.json.
"""
import json, os, sys

text = open(sys.argv[1], encoding="utf-8").read() if len(sys.argv) > 1 else sys.stdin.read()
a, b = text.find("{"), text.rfind("}")
if a < 0 or b < a:
    sys.exit("No edits found: expected the text from Copy edits, which holds one { ... } block.")
new = json.loads(text[a:b + 1])
town = new.get("town")
folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "town3d", str(town))
path = os.path.join(folder, "edits.json")
if not town or not str(town).isalnum() or not os.path.isfile(path):
    sys.exit(f"No edits.json for town {town!r} (looked for {os.path.normpath(path)}).")
cur = json.load(open(path, encoding="utf-8"))
num = lambda v: isinstance(v, (int, float)) and not isinstance(v, bool) and abs(v) < 1e6
r2 = lambda v: round(float(v), 2)
added = {"paint": 0, "cars": 0, "trees": 0, "people": 0}
skipped = 0
for s in new.get("paint") or []:
    ok = isinstance(s, dict) and s.get("k") in (1, 2, 3) and num(s.get("w")) and 0 < s["w"] <= 40 and isinstance(s.get("p"), list) and len(s["p"]) >= 2 and len(s["p"]) % 2 == 0 and all(num(v) for v in s["p"])
    if not ok:
        skipped += 1
        continue
    s = {"k": s["k"], "w": r2(s["w"]), "p": [r2(v) for v in s["p"]]}
    if s not in cur["paint"]:
        cur["paint"].append(s)
        added["paint"] += 1
for kind, n in (("cars", 2), ("trees", 2), ("people", 3)):
    for g in (new.get("gone") or {}).get(kind) or []:
        if not (isinstance(g, list) and len(g) == n and all(num(v) for v in g)):
            skipped += 1
            continue
        g = [r2(v) for v in g]
        if g not in cur["gone"][kind]:
            cur["gone"][kind].append(g)
            added[kind] += 1
# one edit to a line, so a pull request shows exactly what was added and one can be taken out by hand
rows = lambda items: "[" + ",".join("\n    " + json.dumps(i, separators=(",", ":")) for i in items) + ("\n  ]" if items else "]")
out = '{\n  "v": 1,\n  "paint": ' + rows(cur["paint"]) + ',\n  "gone": {' + ",".join(f'\n  "{k}": ' + rows(cur["gone"][k]) for k in ("cars", "trees", "people")) + "\n  }\n}\n"
json.loads(out)
open(path, "w", encoding="utf-8").write(out)
print(f"{town}: added {added['paint']} strokes, {added['cars']} parked cars, {added['trees']} trees and {added['people']} no-walking circles" + (f"; skipped {skipped} that were not well formed" if skipped else "") + f". Now {len(cur['paint'])} strokes and {sum(len(v) for v in cur['gone'].values())} things taken out in {os.path.normpath(path)}.")
