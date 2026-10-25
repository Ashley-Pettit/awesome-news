# Daily Brief

A phone-friendly news reader for Australians. It pulls the latest stories from free, full-article sources, sorts them into tabs and lets you read them without leaving the app.

**Open it:** https://ashley-pettit.github.io/daily-brief/

On your phone, open the link and choose **Add to Home Screen** to use it like an app.

## What's in it

- **Tabs:** For you (a mix of everything), Local, Headlines, Politics, Finance, Tech and AI
- **Local news for every state and territory:** pick yours in Settings
- **Your topics:** follow words like "Logan" or "Apple" and each gets its own tab
- **Settings:** your name for the greeting, which tabs and sources to show, words to mute, text size and light or dark mode. Settings stay on your device.
- **Reader:** stories open inside the app. Articles from The Conversation show in full. Other stories show a preview with a button to read the full article on the publisher's site.
- **Saved:** bookmark stories to read later
- **No paywalls, no sport**

## Sources

ABC News, The Guardian (Australia), SBS News, The Conversation, BBC, Ars Technica, TechCrunch and iTnews. Paywalled outlets are left out on purpose.

Only The Conversation's articles are shown in full, because they're published under a Creative Commons licence that allows it. Every other story links to the publisher, so they get the visit.

## How it works

- `fetcher.py` reads the publishers' RSS feeds, filters out sport, video, podcasts and sponsored posts, sorts stories into sections and writes JSON files.
- `app.html` is the whole app: one HTML file with no build tools or libraries.
- `build.py` wraps `app.html` into a full web page with the home-screen icon.
- `.github/workflows/pages.yml` runs every hour: fetch the news, build the page and publish it to GitHub Pages.

### Run it yourself

```
pip install -r requirements.txt
python fetcher.py _site/data
python build.py _site
cd _site && python -m http.server 8000
```

Then open http://localhost:8000.

### Notes

- GitHub pauses scheduled workflows on public repos after 60 days with no commits. If the news stops updating, open **Actions → Update news and publish → Enable workflow**, or push any small change.
- `fetcher.py --text all` saves the full text of every story. That's for private, personal reading only. Don't publish it, because it would republish the outlets' copyrighted articles.
