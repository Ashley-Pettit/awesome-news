# Working on Awesome News with Ash

## Version numbers, always as links

Whenever you report work to Ash (a commit, a push, a merge, a publish), give its version number, and make every
version number a link they can tap:

- **Commits:** the 7-character id, linked to the commit on GitHub, for example
  [`095ee0d`](https://github.com/Ashley-Pettit/awesome-news/commit/095ee0d). It is the same id the app shows Ash
  beside its title, so they can check their phone has that version.
- **Pull requests:** linked, for example [#9](https://github.com/Ashley-Pettit/awesome-news/pull/9).
- **After a publish:** say which version is now live, with that link, and link the page to open
  (for example <https://ashley-pettit.github.io/awesome-news/logan/#explore>).

Never write a bare commit id or pull request number.

Where this comes from: on 12 November 2026 Ash said Claude Code was "not following my instructions of version
numbers with hyperlinks" and asked for it to be remembered. The bullet points are Claude's reading of that
instruction; if Ash words it differently, their wording wins.

## Pull requests only: the Awesome News chat brings the work in

Several agents work on this repository at once, and their pushes into `main` collide. So:

- **Send a pull request and stop there.** Push to your own branch and open a pull request. Do not merge it and do
  not push to `main`, even when asked to "make it live": say that the Awesome News chat does that.
- **Each time you push, remind Ash** to get the Awesome News chat to pull. Give the linked pull request and the
  linked commit so they can pass them on.
- **The Awesome News chat** is the one agent that merges into `main`. If you are that chat, this section's first
  point is not about you.

### How to send a pull request

- Start from the latest `main` (`git fetch origin main && git checkout -b claude/<short-topic> origin/main`), one
  topic per pull request, and keep it small enough to review.
- Open it with the REST API (GraphQL is blocked in these sessions):
  `gh api -X POST repos/Ashley-Pettit/awesome-news/pulls -f title="..." -f head=<branch> -f base=main -f body="..."`.
- In the description say what changed and why, which files, how you tested it (which towns or pages, phone and
  desktop sizes) and anything unfinished or risky.
- If the Awesome News chat asks you to bring your branch up to date with `main`, merge `main` into your branch and
  push again. Don't open a second pull request for the same work.

### What can still go straight to `main`

Data only, never code: the scheduled "Awesome News refresh" task (its `ratings/*.json` commits marked `[skip ci]`)
and the GitHub Actions workflows (news data and the `chat` branch). Everything else comes in by pull request.

### For the Awesome News chat (the one that merges)

For each open pull request, oldest first: read the diff and merge it. Only when it clashes with `main`: bring it up
to date, sort out the clashes (keeping both sides' work), then build it (`python3 build.py`), check the scripts
still parse and try the changed pages at phone and desktop sizes before merging. A clean pull request needs no
testing (Ash, 12 November 2026: "no need to test merge unless fixing conflict"). Then wait for the publish and tell
Ash what went live with the linked pull request, the linked commit and the page to open. If a pull request plainly
breaks something, don't merge it: say what's wrong on the pull request and tell Ash.

Where this comes from: on 12 November 2026 Ash said "There are issues with multiple agents pushing. What I'll do is
you just send PRs and another agent will push in. Remind me to get that agent to pull when you push. That agent is
the awesome news chat", and in the Awesome News chat: "I want this chat to be the source of truth ... I'm going to
get the other ones to send you push requests. I want you to be the one that merges them in." The bullet points are
Claude's reading of that instruction (including that "pull" covers
merging the pull request); if Ash words it differently, their wording wins.
