---
name: moiat-ai-loop-implementer-check
description: Self-check active AI_LOOP work before Claude hands it back to Codex. Use when preparing implementation updates, validating packet compliance, recording test evidence, or making sure a MoIAT prototype slice is honest and reviewable before controller review.
---

# MoIAT AI Loop Implementer Check

## Purpose

Help the implementer validate packet compliance before updating `AI_LOOP.md`.

## Read First

1. `AI_LOOP.md`
2. `CLAUDE.md`
3. `claude_role.md`
4. `docs/development-workflow.md`
5. `docs/module-boundaries.md`
6. `docs/engineering-standards.md`
7. `docs/project-plan.md`
8. `docs/issue-list.md`
9. any packet-specific docs named in the active controller packet

## Workflow

1. Convert the active packet into a checklist:
   - scope
   - deliverables
   - hard constraints
   - acceptance criteria
   - required validation
2. Inspect the actual repo state before claiming completion.
3. Check for failure modes:
   - fake or overclaimed behavior
   - scope creep
   - missing tests
   - docs that outstate the implementation
   - seeded data presented as live data
   - secrets exposed in frontend code
4. Run the packet’s validation commands exactly.
5. Update `AI_LOOP.md` with:
   - understanding
   - work done
   - validation
   - risks / concerns
   - questions / decisions needed
   - review diff command
6. Stop after handoff. Do not self-accept.

## Non-Negotiables

- Do not claim live data if the screen is seeded or scaffolded.
- Do not claim AI capability if the server-side path is not real.
- Do not skip the exact validation commands required by the packet.
- Keep the handoff easy for controller review.

