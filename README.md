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
- **Settings:** four tabs. News: your name, area, interests, topics and sources. Filters: muted words and a Show less negative news slider. Reading: text size, light or dark mode and your data. App: install steps and sharing. Settings stay on your device.
- **Less negative news:** each story gets a negativity score from its headline and summary. The slider hides that share of negative stories, most negative first.
- **Reader:** stories open inside the app. Articles from The Conversation show in full. Other stories show a preview with a button to read the full article on the publisher's site.
- **Full articles (private):** every story's full text is published locked. A hidden Admin tab takes the passphrase, and then every story opens in full in the app with no links out. Other visitors see the normal previews.
- **Saved:** bookmark stories to read later
- **Weather:** tap the weather in the header for the full forecast: now, the next 24 hours and the next 7 days
- **Offline:** stories and full articles are kept on your phone, so it still reads with no signal
- **Microsoft Copilot:** an interest that follows Microsoft 365 Copilot news and the official roadmap
- **No paywalls, no sport**

## Sources

ABC News, SBS News, BBC, The Guardian, 7NEWS, The Conversation, 360info, Global Voices, NASA, EFF, Ars Technica, TechCrunch, iTnews, Engadget, SmartCompany, Startup Daily, ScienceAlert, New Atlas, Knowable Magazine, Space.com, PC Gamer, Kotaku, Good News Network and Positive News. Paywalled outlets are left out on purpose. Guardian live blogs are skipped.

Stories from The Conversation (CC BY-ND), 360info (CC BY), Global Voices (CC BY), EFF (CC BY) and NASA (public domain) are shown in full, with credit, because their licences allow it. They carry a **Full** badge and get priority in the feed. Every other story shows a preview that links to the publisher, so they get the visit. Settings has a **Full stories only** switch to hide the previews.

## How it works

- `fetcher.py` reads the publishers' RSS feeds, filters out sport, video, podcasts and sponsored posts, sorts stories into sections and writes JSON files.
- `app.html` is the whole app: one HTML file with no build tools or libraries.
- `build.py` wraps `app.html` into a full web page with the home-screen icon and link preview.
- `sw.js` keeps a copy of the app so it still opens with no signal.
- `.github/workflows/pages.yml` runs once a day (5:47am Brisbane): fetch the news, build the page and publish it to GitHub Pages. A device with a GitHub key saved in Admin also starts an update when the app opens and the stories are over 3 hours old.
- Locked full text needs a repo secret called `NEWS_KEY` (the passphrase). Without it, that step is skipped and the site shows previews only. Changing the secret locks out every device that has the old passphrase.

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
