# Awesome News

A phone-friendly news reader for Australians. It pulls the latest stories from free, full-article sources, sorts them into tabs and lets you read them without leaving the app.

**Open it:** https://ashley-pettit.github.io/awesome-news/

## Put it on your phone

- **iPhone:** open the link in Safari, tap the Share button, then **Add to Home Screen**.
- **Android:** open the link in Chrome, tap the ⋮ menu, then **Install app** (or **Add to Home screen**).

Settings in the app shows these steps too, plus a link and QR code to share it with friends.

## What's in it

- **Interests:** pick from Local, Headlines, World, Politics, Finance, Tech, AI, Science, Space, Cyber security, Gaming, Cars & EVs, Startups, Health, Education, Cities & housing, Good news, Arts & entertainment, Environment & climate and Wildlife & nature. Each gets its own tab, and For you mixes them all.
- **Local news for every state and territory:** pick yours in Settings
- **Your topics:** follow words like "Logan" or "Apple" and each gets its own tab
- **Settings:** your name for the greeting, which tabs and sources to show, words to mute, text size and light or dark mode. Settings stay on your device.
- **Reader:** stories open inside the app. Articles from The Conversation show in full. Other stories show a preview with a button to read the full article on the publisher's site.
- **Saved:** bookmark stories to read later
- **No paywalls, no sport**

## Sources

ABC News, SBS News, BBC, The Conversation, 360info, Global Voices, NASA, EFF, Ars Technica, TechCrunch, iTnews, Engadget, SmartCompany, Startup Daily, ScienceAlert, New Atlas, Knowable Magazine, Space.com, PC Gamer, Kotaku, Good News Network and Positive News. Paywalled outlets are left out on purpose, and so is The Guardian.

Stories from The Conversation (CC BY-ND), 360info (CC BY), Global Voices (CC BY), EFF (CC BY) and NASA (public domain) are shown in full, with credit, because their licences allow it. They carry a **Full** badge and get priority in the feed. Every other story shows a preview that links to the publisher, so they get the visit. Settings has a **Full stories only** switch to hide the previews.

## How it works

- `fetcher.py` reads the publishers' RSS feeds, filters out sport, video, podcasts and sponsored posts, sorts stories into sections and writes JSON files.
- `app.html` is the whole app: one HTML file with no build tools or libraries.
- `build.py` wraps `app.html` into a full web page with the home-screen icon and link preview.
- `sw.js` keeps a copy of the app so it still opens with no signal.
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
