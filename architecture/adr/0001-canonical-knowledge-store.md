# ADR 0001: Use PostgreSQL As Canonical Knowledge Store

## Status

Accepted

## Context

The platform needs strong relational integrity, flexible metadata, geospatial data, editorial workflow, versioning, search support, and AI retrieval.

The database is the company's memory, not only a CMS backend.

## Decision

Use PostgreSQL as the canonical source of truth for the first major platform phases.

Use extensions for:

- PostGIS for geography
- pgvector for embeddings
- JSONB for controlled flexible metadata
- Full-text search and trigram search where useful

Specialized systems such as search indexes, graph databases, vector stores, and warehouses should be projections from PostgreSQL.

## Consequences

Benefits:

- Strong data integrity
- Simpler early operations
- Rebuildable projections
- Lower synchronization risk
- Easier editorial workflow enforcement

Tradeoffs:

- Some graph and vector workloads may eventually need dedicated systems.
- Careful schema discipline is required to avoid dumping everything into JSONB.
- Projection pipelines must be designed early.

