#!/usr/bin/env python3
"""Awesome News fetcher.

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
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime

# ---------------------------------------------------------------------------
# Sources. Only outlets that publish full articles free of charge.
# Left out on purpose: Courier-Mail, The Australian, AFR, Brisbane Times / SMH /
# The Age, The Verge, Reuters, Bloomberg, MIT Tech Review (paywalls or meters).
# The Guardian is in at the owner's request (free RSS; live blogs are skipped).
# --private-text ENV: the full text of every other story too, but only ever written
# encrypted (AES-GCM, key from the passphrase in that environment variable), so the
# public site hosts locked files that only the owner's devices can open.
# ---------------------------------------------------------------------------
ABC_JUST_IN = "https://www.abc.net.au/news/feed/51120/rss.xml"
ABC_TOP = "https://www.abc.net.au/news/feed/45910/rss.xml"
ABC_BUSINESS = "https://www.abc.net.au/news/feed/51892/rss.xml"
SBS_LATEST = "https://www.sbs.com.au/news/topic/latest/feed"
SBS_AUSTRALIA = "https://www.sbs.com.au/news/topic/australia/feed"
CONV = "https://theconversation.com/au/{}/articles.atom"
GU = "https://www.theguardian.com/{}/rss"
SEVEN = "https://7news.com.au/{}/feed"
ROADMAP = "https://www.microsoft.com/releasecommunications/api/v2/m365/rss"  # official Microsoft 365 feature roadmap

SECTION_FEEDS = [
    # section, source label, url, keep ("all" or a keyword filter name)
    # Microsoft 365 Copilot (Word, Teams, Outlook, Excel...). GitHub Copilot is left to the AI and Tech tabs.
    ("copilot", "M365 Roadmap", ROADMAP, "roadmap"),
    ("copilot", "Office 365 for IT Pros", "https://office365itpros.com/feed/", "copilot"),
    ("copilot", "Microsoft 365 Blog", "https://www.microsoft.com/en-us/microsoft-365/blog/feed/", "copilot"),
    ("copilot", "Microsoft Blog", "https://blogs.microsoft.com/feed/", "copilot"),
    ("copilot", "Windows Central", "https://www.windowscentral.com/feeds/all", "copilot365"),
    ("politics", "The Conversation", CONV.format("politics"), "all"),
    ("politics", "ABC News", ABC_JUST_IN, "politics"),
    ("politics", "SBS News", SBS_AUSTRALIA, "politics"),
    ("politics", "The Guardian", GU.format("australia-news/australian-politics"), "all"),
    ("politics", "7NEWS", SEVEN.format("politics"), "all"),
    ("finance", "The Conversation", CONV.format("business"), "all"),
    ("finance", "ABC News", ABC_BUSINESS, "finance"),
    ("finance", "SmartCompany", "https://www.smartcompany.com.au/feed/", "all"),
    ("finance", "The Guardian", GU.format("au/business"), "finance"),
    ("finance", "7NEWS", SEVEN.format("business/finance"), "all"),
    ("ai", "The Conversation", "https://theconversation.com/topics/artificial-intelligence-ai-90/articles.atom", "all"),
    ("ai", "Ars Technica", "https://arstechnica.com/ai/feed/", "all"),
    ("ai", "TechCrunch", "https://techcrunch.com/category/artificial-intelligence/feed/", "all"),
    ("ai", "The Guardian", GU.format("technology/artificialintelligenceai"), "all"),
    ("tech", "The Conversation", CONV.format("technology"), "all"),
    ("tech", "iTnews", "https://www.itnews.com.au/RSS/rss.ashx", "all"),
    ("tech", "Ars Technica", "https://feeds.arstechnica.com/arstechnica/index", "all"),
    ("tech", "TechCrunch", "https://techcrunch.com/feed/", "all"),
    ("tech", "Engadget", "https://www.engadget.com/rss.xml", "all"),
    ("tech", "The Guardian", GU.format("au/technology"), "all"),
    ("tech", "7NEWS", SEVEN.format("technology"), "all"),
    ("headlines", "ABC News", ABC_TOP, "all"),
    ("headlines", "SBS News", SBS_LATEST, "all"),
    ("headlines", "BBC World", "https://feeds.bbci.co.uk/news/world/rss.xml", "all"),
    ("headlines", "The Guardian", GU.format("australia-news"), "all"),
    ("headlines", "7NEWS", SEVEN.format("news"), "all"),
]

REGIONS = {
    # id: (label, [(source, url)], place names (any case), abbreviations (exact case))
    "qld": ("Queensland", [("ABC Brisbane", "https://www.abc.net.au/news/feed/8053540/rss.xml"), ("The Guardian", GU.format("australia-news/queensland")), ("7NEWS Brisbane", SEVEN.format("news/qld"))],
            r"Brisbane|Queensland(?:ers?)?|Gold Coast|Sunshine Coast|Logan|Ipswich|Moreton Bay|Redland|Toowoomba|Cairns|"
            r"Townsville|Mackay|Rockhampton|Bundaberg|Gympie|Crisafulli", r"Qld|QLD"),
    "nsw": ("New South Wales", [("ABC Sydney", "https://www.abc.net.au/news/feed/8055316/rss.xml")],
            r"Sydney|New South Wales|Newcastle|Wollongong|Central Coast|Blue Mountains|Parramatta|Minns", r"NSW"),
    "vic": ("Victoria", [("ABC Melbourne", "https://www.abc.net.au/news/feed/8057136/rss.xml")],
            r"Melbourne|Victorian?s?|Geelong|Ballarat|Bendigo|Gippsland|Jacinta Allan", r"Vic"),
    "wa": ("Western Australia", [("ABC Perth", "https://www.abc.net.au/news/feed/8057096/rss.xml")],
           r"Perth|Western Australian?s?|Fremantle|Bunbury|Kimberley|Pilbara|Kalgoorlie", r"WA"),
    "sa": ("South Australia", [("ABC Adelaide", "https://www.abc.net.au/news/feed/8057540/rss.xml")],
           r"Adelaide|South Australian?s?|Mount Gambier|Whyalla|Port Augusta|Malinauskas", r"SA"),
    "tas": ("Tasmania", [], r"Tasmanian?s?|Hobart|Launceston|Devonport|Burnie", r"Tas"),
    "act": ("Canberra", [], r"Canberra|Australian Capital Territory", r"ACT"),
    "nt": ("Northern Territory", [], r"Darwin|Northern Territory|Alice Springs|Katherine|Arnhem|Tiwi|Wadeye", r"NT"),
}
# National feeds mined for each region's place names.
REGION_MINE = [("ABC News", ABC_JUST_IN), ("ABC News", ABC_TOP), ("SBS News", SBS_AUSTRALIA), ("SBS News", SBS_LATEST),
               ("The Conversation", CONV.format("politics")), ("The Conversation", CONV.format("environment")),
               ("The Guardian", GU.format("australia-news")),
               ("7NEWS", SEVEN.format("news"))]

# Interests people can switch on. Each takes its own feeds plus any story, from any feed,
# whose headline matches its keywords. Groups set the colour and where it sits in the picker.
INTERESTS = [
    # id, label, group, [(source, url)], headline keywords (or None)
    ("world", "World", "news", [("SBS News", "https://www.sbs.com.au/news/topic/world/feed"), ("BBC World", "https://feeds.bbci.co.uk/news/world/rss.xml"),
                                ("Global Voices", "https://globalvoices.org/feed/"), ("360info", "https://360info.org/feed/"),
                                ("The Guardian", GU.format("world"))], None),
    ("science", "Science", "tech", [("Ars Technica", "https://arstechnica.com/science/feed/"), ("BBC Science", "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml"),
                                    ("ScienceAlert", "https://www.sciencealert.com/feed"), ("New Atlas", "https://newatlas.com/index.rss"),
                                    ("Knowable Magazine", "https://knowablemagazine.org/rss"), ("The Guardian", GU.format("science"))],
     r"scientists?|researchers?|new study|study finds|physics|chemistry|biolog\w*|fossils?|evolution|DNA|genes?|genetic\w*|quantum|dinosaurs?"),
    ("space", "Space", "tech", [("NASA", "https://www.nasa.gov/feed/"), ("Ars Technica", "https://arstechnica.com/space/feed/"), ("Space.com", "https://www.space.com/feeds/all")],
     r"space|NASA|rockets?|astronauts?|the moon|lunar|Mars|telescopes?|planets?|galax\w+|asteroids?|comets?|satellites?|SpaceX|orbit\w*|cosmic|black holes?"),
    ("cyber", "Cyber security", "tech", [("Ars Technica", "https://arstechnica.com/security/feed/"), ("EFF", "https://www.eff.org/rss/updates.xml"),
                                         ("The Conversation", "https://theconversation.com/topics/cybersecurity-535/articles.atom")],
     r"cyber\w*|hack(?:er|ers|ed|ing|s)?|data breach\w*|breach(?:es|ed)?|ransomware|malware|phishing|scam(?:s|mers)?|privacy|passwords?|spyware"),
    ("gaming", "Gaming", "tech", [("Ars Technica", "https://arstechnica.com/gaming/feed/"), ("PC Gamer", "https://www.pcgamer.com/rss/"), ("Kotaku", "https://kotaku.com/rss")],
     r"video games?|gaming|gamers?|Nintendo|PlayStation|Xbox|Steam"),
    ("cars", "Cars & EVs", "tech", [("Ars Technica", "https://arstechnica.com/cars/feed/")],
     r"EVs?|electric vehicles?|electric cars?|Tesla|BYD|cars?|motorists?|driverless|self-driving|fuel prices?|petrol"),
    ("startups", "Startups", "tech", [("TechCrunch", "https://techcrunch.com/category/startups/feed/"), ("SmartCompany", "https://www.smartcompany.com.au/feed/"),
                                      ("Startup Daily", "https://www.startupdaily.net/feed/")], r"start-?ups?|founders?|venture capital|unicorn"),
    ("health", "Health", "life", [("The Conversation", CONV.format("health")), ("BBC Health", "https://feeds.bbci.co.uk/news/health/rss.xml")],
     r"health|hospitals?|doctors?|GPs?|cancer|vaccines?|diet|sleep|disease|medicine|medical|patients?|nurses?|dementia|obesity|nutrition"),
    ("education", "Education", "life", [("The Conversation", CONV.format("education"))],
     r"schools?|students?|teachers?|universit\w+|education|HECS|childcare|early childhood|NAPLAN"),
    ("housing", "Cities & housing", "life", [("The Conversation", CONV.format("cities"))],
     r"housing|rent(?:ers|al|s)?|property|mortgages?|home ?owners?|house prices|landlords?|apartments?|suburbs?"),
    ("goodnews", "Good news", "life", [("Good News Network", "https://www.goodnewsnetwork.org/feed/"), ("Positive News", "https://www.positive.news/feed/")], None),
    ("arts", "Arts & entertainment", "culture", [("The Conversation", CONV.format("arts")), ("BBC Entertainment", "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml")],
     r"films?|movies?|TV|television|series|albums?|music|singers?|bands?|concerts?|festival|books?|novels?|authors?|artists?|gallery|theatre|exhibition|Netflix|Oscars?"),
    ("environment", "Environment & climate", "planet", [("The Conversation", CONV.format("environment")),
                                                        ("The Conversation", "https://theconversation.com/topics/climate-change-27/articles.atom"),
                                                        ("The Guardian", GU.format("au/environment"))],
     r"climate|emissions?|renewables?|solar|wind farms?|coal|net zero|pollution|plastics?|recycling|drought|floods?|flooding|bushfires?|heatwaves?|environment\w*|carbon"),
    ("wildlife", "Wildlife & nature", "planet", [],
     r"wildlife|species|animals?|birds?|koalas?|kangaroos?|reefs?|whales?|sharks?|crocs?|crocodiles?|turtles?|conservation|endangered|extinct\w*|insects?|bees?|forests?|national parks?"),
]
INTEREST_GROUPS = [("news", "News"), ("tech", "Tech & science"), ("life", "Life"), ("culture", "Culture"), ("planet", "Planet")]
PER_INTEREST = 30
NO_MINE = {"PC Gamer", "Kotaku", "Startup Daily", "Good News Network", "Positive News"}  # too niche to lend stories to other interests
MAX_AGE_INTEREST = timedelta(days=10)  # niche feeds publish less often

CITIES = {"qld": ("Brisbane", -27.47, 153.03), "nsw": ("Sydney", -33.87, 151.21), "vic": ("Melbourne", -37.81, 144.96),
          "wa": ("Perth", -31.95, 115.86), "sa": ("Adelaide", -34.93, 138.6), "tas": ("Hobart", -42.88, 147.33),
          "act": ("Canberra", -35.28, 149.13), "nt": ("Darwin", -12.46, 130.84)}
SECTION_ORDER = ["copilot", "politics", "finance", "ai", "tech", "headlines"]
PER_SECTION = 40
PER_REGION = 30
MAX_AGE = timedelta(days=4)
MAX_AGE_LOCAL = timedelta(days=10)  # smaller states publish less, so look back further
MAX_AGE_COPILOT = timedelta(days=21)  # product blogs post a few times a week

# ---------------------------------------------------------------------------
# Filters
# ---------------------------------------------------------------------------
AI_RE = re.compile(r"\b(AI|A\.I\.|artificial intelligence|OpenAI|Anthropic|ChatGPT|Claude|Gemini|"
                   r"LLMs?|chatbots?|machine learning|deepfakes?|Copilot|generative)\b", re.I)
COPILOT_RE = re.compile(r"\bCopilot\b", re.I)
GITHUB_RE = re.compile(r"\b(GitHub|VS ?Code|Visual Studio)\b", re.I)
M365_CATS = {"Microsoft Copilot (Microsoft 365)", "Word", "Excel", "PowerPoint", "Outlook", "Microsoft Teams", "OneNote",
             "OneDrive", "SharePoint", "Planner", "Microsoft Loop", "Microsoft 365 app", "Microsoft 365"}
NOT_M365_RE = re.compile(r"^(Dynamics 365|Power (Apps|Automate|BI|Pages|Platform)|Microsoft Dataverse|Microsoft Copilot Studio|Microsoft Fabric|Azure)")
ROADMAP_STATUS = ("Rolling out", "Launched", "In development")
ROADMAP_MAX = 20  # the roadmap changes in bulk; keep it from crowding out articles


def is_m365_copilot(text):
    return bool(COPILOT_RE.search(text) and not GITHUB_RE.search(text))


KEYWORDS = {
    "copilot": re.compile(r"\bCopilot\b(?!.*\bGitHub\b)", re.I | re.S),
    "copilot365": re.compile(r"(?=.*\bCopilot\b)(?=.*\b(Microsoft 365|M365|Word|Excel|PowerPoint|Outlook|Teams|OneNote|SharePoint)\b)(?!.*\bGitHub\b)", re.S),
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
SKIP_URL = re.compile(r"/(video|videos|audio|podcasts?|sounds|programs|live-?blog-?ads|live|"
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

UA = "Mozilla/5.0 (compatible; AwesomeNews reader)"
NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "media": "http://search.yahoo.com/mrss/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "dc": "http://purl.org/dc/elements/1.1/",
}
# Sources whose licence lets anyone republish the full article (with credit), so the
# public site can show them in full. Everything else is a preview that links out.
CC_SOURCES = {
    "The Conversation": ("CC BY-ND 4.0", "https://creativecommons.org/licenses/by-nd/4.0/"),
    "360info": ("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
    "Global Voices": ("CC BY 3.0", "https://creativecommons.org/licenses/by/3.0/"),
    "EFF": ("CC BY 4.0", "https://creativecommons.org/licenses/by/4.0/"),
    "NASA": ("Public domain", "https://www.nasa.gov/nasa-brand-center/images-and-media/"),
}


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


def parse_xml(raw):
    """Strict first; if a feed has stray characters (bare & or control codes), clean them and try again."""
    try:
        return ET.fromstring(raw)
    except ET.ParseError:
        t = raw.decode("utf-8", "ignore") if isinstance(raw, bytes) else raw
        if re.search(r"<html[\s>]", t[:3000], re.I):
            raise ValueError("sent a web page, not a feed (blocked or moved)")
        t = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", "", t)
        t = re.sub(r"&(?!(?:#\d+|#x[0-9a-fA-F]+|amp|lt|gt|quot|apos);)", "&amp;", t)
        t = re.sub(r"^\s*<\?xml[^>]*\?>", "", t)
        return ET.fromstring(t)


def parse_feed(url):
    root = parse_xml(get(url, timeout=25))
    out = []
    for it in root.findall(".//item"):
        out.append({
            "title": clean(it.findtext("title")),
            "url": (it.findtext("link") or it.findtext("guid") or "").strip(),
            "summary": it.findtext("description") or "",
            "published": parse_date(it.findtext("pubDate") or it.findtext("dc:date", namespaces=NS)),
            "image": feed_image(it) or html_image(it.findtext("content:encoded", namespaces=NS), it.findtext("description")),
            "content": it.findtext("content:encoded", namespaces=NS) or "",
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
            "content": content or "",
            "cats": [c.get("term") or c.get("label") for c in en.findall("atom:category", NS)],
        })
    return out


def is_sport(it):
    if any((c or "").strip().lower() in SPORT_CATS for c in it.get("cats", [])):
        return True
    return bool(SPORT_URL.search(it["url"]) or SPORT_TITLE.search(it["title"]))


def url_key(url):
    base = re.sub(r"[?#].*$", "", url).rstrip("/")
    m = re.search(r"[?&]id=(\d+)", url)
    return f"{base}#{m.group(1)}" if m and base.endswith("/roadmap") else base  # roadmap entries differ only by ?id=


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
        "_raw": it["summary"],
        "_feed": it.get("content") or it["summary"],
        "_cats": [c for c in it.get("cats", []) if c],
    }


def roadmap_story(st):
    """Microsoft 365 roadmap entry: the feed holds the whole feature note, so it becomes the article."""
    cats = st["_cats"]
    if not (set(cats) & M365_CATS) or not COPILOT_RE.search(st["title"]) or NOT_M365_RE.search(st["title"]):
        return None
    status = next((c for c in cats if c in ROADMAP_STATUS), "")
    raw = re.sub(r"(?i)<br\s*/?>", "\n", st["_raw"])
    raw = re.sub(r"(?i)</p>|</li>|<li>", "\n", raw)
    paras = [clean(p) for p in raw.split("\n")]
    paras = [p for p in paras if p]
    dates = [p for p in paras if re.match(r"^(GA|Preview) date:", p)]
    body = [p for p in paras if p not in dates]
    platforms = [c for c in cats if c in ("Desktop", "Web", "Mac", "iOS", "Android")]
    facts = " · ".join(x for x in [status, ", ".join(platforms)] + dates if x)
    st["summary"] = clean(f"{status + ': ' if status else ''}{' '.join(body)}", 260)
    st["_text"] = {"paras": body + ([f"Status: {facts}."] if facts else []), "author": "Microsoft 365 roadmap"}
    st["_img"] = ""
    return st


# ---------------------------------------------------------------------------
# Article pages: share picture and (where allowed) the article text
# ---------------------------------------------------------------------------
JUNK_PARA = re.compile(r"^(-\s*)?(Read more|Related|Advertisement|Loading|Share this|Sign up|Follow us|Topics?:|Posted |Updated |Published$|"
                       r"For the latest from SBS|Get all the latest|Download our app|Subscribe to|Tomorrow's picture)", re.I)


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


FEED_JUNK = re.compile(r"^(The post .* appeared first on .*|Continue reading.*|Read more.*|Read (the )?full (story|article).*|Comments( \(\d+\))?|Join us on .*|Follow (us|.* on) (on )?(X|Twitter|Facebook|Instagram|Threads|Bluesky|Google News).*|\[(…|\.\.\.)\]|"
                       r"(This|The) (article|story) (was )?(originally )?(published|appeared) .*|Source:.*|Image( credit)?:.*|Photo:.*)$", re.I)


def feed_paras(raw):
    """What the publisher puts in its own RSS feed, split into paragraphs. Feed readers show this as is."""
    if not raw:
        return []
    t = re.sub(r"(?is)<(script|style|figure|figcaption|iframe)\b.*?</\1>", " ", raw)
    t = re.sub(r"(?i)<br\s*/?>|</p>|</li>|</h[1-6]>|</blockquote>|</div>", "\n", t)
    t = re.sub(r"(?i)<li[^>]*>", "\n- ", t)
    out = []
    for p in t.split("\n"):
        lead = "- " if p.lstrip().startswith("- ") else ""
        p = html.unescape(re.sub(r"<[^>]+>", " ", p))
        p = re.sub(r"\s+", " ", p).strip().lstrip("- ").strip()
        if len(p) < 2 or JUNK_PARA.match(p) or FEED_JUNK.match(p):
            continue
        out.append(lead + p)
    return out


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
# TV: short news clips from the broadcasters' own YouTube channels, played back to back.
# Only clips the channel allows to be played on other sites; no Shorts, live streams or sport.
# ---------------------------------------------------------------------------
TV_CHANNELS = [  # (name shown, YouTube channel id, days to look back)
    ("7NEWS", "UC5T7D-Dh1eDGtsAFCuwv_Sw", 2),
    ("ABC News", "UCVgO39Bk5sMo66-6o6Spn6Q", 2),
    ("9News", "UCIYLOcEUX6TbBo7HQVF2PKA", 2),
    ("10 News", "UC64A-bbH15b5kN5A32CErOA", 2),
    ("SBS News", "UCuuTCooIMbBFHNbPcSS70uw", 2),
    ("BBC News", "UC16niRr50-MSBwiO3YDb3RA", 2),
    ("Guardian News", "UCIRYBXDze5krPDzAEOxFGVA", 3),
]
YT_NS = {"atom": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015", "media": "http://search.yahoo.com/mrss/"}
TV_SKIP = re.compile(r"\b(live ?stream|livestream|watch live|live coverage|full (?:episode|bulletin|show|program|interview)|podcast|trailer|"
                     r"press conference|in full)\b|^\s*LIVE\b|[|:]\s*LIVE\b", re.I)
TV_TAIL = re.compile(r"\s*[|│]\s*[^|│]*$")
TV_STOP = set("the and for with that this from into over after says said will have has are was were been about their they them than then what when where "
              "which while more most news just your you its his her our new how why who not can could would should may out off one two all now get got amid "
              "set make made here there abc 7news 9news sbs bbc guardian australia australian".split())
TV_MAX_SECS = 15 * 60
ARCHIVE_DAYS = timedelta(days=180)  # how far back search reaches
ARCHIVE_MAX = 20000


def tv_words(title):
    return {w for w in re.findall(r"[a-z0-9]+", title.lower().replace("’", "").replace("'", "")) if len(w) > 2 and w not in TV_STOP}


def embeddable(vid):
    """YouTube's own embed check: 200 when the channel lets the clip play on other sites."""
    try:
        get(f"https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v={vid}", timeout=12)
        return True
    except urllib.error.HTTPError as e:
        return e.code not in (401, 403, 404)
    except Exception:
        return True  # can't tell; the app skips anything that won't play


def fetch_tv(now, errors):
    lanes = []
    key = os.environ.get("YT_API_KEY", "").strip()
    for name, cid, days in TV_CHANNELS:
        entries = None
        for attempt in range(2):  # YouTube's free feed is patchy, so try twice
            try:
                root = parse_xml(get(f"https://www.youtube.com/feeds/videos.xml?channel_id={cid}", timeout=20))
                entries = [(
                    (en.findtext("yt:videoId", namespaces=YT_NS) or "").strip(),
                    next((l.get("href", "") for l in en.findall("atom:link", YT_NS)), ""),
                    en.findtext("atom:title", namespaces=YT_NS),
                    en.findtext("atom:published", namespaces=YT_NS),
                    en.findtext("media:group/media:description", namespaces=YT_NS) or "",
                ) for en in root.findall("atom:entry", YT_NS)]
                break
            except Exception as e:
                err = e
                time.sleep(2)
        if entries is None and key:
            # YouTube's official API (a free key) when the feed is down: the channel's uploads list.
            try:
                q = urllib.parse.urlencode({"part": "snippet", "playlistId": "UU" + cid[2:], "maxResults": 15, "key": key})
                data = json.loads(get(f"https://www.googleapis.com/youtube/v3/playlistItems?{q}", timeout=20))
                entries = [((sn.get("resourceId") or {}).get("videoId", ""), "", sn.get("title", ""), sn.get("publishedAt", ""), sn.get("description", ""))
                           for sn in (x.get("snippet") or {} for x in data.get("items", []))]
            except Exception as e:
                err = e
        if entries is None:
            errors.append(f"TV {name}: {err}"[:160])
            continue
        lane = []
        for vid, link, full, pub, desc in entries:
            full = clean(full)
            pub = parse_date(pub)
            if not vid or "/shorts/" in link or not pub or now - pub > timedelta(days=days):
                continue
            if TV_SKIP.search(full) or SPORT_TITLE.search(full) or full.count(";") >= 2:  # "A; B; C" is a bulletin of other clips
                continue
            title = TV_TAIL.sub("", full).strip() or full
            if re.search(r"(?i)\bfull (episode|bulletin|program|show)\b|^FULL EPISODE", desc[:400]):
                continue
            desc = next((ln.strip() for ln in desc.splitlines() if ln.strip() and not re.match(r"(?i)(subscribe|read more|follow|#|http|note:)", ln.strip())), "")
            lane.append({"id": vid, "title": title, "channel": name, "published": pub.strftime("%Y-%m-%dT%H:%M:%SZ"),
                         "thumb": f"https://i.ytimg.com/vi/{vid}/mqdefault.jpg", "summary": clean(desc, 220)})
        lanes.append(lane[:8])
    # Newest from each channel in turn, so no one channel takes over.
    order = [it for r in range(8) for lane in lanes if r < len(lane) for it in [lane[r]]]
    with cf.ThreadPoolExecutor(6) as ex:
        ok = dict(zip([it["id"] for it in order], ex.map(lambda it: embeddable(it["id"]), order)))
    out, seen = [], []
    for it in order:
        if not ok[it["id"]]:
            continue
        w = tv_words(it["title"])
        # The same story from another channel (or twice from one) is only shown once.
        if any(len(w & v) >= 3 and len(w & v) / max(1, min(len(w), len(v))) >= 0.5 for v in seen):
            continue
        seen.append(w)
        out.append(it)
    return out[:45]


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
VAULT_SALT = b"awesome-news-vault-v1"
VAULT_ITER = 310_000


def vault_key(passphrase):
    return hashlib.pbkdf2_hmac("sha256", passphrase.encode(), VAULT_SALT, VAULT_ITER, 32)


def lock(key, data):
    """bytes -> {iv, data} (base64), readable by the app with Web Crypto AES-GCM."""
    import base64
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
    iv = os.urandom(12)
    return {"iv": base64.b64encode(iv).decode(), "data": base64.b64encode(AESGCM(key).encrypt(iv, data, None)).decode()}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out")
    ap.add_argument("--regions", default="all")
    ap.add_argument("--images", choices=["url", "inline"], default="url")
    ap.add_argument("--text", choices=["cc", "all", "none"], default="cc")
    ap.add_argument("--interests", choices=["all", "none"], default="none")
    ap.add_argument("--archive-from", metavar="URL", default="",
                    help="published site to carry the story archive on from, e.g. https://ashley-pettit.github.io/awesome-news/")
    ap.add_argument("--private-text", metavar="ENV", default="",
                    help="also save every story's full text, encrypted with the passphrase in this environment variable")
    a = ap.parse_args()
    passphrase = os.environ.get(a.private_text, "") if a.private_text else ""
    key = vault_key(passphrase) if passphrase and a.text == "cc" else None
    regions = list(REGIONS) if a.regions == "all" else [r.strip() for r in a.regions.split(",") if r.strip() in REGIONS]
    now = datetime.now(timezone.utc)

    # 1. Fetch every feed once.
    urls = {u for _, _, u, _ in SECTION_FEEDS} | {u for _, u in REGION_MINE}
    interests = INTERESTS if a.interests == "all" else []
    for _, _, _, ifeeds, _ in interests:
        urls |= {u for _, u in ifeeds}
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
    roadmap_left = ROADMAP_MAX
    feeds = sorted(SECTION_FEEDS, key=lambda f: (SECTION_ORDER.index(f[0]), f[3] != "all"))
    for section, source, url, keep in feeds:
        for it in raw.get(url, []):
            st = to_story(it, source, now, MAX_AGE_COPILOT if section == "copilot" else MAX_AGE)
            if not st:
                continue
            k, t = url_key(st["url"]), title_key(st["title"])
            if k in seen_u or t in seen_t:
                continue
            if keep == "roadmap":
                if roadmap_left <= 0 or not roadmap_story(st):
                    continue
                roadmap_left -= 1
            elif keep != "all" and not KEYWORDS[keep].search(f"{st['title']} {st['summary']}"):
                continue
            target = section
            if is_m365_copilot(st["title"]):
                target = "copilot"  # Microsoft 365 Copilot news from any feed goes to its own tab
            elif section in ("tech", "headlines", "finance") and AI_RE.search(st["title"]):
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

    # 3b. Interests: own feeds first, then any story whose headline matches the keywords.
    feed_source = {}
    for _, src, u, _ in SECTION_FEEDS:
        feed_source.setdefault(u, src)
    for _, ifeeds, *_ in [(x[0], x[3]) for x in interests]:
        for src, u in ifeeds:
            feed_source.setdefault(u, src)
    for iid, _, _, ifeeds, words in interests:
        kw = re.compile(rf"\b({words})\b", re.I) if words else None
        items, su, stt = [], set(), set()
        own = {u for _, u in ifeeds}
        cands = [(src, u) for src, u in ifeeds] + ([(feed_source[u], u) for u in raw
                                                    if u not in own and u in feed_source and feed_source[u] not in NO_MINE] if kw else [])
        for source, url in cands:
            for it in raw.get(url, []):
                st = to_story(it, source, now, MAX_AGE_INTEREST)
                if not st or (url not in own and not kw.search(st["title"])):
                    continue
                k, t = url_key(st["url"]), title_key(st["title"])
                if k in su or t in stt:
                    continue
                su.add(k)
                stt.add(t)
                items.append(st)
        sections[iid] = sorted(items, key=lambda x: x["published"], reverse=True)[:PER_INTEREST]

    # Same story in several sections -> one shared object, so pictures and text are fetched once.
    unique = {}
    for name, items in sections.items():
        sections[name] = [unique.setdefault(st["id"], st) for st in items]

    # 4. Article pages: fetch once per story that needs a picture or text.
    def wants_text(st):
        return a.text == "all" or (a.text == "cc" and (st["source"] in CC_SOURCES or key is not None))

    if a.text == "none":
        for st in unique.values():
            st.pop("_text", None)
    texts = {st["id"]: dict(st["_text"], cc=False) for st in unique.values() if st.get("_text")}
    todo = [st for st in unique.values() if not st.get("_text") and (wants_text(st) or not st["_img"])]
    with cf.ThreadPoolExecutor(12) as ex:
        for st, (img, text) in zip(todo, ex.map(lambda s: read_page(s, wants_text(s)), todo)):
            if img and not st["_img"]:
                st["_img"] = img
            if text:
                lic = CC_SOURCES.get(st["source"])
                texts[st["id"]] = dict(text, cc=bool(lic), licence=lic[0] if lic else "", licenceUrl=lic[1] if lic else "")
                if key is not None and not lic:
                    texts[st["id"]]["_private"] = True

    # 4b. For stories the public site can't show in full, keep everything the publisher shares in
    # its own feed (often several paragraphs, sometimes the whole article). Shown as a feed excerpt
    # with a link to the rest.
    feed_texts = {}
    if a.text != "none":
        for st in unique.values():
            t = texts.get(st["id"])
            if t and not t.get("_private"):
                continue
            paras = feed_paras(st.get("_feed"))
            if sum(len(p) for p in paras) >= len(st["summary"]) + 150:
                feed_texts[st["id"]] = {"paras": paras, "feed": True}

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
    def chunked(pairs):
        out, cur, cur_size = [], {}, 0
        for sid, t in pairs:
            size = len(json.dumps(t, ensure_ascii=False).encode())
            if size > 190_000:
                continue
            if cur and cur_size + size > 190_000:
                out.append(cur)
                cur, cur_size = {}, 0
            cur[sid] = t
            cur_size += size
        if cur:
            out.append(cur)
        return out

    private = {sid for sid, t in texts.items() if t.pop("_private", False)}
    chunks = chunked([(sid, t) for sid, t in texts.items() if sid not in private] + list(feed_texts.items()))
    pchunks = chunked((sid, t) for sid, t in texts.items() if sid in private)
    text_ref = {sid: f"t{n:02d}" for n, ch in enumerate(chunks, 1) for sid in ch if sid not in feed_texts}
    feed_ref = {sid: f"t{n:02d}" for n, ch in enumerate(chunks, 1) for sid in ch if sid in feed_texts}
    ptext_ref = {sid: f"p{n:02d}" for n, ch in enumerate(pchunks, 1) for sid in ch}

    # 6b. Weather for each local area: a snapshot for copies of the app that can't fetch it live.
    weather = {}
    def get_weather(r):
        city, lat, lon = CITIES[r]
        u = (f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&timezone=auto&forecast_days=7"
             "&current=temperature_2m,apparent_temperature,relative_humidity_2m,dew_point_2m,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code,is_day,uv_index,precipitation,cloud_cover,pressure_msl,visibility"
             "&hourly=temperature_2m,apparent_temperature,weather_code,precipitation_probability,precipitation,is_day,uv_index,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,cloud_cover"
             "&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_probability_max,precipitation_sum,precipitation_hours,uv_index_max,sunrise,sunset,daylight_duration,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant")
        return r, json.loads(get(u, timeout=15))
    with cf.ThreadPoolExecutor(2) as ex:
        for fut in [ex.submit(get_weather, r) for r in regions if r in CITIES]:  # gentle on the free service
            try:
                r, w = fut.result()
                w["fetchedAt"] = now.strftime("%Y-%m-%dT%H:%M:%SZ")
                weather[r] = w
            except Exception:
                pass  # no weather is fine; the app hides it

    # 6c. Archive: every story seen in the last ARCHIVE_DAYS, so search reaches past today.
    # Carried on from the previously published copy and topped up with today's stories.
    archive = {}
    if a.archive_from:
        base = a.archive_from.rstrip("/") + "/data/"
        try:
            prev = json.loads(get(base + f"status.json?v={int(now.timestamp())}", timeout=20))
            for ref in (prev.get("archive") or {}).get("chunks", []):
                try:
                    for it in json.loads(get(base + f"archive/{ref}.json", timeout=30)).get("items", []):
                        archive[it["id"]] = it
                except Exception as e:
                    errors.append(f"archive {ref}: {e}"[:160])
        except Exception as e:
            errors.append(f"archive: {e}"[:160])
    first_sec = {}
    for name, items in sections.items():
        for st in items:
            first_sec.setdefault(st["id"], name)
    # Older items still sitting in the feeds go in too, so search reaches back from day one.
    feed_home = [(sec, src, u) for sec, src, u, keep in SECTION_FEEDS]
    for r in regions:
        feed_home += [(f"local-{r}", src, u) for src, u in REGIONS[r][1]]
    for iid, _, _, ifeeds, _ in interests:
        feed_home += [(iid, src, u) for src, u in ifeeds]
    for sec, src, u in feed_home:
        for it in raw.get(u, []):
            st = to_story(it, src, now, ARCHIVE_DAYS)
            if not st or st["id"] in archive or st["id"] in unique:
                continue
            img = st.get("_img") or ""
            archive[st["id"]] = {"id": st["id"], "t": st["title"], "s": clean(st.get("summary", ""), 200), "u": st["url"],
                                 "src": src, "p": st["published"], "sec": sec, "img": img if img.startswith("http") else ""}
    for st in unique.values():
        img = st.get("_img") or ""
        archive[st["id"]] = {"id": st["id"], "t": st["title"], "s": clean(st.get("summary", ""), 200), "u": st["url"],
                             "src": st["source"], "p": st["published"], "sec": first_sec.get(st["id"], ""),
                             "img": img if img.startswith("http") else ""}
    cutoff = (now - ARCHIVE_DAYS).strftime("%Y-%m-%dT%H:%M:%SZ")
    arch = sorted((x for x in archive.values() if x.get("p", "") >= cutoff), key=lambda x: x["p"], reverse=True)[:ARCHIVE_MAX]
    achunks, cur, size = [], [], 0
    for x in arch:
        n = len(json.dumps(x, ensure_ascii=False).encode()) + 1
        if cur and size + n > 190_000:
            achunks.append(cur)
            cur, size = [], 0
        cur.append(x)
        size += n
    if cur:
        achunks.append(cur)

    # 7. Write.
    shutil.rmtree(os.path.join(a.out, "archive"), ignore_errors=True)
    os.makedirs(os.path.join(a.out, "archive"), exist_ok=True)
    for n, ch in enumerate(achunks, 1):
        with open(os.path.join(a.out, "archive", f"a{n:02d}.json"), "w") as f:
            json.dump({"items": ch}, f, ensure_ascii=False, separators=(",", ":"))
    for sub in ("feeds", "text"):
        shutil.rmtree(os.path.join(a.out, sub), ignore_errors=True)
        os.makedirs(os.path.join(a.out, sub), exist_ok=True)
    stamp = now.strftime("%Y-%m-%dT%H:%M:%SZ")
    counts = {}
    for name, items in sections.items():
        out_items = []
        for st in items:
            d = {k: v for k, v in st.items() if not k.startswith("_")}
            if st["id"] in text_ref or st["id"] in ptext_ref:
                if st["id"] in text_ref:
                    d["text"] = text_ref[st["id"]]
                else:
                    d["ptext"] = ptext_ref[st["id"]]  # locked: only devices with the passphrase can open it
                words = sum(len(p.split()) for p in texts[st["id"]]["paras"])
                d["mins"] = max(1, round(words / 230))
            if st["id"] in feed_ref:
                d["feed"] = feed_ref[st["id"]]  # the publisher's own feed text: open to everyone
            out_items.append(d)
        doc = {"section": name, "updatedAt": stamp, "items": out_items}
        for it in reversed(out_items):  # stay under the database document limit
            if len(json.dumps(doc, ensure_ascii=False).encode()) <= 200_000:
                break
            it.pop("image", None)
        counts[name] = len(out_items)
        with open(os.path.join(a.out, "feeds", f"{name}.json"), "w") as f:
            json.dump(doc, f, ensure_ascii=False, separators=(",", ":"))
    try:
        tv = fetch_tv(now, errors)
    except Exception as e:
        tv = []
        errors.append(f"TV: {e}"[:160])
    if len(tv) < 6 and a.archive_from:
        # YouTube's feed was down: keep the last good clips (up to four days old) so TV still works.
        try:
            prev = json.loads(get(a.archive_from.rstrip("/") + f"/data/tv.json?v={int(now.timestamp())}", timeout=20)).get("items", [])
            have = {it["id"] for it in tv}
            keep = (now - timedelta(days=4)).strftime("%Y-%m-%dT%H:%M:%SZ")
            tv += [it for it in prev if it.get("id") not in have and it.get("published", "") >= keep]
        except Exception as e:
            errors.append(f"TV carry-over: {e}"[:160])
    with open(os.path.join(a.out, "tv.json"), "w") as f:
        json.dump({"updatedAt": stamp, "items": tv}, f, ensure_ascii=False, separators=(",", ":"))
    for n, ch in enumerate(chunks, 1):
        with open(os.path.join(a.out, "text", f"t{n:02d}.json"), "w") as f:
            json.dump({"articles": ch}, f, ensure_ascii=False, separators=(",", ":"))
    for n, ch in enumerate(pchunks, 1):
        with open(os.path.join(a.out, "text", f"p{n:02d}.json"), "w") as f:
            json.dump(lock(key, json.dumps({"articles": ch}, ensure_ascii=False, separators=(",", ":")).encode()), f)
    source_counts = {}
    for st in unique.values():
        source_counts[st["source"]] = source_counts.get(st["source"], 0) + 1
    status = {
        "updatedAt": stamp,
        "counts": counts,
        "regions": [{"id": r, "label": REGIONS[r][0]} for r in regions],
        "interests": [{"id": "copilot", "label": "Microsoft Copilot", "group": "tech"}] + [{"id": i[0], "label": i[1], "group": i[2]} for i in interests],
        "weather": weather,
        "groups": [{"id": g, "label": l} for g, l in INTEREST_GROUPS],
        "fullSources": sorted(CC_SOURCES),
        "sections": list(sections),
        "textChunks": [f"t{n:02d}" for n in range(1, len(chunks) + 1)],
        "articlesWithText": len(text_ref),
        "articlesWithFeedText": len(feed_ref),
        "tv": len(tv),
        "archive": {"chunks": [f"a{n:02d}" for n in range(1, len(achunks) + 1)], "count": len(arch),
                    "since": arch[-1]["p"] if arch else stamp},
        "sourceCounts": dict(sorted(source_counts.items())),
        "errors": errors[:10],
    }
    if key is not None:
        import base64
        status["vault"] = {"salt": base64.b64encode(VAULT_SALT).decode(), "iter": VAULT_ITER,
                           "check": lock(key, b"awesome-news"), "chunks": [f"p{n:02d}" for n in range(1, len(pchunks) + 1)],
                           "articles": len(ptext_ref)}
    with open(os.path.join(a.out, "status.json"), "w") as f:
        json.dump(status, f, ensure_ascii=False)
    print(json.dumps({k: status[k] for k in ("updatedAt", "counts", "textChunks", "articlesWithText", "errors")}, indent=1))


if __name__ == "__main__":
    main()
