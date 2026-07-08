# Infrastructure

## Recommended Stack

### Frontend

- Next.js with TypeScript for website, CMS shell, and advisor web UI.
- React Server Components where useful for content-heavy surfaces.
- Design system built with accessible primitives and strict content rendering components.

### Backend

- TypeScript service layer for API gateway and web product velocity.
- Python service layer for AI pipelines, embeddings, data quality, and recommendation experiments.
- Modular monolith first, with clear service boundaries around content, entities, recommendations, media, identity, and commerce.

### Database

- PostgreSQL as canonical source of truth.
- PostGIS for geography.
- JSONB for controlled flexible metadata.
- pgvector for early embedding retrieval.
- Transactional outbox for projection updates.

### Knowledge Graph

- Start with relationship tables in PostgreSQL.
- Add Neo4j, Kuzu, or another graph projection when traversal depth, graph analytics, or operational scale require it.

### Vector Database

- Start with pgvector to keep structured and semantic retrieval consistent.
- Add a dedicated vector store only when scale, latency, isolation, or model experimentation require it.

### Object Storage

- S3-compatible object storage for photos, videos, generated derivatives, and source media.
- CDN in front of public assets.

### Search

- OpenSearch, Elasticsearch, Typesense, or Meilisearch depending on operational preference.
- Keep search rebuildable from canonical Postgres.

### Caching

- Redis for API cache, sessions, rate limiting, background job coordination, and expensive recommendation results.
- CDN caching for public content.

### Analytics

- Event pipeline into warehouse.
- Product analytics for reader behavior.
- Editorial analytics for content performance.
- Commerce analytics for affiliate and booking attribution.

### Authentication

- Managed identity provider at first.
- Support email, social login, magic links, passkeys, and partner SSO over time.
- Keep authorization policies application-owned.

### Observability

- OpenTelemetry instrumentation across frontend, backend, workers, and AI calls.
- Centralized logs, metrics, traces, and alerts.
- Recommendation and AI decisions should emit structured audit events.

### Deployment

- Containerized services.
- Managed PostgreSQL.
- Managed object storage.
- Preview deployments for web and CMS.
- Separate production, staging, and development environments.

### CI/CD

- Type checking
- Unit tests
- Integration tests
- Migration checks
- Schema drift checks
- Content model validation
- Security scanning
- Preview deployment
- Rollback automation

### Background Jobs

Required workers:

- Media processing
- Embedding generation
- Search indexing
- Graph projection
- Sitemap generation
- Scheduled publishing
- Reverification reminders
- Partner change report ingestion
- Recommendation cache warming

## Scaling Position

The first production architecture should be a disciplined modular platform, not distributed by default. The system should have clear seams for later extraction, but source-of-truth integrity matters more than premature service fragmentation.

