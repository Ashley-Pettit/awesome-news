#!/usr/bin/env python3
"""drive.py: Ash's drive (Moorooka to Logan City Council and back) for the private Claude copy of the app.

The Claude copy can't reach the route planner or QLDTraffic itself (its sandbox blocks other websites), so this
runs on GitHub on weekday mornings and afternoons, and a scheduled task copies the result into the copy's database.

    python drive.py OUT.json

Writes {"at": ..., "work": {...}, "home": {...}}: each with the empty-road minutes, the distance, and what QLDTraffic
reports within about 120 m of the route right now. Home is the suburb's middle (no street address in public code).
"""
import json
import math
import sys
import urllib.request
from datetime import datetime, timezone

HOME = (153.024, -27.532)  # Moorooka
WORK = (153.1095, -27.6388)  # Logan City Council, 150 Wembley Road, Logan Central
QLDT = "https://api.qldtraffic.qld.gov.au/v2/events?apikey=3e83add325cbb69ac4d8e5bf433d770b"  # its public key (CC BY 4.0)
KINDS = ["Crash", "Congestion", "Hazard", "Flooding", "Roadworks", "Special event"]


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "AwesomeNews drive (github.com/Ashley-Pettit/awesome-news)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def dist_to_route(pt, line):
    k, c = 111320, math.cos(math.radians(pt[1]))
    X, Y = (lambda p: p[0] * k * c), (lambda p: p[1] * k)
    best = float("inf")
    for a, b in zip(line, line[1:]):
        ax, ay, bx, by, px, py = X(a), Y(a), X(b), Y(b), X(pt), Y(pt)
        dx, dy = bx - ax, by - ay
        t = max(0, min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy))) if dx or dy else 0
        best = min(best, math.hypot(px - ax - t * dx, py - ay - t * dy))
    return best


def points(g):
    if not g:
        return []
    t, c = g.get("type"), g.get("coordinates")
    if t == "Point":
        return [c]
    if t in ("MultiPoint", "LineString"):
        return c
    if t in ("MultiLineString", "Polygon"):
        return [p for part in c for p in part]
    if t == "GeometryCollection":
        return [p for gg in g.get("geometries", []) for p in points(gg)]
    return []


def when(s):
    try:
        return datetime.fromisoformat(str(s).replace("Z", "+00:00"))
    except Exception:
        return None


def main():
    out = sys.argv[1] if len(sys.argv) > 1 else "drive.json"
    now = datetime.now(timezone.utc)
    try:
        evs = [f for f in get(QLDT).get("features", []) if (f.get("properties") or {}).get("status") == "Published"]
    except Exception as e:
        print("QLDTraffic:", e)
        evs = []
    res = {"at": now.strftime("%Y-%m-%dT%H:%M:%SZ")}
    for name, (a, b) in {"work": (HOME, WORK), "home": (WORK, HOME)}.items():
        try:
            rt = get(f"https://router.project-osrm.org/route/v1/driving/{a[0]},{a[1]};{b[0]},{b[1]}?overview=full&geometries=geojson")["routes"][0]
        except Exception as e:
            print("route", name, e)
            continue
        line, near = rt["geometry"]["coordinates"], []
        for f in evs:
            p = f["properties"]
            t = p.get("event_type")
            if t not in KINDS:
                continue
            st, en = when((p.get("duration") or {}).get("start")), when((p.get("duration") or {}).get("end"))
            if (st and st > now) or (en and en < now):
                continue
            if t in ("Roadworks", "Special event") and "no blockage" in str((p.get("impact") or {}).get("impact_type", "")).lower():
                continue
            if any(dist_to_route(pt, line) < 120 for pt in points(f.get("geometry"))):
                rs, im = p.get("road_summary") or {}, p.get("impact") or {}
                near.append({"type": t, "road": rs.get("road_name") or "", "place": rs.get("locality") or "",
                             "impact": im.get("impact_type") or "", "delay": im.get("delay") or "", "what": p.get("event_subtype") or ""})
        res[name] = {"mins": round(rt["duration"] / 60, 1), "km": round(rt["distance"] / 1000, 1), "events": near[:8], "more": max(0, len(near) - 8)}
    with open(out, "w") as f:
        json.dump(res, f, separators=(",", ":"))
    print(json.dumps({k: (v if k == "at" else {"mins": v["mins"], "events": len(v["events"])}) for k, v in res.items()}))


if __name__ == "__main__":
    main()
