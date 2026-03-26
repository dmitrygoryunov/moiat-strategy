# CLAUDE.md — Project Execution Rules

This file defines how Claude must operate in this repository. It does not replace product, architecture, or packet documents.

## 1. Authority and Ownership

- `docs/product-requirements-document.md`, `docs/system-architecture.md`, and `docs/technical-requirements.md` are controller-owned baselines.
- `docs/project-plan.md` and `docs/issue-list.md` are controller-owned planning records.
- `docs/ui-design.md` is controller-owned and defines the UX/UI direction for the web experience.
- `AI_LOOP.md` is the only controller/implementer handoff file.
- Every controller packet in `AI_LOOP.md` must include explicit acceptance criteria. If they are missing or too vague to verify, Claude must stop and report that gap in `AI_LOOP.md` before implementing.
- If chat instructions conflict with repository role documents, Claude must stop and report the conflict in `AI_LOOP.md`.

## 2. Non-Negotiable Delivery Rules

- Do not invent functionality.
- Do not create fake functions, dummy adapters, mocked success responses, or no-op implementations and present them as done.
- Do not claim a workflow is complete unless the acceptance criteria are satisfied in repository state.
- If something must remain stubbed temporarily, label it clearly as incomplete and keep it out of accepted scope.
- Never present synthetic ministry data as real ministry data.

## 3. Git Discipline

- After this bootstrap, Claude manages git for implementation work.
- Every functional module or coherent vertical slice must have its own commit.
- Keep commits reviewable and scoped.
- Never mix unrelated work in one commit unless Codex explicitly approves it in `AI_LOOP.md`.

## 3A. Project-Scoped Command Autonomy

- For work strictly related to this repository, Claude does not need to ask the user for permission before using `git`, `bash`, `zsh`, `node`, `npm`, `pnpm`, `python`, `python3`, `pytest`, or framework build/test commands.
- This autonomy applies only to repository implementation, validation, local service operation, debugging, and inspection.
- It does not authorize unrelated, risky, or destructive actions outside the approved scope.

## 4. Modular Change Policy

- Default packet size is one app area plus one support package or doc slice.
- Cross-cutting changes require explicit controller approval in `AI_LOOP.md`.
- Keep product, data, AI, and UI concerns separated:
  - product intent and acceptance criteria in docs,
  - ETL and KPI logic in scripts/data modules,
  - AI orchestration on the server side,
  - presentation and interaction logic in `apps/web`.

## 5. Required Read-First Order

Before implementation, Claude must read in this order:

1. `docs/development-workflow.md`
2. `docs/repository-structure.md`
3. `docs/module-boundaries.md`
4. `docs/engineering-standards.md`
5. `docs/project-plan.md`
6. `docs/issue-list.md`
7. `docs/ui-design.md`
8. relevant sections of:
   - `docs/product-requirements-document.md`
   - `docs/system-architecture.md`
   - `docs/technical-requirements.md`
9. the active packet in `AI_LOOP.md`

## 6. Validation and Evidence

- Tests are required for behavior changes.
- Validation commands must be recorded exactly in `AI_LOOP.md`.
- If a dependency is unavailable, say so plainly. Do not simulate a passing result.
- Codex will reject work that is not reproducible from repo state.

## 7. UI Delivery Rules

- Follow `docs/ui-design.md` for navigation, narrative hierarchy, evidence drawers, and interaction patterns.
- Use the same implementation approach as the reference project: real UI surfaces over real repository state, no fake "enterprise" shell behavior, and honest empty/deferred states when backend capability is not implemented yet.
- Prefer a small number of polished, leadership-grade screens over wide but shallow UI coverage.
- Any AI-generated text shown in the UI must be traceable to structured evidence inputs.

## 8. Secrets

- Never place real secrets in tracked files.
- Use `.env.local` for local development.
- `OPENAI_API_KEY` must remain server-side and must never be exposed to browser code.
- If a real local secret file is unavailable, use `.env.example` and `.env.local` placeholders rather than fabricating values.

## 9. Deployment Instructions

- Claude must create and maintain `docs/deployment-runbook.md`.
- Any packet that changes startup, deployment, environment requirements, or verification steps must update the runbook before review.
- The runbook must distinguish clearly between:
  - local development steps,
  - startup steps,
  - verification steps,
  - rollback or cleanup steps,
  - implemented behavior versus deferred behavior.
