# ADR 0002: Model Relationships As First-Class Knowledge

## Status

Accepted

## Context

The product vision depends on relationships: places near other places, experiences suitable for families, guides referencing hotels, road trips containing viewpoints, and recommendations varying by season or audience.

If those relationships only live in prose, the recommendation engine cannot use them reliably.

## Decision

Create explicit relationship records between canonical entities.

Relationships include:

- Type
- Strength
- Context
- Evidence
- Visibility
- Validity window
- Verification metadata

## Consequences

Benefits:

- Enables graph traversal
- Enables contextual recommendations
- Makes editorial judgment reusable
- Supports explainable AI citations

Tradeoffs:

- Editorial tooling must make relationship creation easy.
- Relationship taxonomy must be governed to avoid chaos.
- Some edge types will need consolidation as the model matures.

