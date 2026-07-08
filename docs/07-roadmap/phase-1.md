# Phase 1: Editorial Publication And Structured Content

## Goal

Ship the first working version of the platform with Ghost publishing, canonical structured data, and three location + vertical slices.

## Slices

- Big Sur Hotels
- San Gabriel Valley Boba
- Paso Robles Wine

## Build

- Next.js public website shell
- Ghost Content API integration
- Canonical PostgreSQL schema
- Seed data workflow
- Location pages
- Location + vertical pages
- Place cards
- Basic map module
- Editorial verdict, rationale, caveats, confidence, verification status
- Ghost canonical shortcode rendering
- Internal seed review workflow using YAML or JSON

## Do Not Build Yet

- Full personalization
- Public user accounts
- Complex AI advisor
- Dedicated graph database
- Dedicated vector database
- Partner portal
- Automated affiliate optimization

## Exit Criteria

- A Ghost guide can render canonical place cards.
- A location + vertical page can render reviewed canonical data.
- Every public recommendation has rationale, caveats, confidence, and verification status.
- Imported candidates cannot appear as recommendations without review.

## First Engineering Sprint

1. Initialize repo structure for `apps/web`, `packages/db`, `packages/content`, and `packages/integrations`.
2. Add Next.js app shell with routes for `/locations/[slug]`, `/locations/[slug]/[vertical]`, `/places/[slug]`, and `/guides/[slug]`.
3. Add PostgreSQL migration for entities, verticals, relationships, scores, recommendations, Ghost content links, and external source refs.
4. Create seed files for Big Sur Hotels, San Gabriel Valley Boba, and Paso Robles Wine.
5. Build a seed importer that validates structured YAML or JSON before writing to the database.
6. Add Ghost Content API client and a mocked Ghost guide renderer.
7. Implement canonical place card rendering from seed/database data.
8. Add confidence and verification badges.
9. Add basic map data fields and placeholder map module.
10. Write fixture tests for the three launch slices.

