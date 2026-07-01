---
name: verify-chapter
description: Verifies a just-written or just-edited chapter HTML file for structural correctness. Use after every chapter edit, before reporting back or committing.
---
Run: python3 .claude/skills/verify-chapter/scripts/verify.py <path-to-part-file>

Read only the command's printed output — never open verify.py itself into
context, it's a deterministic checker, not reference material. Fix
whatever it reports, then re-run until it prints PASS.
