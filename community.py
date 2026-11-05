#!/usr/bin/env python3
"""community.py: what's happening around Moorooka and Logan, for their own local news apps.

Run by fetcher.py with each news update (or on its own: python community.py OUT_DIR). Writes OUT_DIR/feeds/community-<place>.json:

    {"place", "label", "updatedAt",
     "news":    stories from a news search for the place and the suburbs around it (headline, outlet, link),
     "updates": what's changing on the ground: Translink service changes, roadworks and closures, council notices,
     "events":  one-off things on nearby in the next two weeks (council and library events)}

Public sources only, read the polite way (one request each, a plain user agent). Nothing from private groups.
"""
import concurrent.futures as cf
import html
import json
import math
import os
import re
import sys
import urllib.parse
from datetime import datetime, timedelta, timezone

import fetcher as F

BRIS = timezone(timedelta(hours=10))
TRANSLINK = "https://translink.com.au/service-updates/rss"
QLDT = "https://api.qldtraffic.qld.gov.au/v2/events?apikey=3e83add325cbb69ac4d8e5bf433d770b"  # its public key (CC BY 4.0)
BCC_EVENTS = ["https://www.trumba.com/calendars/brisbane-city-council.rss", "https://www.trumba.com/calendars/libraries.rss"]


def gnews(q):
    return "https://news.google.com/rss/search?" + urllib.parse.urlencode({"q": q, "hl": "en-AU", "gl": "AU", "ceid": "AU:en"})


MOO_SUBURBS = ["Moorooka", "Yeronga", "Yeerongpilly", "Annerley", "Salisbury", "Rocklea", "Tarragindi", "Coopers Plains", "Moorvale", "Tennyson", "Fairfield"]
LOGAN_SUBURBS = ["Logan Central", "Logan Village", "Logan Hospital", "Logan Reserve", "Logan City", "Loganlea", "Loganholme", "Woodridge", "Kingston", "Slacks Creek",
                 "Springwood", "Underwood", "Daisy Hill", "Shailer Park", "Beenleigh", "Eagleby", "Waterford", "Marsden", "Crestmead", "Browns Plains", "Regents Park",
                 "Heritage Park", "Park Ridge", "Jimboomba", "Yarrabilba", "Flagstone", "Meadowbrook", "Bethania", "Edens Landing", "Holmview", "Tanah Merah",
                 "Cornubia", "Rochedale South", "Boronia Heights", "Hillcrest", "Berrinba", "Greenbank", "Chambers Flat", "Carbrook", "Cedar Creek"]

PLACES = {
    "moo": {
        "label": "Moorooka", "centre": (-27.535, 153.024), "km": 4.0,
        "words": re.compile(r"\b(" + "|".join(MOO_SUBURBS) + r")\b|\bBeaudesert R(?:oa)?d\b|\bIpswich R(?:oa)?d\b|\bT6 Beenleigh\b|\bBeenleigh line\b", re.I),
        "sure": re.compile(r"\b(Moorooka|Yeronga|Yeerongpilly|Annerley|Rocklea|Tarragindi|Coopers Plains|Moorvale)\b", re.I),
        "search": [gnews("Moorooka when:30d"),
                   gnews("(" + " OR ".join(f'"{s}"' for s in MOO_SUBURBS[1:9]) + ") Brisbane when:14d")],
        "council": [gnews("site:brisbane.qld.gov.au (" + " OR ".join(MOO_SUBURBS[:7]) + ") when:60d")],
        "events": "bcc",
    },
    "logan": {
        "label": "Logan", "centre": (-27.66, 153.12), "km": 14.0,
        "words": re.compile(r"\b(Logan|" + "|".join(LOGAN_SUBURBS) + r")\b|\bT6 Beenleigh\b|\bBeenleigh line\b", re.I),
        # Stories naming Logan or its suburbs from any outlet, on top of the Logan section's own (council, police, local sites).
        "sure": re.compile(r"\b(Logan|Loganlea|Loganholme|Beenleigh|Woodridge|Slacks Creek|Browns Plains|Jimboomba|Yarrabilba|Shailer Park|Daisy Hill|"
                           r"Eagleby|Crestmead|Park Ridge|Edens Landing|Holmview|Meadowbrook|Bethania|Rochedale South|Boronia Heights|Chambers Flat)\b", re.I),
        "not": re.compile(r"\b(Utah|Cache Valley|Herald Journal|KSL|Deseret|Idaho|Colorado|5280\w*|Ohio|West Virginia|Iowa|Kansas|fall foliage|"
                          r"Logan (Paul|Roy|Sargeant|Lerman|Henderson|Scott|Airport)|Wolverine)\b", re.I),
        "search": [gnews('"Logan City" OR "City of Logan" OR "Logan Council" when:14d'),
                   gnews("(" + " OR ".join(f'"{s}"' for s in ["Beenleigh", "Woodridge", "Loganholme", "Browns Plains", "Jimboomba", "Yarrabilba", "Springwood", "Slacks Creek", "Shailer Park", "Park Ridge"]) + ") Queensland when:14d"),
                   gnews("Logan Queensland when:7d")],
        "council": [],
        "events": "logan",
    },
}
NOT_HERE = re.compile(r"\b(Cairns|Townsville|Toowoomba|Sunshine Coast|Noosa|Gold Coast City|Mackay|Rockhampton|Bundaberg|Hervey Bay)\b", re.I)
DULL = re.compile(r"\b(yoga|tai chi|qigong|aqua|pilates|zumba|first 5 forever|rhyme time|storytime|toddler time|baby|babies|book club|"
                  r"line dancing|fun soccer|fitness|gentle exercise|walking group|chess club|knit|crochet|craft group|conversation|"
                  r"writers'? group|writers of|computer help|tech help|jp service|justice of the peace|homework help|lego club|sharing circle|"
                  r"gardeners|chair exercise|mahjong)\b", re.I)


def km(a, b):
    k = 111.32
    return math.hypot((a[0] - b[0]) * k, (a[1] - b[1]) * k * math.cos(math.radians(a[0])))


def ago(d):
    return d.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def when_text(start, end, now):
    """'From Mon 16 Nov to Mon 14 Dec', 'Until Fri 13 Nov', 'Sat 7 Nov, 10am'."""
    f = lambda d: f"{d:%a} {d.day} {d:%b}"
    s, e = (start.astimezone(BRIS) if start else None), (end.astimezone(BRIS) if end else None)
    if s and s > now:
        return f"From {f(s)}" + (f" to {f(e)}" if e and e.date() != s.date() else "")
    if e:
        return f"Until {f(e)}"
    return "Now"


# ---------------------------------------------------------------------------
# Translink: service changes for trains and buses through the area
# ---------------------------------------------------------------------------
TL_DATE = re.compile(r"(Start|End) date:\s*(\d{2}/\d{2}/\d{4})?\s*(\d{1,2}:\d{2}\s*[AP]M)?", re.I)


def translink(now, errors):
    try:
        raw = F.get(TRANSLINK, timeout=30).decode("utf-8", "replace")
    except Exception as e:
        errors.append(f"Translink: {e}"[:160])
        return []
    out = []
    for it in re.findall(r"<item>(.*?)</item>", raw, re.S):
        g = lambda tag: html.unescape((re.search(rf"<{tag}>(.*?)</{tag}>", it, re.S) or [None, ""])[1]).strip()
        title, desc, link = g("title"), re.sub(r"\s+", " ", g("description")), g("link")
        cats = [c.strip(" ,") for c in re.findall(r"CDATA\[(.*?)\]\]", it)]
        if any(c and c not in ("Current", "Upcoming", "Major", "Minor", "Informative", "SEQ") for c in cats):
            continue  # another region (Cairns, Toowoomba...)
        icon = title[:1]
        title = title.lstrip("☒⚠ⓘ ").strip()
        dates, start, end = {}, None, None
        for kind, d, t in TL_DATE.findall(desc):
            dates[kind.lower()] = (d, t)
        def parse(kind):
            d, t = dates.get(kind, ("", ""))
            d = d or dates.get("start", ("", ""))[0]
            try:
                return datetime.strptime(f"{d} {t or '12:00 AM'}", "%d/%m/%Y %I:%M %p").replace(tzinfo=BRIS)
            except Exception:
                return None
        start, end = parse("start"), parse("end") if "end" in dates else None
        if end and end < now:
            continue
        services = (re.search(r"Services:\s*(.*)$", desc) or [None, ""])[1].strip(" ,.")
        severity = "major" if icon == "☒" or "Major" in cats else "info" if icon == "ⓘ" else "minor"
        out.append({"title": title, "services": services, "start": start, "end": end, "url": link, "severity": severity,
                    "upcoming": "Upcoming" in cats})
    return out


# ---------------------------------------------------------------------------
# QLDTraffic: roadworks, closures and incidents
# ---------------------------------------------------------------------------
def qldtraffic(errors):
    import time
    for n in range(2):
        try:
            return [f for f in json.loads(F.get(QLDT, timeout=30)).get("features", []) if (f.get("properties") or {}).get("status") == "Published"]
        except Exception as e:
            if n:
                errors.append(f"QLDTraffic: {e}"[:160])
            else:
                time.sleep(20)  # busy: try once more
    return []


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


def roadworks(feats, place, now):
    out = []
    for f in feats:
        p = f["properties"]
        t = p.get("event_type") or ""
        if t not in ("Roadworks", "Special event", "Flooding", "Crash", "Hazard", "Congestion"):
            continue
        pts = points(f.get("geometry"))
        if not any(km((y, x), place["centre"]) <= place["km"] for x, y in pts if isinstance(x, (int, float))):
            continue
        rs, im, du = p.get("road_summary") or {}, p.get("impact") or {}, p.get("duration") or {}
        impact = str(im.get("impact_type") or "")
        if t == "Roadworks" and "no blockage" in impact.lower():
            continue  # works beside the road: nothing for drivers to know
        when = lambda s: F.parse_date(s) if s else None
        start, end = when(du.get("start")), when(du.get("end"))
        if end and end < now:
            continue
        road, where = rs.get("road_name") or "", rs.get("locality") or ""
        kind = {"Special event": "Event on the roads", "Flooding": "Flooding"}.get(t, t)
        desc = re.sub(r"\s+", " ", str(p.get("description") or p.get("advice") or "")).strip()
        out.append({"title": f"{kind}: {road}" + (f", {where}" if where and where.lower() not in road.lower() else ""),
                    "services": "; ".join(x for x in (impact, desc[:200]) if x), "start": start, "end": end,
                    "url": "https://qldtraffic.qld.gov.au/", "severity": "major" if "closed" in impact.lower() or t in ("Crash", "Flooding") else "minor",
                    "kind": "roads"})
    return out


# ---------------------------------------------------------------------------
# Events: Brisbane City Council and its libraries (Trumba feeds); Logan City Council (through a news search)
# ---------------------------------------------------------------------------
def bcc_events(place, now, errors):
    seen_series, raw_items = {}, []
    for u in BCC_EVENTS:
        try:
            raw = F.get(u, timeout=40).decode("utf-8", "replace")
        except Exception as e:
            errors.append(f"BCC events: {e}"[:160])
            continue
        for it in re.findall(r"<item>(.*?)</item>", raw, re.S):
            raw_items.append(it)
            t = (re.search(r"<title>(.*?)</title>", it, re.S) or [None, ""])[1]
            seen_series[t] = seen_series.get(t, 0) + 1
    out, keep = [], set()
    soon = now + timedelta(days=14)
    for it in raw_items:
        g = lambda tag: html.unescape((re.search(rf"<{tag}>(.*?)</{tag}>", it, re.S) or [None, ""])[1]).strip()
        title, desc, link = html.unescape(g("title")), g("description"), g("link")
        if seen_series.get((re.search(r"<title>(.*?)</title>", it, re.S) or [None, ""])[1], 0) > 3 or DULL.search(title):
            continue  # the weekly regulars (yoga, rhyme time) aren't news
        m = re.search(r"maps\.google\.com/\?q=(-?\d+\.\d+),(-?\d+\.\d+)", desc)
        if not m or km((float(m.group(1)), float(m.group(2))), place["centre"]) > place["km"]:
            continue
        start = F.parse_date(g("xCal:dtstart"))  # e.g. 2026-11-02T14:00:00Z
        if not start or start < now - timedelta(hours=3) or start > soon:
            continue
        key = (title, start.date())
        if key in keep:
            continue
        keep.add(key)
        venue = html.unescape(g("xCal:location"))
        text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", desc)).strip()
        body = re.sub(r"^.*?(?:am|pm)\s+", "", text, count=1)
        body = re.split(r"\s+Venue\s*:", body)[0].strip()
        img = (re.search(r'<img src="(https://www\.trumba\.com/i/[^"?]+)', desc) or [None, ""])[1]
        cost = (re.search(r"Cost\s*:\s*([^<]{1,40}?)\s+(?:Primary|Event|Age|Bookings|$)", text) or [None, ""])[1]
        out.append({"title": title, "summary": F.clean(body, 220), "start": start, "venue": venue, "url": link, "image": img,
                    "source": "Brisbane City Council", "free": cost.strip().lower().startswith("free")})
    out.sort(key=lambda e: e["start"])
    return out[:20]


EVENTISH = re.compile(r"\b(day|days|walk|workshop|festival|fair|market|markets|celebration|show|concert|night|tour|launch|expo|open|"
                      r"carnival|cleanup|clean-up|week|fun|movie|spotlighting|drop-off|parade|races|cinema|session)\b", re.I)
NOT_EVENT = re.compile(r"\b(guidelines|fund|grants?|policy|dashboard|recycling made easy|what goes where|health and wellbeing|what's on|calendar|news briefs?|media release)\b", re.I)


def logan_events(now, errors):
    found = []
    for q in ("site:logan.qld.gov.au when:45d", "site:logan.qld.gov.au events when:45d"):
        try:
            found += F.parse_feed(gnews(q))
        except Exception as e:
            errors.append(f"Logan events: {e}"[:160])
    out, seen = [], set()
    for it in found:
        t = re.sub(r"(\s+[-–|]\s+Logan(?: City Council)?)+\s*$", "", html.unescape(it["title"])).strip()
        if t in seen or not EVENTISH.search(t) or NOT_EVENT.search(t):
            continue
        seen.add(t)
        out.append({"title": t, "summary": "", "start": None, "venue": "", "url": it["url"], "image": "", "source": "Logan City Council",
                    "seen": it["published"] or now})
    with cf.ThreadPoolExecutor(6) as ex:
        for e, real in zip(out, ex.map(lambda e: F.gnews_real_url(e["url"]) or "", out)):
            e["url"] = real or e["url"]
    out = [e for e in out if "logan.qld.gov.au" in e["url"]]
    out.sort(key=lambda e: e["seen"], reverse=True)
    for e in out:
        e.pop("seen", None)
    return out[:15]


# ---------------------------------------------------------------------------
# News and council notices from news searches
# ---------------------------------------------------------------------------
def searched(urls, place, now, errors, max_age=timedelta(days=30)):
    found = []
    for u in urls:
        try:
            found += F.parse_feed(u)
        except Exception as e:
            errors.append(f"search: {e}"[:160])
    out, seen = [], set()
    for it in found:
        title = html.unescape(it["title"])
        m = re.match(r"^(.*?)\s+[-–]\s+([^-–]{2,60})$", title)
        title, src = (m.group(1), m.group(2)) if m else (title, "")
        pub = it["published"] or now
        txt = f"{title} {re.sub(r'<[^>]+>', ' ', it.get('summary') or '')}"
        if now - pub > max_age or title in seen or not place["words"].search(txt) or (place.get("not") and place["not"].search(txt + " " + src)):
            continue
        if place.get("sure") and not place["sure"].search(txt) and not re.search(r"\b(Brisbane|Queensland|Qld|QLD)\b", txt + " " + src):
            continue  # Salisbury, Fairfield, Tennyson and Kingston are also places elsewhere
        if re.search(r"Police|Crime Stoppers", src) or re.match(r"^\d+\s+[A-Z]", title):
            continue  # police logs (crime is covered by the news itself) and property pages ("94 TAUNTON ST")
        seen.add(title)
        out.append({"title": title, "source": src, "url": it["url"], "published": pub, "summary": ""})
    out.sort(key=lambda x: x["published"], reverse=True)
    out = out[:25]
    with cf.ThreadPoolExecutor(6) as ex:
        for x, real in zip(out, ex.map(lambda x: F.gnews_real_url(x["url"]) or "", out)):
            x["url"] = real or x["url"]
    return out


def build(now, errors):
    tl = translink(now, errors)
    feats = qldtraffic(errors)
    docs = {}
    for pid, place in PLACES.items():
        ups = []
        for u in tl:
            if place["words"].search(f"{u['title']} {u['services']}") and not NOT_HERE.search(u["title"]):
                ups.append({**u, "kind": "transport"})
        ups += roadworks(feats, place, now)
        council = []
        for c in searched(place["council"], place, now, errors, timedelta(days=60)):
            if re.search(r"traffic|road|closure|consultation|have your say|project|upgrade|works|park|bikeway|footpath|crossing|plan", c["title"], re.I):
                council.append({"title": c["title"], "services": "", "start": None, "end": None, "url": c["url"], "severity": "minor",
                                "kind": "council", "published": c["published"]})
        ups += council[:8]
        sev = {"major": 0, "minor": 1, "info": 2}
        soon = now + timedelta(hours=12)
        ups.sort(key=lambda u: (u["kind"] == "council", bool(u["start"] and u["start"] > soon), sev.get(u["severity"], 1) if not (u["start"] and u["start"] > soon) else 0,
                                (u["start"] or now).timestamp() if u["start"] and u["start"] > soon else 0))
        news = searched(place["search"], place, now, errors)
        events = bcc_events(place, now, errors) if place["events"] == "bcc" else logan_events(now, errors)

        def ser(x, kind):
            d = {k: v for k, v in x.items() if v not in (None, "", False)}
            for k in ("start", "end", "published"):
                if isinstance(d.get(k), datetime):
                    d[k] = ago(d[k])
            if kind == "updates":
                d["when"] = when_text(x.get("start"), x.get("end"), now.astimezone(BRIS)) if x.get("kind") != "council" else ""
            d["id"] = F.hashlib.sha1((x["url"] + x["title"]).encode()).hexdigest()[:12]
            return d
        docs[pid] = {"place": pid, "label": place["label"], "updatedAt": ago(now), "news": [ser(x, "news") for x in news],
                     "updates": [ser(x, "updates") for x in ups[:30]], "events": [ser(x, "events") for x in events]}
    return docs


def write(out_dir, now, errors):
    docs = build(now, errors)
    os.makedirs(os.path.join(out_dir, "feeds"), exist_ok=True)
    for pid, d in docs.items():
        with open(os.path.join(out_dir, "feeds", f"community-{pid}.json"), "w") as f:
            json.dump(d, f, ensure_ascii=False, separators=(",", ":"))
    return {pid: {k: len(d[k]) for k in ("news", "updates", "events")} for pid, d in docs.items()}


if __name__ == "__main__":
    errs = []
    print(json.dumps(write(sys.argv[1] if len(sys.argv) > 1 else "out", datetime.now(timezone.utc), errs)), errs)
