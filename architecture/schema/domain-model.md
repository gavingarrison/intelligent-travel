# Complete Entity Model

## Modeling Approach

The platform uses a canonical entity model with typed entities, explicit relationship edges, versioned editorial content, reusable scores, and provenance.

This avoids two failure modes:

- A rigid CMS schema that cannot support intelligence products.
- A loose document database that cannot protect data quality or relationships.

## Entity Families

### Geography

Core entities:

- Region
- Country
- State or province
- City
- Neighborhood
- Viewpoint
- Map

Important fields:

- Name
- Slug
- Parent geography
- Coordinates or boundary
- Time zone
- Seasons
- Climate notes
- Editorial summary
- Public status

Geography is the primary navigation spine. Most editorial and recommendation experiences should be answerable through a location first, then a vertical lens.

Example:

```text
California -> Central Coast -> Big Sur -> Hotels
San Gabriel Valley -> Boba
Sonoma -> Wine
Tokyo -> Coffee
```

### Verticals

Core entities:

- Vertical
- Vertical category
- Vertical collection

Examples:

- Boba
- Wine
- Coffee
- Hotels
- Restaurants
- Bakeries
- Parks
- Museums
- Family experiences
- Seasonal events

Important fields:

- Name
- Slug
- Parent vertical
- Editorial definition
- Inclusion rules
- Evaluation methodology
- Related score types
- Related entity types
- Public status

Verticals should not replace entity types. A place can belong to multiple verticals.

Example:

```text
Winery = place type
Wine = vertical
Restaurant = place type and vertical
Boba shop = place type under the Boba vertical
Hotel = place type and vertical
```

### Places

Core entities:

- Hotel
- Hotel room
- Restaurant
- Coffee shop
- Bakery
- Bar
- Winery
- Brewery
- Museum
- Park
- Trail
- Airport
- Transportation provider

Important fields:

- Name
- Slug
- Place type
- Address
- Coordinates
- Parent geography
- Brand affiliation
- Price band
- Reservation policy
- Hours
- Child policy
- Pet policy
- Accessibility
- Parking
- Noise profile
- Crowd profile
- Walkability
- Weather dependency
- Verification status

### Experiences

Core entities:

- Experience
- Halo Experience
- Road trip
- Itinerary
- Event
- Season
- Editorial collection

Important fields:

- Experience type
- Duration
- Best time of day
- Best season
- Pace
- Effort level
- Age suitability
- Weather dependency
- Memory value
- Required reservations
- Primary entities referenced
- Alternative entities
- Friction notes

### Editorial Content

Core entities:

- Article
- Guide
- Review
- Itinerary article
- Collection landing page
- Author profile
- Editorial note

Important fields:

- Title
- Deck
- Body
- Content type
- Editorial state
- Authors
- Editors
- Canonical URL
- SEO title
- SEO description
- Social image
- Scheduled publish time
- Published time
- Version history
- Related entities

### Media

Core entities:

- Photo asset
- Video asset
- Gallery
- Map asset
- Caption
- Credit
- Rights record

Important fields:

- Storage key
- Asset type
- MIME type
- Width
- Height
- Duration
- Alt text
- Caption
- Credit
- Rights status
- Location
- Related entity
- Public/private flag

### People And Organizations

Core entities:

- Person
- User profile
- Taste profile
- Brand
- Sponsor
- Partner relationship
- Contributor
- Reviewer

Important fields:

- Name
- Role
- Bio
- Credentials
- Affiliation
- Preference signals
- Family structure
- Privacy controls
- Relationship type
- Contract metadata

### Commerce

Core entities:

- Booking
- Affiliate link
- Partner offer
- Sponsor placement

Important fields:

- Related entity
- Provider
- URL
- Campaign
- Commission model
- Disclosure text
- Start date
- End date
- Status
- Attribution metadata

### Wine And Beverage

Core entities:

- Wine producer
- Wine bottle
- Varietal
- Vineyard
- Vintage

Important fields:

- Producer
- Varietal
- Vintage
- Region
- Tasting notes
- Food pairing
- Availability
- Price history
- Related winery
- Related restaurant
- Editorial verdict

## Entity Design Rules

- Every durable object receives a stable UUID and a human-readable slug.
- Entity-specific tables hold high-integrity fields for important types.
- Shared metadata lives in canonical tables, not duplicated per entity.
- Flexible attributes can use JSONB only when the schema is still emerging.
- Important fields graduate from JSONB into typed columns once used for filtering, scoring, or recommendation logic.
- Every publishable object has workflow state and version history.
- Every recommendation has provenance and confidence.
