---
name: write-book-chapter
description: Use when writing any new chapter section for the AI/ML From Zero to Job-Ready book. Encodes house rules, design tokens, and file mechanics. Invoke before writing chapter content.
---

# Writing a Book Chapter

## Audience
Zero prerequisites. Never assume prior coding, math, or any specific field
background. Every jargon word gets a short inline definition box the FIRST
time it appears anywhere in the book — check GLOSSARY_TRACKER.md first; if
already defined, link back instead of redefining.

## Chapter rhythm (every chapter, no exceptions)
1. A real-world analogy first
2. The actual concept, explained plainly
3. A small worked example
4. "What you can now explain to someone else" recap
5. A 2-3 question quiz (click-to-reveal, instant feedback, no penalty)

## Code in chapters — two kinds, clearly labeled
- Interactive demo (SVG/vanilla JS) — must actually run in the page, for
  building visual intuition.
- Illustrative Python/PyTorch — syntax-highlighted block labeled "Python —
  run in your own environment," not executed in-browser.
Not every chapter needs both — use judgment on what actually serves the
concept. Don't force a demo into a chapter that doesn't need one.

## Design tokens (reference assets/styles.css — never redefine inline)
bg #0d1117 / #010409 · surface #161b22 / #1c2128 · border #30363d ·
text #e6edf3 / #8b949e / #6e7681 · purple #bc8cff (primary accent) ·
green #3fb950 (success) · blue #58a6ff (info) · orange #ffa657 (quiz) ·
red #f85149 (error). Monospace for headers/code, system sans for body.

## Required components (built once in assets/components.js — call, don't rebuild)
- initJargonBox(term, definition) — first-use-only inline definition box
- initQuiz(container) — click-to-reveal quiz logic with visual feedback
- initProgressTracking() — localStorage-backed (NOT window.storage — that
  API only exists inside claude.ai Artifacts, not standalone files)
- "Frame of reference" callout style for analogies

## Mechanics: where chapter content goes
Each Part is ONE file: parts/part-NN-name.html, containing every chapter
in that Part as <section id="chapter-X-Y">.
- First chapter of a Part: create the file, including a full sidebar TOC
  for every chapter in the Part (titles from CURRICULUM.md). Every chapter
  except the one you're writing now is a greyed-out nav-item with no href
  (class="nav-item unwritten").
- Every later chapter: the file exists. Insert the new <section> before
  </main>, and flip that chapter's sidebar entry from unwritten to a live
  linked item.
If you need a reference for tone/structure, look at a chapter already
written in the SAME file — don't open other Part files just for reference,
it costs more context than it's worth.

## After writing
Run the verify-chapter skill. Update GLOSSARY_TRACKER.md with any newly
defined terms. Update PROGRESS.md: mark this chapter done, name the next
chapter due, flag anything uncertain.
