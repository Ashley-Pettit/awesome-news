#!/usr/bin/env python3
"""Daily Brief fetcher.

Pulls free, full-article RSS feeds, drops paywalled, video, promo and sport
items, sorts stories into sections and writes JSON the app reads.

Usage:
  python3 fetcher.py OUT_DIR [--regions all|qld,nsw,...] [--images url|inline] [--text cc|all|none]

  --regions  which "Local" editions to build (default: all eight states and territories)
  --images   url    = link to the publisher's picture (GitHub Pages site)
             inline = small JPEG embedded in the data (Claude version, which can't load outside images)
  --text     cc     = save article text only where the licence allows republishing (The Conversation, CC BY-ND)
             all    = save article text for every story (private, personal reading only, never publish this)
             none   = summaries only

Writes:
  OUT_DIR/feeds/<section>.json   one per section: local-qld ... local-nt, headlines, politics, finance, tech, ai
  OUT_DIR/text/<chunk>.json      article text, grouped into chunks under 200 KB
  OUT_DIR/status.json            update time, counts, regions and chunk list
"""
import argparse
import base64
import concurrent.futures as cf
import hashlib
import html
import io
import json
import os
import re
import shutil
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

# ---------------------------------------------------------------------------
# Sources. Only outlets that publish full articles free of charge.
# Left out on purpose: Courier-Mail, The Australian, AFR, Brisbane Times / SMH /
# The Age, The Verge, Reuters, Bloomberg, MIT Tech Review (paywalls or meters).
# ---------------------------------------------------------------------------
ABC_JUST_IN = "https://www.abc.net.au/news/feed/51120/rss.xml"
ABC_TOP = "https://www.abc.net.au/news/feed/45910/rss.xml"
ABC_BUSINESS = "https://www.abc.net.au/news/feed/51892/rss.xml"
GUARDIAN_AU = "https://www.theguardian.com/australia-news/rss"
SBS_LATEST = "https://www.sbs.com.au/news/topic/latest/feed"

SECTION_FEEDS = [
    # section, source label, url, keep ("all" or a keyword filter name)
    ("politics", "Guardian Politics", "https://www.theguardian.com/australia-news/australian-politics/rss", "all"),
    ("politics", "The Conversation", "https://theconversation.com/au/politics/articles.atom", "all"),
    ("politics", "ABC News", ABC_JUST_IN, "politics"),
    ("finance", "ABC News", ABC_BUSINESS, "finance"),
    ("finance", "The Conversation", "https://theconversation.com/au/business/articles.atom", "all"),
    ("finance", "Guardian Economics", "https://www.theguardian.com/business/economics/rss", "all"),
    ("finance", "Guardian Business", "https://www.theguardian.com/business/rss", "all"),
    ("ai", "Guardian AI", "https://www.theguardian.com/technology/artificialintelligenceai/rss", "all"),
    ("ai", "Ars Technica", "https://arstechnica.com/ai/feed/", "all"),
    ("ai", "TechCrunch", "https://techcrunch.com/category/artificial-intelligence/feed/", "all"),
    ("ai", "The Conversation", "https://theconversation.com/topics/artificial-intelligence-ai-90/articles.atom", "all"),
    ("tech", "iTnews", "https://www.itnews.com.au/RSS/rss.ashx", "all"),
    ("tech", "Ars Technica", "https://feeds.arstechnica.com/arstechnica/index", "all"),
    ("tech", "Guardian Tech", "https://www.theguardian.com/technology/rss", "all"),
    ("tech", "TechCrunch", "https://techcrunch.com/feed/", "all"),
    ("headlines", "ABC News", ABC_TOP, "all"),
    ("headlines", "Guardian Australia", GUARDIAN_AU, "all"),
    ("headlines", "SBS News", SBS_LATEST, "all"),
    ("headlines", "BBC World", "https://feeds.bbci.co.uk/news/world/rss.xml", "all"),
]

REGIONS = {
    # id: (label, [(source, url)], place names (any case), abbreviations (exact case))
    "qld": ("Queensland", [
        ("ABC Brisbane", "https://www.abc.net.au/news/feed/8053540/rss.xml"),
        ("Guardian Qld", "https://www.theguardian.com/australia-news/queensland/rss"),
        ("Guardian Brisbane", "https://www.theguardian.com/australia-news/brisbane/rss"),
    ], r"Brisbane|Queensland(?:ers?)?|Gold Coast|Sunshine Coast|Logan|Ipswich|Moreton Bay|Redland|Toowoomba|Cairns|"
       r"Townsville|Mackay|Rockhampton|Bundaberg|Gympie|Crisafulli", r"Qld|QLD"),
    "nsw": ("New South Wales", [
        ("ABC Sydney", "https://www.abc.net.au/news/feed/8055316/rss.xml"),
        ("Guardian NSW", "https://www.theguardian.com/australia-news/new-south-wales/rss"),
        ("Guardian Sydney", "https://www.theguardian.com/australia-news/sydney/rss"),
    ], r"Sydney|New South Wales|Newcastle|Wollongong|Central Coast|Blue Mountains|Parramatta|Minns", r"NSW"),
    "vic": ("Victoria", [
        ("ABC Melbourne", "https://www.abc.net.au/news/feed/8057136/rss.xml"),
        ("Guardian Vic", "https://www.theguardian.com/australia-news/victoria/rss"),
        ("Guardian Melbourne", "https://www.theguardian.com/australia-news/melbourne/rss"),
    ], r"Melbourne|Victorian?s?|Geelong|Ballarat|Bendigo|Gippsland|Jacinta Allan", r"Vic"),
    "wa": ("Western Australia", [
        ("ABC Perth", "https://www.abc.net.au/news/feed/8057096/rss.xml"),
        ("Guardian WA", "https://www.theguardian.com/australia-news/western-australia/rss"),
    ], r"Perth|Western Australian?s?|Fremantle|Bunbury|Kimberley|Pilbara|Kalgoorlie", r"WA"),
    "sa": ("South Australia", [
        ("ABC Adelaide", "https://www.abc.net.au/news/feed/8057540/rss.xml"),
        ("Guardian SA", "https://www.theguardian.com/australia-news/south-australia/rss"),
        ("Guardian Adelaide", "https://www.theguardian.com/australia-news/adelaide/rss"),
    ], r"Adelaide|South Australian?s?|Mount Gambier|Whyalla|Port Augusta|Malinauskas", r"SA"),
    "tas": ("Tasmania", [
        ("Guardian Tas", "https://www.theguardian.com/australia-news/tasmania/rss"),
        ("Guardian Hobart", "https://www.theguardian.com/australia-news/hobart/rss"),
    ], r"Tasmanian?s?|Hobart|Launceston|Devonport|Burnie", r"Tas"),
    "act": ("Canberra", [
        ("Guardian ACT", "https://www.theguardian.com/australia-news/australian-capital-territory/rss"),
        ("Guardian Canberra", "https://www.theguardian.com/australia-news/canberra/rss"),
    ], r"Canberra|Australian Capital Territory", r"ACT"),
    "nt": ("Northern Territory", [
        ("Guardian NT", "https://www.theguardian.com/australia-news/northern-territory/rss"),
        ("Guardian Darwin", "https://www.theguardian.com/australia-news/darwin/rss"),
    ], r"Darwin|Northern Territory|Alice Springs|Katherine|Arnhem|Tiwi|Wadeye", r"NT"),
}
# National feeds mined for each region's place names.
REGION_MINE = [("ABC News", ABC_JUST_IN), ("ABC News", ABC_TOP), ("Guardian Australia", GUARDIAN_AU), ("SBS News", SBS_LATEST)]

SECTION_ORDER = ["politics", "finance", "ai", "tech", "headlines"]
PER_SECTION = 40
PER_REGION = 30
MAX_AGE = timedelta(days=4)
MAX_AGE_LOCAL = timedelta(days=10)  # smaller states publish less, so look back further

# ---------------------------------------------------------------------------
# Filters
# ---------------------------------------------------------------------------
AI_RE = re.compile(r"\b(AI|A\.I\.|artificial intelligence|OpenAI|Anthropic|ChatGPT|Claude|Gemini|"
                   r"LLMs?|chatbots?|machine learning|deepfakes?|Copilot|generative)\b", re.I)
KEYWORDS = {
    "politics": re.compile(r"\b(Albanese|Dutton|Ley|Crisafulli|Miles|parliament|Senate|senator|Coalition|"
                           r"Labor|Liberals?|Nationals|Greens|One Nation|premier|prime minister|minister|"
                           r"election|by-election|budget|Canberra|teal)\b", re.I),
    "finance": re.compile(r"\b(ASX|RBA|Reserve Bank|interest rates?|cash rate|inflation|CPI|economy|economic|"
                          r"house prices|property market|mortgages?|shares|stocks?|market|investors?|superannuation|super funds?|"
                          r"profit|earnings|dollar|Treasury|Chalmers|tax|wages|unemployment|jobs data|banks?|"
                          r"ACCC|ASIC|cost of living|tariffs?|recession|budget)\b", re.I),
}
SKIP_TITLE = re.compile(r"^(video|watch|listen|podcast|quiz|crossword|photos?)\b|[–-] (video|podcast|audio|in pictures)$|"
                        r"\b(sponsored|partner content|paid post|deal of the day|promo code|discount code|"
                        r"tickets?\b.*\b(disrupt|sessions)|best deals?)\b", re.I)
SKIP_URL = re.compile(r"/(video|videos|audio|podcasts?|sounds|programs|live-?blog-?ads|"
                      r"crosswords|quiz|gallery|newsletters?)/|/ad/|/sponsored", re.I)

# No sport at all: drop by feed category, by URL path, then by title words.
SPORT_CATS = {c.lower() for c in [
    "Sport", "Sports", "Football", "Soccer", "AFL", "AFLW", "NRL", "NRLW", "Rugby League", "Rugby Union", "Rugby",
    "Cricket", "Tennis", "Golf", "Netball", "Basketball", "NBL", "Motor Sports", "Motorsport", "Formula 1", "Formula One",
    "MotoGP", "Cycling", "Swimming", "Athletics", "Olympics", "Olympic Games", "Paralympics", "Commonwealth Games",
    "Horse Racing", "Boxing", "UFC", "A-League", "A-League Men", "A-League Women", "Matildas", "Socceroos",
    "Premier League", "World Cup", "Surfing", "Sailing", "Rowing", "Hockey", "Baseball", "NFL", "NBA",
    "Women's sport", "Australia sport", "US sports", "Sport politics", "Sports news"]}
SPORT_URL = re.compile(r"/(sport|sports|football|soccer|cricket|afl|nrl|rugby[-a-z]*|tennis|golf|"
                       r"formulaone|motorsport|horse-?racing|olympics|commonwealth-games)(/|-|$)", re.I)
SPORT_TITLE = re.compile(r"\b(AFLW?|NRLW?|A-League|Socceroos?|Matildas|Wallabies|Wallaroos|Broncos|Dolphins NRL|"
                         r"Brisbane Lions|Brisbane Roar|Queensland Reds|Maroons|State of Origin|Origin (?:I|II|III|decider)|"
                         r"grand final|premiership|MotoGP|Formula (?:1|One)|F1|grand prix|Supercars|Test (?:match|cricket|series)|"
                         r"one-day (?:cup|international)|ODI|T20|BBL|WBBL|Big Bash|Sheffield Shield|the Ashes|cricketers?|"
                         r"netball|Super Netball|NBL|WNBL|Boomers|Opals|Wimbledon|Australian Open|US Open|"
                         r"Melbourne Cup|Cox Plate|Olympi(?:cs|an)|Paralympi(?:cs|an)|Commonwealth Games|"
                         r"Premier League|Champions League|World Cup|Rugby League|Rugby World|footballers?|"
                         r"coach|striker|goalkeeper|batter|bowler|jockey|golfer|tennis|boxer|UFC|NFL|NBA|MLB|"
                         r"Kangaroos (?:vs|v)\b|Constellation Cup)\b", re.I)

UA = "Mozilla/5.0 (compatible; DailyBrief news reader)"
NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "media": "http://search.yahoo.com/mrss/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "dc": "http://purl.org/dc/elements/1.1/",
}
CC_SOURCES = {"The Conversation"}  # CC BY-ND: may be republished unchanged, with credit


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def get(url, timeout=20, limit=None):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-AU,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read(limit) if limit else r.read()


def clean(text, limit=None):
    if not text:
        return ""
    text = html.unescape(re.sub(r"<[^>]+>", " ", text))
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"(Continue reading\.*|Read more\.*|The post .* appeared first on .*)$", "", text).strip()
    text = re.sub(r"^(Follow (?:live updates|our live coverage)\.?\s*)?(Get our [^.]*?(?:email|app|podcast)s?\s*(?:,\s*)?(?:free app or daily news podcast)?\s*)", "", text).strip()
    if limit and len(text) > limit:
        text = text[:limit].rsplit(" ", 1)[0].rstrip(",;:.") + "…"
    return text


def parse_date(s):
    if not s:
        return None
    s = s.strip()
    try:
        d = parsedate_to_datetime(s)
    except Exception:
        try:
            d = datetime.fromisoformat(s.replace("Z", "+00:00"))
        except Exception:
            return None
    if d.tzinfo is None:
        d = d.replace(tzinfo=timezone.utc)
    return d.astimezone(timezone.utc)


IMG_RE = re.compile(r"<img[^>]+src=[\"']([^\"']+)[\"']", re.I)
OG_RE = re.compile(r"<meta[^>]+(?:property|name)=[\"'](?:og:image|twitter:image)[\"'][^>]+content=[\"']([^\"']+)|"
                   r"<meta[^>]+content=[\"']([^\"']+)[\"'][^>]+(?:property|name)=[\"'](?:og:image|twitter:image)[\"']", re.I)


def feed_image(node):
    best, best_w = None, -1
    for tag in ("media:content", "media:thumbnail", "media:group/media:content"):
        for m in node.findall(tag, NS):
            url = m.get("url")
            if not url or (m.get("medium") and m.get("medium") != "image"):
                continue
            w = int(m.get("width") or 0)
            if w > best_w and (w <= 1200 or best is None):
                best, best_w = url, w
    if not best:
        enc = node.find("enclosure")
        if enc is not None and (enc.get("type") or "").startswith("image"):
            best = enc.get("url")
    return best


TRACKER = re.compile(r"count\.gif|pixel|/count/|tracking|feedburner|doubleclick|\.gif(\?|$)|1x1|spacer", re.I)


def html_image(*chunks):
    for c in chunks:
        for m in IMG_RE.finditer(c or ""):
            src = html.unescape(m.group(1))
            if src.startswith("http") and not TRACKER.search(src):
                return src
    return None


def parse_feed(url):
    root = ET.fromstring(get(url, timeout=25))
    out = []
    for it in root.findall(".//item"):
        out.append({
            "title": clean(it.findtext("title")),
            "url": (it.findtext("link") or it.findtext("guid") or "").strip(),
            "summary": it.findtext("description") or "",
            "published": parse_date(it.findtext("pubDate") or it.findtext("dc:date", namespaces=NS)),
            "image": feed_image(it) or html_image(it.findtext("content:encoded", namespaces=NS), it.findtext("description")),
            "cats": [c.text for c in it.findall("category")],
        })
    for en in root.findall("atom:entry", NS):
        link = ""
        for l in en.findall("atom:link", NS):
            if l.get("rel", "alternate") == "alternate":
                link = l.get("href", "")
        content = en.findtext("atom:content", namespaces=NS)
        out.append({
            "title": clean(en.findtext("atom:title", namespaces=NS)),
            "url": link,
            "summary": en.findtext("atom:summary", namespaces=NS) or content or "",
            "published": parse_date(en.findtext("atom:published", namespaces=NS) or en.findtext("atom:updated", namespaces=NS)),
            "image": feed_image(en) or html_image(content, en.findtext("atom:summary", namespaces=NS)),
            "cats": [c.get("term") or c.get("label") for c in en.findall("atom:category", NS)],
        })
    return out


def is_sport(it):
    if any((c or "").strip().lower() in SPORT_CATS for c in it.get("cats", [])):
        return True
    return bool(SPORT_URL.search(it["url"]) or SPORT_TITLE.search(it["title"]))


def url_key(url):
    return re.sub(r"[?#].*$", "", url).rstrip("/")


def title_key(title):
    return re.sub(r"\W+", "", title.lower())[:80]


def to_story(it, source, now, max_age=MAX_AGE):
    """Feed entry -> story dict, or None when it should be skipped."""
    url, title = it["url"], it["title"]
    if not url.startswith("http") or not title:
        return None
    if SKIP_TITLE.search(title) or SKIP_URL.search(url) or is_sport(it):
        return None
    pub = it["published"] or now
    if now - pub > max_age:
        return None
    return {
        "id": hashlib.sha1(url_key(url).encode()).hexdigest()[:12],
        "title": title,
        "url": url,
        "source": source,
        "summary": clean(it["summary"], 260),
        "published": pub.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "_img": it["image"] or "",
    }


# ---------------------------------------------------------------------------
# Article pages: share picture and (where allowed) the article text
# ---------------------------------------------------------------------------
JUNK_PARA = re.compile(r"^(-\s*)?(Read more|Related|Advertisement|Loading|Share this|Sign up|Follow us|Topics?:|Posted |Updated |Published$|"
                       r"For the latest from SBS|Get all the latest|Download our app|Subscribe to)", re.I)


def read_page(story, want_text):
    try:
        raw = get(story["url"], timeout=20, limit=1_500_000).decode("utf-8", "ignore")
    except Exception:
        return None, None
    img = None
    m = OG_RE.search(raw[:200_000])
    if m:
        img = html.unescape(m.group(1) or m.group(2))
    text = None
    if want_text:
        try:
            import trafilatura
            doc = trafilatura.bare_extraction(raw, url=story["url"], include_comments=False, include_tables=False,
                                              favor_precision=True, with_metadata=True)
            if doc is not None:
                get_ = (lambda k: getattr(doc, k, None)) if not isinstance(doc, dict) else doc.get
                body = get_("text") or ""
                author = get_("author") or ""
                paras = [re.sub(r"\s+", " ", p).strip() for p in body.split("\n")]
                paras = [p for p in paras if p and not JUNK_PARA.match(p)]
                if sum(len(p) for p in paras) >= 600:
                    text = {"paras": paras, "author": author}
        except Exception:
            text = None
    return img, text


def make_inline(url, size, quality):
    try:
        from PIL import Image, ImageOps
        im = Image.open(io.BytesIO(get(url, timeout=15)))
        im = ImageOps.exif_transpose(im).convert("RGB")
        im = ImageOps.fit(im, size, Image.LANCZOS, centering=(0.5, 0.4))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=quality, optimize=True, progressive=True)
        return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    except Exception:
        return ""


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out")
    ap.add_argument("--regions", default="all")
    ap.add_argument("--images", choices=["url", "inline"], default="url")
    ap.add_argument("--text", choices=["cc", "all", "none"], default="cc")
    a = ap.parse_args()
    regions = list(REGIONS) if a.regions == "all" else [r.strip() for r in a.regions.split(",") if r.strip() in REGIONS]
    now = datetime.now(timezone.utc)

    # 1. Fetch every feed once.
    urls = {u for _, _, u, _ in SECTION_FEEDS} | {u for _, u in REGION_MINE}
    for r in regions:
        urls |= {u for _, u in REGIONS[r][1]}
    raw, errors = {}, []
    with cf.ThreadPoolExecutor(16) as ex:
        futs = {ex.submit(parse_feed, u): u for u in urls}
        for f in cf.as_completed(futs):
            try:
                raw[futs[f]] = f.result()
            except Exception as e:  # one dead feed never stops the run
                errors.append(f"{futs[f]}: {e}")

    # 2. Topic sections, deduped across sections in priority order.
    buckets = {s: [] for s in SECTION_ORDER}
    seen_u, seen_t = set(), set()
    feeds = sorted(SECTION_FEEDS, key=lambda f: (SECTION_ORDER.index(f[0]), f[3] != "all"))
    for section, source, url, keep in feeds:
        for it in raw.get(url, []):
            st = to_story(it, source, now)
            if not st:
                continue
            k, t = url_key(st["url"]), title_key(st["title"])
            if k in seen_u or t in seen_t:
                continue
            if keep != "all" and not KEYWORDS[keep].search(f"{st['title']} {st['summary']}"):
                continue
            target = section
            if section in ("tech", "headlines", "finance") and AI_RE.search(st["title"]):
                target = "ai"
            seen_u.add(k)
            seen_t.add(t)
            buckets[target].append(st)
    sections = {s: sorted(v, key=lambda x: x["published"], reverse=True)[:PER_SECTION] for s, v in buckets.items()}

    # 3. Local editions: the state's own feeds plus national stories naming its places.
    for r in regions:
        _, rfeeds, names, abbr = REGIONS[r]
        place = re.compile(rf"\b({names})\b", re.I)
        short = re.compile(rf"\b({abbr})\b")
        items, su, stt = [], set(), set()
        cands = [(s, u, False) for s, u in rfeeds] + [(s, u, True) for s, u in REGION_MINE]
        for source, url, mined in cands:
            for it in raw.get(url, []):
                st = to_story(it, source, now, MAX_AGE_LOCAL)
                if not st or (mined and not (place.search(f"{st['title']} {st['summary']}") or short.search(st["title"]))):
                    continue
                k, t = url_key(st["url"]), title_key(st["title"])
                if k in su or t in stt:
                    continue
                su.add(k)
                stt.add(t)
                items.append(st)
        sections[f"local-{r}"] = sorted(items, key=lambda x: x["published"], reverse=True)[:PER_REGION]

    # Same story in several sections -> one shared object, so pictures and text are fetched once.
    unique = {}
    for name, items in sections.items():
        sections[name] = [unique.setdefault(st["id"], st) for st in items]

    # 4. Article pages: fetch once per story that needs a picture or text.
    def wants_text(st):
        return a.text == "all" or (a.text == "cc" and st["source"] in CC_SOURCES)

    todo = [st for st in unique.values() if wants_text(st) or not st["_img"]]
    texts = {}
    with cf.ThreadPoolExecutor(12) as ex:
        for st, (img, text) in zip(todo, ex.map(lambda s: read_page(s, wants_text(s)), todo)):
            if img and not st["_img"]:
                st["_img"] = img
            if text:
                texts[st["id"]] = dict(text, cc=st["source"] in CC_SOURCES)

    # 5. Pictures.
    if a.images == "url":
        for st in unique.values():
            if st["_img"]:
                st["image"] = st["_img"]
    else:
        jobs = {}
        for items in sections.values():
            for n, st in enumerate(items[:12]):
                if st["_img"]:
                    big = n == 0 or (st["id"] in jobs and jobs[st["id"]][1][0] > 300)
                    jobs[st["id"]] = (st, (720, 405) if big else (240, 160), 60 if big else 55)
        with cf.ThreadPoolExecutor(12) as ex:
            for (st, _, _), data in zip(jobs.values(), ex.map(lambda j: make_inline(j[0]["_img"], j[1], j[2]), jobs.values())):
                if data:
                    st["image"] = data

    # 6. Article text in chunks under 200 KB (a Claude database document holds at most 256 KiB).
    chunks, cur, cur_size = [], {}, 0
    for sid, t in texts.items():
        size = len(json.dumps(t, ensure_ascii=False).encode())
        if size > 190_000:
            continue
        if cur and cur_size + size > 190_000:
            chunks.append(cur)
            cur, cur_size = {}, 0
        cur[sid] = t
        cur_size += size
    if cur:
        chunks.append(cur)
    text_ref = {sid: f"t{n:02d}" for n, ch in enumerate(chunks, 1) for sid in ch}

    # 7. Write.
    for sub in ("feeds", "text"):
        shutil.rmtree(os.path.join(a.out, sub), ignore_errors=True)
        os.makedirs(os.path.join(a.out, sub), exist_ok=True)
    stamp = now.strftime("%Y-%m-%dT%H:%M:%SZ")
    counts = {}
    for name, items in sections.items():
        out_items = []
        for st in items:
            d = {k: v for k, v in st.items() if not k.startswith("_")}
            if st["id"] in text_ref:
                d["text"] = text_ref[st["id"]]
            out_items.append(d)
        doc = {"section": name, "updatedAt": stamp, "items": out_items}
        for it in reversed(out_items):  # stay under the database document limit
            if len(json.dumps(doc, ensure_ascii=False).encode()) <= 200_000:
                break
            it.pop("image", None)
        counts[name] = len(out_items)
        with open(os.path.join(a.out, "feeds", f"{name}.json"), "w") as f:
            json.dump(doc, f, ensure_ascii=False, separators=(",", ":"))
    for n, ch in enumerate(chunks, 1):
        with open(os.path.join(a.out, "text", f"t{n:02d}.json"), "w") as f:
            json.dump({"articles": ch}, f, ensure_ascii=False, separators=(",", ":"))
    status = {
        "updatedAt": stamp,
        "counts": counts,
        "regions": [{"id": r, "label": REGIONS[r][0]} for r in regions],
        "sections": list(sections),
        "textChunks": [f"t{n:02d}" for n in range(1, len(chunks) + 1)],
        "articlesWithText": len(text_ref),
        "errors": errors[:10],
    }
    with open(os.path.join(a.out, "status.json"), "w") as f:
        json.dump(status, f, ensure_ascii=False)
    print(json.dumps({k: status[k] for k in ("updatedAt", "counts", "textChunks", "articlesWithText", "errors")}, indent=1))


if __name__ == "__main__":
    main()
