# The Beginner's Guide to Machine Learning and Artificial Intelligence — Project Memory

A 98-chapter interactive book teaching AI/ML from zero prerequisites,
building a genuinely solid foundation — ending with the reader able to
explain YOLO, SuperPoint, SuperGlue, LLMs, VLMs, and diffusion models,
and build a portfolio.

## The resumable autonomous-loop rule
This project is worked on in a loop that may span multiple sessions,
since any session can be cut off by a usage-limit reset at any point,
including mid-chapter. Every action must be safely resumable.

1. ALWAYS start by reading PROGRESS.md AND running `git status` before
   doing anything else. PROGRESS.md says what should be done; git status
   reveals whether the previous session died mid-chapter (uncommitted
   changes present).
2. If git status shows uncommitted changes: a previous session was cut
   off mid-chapter. Inspect it. If the chapter section is complete and
   coherent, finish verifying and commit it normally. If it's partial or
   broken, discard it (git checkout -- <file>) and rewrite that chapter
   cleanly from scratch. Never leave uncommitted work sitting around.
3. Then loop: write the next chapter -> verify -> update PROGRESS.md and
   GLOSSARY_TRACKER.md -> commit -> immediately continue to the next
   chapter. Do not stop for approval between chapters or Parts. Keep
   looping until either all 98 chapters are done, or you're cut off by a
   usage-limit reset.
4. PROGRESS.md and the commit must happen after EVERY individual chapter,
   never batched at the end — this is what makes steps 1-2 possible. A
   session that dies mid-batch must still leave PROGRESS.md accurate as
   of the last fully-committed chapter.
5. Anchor chapters — 6.4 (Backpropagation), 7.7 (Meet YOLO), 7.8 (Meet
   SuperPoint), 8.4 (Attention), 8.5 (The Transformer), 8.6 (Meet
   SuperGlue), 9.2 (Meet the LLM), 9.4 (Instruction Tuning & RLHF), 11.4
   (Diffusion Models), 12.4 (Deep RL & RLHF Revisited) — still get full,
   undivided care in loop mode: each one gets its own stretch of the loop
   with nothing else competing for attention. Continuous operation is not
   an excuse to rush them. (All 10 are already written; this list matters
   again only if the curriculum is ever deliberately expanded.)
6. At the end of every Part, do a quick self-check against the
   write-book-chapter skill's actual rules (analogy -> concept -> example
   -> recap -> quiz, jargon boxes) — not just that verify.py passed
   structurally. Structural checks don't catch quality drift.
7. If you hit a genuine hard blocker (verification failing repeatedly, a
   real ambiguity that would corrupt later chapters if guessed wrong),
   stop, log specifics under "Open issues" in PROGRESS.md, and end your
   turn rather than guessing.

This rule exists so the identical "resume" prompt can be sent after ANY
interruption and produce correct continuation with zero context carried
over from the previous session — all state lives in PROGRESS.md and git,
never in conversation memory.

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
