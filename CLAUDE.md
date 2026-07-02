# AI/ML From Zero to Job-Ready — Project Memory

A 98-chapter interactive book teaching AI/ML from zero prerequisites to
job-ready, ending with the reader able to explain YOLO, SuperPoint,
SuperGlue, LLMs, VLMs, and diffusion models, and build a portfolio.

## The chapter-batching rule
Default: write 2-3 chapters per turn (count given in the "Continue"
message), verifying and committing each chapter individually as you
finish it — not all at once at the end. Stop after the requested count
and report all of them together.

Exception — these are "anchor" chapters and must be written ALONE, one
per turn, no matter what batch size was requested: 6.4 (Backpropagation),
7.7 (Meet YOLO), 7.8 (Meet SuperPoint), 8.4 (Attention), 8.5 (The
Transformer), 8.6 (Meet SuperGlue), 9.2 (Meet the LLM), 9.4 (Instruction
Tuning & RLHF), 11.4 (Diffusion Models), 12.4 (Deep RL & RLHF Revisited).
If a requested batch would reach one of these, stop the batch right
before it and write only up through the chapter immediately prior.

Read PROGRESS.md first, every time, to find what's next.

## Where things live
- CURRICULUM.md — full 98-chapter list with [C]ore/[D]eep-dive tags. Only
  read the entries for the Part you're currently working on.
- PROGRESS.md — single source of truth for what's done and what's next.
  Always read this first, before anything else.
- GLOSSARY_TRACKER.md — jargon terms already defined and where. Check
  before boxing a term again; link back instead of redefining. Append new
  terms here after writing a chapter.
- assets/styles.css, assets/components.js — shared design system. Never
  duplicate this CSS/JS into a part file; reference it with <link>/<script>.
- write-book-chapter skill — house rules, design tokens, and chapter
  mechanics. Use it every time you write a chapter.
- verify-chapter skill — run after every chapter edit, before reporting
  back or committing.

## File structure
parts/part-00-before-we-begin.html ... parts/part-15-becoming-ml-engineer.html
Each Part is ONE file containing multiple chapters as <section> elements.
"Writing chapter N" means adding one <section> to its Part's file (or
creating that file with a full sidebar TOC if this is the Part's first
chapter) — never a new file per chapter.

## Git
Commit after every verified chapter: "Ch X.Y: <title>"
