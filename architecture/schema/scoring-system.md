# Scoring System

## Purpose

The scoring system gives editorial judgment a consistent structure without reducing taste to math.

Scores should support:

- Editorial recommendations
- Search ranking
- Recommendation eligibility
- Freshness and reverification
- AI confidence
- Transparency for readers
- Internal quality control

## Score Types

Required score dimensions:

- Editorial Score
- Design Score
- Service Score
- Food Score
- Beauty Score
- Family Score
- Value Score
- Luxury Score
- Halo Score
- Confidence Score
- AI Confidence
- Freshness
- Verification Status

## Score Record

Each score should include:

- Entity
- Score type
- Numeric value
- Scale
- Label
- Rationale
- Methodology version
- Reviewer
- Evidence
- Confidence
- Visibility
- Valid from
- Valid through

## Suggested Scales

Use separate scales for different needs:

- `0-100` for internal ranking.
- `1-5` for simple editorial display where appropriate.
- Enum labels for verdicts.
- Boolean or enum for verification.

Avoid exposing overly precise public scores unless the precision is meaningful.

## Halo Score Composition

Halo Score should derive from:

- Memory Value
- Taste And Quality
- Context Fit
- Time Value
- Friction
- Trust Confidence

The derived score should preserve the component scores and written rationale.

## Verification Status

Recommended statuses:

- unverified
- desk_researched
- firsthand_current
- firsthand_stale
- partner_reported
- reader_reported_change
- needs_reverification
- retired

## Freshness

Freshness should be computed from:

- Last firsthand visit
- Last editorial verification
- Known volatility
- Seasonality
- Source confidence
- User or partner change reports

Example volatility:

- High: restaurant hours, menus, openings, service quality.
- Medium: hotel service, child policies, booking requirements.
- Low: geography, architecture, scenic viewpoints.

## AI Confidence

AI confidence should be separate from editorial confidence.

AI confidence reflects:

- Retrieval quality
- Source agreement
- Recency
- Query specificity
- Evidence coverage
- Whether the answer requires taste judgment

AI confidence must never upgrade editorial confidence.

