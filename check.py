import urllib.request, urllib.parse, re, json
UA = {"User-Agent": "Mozilla/5.0 (compatible; AwesomeNews reader)"}
def g(q): return "https://news.google.com/rss/search?" + urllib.parse.urlencode({"q": q, "hl": "en-AU", "gl": "AU", "ceid": "AU:en"})
urls = {
 "gn-moorooka": g("Moorooka when:14d"),
 "gn-nearby": g('(Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi OR "Coopers Plains" OR Yeerongpilly) Brisbane when:14d'),
 "gn-bcc": g("site:brisbane.qld.gov.au (Moorooka OR Yeronga OR Annerley OR Salisbury OR Rocklea OR Tarragindi) when:60d"),
 "qps-southbrisbane": "https://mypolice.qld.gov.au/southbrisbane/feed/",
 "qps-brisbanesouth": "https://mypolice.qld.gov.au/brisbanesouth/feed/",
 "qps-south-brisbane": "https://mypolice.qld.gov.au/south-brisbane/feed/",
 "qps-logan": "https://mypolice.qld.gov.au/logan/feed/",
 "qps-oxley": "https://mypolice.qld.gov.au/oxley/feed/",
 "qps-mtgravatt": "https://mypolice.qld.gov.au/mountgravatt/feed/",
 "bcc-news": "https://www.brisbane.qld.gov.au/about-council/news-and-media/news/rss",
}
out = {}
for k, u in urls.items():
    try:
        b = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30).read().decode("utf-8", "replace")
        items = re.findall(r"<item>.*?</item>", b, re.S)
        titles = [re.sub(r"<!\[CDATA\[|\]\]>", "", (re.search(r"<title>(.*?)</title>", i, re.S) or [None, ""])[1]).strip()[:110] for i in items[:8]]
        out[k] = {"items": len(items), "titles": titles}
    except Exception as e:
        out[k] = {"error": str(e)[:120]}
    print(k, json.dumps(out[k], ensure_ascii=False)[:1200], flush=True)
