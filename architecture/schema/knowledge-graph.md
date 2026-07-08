# Knowledge Graph Model

## Purpose

The knowledge graph captures how places, experiences, people, seasons, content, scores, and user contexts relate to each other.

The graph should answer questions like:

- Which hotels are best for toddlers in coastal cities during spring?
- Which coffee shops are good before a museum visit?
- Which restaurants near this hotel are worth the splurge?
- Which wineries are near a scenic road trip route?
- Which experiences belong together in a memorable half-day?

## Canonical Relationship Edge

All meaningful relationships should be represented as first-class edges.

Suggested fields:

- Source entity
- Target entity
- Relationship type
- Strength
- Directionality
- Context
- Evidence
- Created by
- Verified by
- Valid from
- Valid through
- Public/private visibility

## Relationship Types

### Geography

- belongs_to
- contains
- nearby
- within_walking_distance
- along_route
- has_viewpoint
- served_by_airport

### Verticals

- belongs_to_vertical
- featured_in_vertical
- best_in_vertical_for_location
- ranked_within_vertical
- comparable_within_vertical

### Editorial

- appears_in
- references
- recommends
- compares_to
- replaces
- contradicts
- supports
- cites

### Experience Fit

- good_for
- not_good_for
- perfect_for
- situational_for
- weather_dependent
- seasonally_best_in
- best_before
- best_after
- pairs_with

### Commerce

- bookable_through
- has_affiliate_link
- sponsored_by
- partner_of

### Brand And People

- owned_by
- operated_by
- designed_by
- reviewed_by
- authored_by
- edited_by
- photographed_by

### Beverage

- produces
- made_from
- served_at
- pairs_with_food
- located_in_vineyard

## Example Edges

```text
Hotel -> belongs_to -> City
City -> belongs_to -> Region
Hotel -> belongs_to_vertical -> Hotels
Boba Shop -> belongs_to_vertical -> Boba
Wine Producer -> belongs_to_vertical -> Wine
Restaurant -> appears_in -> Guide
Guide -> references -> Hotel
Hotel -> appears_in -> Itinerary
Restaurant -> nearby -> Hotel
Winery -> nearby -> Restaurant
Hotel -> good_for -> Toddlers
Coffee Shop -> best_before -> Aquarium Visit
Halo Experience -> references -> Hotel
Halo Experience -> references -> Restaurant
Halo Experience -> references -> Viewpoint
Trail -> weather_dependent -> Rain
Road Trip -> along_route -> Viewpoint
Wine Bottle -> produced_by -> Wine Producer
Wine Producer -> located_in -> Region
```

## Graph Projection

The canonical relationship tables live in PostgreSQL. A graph database projection can be introduced when traversal depth, graph algorithms, or relationship analytics outgrow SQL.

Projection rules:

- Postgres remains source of truth.
- Graph projection is rebuildable.
- Edge types are versioned.
- Deletions are soft-deleted and projected as inactive.
- Private editorial edges are excluded from public products unless explicitly allowed.
