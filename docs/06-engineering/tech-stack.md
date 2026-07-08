# Tech Stack

## Recommended Phase 1 Stack

- Frontend: Next.js, TypeScript
- Publishing: Ghost
- API: TypeScript service layer
- Database: PostgreSQL
- ORM/Migrations: Prisma or Drizzle
- Maps: PostGIS-backed location data plus map UI provider
- Search: PostgreSQL full text first; external search later
- Embeddings: defer until canonical records exist
- Object Storage: S3-compatible storage
- Background Jobs: simple worker queue
- Observability: structured logs and OpenTelemetry-ready design

## Rationale

This stack is enough to ship the first slices without locking the company into a blog architecture.

