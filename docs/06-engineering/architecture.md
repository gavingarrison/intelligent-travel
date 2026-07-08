# Product Architecture

## System Components

- Ghost for publishing
- Custom frontend for public website
- Canonical API for structured data
- PostgreSQL canonical database
- Search projection
- Vector projection
- Media object storage
- Map/GIS services
- Internal editorial workbench
- AI advisor

## Data Flow

```text
External APIs -> Candidate Import -> Editorial Review -> Canonical DB
Codex/GPT -> Structured Drafts -> Editorial Review -> Canonical DB
Canonical DB -> Ghost Draft Links -> Website
Canonical DB -> Search / Vector / Graph Projections -> AI Advisor
```

## Phase 1 Boundary

Build a thin, working vertical slice. Avoid distributed systems until the domain model proves itself.

