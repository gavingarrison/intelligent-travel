# ADR 0005: Treat Search, Graph, Vector, And Analytics As Rebuildable Projections

## Status

Accepted

## Context

The platform needs multiple query systems: relational data, graph traversal, semantic retrieval, lexical search, maps, and analytics.

Making each system authoritative would create synchronization risk and conflicting truth.

## Decision

PostgreSQL is authoritative. Search, graph, vector, cache, and warehouse systems are projections updated by outbox-driven workers.

Each projection must support:

- Idempotent writes
- Rebuild from source
- Lag monitoring
- Dead-letter handling
- Schema versioning

## Consequences

Benefits:

- Clear source of truth
- Safer AI retrieval
- Operational recovery path
- Cleaner migrations

Tradeoffs:

- Projection lag must be visible.
- Workers become critical infrastructure.
- Product surfaces must tolerate eventual consistency where appropriate.

