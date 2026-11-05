import urllib.request, urllib.parse, re, json, os
UA = {"User-Agent": "Mozilla/5.0 (compatible; AwesomeNews reader; github.com/Ashley-Pettit/awesome-news)"}
os.makedirs("out", exist_ok=True)
def g(q): return "https://news.google.com/rss/search?" + urllib.parse.urlencode({"q": q, "hl": "en-AU", "gl": "AU", "ceid": "AU:en"})
urls = {
 "tl-rss": "https://translink.com.au/service-updates/rss",
 "bcc-events": "https://www.trumba.com/calendars/brisbane-city-council.rss",
 "bcc-libraries": "https://www.trumba.com/calendars/libraries.rss",
 "gn-bcc": g("site:brisbane.qld.gov.au (Moorooka OR Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi) when:90d"),
 "gn-logan-events": g("site:logan.qld.gov.au events when:60d"),
 "logan-events1": "https://www.logan.qld.gov.au/events",
 "logan-whatson": "https://whatson.logan.qld.gov.au/",
 "logan-libraries": "https://www.loganlibraries.org/events",
 "logan-rss": "https://www.logan.qld.gov.au/rss/news",
 "logan-trumba": "https://www.trumba.com/calendars/logan-city-council.rss",
 "gn-logan": g('Logan (Queensland OR Qld OR "Logan City") when:7d'),
 "qldt": "https://api.qldtraffic.qld.gov.au/v2/events?apikey=3e83add325cbb69ac4d8e5bf433d770b",
}
for k, u in urls.items():
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=40)
        b = r.read()
        open(f"out/{k}.raw", "wb").write(b)
        txt = b.decode("utf-8", "replace")
        print(k, r.status, r.headers.get("content-type", "")[:30], len(b), "items", len(re.findall(r"<item>", txt)), flush=True)
    except Exception as e:
        print(k, "ERR", str(e)[:150], flush=True)
