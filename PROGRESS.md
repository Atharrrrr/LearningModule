# Progress

## Status
In progress. 7 of 98 chapters written. Part I is complete.

## Next chapter due
Part II, Chapter 2.2 — Vectors — Data as Arrows in Space
(parts/part-02-toolkit.html already exists — insert the new <section> before </main> and flip 2.2's sidebar entry from unwritten to live)

## Completed chapters
- 0.1 How This Book Works — parts/part-00-before-we-begin.html
- 1.1 AI vs. ML vs. Deep Learning vs. RL — parts/part-01-orientation.html
- 1.2 The Three Ways Machines Learn — parts/part-01-orientation.html
- 1.3 Machines Don't Think, They Fit Curves — parts/part-01-orientation.html
- 1.4 A Short History of AI [D] — parts/part-01-orientation.html
- 1.5 The Job Landscape — parts/part-01-orientation.html
- 2.1 Numbers, Variables & Functions — parts/part-02-toolkit.html

## Open issues / flags for review
- Reminder for future chapters: assets/components.js must be included in
  <head> (not at the bottom of <body>), since inline jargon-box calls
  inside <main> run before a bottom-of-body script would load. Fixed in
  0.1 and 1.1 after a real browser check caught it; part-01's template
  already has it right, so this only matters when starting a new Part file.
- verify-chapter's browser check is a no-op in this environment (Python
  playwright isn't installed), so structural PASS alone doesn't prove the
  page runs cleanly. Each chapter since 1.1 has also been smoke-tested
  with the Node/Playwright + Chromium already installed at
  /opt/pw-browsers (load the page headless, assert zero console/page
  errors, click through the quiz/demo, check localStorage progress).
  Keep doing this before marking a chapter done.
