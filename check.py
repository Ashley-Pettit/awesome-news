import urllib.request, urllib.parse, re, json
UA = {"User-Agent": "Mozilla/5.0 (compatible; AwesomeNews reader; github.com/Ashley-Pettit/awesome-news)"}
def g(q): return "https://news.google.com/rss/search?" + urllib.parse.urlencode({"q": q, "hl": "en-AU", "gl": "AU", "ceid": "AU:en"})
urls = {
 "gn-moorooka": g("Moorooka when:30d"),
 "gn-nearby": g('(Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi OR "Coopers Plains" OR Yeerongpilly OR Moorvale) Brisbane when:14d'),
 "gn-bcc": g("site:brisbane.qld.gov.au (Moorooka OR Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi) when:90d"),
 "gn-dev": g('(Moorooka OR Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi) (development OR apartments OR "shopping centre" OR rezoning OR precinct) when:90d'),
 "tl-alerts-pb": "https://gtfsrt.api.translink.com.au/api/realtime/SEQ/alerts",
 "tl-alerts-pb2": "https://gtfsrt.api.translink.com.au/api/realtime/SEQ/Alerts",
 "tl-updates": "https://translink.com.au/service-updates",
 "tl-rss": "https://translink.com.au/service-updates/rss",
 "bcc-yoursay": "https://www.brisbane.qld.gov.au/have-your-say",
 "bcc-events-trumba": "https://www.trumba.com/calendars/brisbane-city-council.rss",
 "bcc-libraries-trumba": "https://www.trumba.com/calendars/libraries.rss",
 "qldt": "https://api.qldtraffic.qld.gov.au/v2/events?apikey=3e83add325cbb69ac4d8e5bf433d770b",
}
for k, u in urls.items():
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40)
        b = r.read(); ct = r.headers.get("content-type", "")
        txt = b.decode("utf-8", "replace")
        items = re.findall(r"<item>.*?</item>", txt, re.S)
        titles = [re.sub(r"<!\[CDATA\[|\]\]>", "", (re.search(r"<title>(.*?)</title>", i, re.S) or [None, ""])[1]).strip()[:100] for i in items[:6]]
        extra = ""
        if k == "qldt":
            fs = json.loads(txt).get("features", [])
            near = []
            for f in fs:
                c = json.dumps(f.get("geometry"))
                pts = [tuple(map(float, m)) for m in re.findall(r"\[(1\d\d\.\d+), (-2\d\.\d+)\]", c)]
                if any(152.98 < x < 153.07 and -27.58 < y < -27.49 for x, y in pts):
                    p = f["properties"]; near.append(f'{p.get("event_type")}: {(p.get("road_summary") or {}).get("road_name")}, {(p.get("road_summary") or {}).get("locality")} | {str(p.get("description") or "")[:80]}')
            extra = f" near={len(near)} " + json.dumps(near[:8])
        if k.startswith("tl-alerts"):
            extra = f" bytes={len(b)} sample={b[:60]!r}"
        if k in ("tl-updates", "bcc-yoursay"):
            extra = " headings=" + json.dumps(re.findall(r"<h[23][^>]*>\s*(?:<a[^>]*>)?([^<]{6,90})", txt)[:10])
        print(k, r.status, ct[:40], "items", len(items), json.dumps(titles, ensure_ascii=False)[:700], extra[:1500], flush=True)
    except Exception as e:
        print(k, "ERR", str(e)[:150], flush=True)
