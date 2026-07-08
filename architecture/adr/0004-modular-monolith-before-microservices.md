# ADR 0004: Start With A Modular Monolith

## Status

Accepted

## Context

The system needs production-grade architecture, but premature microservices would create operational overhead before the company has enough domain stability.

The domain still needs to evolve as editorial methodology, scoring, commerce, personalization, and partner products mature.

## Decision

Build a modular monolith first, with clear domain modules:

- Content
- Entities
- Relationships
- Scores
- Recommendations
- Media
- Identity
- Commerce
- AI retrieval

Use events and outbox patterns where asynchronous projections are needed.

## Consequences

Benefits:

- Faster early development
- Stronger transactional consistency
- Easier refactoring
- Lower operational burden

Tradeoffs:

- Requires module boundary discipline.
- High-throughput components may later need extraction.
- Background workers must be designed carefully to avoid hidden coupling.

