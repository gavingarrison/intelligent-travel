# Ghost Integration

## Decision

Ghost publishes. It does not own canonical knowledge.

## Ghost Owns

- Articles
- Guides
- Newsletters
- Authors
- Publishing workflow
- Basic editorial presentation

## Canonical Database Owns

- Regions
- Places
- Verticals
- Recommendations
- Scores
- Relationships
- Verification status
- Affiliate and booking metadata
- AI retrieval context

## Integration Pattern

- Ghost post includes canonical shortcodes or structured references.
- Website renders Ghost content and replaces canonical blocks with live data.
- Ghost webhooks sync post IDs, slugs, status, and update timestamps.
- Canonical records can reference Ghost content through content link records.

Example:

```text
{{canonical-place-card slug="post-ranch-inn"}}
```

## Rule

Do not duplicate volatile facts in prose when canonical data can render them.

