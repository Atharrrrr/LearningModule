# AI/ML From Zero to Job-Ready

A free, 98-chapter interactive book that teaches AI/ML from zero
prerequisites to job-ready — no prior coding, math, or ML background
assumed. It starts with the basics (what a variable is, what a vector
is) and builds all the way up to explaining and building real systems:
YOLO, SuperPoint, SuperGlue, large language models, vision-language
models, and diffusion models — ending with a portfolio and a job search.

Every chapter follows the same rhythm: a real-world analogy, a plain
explanation of the concept, a small worked example (usually a real,
interactive demo that runs live in the browser — never a faked or
hardcoded result), a recap of what you can now explain to someone else,
and a short quiz.

## Curriculum

The full 98-chapter, 15-Part curriculum (plus Part 0) lives in
[CURRICULUM.md](CURRICULUM.md), with each chapter tagged `[C]`ore
(the straight-through path) or `[D]`eep-dive (optional, goes deeper on
one topic).

## Reading it

- **Live site:** _TODO — fill in once GitHub Pages is enabled
  (Settings → Pages → Deploy from a branch → `main`)._
- **Locally:** clone the repo and open `index.html` directly in a
  browser — everything is static HTML/CSS/JS, no build step or server
  required. `index.html` has the full table of contents and links into
  every Part; each Part file (`parts/part-NN-*.html`) contains several
  chapters as sections, with a sidebar, a persistent site-wide nav bar,
  and Previous/Next Part links at the bottom so you can read straight
  through without returning to the homepage each time.

Reading progress (which chapters you've scrolled through) is tracked
locally in your browser via `localStorage` — nothing is sent anywhere,
and the homepage's progress bar aggregates it across every Part.

## Project structure

```
index.html                     — landing page: intro, progress bar, full TOC
parts/part-00-*.html ... part-15-*.html   — one file per Part, chapters as <section>s
assets/styles.css               — shared design system (never duplicated into part files)
assets/components.js            — shared JS: quizzes, jargon boxes, progress tracking, site nav
CURRICULUM.md                    — the full chapter list with [C]ore/[D]eep-dive tags
GLOSSARY_TRACKER.md              — every jargon term defined, and where (source for Ch 15.5)
```