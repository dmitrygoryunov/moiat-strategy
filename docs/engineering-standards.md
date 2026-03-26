# Engineering Standards

This repository does not accept "looks complete" work. It accepts working, testable, reviewable software.

## Core Rules

1. No fake functions.
2. No fabricated success paths.
3. No silent fallbacks that hide missing integrations.
4. No undocumented scope expansion.
5. No acceptance without reproducible validation.
6. No unlabeled synthetic or illustrative ministry metrics.

## Definition of Done

A change is only done when all of the following are true:

1. The behavior exists in repository state.
2. The relevant acceptance criteria are satisfied.
3. Tests or equivalent validation were run and recorded.
4. Failure behavior is explicit.
5. Module boundaries remain intact.
6. Required docs were updated.

## External Integration Rule

- Treat model output and external service responses as untrusted until validated.
- If an external dependency cannot be reached, do not return fabricated data.
- If illustrative data is intentionally used for a product flow, label it clearly.

## Testing Expectations

- unit tests for contained logic
- integration tests for app and data boundaries
- acceptance checks for user-visible flows
- targeted validation for AI-backed response shaping once introduced

## Review Evidence Required

Claude must provide in `AI_LOOP.md`:

1. exact files changed,
2. exact validation commands,
3. pass/fail outcomes,
4. open risks,
5. exact diff command.

