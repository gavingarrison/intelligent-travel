# Where To Add Content

## Editorial Content

Write publishable articles and guides in Ghost:

```text
https://intelligent-travel.ghost.io/ghost
```

Use Ghost for:

- Guides
- Articles
- Newsletters
- Authors
- Drafting and publishing workflow

## Canonical Structured Content

Add structured place and recommendation records here:

```text
apps/web/content/canonical/places.json
```

Each canonical place record should include:

- `slug`
- `name`
- `location`
- `vertical`
- `category`
- `recommendationPrimitive`
- `verdict`
- `rationale`
- `caveats`
- `bestFor`
- `notIdealFor`
- `confidence`
- `verificationStatus`
- `lastReviewed`
- `evidence`

## Connecting Ghost To Canonical Records

In a Ghost guide, insert this shortcode where a place card should appear:

```text
{{canonical-place-card slug="post-ranch-inn"}}
```

The slug must match a record in:

```text
apps/web/content/canonical/places.json
```

If the slug is missing, the public guide will show a missing-card notice instead of silently inventing a recommendation.

## Current Starter Records

The MVP currently includes starter records for:

- `post-ranch-inn`
- `sgv-boba-placeholder`
- `paso-wine-placeholder`

The placeholder records are intentionally marked as draft and need editorial review before being treated as final recommendations.

