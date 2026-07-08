# API Architecture

## API Principles

- APIs serve canonical knowledge, not CMS pages alone.
- Public, partner, and internal APIs share core domain contracts with different authorization.
- Read APIs are optimized for query and presentation.
- Write APIs enforce workflow, provenance, and validation.
- AI APIs return citations and confidence metadata.

## API Families

### Content API

Consumers:

- Website
- Newsletter
- Mobile apps
- Public API

Endpoints:

- `GET /content/articles`
- `GET /content/articles/{slug}`
- `GET /content/guides/{slug}`
- `GET /content/collections/{slug}`
- `GET /content/homepage`
- `GET /content/sitemap`

### Entity API

Consumers:

- Website
- Maps
- Search
- Mobile apps
- Partner portal
- AI advisor

Endpoints:

- `GET /entities/{id}`
- `GET /entities/by-slug/{type}/{slug}`
- `GET /entities/{id}/relationships`
- `GET /entities/{id}/scores`
- `GET /entities/{id}/media`
- `GET /entities/{id}/recommendations`

### Search API

Consumers:

- Website
- Mobile apps
- AI advisor
- Future public API

Endpoints:

- `GET /search?q=&type=&region=&season=&familyFit=`
- `GET /search/suggest?q=`
- `POST /search/hybrid`

### Recommendation API

Consumers:

- Website
- Mobile apps
- AI advisor

Endpoints:

- `POST /recommendations/nearby`
- `POST /recommendations/similar`
- `POST /recommendations/better-than`
- `POST /recommendations/hidden-gems`
- `POST /recommendations/worth-the-splurge`
- `POST /recommendations/contextual`
- `POST /itineraries/generate`

### AI Advisor API

Consumers:

- Web advisor
- Mobile advisor
- Internal editorial tools

Endpoints:

- `POST /advisor/query`
- `POST /advisor/plan-trip`
- `POST /advisor/refine`
- `GET /advisor/sessions/{id}`

Response requirements:

- Answer
- Recommended entities
- Explanation
- Citations
- Editorial confidence
- AI confidence
- Caveats
- Follow-up questions when context is insufficient

### Maps API

Consumers:

- Website maps
- Mobile maps
- Internal planning tools

Endpoints:

- `GET /maps/entities?bbox=&type=`
- `GET /maps/routes/{id}`
- `GET /maps/itineraries/{id}`
- `GET /maps/clusters`

### Partner API

Consumers:

- Partner portal
- Booking partners
- Sponsors

Endpoints:

- `GET /partner/entities`
- `GET /partner/performance`
- `POST /partner/change-reports`
- `GET /partner/bookings`
- `GET /partner/affiliate-links`

Partner data should not directly overwrite editorial data. Partner submissions create reviewable change reports.

## API Versioning

Use:

- URL versioning for external APIs: `/v1`.
- Schema versioning for internal events.
- Backward-compatible additive changes whenever possible.
- Deprecation windows for public API changes.

## Authorization Model

Roles:

- Anonymous reader
- Member
- Editor
- Reviewer
- Contributor
- Admin
- Partner
- Sponsor
- API client

Authorization should be policy-based, not hardcoded per route.

