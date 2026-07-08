# Migration Strategy

## Strategy

Build the canonical knowledge model first, then let product surfaces consume it.

Avoid a migration path where articles are built in one CMS, recommendations in another database, media in a DAM, and AI memories in a separate vector store with no shared identity.

## Stage 1: Canonical Identity

Create stable IDs for:

- Entities
- Content items
- Media
- Scores
- Relationships
- Recommendations

All future systems must reference canonical IDs.

## Stage 2: Editorial CMS On Canonical Data

The CMS writes to canonical tables through workflow-aware APIs.

Do not allow CMS-only fields that become invisible to the recommendation engine.

## Stage 3: Projection Pipelines

Add outbox-driven projections for:

- Search
- Embeddings
- Graph
- Analytics warehouse
- CDN invalidation

Every projection should be rebuildable.

## Stage 4: AI Retrieval Grounding

Generate embeddings from canonical records and approved public/private text according to access policy.

AI answers fetch authoritative records after retrieval and cite canonical IDs.

## Stage 5: Personalization

Introduce user and taste profiles with privacy controls.

Keep preference data separate from editorial truth.

## Stage 6: Partner Ecosystem

Partner updates create reviewable records. They do not directly change editorial verdicts, scores, or public recommendations.

## Backward Compatibility

- Use additive migrations whenever possible.
- Version content models and scoring methodologies.
- Preserve old entity versions.
- Never delete records that appear in published content; retire or archive them.
- Keep slug redirects and canonical URL history.

## Data Quality Gates

Before publication, validate:

- Required entity fields
- Required relationships
- SEO fields
- Media rights
- Public/private note boundaries
- Score methodology versions
- Verification status
- Broken internal links
- Broken relationship references

