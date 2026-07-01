# AI/ML From Zero to Job-Ready — Project Memory

A 98-chapter interactive book teaching AI/ML from zero prerequisites to
job-ready, ending with the reader able to explain YOLO, SuperPoint,
SuperGlue, LLMs, VLMs, and diffusion models, and build a portfolio.

## The one hard rule
Write exactly ONE chapter per turn, then stop completely and wait for
explicit approval before starting the next. Never draft a second chapter
in the same turn, even if you have remaining capacity. Read PROGRESS.md
first, every time, to find what's next.

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
