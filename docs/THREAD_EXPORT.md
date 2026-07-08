# Travel Intelligence Thread Export

Date: 2026-07-08

## Purpose

This file captures the working context from the Codex thread so a new project thread can pick up cleanly.

## Project Name

Repository name selected:

```text
travel-intelligence
```

Repository path:

```text
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence
```

## Git Status

Git was initialized in the new `travel-intelligence` directory.

Initial commit:

```text
49a752c Gavin Garrison <garrisongavin@gmail.com> Initial architecture docs
```

Local Git identity was set for the repo:

```text
user.name = Gavin Garrison
user.email = garrisongavin@gmail.com
```

The repo was clean after the initial commit.

## Core Company Thesis

We are not building a travel blog.

We are building an Editorial Intelligence Platform for leisure, hospitality, food, drink, travel, and meaningful time.

Core principles:

- Confidence is the product.
- Judgment compounds.
- Taste can be modeled.
- AI amplifies editors.
- Every recommendation stores rationale.
- Relationships are more valuable than records.
- Ghost is publishing, not the canonical database.
- The canonical knowledge graph is the company memory.

## Product Framing

The company begins as an editorial publication organized by regions and locations.

Verticals are editorial lenses across locations.

Examples:

- Big Sur -> Hotels
- San Gabriel Valley -> Boba
- Paso Robles -> Wine
- Sonoma -> Wine
- Tokyo -> Coffee
- Los Angeles -> Bakeries

The site should not feel like a generic travel site, OTA, review site, affiliate marketplace, SEO farm, or AI itinerary gimmick.

## Architecture Decision

The architecture changed from "build a full CMS" to:

```text
Ghost = publishing layer
Canonical database = company memory
Custom frontend = public site and product experience
Codex/GPT = editorial workbench
External APIs = candidate data and factual enrichment
```

Ghost should handle:

- Articles
- Guides
- Newsletters
- Authors
- Publishing workflow

The canonical database should own:

- Regions
- Cities
- Neighborhoods
- Places
- Hotels
- Restaurants
- Boba shops
- Coffee shops
- Bakeries
- Wineries
- Wine producers
- Scores
- Recommendations
- Relationships
- Itineraries
- Affiliate links
- Editorial judgment
- Verification status
- AI retrieval context

## Source PRD

The PRD used as source of truth was:

```text
Narrative_Leisure_Intelligence_PRD_v2.md
```

Attachment path in the prior thread:

```text
/tmp/codex-remote-attachments/019f3e59-2448-7540-9f5b-5af0dc16cdf6/153B9628-87FF-44C5-89D2-7E70D9074FD8/1-Narrative_Leisure_Intelligence_PRD_v2.md
```

The PRD defined the company as an Editorial Intelligence Company, not a travel website.

## Initial Domains

- Family Travel
- Hotels
- Restaurants
- Coffee
- Bakeries
- Wine
- Boba
- Parks
- Museums
- Family Experiences
- Seasonal Events
- Road Trips

## Initial Vertical Slices

Phase 1 should prove the whole operating model with these slices:

1. Big Sur Hotels
2. San Gabriel Valley Boba
3. Paso Robles Wine

Each slice should ship:

- Guides
- Maps
- Structured place cards
- Editorial verdicts
- AI support

## Created Repository Structure

The new repo contains:

```text
README.md
architecture/
docs/
```

The requested `/docs` architecture system was created:

```text
/docs
  /00-company
    mission.md
    vision.md
    doctrine.md
    product-principles.md

  /01-category
    editorial-intelligence.md
    leisure-intelligence.md

  /02-ontology
    taste.md
    halo-experience.md
    editorial-confidence.md
    recommendation-model.md

  /03-product
    prd.md
    information-architecture.md
    user-journeys.md
    page-types.md
    vertical-system.md

  /04-data
    entity-model.md
    knowledge-graph.md
    database.md
    scoring-model.md

  /05-ai
    ai-philosophy.md
    retrieval.md
    taste-engine.md
    recommendation-engine.md

  /06-engineering
    architecture.md
    tech-stack.md
    ghost-integration.md
    adr/

  /07-roadmap
    phase-1.md
    phase-2.md
    phase-3.md

  /08-brand
    brand-strategy.md
    voice.md
    visual-system.md
```

Additional architecture files also exist under `/architecture`, including schema sketches, diagrams, ADRs, API architecture, retrieval architecture, infrastructure, CMS/automation workflow, and migration strategy.

## Important Files

Start here:

```text
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/README.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/07-roadmap/phase-1.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/06-engineering/architecture.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/06-engineering/ghost-integration.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/04-data/entity-model.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/04-data/knowledge-graph.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/05-ai/retrieval.md
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence/docs/05-ai/taste-engine.md
```

## Architecture Summary

System components:

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

Data flow:

```text
External APIs -> Candidate Import -> Editorial Review -> Canonical DB
Codex/GPT -> Structured Drafts -> Editorial Review -> Canonical DB
Canonical DB -> Ghost Draft Links -> Website
Canonical DB -> Search / Vector / Graph Projections -> AI Advisor
```

## Ghost Integration

Ghost publishes. It does not own knowledge.

Recommended pattern:

- Ghost post includes canonical shortcodes or structured references.
- Website renders Ghost content and replaces canonical blocks with live data.
- Ghost webhooks sync post IDs, slugs, status, and update timestamps.
- Canonical records reference Ghost content through content link records.

Example:

```text
{{canonical-place-card slug="post-ranch-inn"}}
```

## AI Rules

AI must:

- Cite editorial knowledge.
- Explain reasoning.
- Expose uncertainty.
- Respect editorial confidence.
- Ask clarifying questions.
- Distinguish reviewed facts from draft inference.

AI must not:

- Invent recommendations.
- Upgrade confidence.
- Recommend retired entities.
- Hide stale verification.
- Present imported candidates as approved recommendations.
- Replace final editorial judgment.

## Taste Engine

Taste should model explicit and inferred preferences, including:

- Boutique vs Resort
- Quiet vs Lively
- Luxury Threshold
- Design Focus
- Coffee Interest
- Wine Interest
- Children Ages
- Walkability
- Adventure
- Food Priority

Phase 1 should not build full personalization. It should prepare data structures and editorial tags so personalization can be added later.

## Recommendation Model

Reusable primitives:

- Best Overall
- Worth the Splurge
- Hidden Gem
- Family Favorite
- Date Night
- Rainy Day
- Weekend Plan
- Nearby
- Similar To
- Better Than
- Halo Experience

Every recommendation stores:

- Recommended entity
- Context
- Verdict
- Rationale
- Caveats
- Best for
- Not ideal for
- Confidence
- Verification status
- Evidence
- Last reviewed date

## Phase 1 Build Boundary

Build:

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

Do not build yet:

- Full personalization
- Public user accounts
- Complex AI advisor
- Dedicated graph database
- Dedicated vector database
- Partner portal
- Automated affiliate optimization

## Recommended First Engineering Sprint

From `docs/07-roadmap/phase-1.md`:

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

## Current Working Directory Caveat

The active Codex workspace during this export is:

```text
/Users/gavingarrison/Documents/Codex/2026-07-07/project-brief-launching-a-new-brand
```

The actual new git repo is a sibling directory:

```text
/Users/gavingarrison/Documents/Codex/2026-07-07/travel-intelligence
```

Future work should switch to the `travel-intelligence` repo path.

