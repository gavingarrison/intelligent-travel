# Database

## Role

The canonical database is the company memory.

Ghost is not the database. Search is not the database. The vector index is not the database.

## Phase 1 Recommendation

Use PostgreSQL as the canonical store.

Reasons:

- Strong relational integrity
- Graph-friendly relationship tables
- JSONB for controlled flexibility
- PostGIS for maps
- pgvector option for early embeddings
- Easy projection into search, graph, and analytics systems later

## Core Tables

- entities
- geographies
- places
- verticals
- entity_verticals
- relationships
- scores
- recommendations
- content_links
- external_source_refs
- media_assets
- embeddings
- outbox_events

## Projection Rule

Search, graph, vector, cache, and analytics systems are rebuildable projections from canonical data.

