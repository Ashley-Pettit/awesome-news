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

## Pull requests: open them, do not merge them

Several Claude sessions work on this repository at once, and their pushes to `main` have collided. So a session
working on a model or feature opens a pull request for its change and stops there; it does not merge it. One other
session does the merging. After opening a pull request, remind Ash to have that session merge it and pull.

Where this comes from: on 12 November 2026 Ash said "There are issues with multiple agents pushing. What I'll do is
you just send PRs and another agent will push in. Remind me to get that agent to pull when you push." Which session
does the merging is Ash's call; this note is Claude's reading of the instruction.
