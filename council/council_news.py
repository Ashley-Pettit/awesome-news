"""
council_news.py
Reads Logan City Council's latest news from its website and sends it to the Awesome News app.

The app's own news update can't read the council website (it's turned away), so this runs on the
work PC instead, where the site opens normally. It uses the same polite rules as the Ava scanner.

How it works:
1. Reads the council's sitemap and news page for news pages: media releases, news briefs,
   projects and upgrades, have-your-say consultations. Anything older than 3 weeks is left out.
2. Visits each new or changed page once, waiting a random 2 to 5 seconds before every request,
   and takes its headline, date, standfirst, picture and article text.
3. Saves council-news.json and the pictures into the app's "council" folder, then pushes them to
   GitHub. The next news update puts them in Logan news, where Emma reads them out.

Politeness rules (built in, not optional):
- One request at a time, random 2 to 5 second wait before each.
- Obeys robots.txt, including Crawl-delay if it asks for longer.
- Stops immediately on the first 403, 429 or 503. No retries. What it already has is still saved.
- Asks "has this changed?" (If-None-Match / If-Modified-Since), so unchanged pages answer cheaply.
- At most 30 page visits a run.

Usage (twice a day is plenty; run-council-news.bat does it for Task Scheduler):
    python council_news.py                 first run clones the app next to this script
    python council_news.py --repo "C:\\path\\to\\awesome-news"
    python council_news.py --dry-run       saves the files but doesn't push

Needs: Python 3.9+, git, and `pip install requests beautifulsoup4` (already there if the Ava scanner runs).
The first push asks you to sign in to GitHub once (Git Credential Manager opens a browser).
"""

import argparse
import hashlib
import json
import os
import random
import re
import subprocess
import sys
import time
from datetime import datetime, timedelta, timezone
from urllib.parse import urljoin, urlparse
from urllib.robotparser import RobotFileParser

import requests
from bs4 import BeautifulSoup

SITE = os.environ.get("COUNCIL_SITE", "https://www.logan.qld.gov.au")  # (the override is only for testing)
REPO_URL = "https://github.com/Ashley-Pettit/awesome-news.git"
UA = "AwesomeNews council reader (personal news app; polite, twice a day)"
MIN_DELAY, MAX_DELAY = 2.0, 5.0
STOP_CODES = {403, 429, 503}
MAX_VISITS = 30
KEEP_DAYS = 21
# News about what council is doing. Service pages, jobs, rates, forms, bins and event listings are left out.
NEWS_PATH = re.compile(r"/(media-releases?|news|projects?|[a-z-]*upgrade[a-z-]*|have-your-say|consultations?|major-projects|"
                       r"city-projects|planning-projects|priority-development-areas?)(/|$)", re.I)
SKIP_PATH = re.compile(r"/(careers|vacanc|rates|payments?|forms?|dashboard|sale-of-land|disclosure|whats-on|events?/|bins?|"
                       r"waste-and-recycling|search|login|subscribe)", re.I)
LISTING = [SITE + "/news", SITE + "/media-releases"]
MONTHS = "January|February|March|April|May|June|July|August|September|October|November|December"


class Stopped(Exception):
    pass


class Polite:
    def __init__(self, log):
        self.s = requests.Session()
        self.s.headers.update({"User-Agent": UA, "Accept-Language": "en-AU,en;q=0.9"})
        self.log = log
        self.visits = 0
        self.delay = (MIN_DELAY, MAX_DELAY)
        self.robots = RobotFileParser()
        try:
            r = self.s.get(SITE + "/robots.txt", timeout=20)
            self.robots.parse(r.text.splitlines() if r.ok else [])
            cd = self.robots.crawl_delay(UA)
            if cd and cd > MAX_DELAY:
                self.delay = (float(cd), float(cd) + 2)
        except Exception as e:
            self.log(f"robots.txt not read ({e}); going ahead with the usual waits")
            self.robots.parse([])

    def get(self, url, headers=None, binary=False):
        if not self.robots.can_fetch(UA, url):
            self.log(f"skip (robots.txt): {url}")
            return None
        if self.visits >= MAX_VISITS:
            raise Stopped(f"reached {MAX_VISITS} visits for this run")
        time.sleep(random.uniform(*self.delay))
        self.visits += 1
        r = self.s.get(url, headers=headers or {}, timeout=30)
        self.log(f"{r.status_code} {url}")
        if r.status_code in STOP_CODES:
            raise Stopped(f"the website answered {r.status_code}: stopping now, nothing retried")
        return r


def page_key(url):
    p = urlparse(url)
    return f"{p.scheme}://{p.netloc.lower()}{p.path.rstrip('/') or '/'}"


def wanted(url):
    p = urlparse(url)
    return p.netloc.lower() == urlparse(SITE).netloc.lower() and NEWS_PATH.search(p.path) and not SKIP_PATH.search(p.path) \
        and p.path.rstrip("/") not in ("/news", "/media-releases", "/projects")


def parse_when(text):
    """A date from ISO text ("2026-11-03T09:00:00+10:00", "2026-11-03") or words ("3 November 2026"). Brisbane time if none given."""
    text = (text or "").strip()
    m = re.match(r"\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?", text)
    if m:
        t = m.group(0).replace("Z", "+00:00")
        t = re.sub(r"([+-]\d{2})(\d{2})$", r"\1:\2", t)
        try:
            d = datetime.fromisoformat(t)
            return d if d.tzinfo else d.replace(tzinfo=timezone(timedelta(hours=10)))
        except ValueError:
            pass
    m = re.search(rf"\b(\d{{1,2}}) ({MONTHS}) (20\d\d)\b", text)
    if m:
        return datetime.strptime(" ".join(m.groups()), "%d %B %Y").replace(tzinfo=timezone(timedelta(hours=10)))
    return None


def from_sitemap(web, log):
    """Recent news pages from the sitemap (it may point to more sitemaps)."""
    found, todo, seen = {}, [SITE + "/sitemap.xml"], set()
    cutoff = datetime.now(timezone.utc) - timedelta(days=KEEP_DAYS)
    while todo and len(seen) < 6:
        u = todo.pop(0)
        if u in seen:
            continue
        seen.add(u)
        r = web.get(u)
        if not r or not r.ok:
            continue
        soup = BeautifulSoup(r.content, "xml")
        for sm in soup.find_all("sitemap"):
            if sm.loc:
                todo.append(sm.loc.text.strip())
        for url in soup.find_all("url"):
            loc = url.loc.text.strip() if url.loc else ""
            mod = parse_when(url.lastmod.text) if url.lastmod else None
            if loc and wanted(loc) and (mod is None or mod >= cutoff):
                found[page_key(loc)] = mod
    log(f"sitemap: {len(found)} recent news pages")
    return found


def from_listing(web, log):
    """Links on the council's news pages, in case the sitemap is missing or slow to update."""
    found = {}
    for u in LISTING:
        r = web.get(u)
        if not r or not r.ok:
            continue
        soup = BeautifulSoup(r.text, "html.parser")
        for a in soup.select("main a[href], #main a[href], .content a[href], a[href]"):
            href = urljoin(u, a.get("href", ""))
            if wanted(href) and len(a.get_text(" ", strip=True)) >= 15:
                found.setdefault(page_key(href), None)
    log(f"news pages: {len(found)} links")
    return found


def read_article(html, url):
    soup = BeautifulSoup(html, "html.parser")
    meta = lambda *names: next((m.get("content", "").strip() for n in names for m in [soup.find("meta", attrs={"property": n}) or soup.find("meta", attrs={"name": n})] if m and m.get("content")), "")
    title = meta("og:title") or (soup.h1.get_text(" ", strip=True) if soup.h1 else "")
    title = re.sub(r"\s+[|\-\u2013]\s+Logan(?: City Council)?\s*$", "", title).strip()
    when = parse_when(meta("article:published_time", "article:modified_time", "dcterms.date", "date"))
    if not when:
        t = soup.find("time")
        when = parse_when(t.get("datetime") or t.get_text(" ", strip=True)) if t else None
    body = soup.find("main") or soup.find("article") or soup.find(id="main") or soup.body
    for junk in body.select("nav, header, footer, aside, form, script, style, .breadcrumb, .breadcrumbs, .share, .social, .related"):
        junk.decompose()
    if not when:
        when = parse_when(body.get_text(" ", strip=True)[:3000])
    paras = []
    for el in body.find_all(["p", "li", "h2", "h3"]):
        t = re.sub(r"\s+", " ", el.get_text(" ", strip=True))
        if len(t) >= 40 and t != title and not re.match(r"^(Share|Print|Back to|Last updated|Page updated)", t, re.I) and t not in paras:
            paras.append(t)
    return {"url": url, "title": title, "published": when.isoformat() if when else "", "summary": meta("og:description", "description"),
            "image_src": urljoin(url, meta("og:image")) if meta("og:image") else "", "paras": paras[:60]}


def main():
    ap = argparse.ArgumentParser()
    here = os.path.dirname(os.path.abspath(__file__))
    ap.add_argument("--repo", default=os.path.join(here, "awesome-news"), help="your copy of the app (cloned the first time)")
    ap.add_argument("--dry-run", action="store_true", help="save the files but don't push")
    a = ap.parse_args()

    if not os.path.isdir(os.path.join(a.repo, ".git")):
        print(f"Getting a copy of the app into {a.repo} (first run only)...")
        subprocess.run(["git", "clone", "--depth", "50", REPO_URL, a.repo], check=True)
    if not a.dry_run:
        subprocess.run(["git", "-C", a.repo, "pull", "--rebase", "--quiet"], check=False)
    out_dir = os.path.join(a.repo, "council")
    img_dir = os.path.join(out_dir, "img")
    os.makedirs(img_dir, exist_ok=True)
    state_path = os.path.join(here, "council-news-state.json")
    news_path = os.path.join(out_dir, "council-news.json")
    log_path = os.path.join(here, "council-news-log.txt")
    logf = open(log_path, "a", encoding="utf-8")
    log = lambda m: (print(m), logf.write(f"{datetime.now():%Y-%m-%d %H:%M:%S} {m}\n"))
    log("--- council news run ---")

    state = {}
    if os.path.exists(state_path):
        state = json.load(open(state_path, encoding="utf-8"))
    pages = state.setdefault("pages", {})  # url -> {etag, modified, item}
    web = Polite(log)
    stopped = ""
    try:
        cands = from_sitemap(web, log)
        for k, v in from_listing(web, log).items():
            cands.setdefault(k, v)
        # Newest first; pages already saved and unchanged are asked "has this changed?" so they answer cheaply.
        order = sorted(cands, key=lambda k: (cands[k] or datetime(2000, 1, 1, tzinfo=timezone.utc)), reverse=True)
        for url in order:
            old = pages.get(url, {})
            hdr = {}
            if old.get("etag"):
                hdr["If-None-Match"] = old["etag"]
            if old.get("modified"):
                hdr["If-Modified-Since"] = old["modified"]
            r = web.get(url, headers=hdr)
            if r is None or r.status_code == 304 or not r.ok:
                continue
            item = read_article(r.text, url)
            if not item["title"]:
                continue
            if not item["published"] and cands.get(url):
                item["published"] = cands[url].isoformat()
            # The picture, saved with the news (the app can't fetch it from the council website either).
            src = item.pop("image_src", "")
            if src and old.get("src") == src and old.get("item", {}).get("image"):
                item["image"] = old["item"]["image"]
            pages[url] = {"etag": r.headers.get("ETag", ""), "modified": r.headers.get("Last-Modified", ""), "src": src, "item": item}
            name = hashlib.sha1(src.encode()).hexdigest()[:16] if src else ""
            have = [f for f in os.listdir(img_dir) if f.startswith(name)] if name else []
            if have and not item.get("image"):
                item["image"] = f"council/img/{have[0]}"  # the same picture as another story
            if src and not item.get("image"):
                try:
                    ir = web.get(src)
                    ctype = (ir.headers.get("Content-Type", "") if ir is not None else "").split(";")[0]
                    if ir is not None and ir.ok and len(ir.content) < 2_500_000 and ctype.startswith("image/"):
                        ext = {"image/png": "png", "image/webp": "webp", "image/gif": "gif"}.get(ctype, "jpg")
                        name = f"{name}.{ext}"
                        with open(os.path.join(img_dir, name), "wb") as f:
                            f.write(ir.content)
                        item["image"] = f"council/img/{name}"
                except Stopped:
                    raise
                except Exception as e:
                    log(f"picture not saved ({e}): {src}")
    except Stopped as e:
        stopped = str(e)
        log(f"Crawl paused: {stopped}")
    except Exception as e:
        stopped = f"error: {e}"
        log(f"Crawl stopped: {e}")

    # What the app gets: the last 3 weeks of council news, newest first.
    cutoff = datetime.now(timezone.utc) - timedelta(days=KEEP_DAYS)
    items = []
    for url, p in pages.items():
        it = p.get("item") or {}
        when = parse_when(it.get("published", ""))
        if it.get("title") and when and when >= cutoff:
            items.append(it)
    items.sort(key=lambda x: x["published"], reverse=True)
    json.dump(state, open(state_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump({"updated": datetime.now(timezone.utc).isoformat(), "source": "Logan City Council", "licence": "CC BY 3.0 AU",
               "items": items[:40]}, open(news_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    keep = {os.path.basename(i.get("image", "")) for i in items[:40]}
    for f in os.listdir(img_dir):
        if f not in keep:
            os.remove(os.path.join(img_dir, f))
    log(f"saved {min(len(items), 40)} council stories ({web.visits} visits){' - ' + stopped if stopped else ''}")

    if a.dry_run:
        log(f"dry run: files are in {out_dir}")
        return
    subprocess.run(["git", "-C", a.repo, "add", "council"], check=True)
    if subprocess.run(["git", "-C", a.repo, "diff", "--cached", "--quiet"]).returncode == 0:
        log("nothing new to send")
        return
    subprocess.run(["git", "-C", a.repo, "commit", "-q", "-m", f"Council news from the work PC ({min(len(items), 40)} stories)"], check=True)
    r = subprocess.run(["git", "-C", a.repo, "push", "-q"])
    log("sent to the app" if r.returncode == 0 else "push didn't go through: check the GitHub sign-in")


if __name__ == "__main__":
    sys.exit(main())
