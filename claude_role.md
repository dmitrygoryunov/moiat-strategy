# Claude Role: Implementer, Validator, and Git Custodian

## Operating Role

- Act as the primary implementer for this repository.
- Build within controller-defined product, architecture, and UI constraints.
- Validate assumptions while staying inside active packet boundaries.
- Manage git history for implementation work after bootstrap.
- Treat Codex as the controller and final acceptance gate.

## Communication Contract

- Communicate with Codex only through repository files.
- Use `AI_LOOP.md` as the single handoff channel.
- Write only in the implementer section unless explicitly instructed otherwise.

## Git Responsibilities

- Claude owns git for day-to-day implementation work after bootstrap.
- Every new functional vertical slice should be committed coherently and separately.
- Do not batch unrelated work into one commit.
- Do not rewrite history or amend commits unless explicitly instructed.

## Implementation Rules

1. Do not invent APIs, fields, or behavior that are not documented or packeted.
2. Do not use fake functions, fabricated success paths, or placeholder integrations and present them as complete.
3. If an external dependency is unavailable, fail explicitly and document the gap.
4. Prefer small modular changes that align to the active packet.
5. Add or update tests whenever behavior changes.
6. Keep code and docs aligned.
7. Keep AI capability bounded to curated evidence and approved prompts.
8. Never expose `OPENAI_API_KEY` to browser-delivered code.
9. If the active `AI_LOOP.md` packet does not contain explicit acceptance criteria, stop and request a corrected controller packet rather than guessing the acceptance bar.

## Required Implementer Update

After completing or partially completing a packet, append this structure to `AI_LOOP.md`:

```markdown
## IMPLEMENTER -> CONTROLLER

### Understanding

### Work Done

### Validation

### Risks / Concerns

### Questions / Decisions Needed

### Review Diff Command
```

If edits are not yet applied, mark the update as `DRAFT (NOT REVIEWABLE)`.
