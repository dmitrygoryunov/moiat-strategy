# Development Workflow

This document defines how Codex and Claude work together in this repository.

## Roles

- Codex is the controller, product lead, architect, plan owner, and final reviewer.
- Claude is the implementer, validator, and git custodian after bootstrap.
- The user remains the final product owner.

## Sources of Truth

Durable:

- `docs/product-requirements-document.md`
- `docs/data-sources.md`
- `docs/ui-design.md`
- `docs/system-architecture.md`
- `docs/technical-requirements.md`
- `docs/project-plan.md`
- `docs/issue-list.md`
- `docs/deployment-runbook.md`
- `docs/decisions/`

Transient:

- `AI_LOOP.md`

## Packet Lifecycle

1. Codex selects the issue or scope slice.
2. Codex writes a controller packet into `AI_LOOP.md` with:
   - packet ID,
   - objective,
   - context,
   - constraints,
   - explicit acceptance criteria,
   - required validation commands.
3. Claude reads the packet and required docs.
4. Claude implements within the approved module boundary.
5. Claude commits coherent functional slices separately.
6. Claude updates the implementer section in `AI_LOOP.md`.
7. Codex reviews diffs and evidence, then records `ACCEPT`, `REQUEST CHANGES`, `REJECT`, or `HOLD`.
8. Codex updates `docs/project-plan.md`, `docs/issue-list.md`, and any needed decision records.
9. Codex archives the completed packet into `docs/ai-loop-archive/`.

## AI Loop Organization

Root `AI_LOOP.md` should contain only:

- the active packet
- the latest implementer response
- the current controller review

Acceptance-criteria rule:

- every active controller packet must contain an explicit `Acceptance Criteria` section
- acceptance criteria must be concrete enough to verify from repository state
- if acceptance criteria are missing, Claude must not proceed with implementation until the packet is corrected

Archive policy:

- archive after `ACCEPT`, `REJECT`, or packet replacement
- keep the root file short and immediately scannable

## Modular Delivery Rules

- Default packet size:
  - one app area,
  - one support surface,
  - related tests,
  - required docs only.
- Cross-cutting packets require explicit controller approval.
- Business logic belongs outside presentation components.
- UI should consume stable data contracts and surface honest empty/deferred states.

## UI Delivery Approach

Use the same practical approach as the reference project:

- start from a real product shell, not disconnected mock screens
- build visible vertical slices that reflect actual repository capability
- keep navigation and states honest when functionality is deferred
- optimize for credibility and reviewability over breadth

## Default Skill Loading Order

UI-heavy work:

1. `skills/moiat-leadership-ui/SKILL.md`
2. `skills/moiat-evidence-ai-guardrails/SKILL.md`
3. `skills/moiat-ai-loop-implementer-check/SKILL.md` before handoff

AI-backed feature work:

1. `skills/moiat-evidence-ai-guardrails/SKILL.md`
2. `skills/moiat-leadership-ui/SKILL.md` if the feature is user-facing
3. `skills/moiat-ai-loop-implementer-check/SKILL.md` before handoff

## Review Standard

Codex reviews for:

1. alignment with controller-owned docs,
2. real behavior rather than simulated success,
3. modular integrity,
4. evidence and provenance handling,
5. test coverage and validation clarity,
6. UX consistency with the leadership-first product direction.
