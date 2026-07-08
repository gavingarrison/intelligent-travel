# Recommendation Architecture

## Goal

The recommendation system should produce trusted, contextual, explainable guidance.

It should not optimize for generic popularity, affiliate value, or content volume.

## Recommendation Inputs

A strong recommendation should consider:

- User intent
- Destination
- Season
- Trip length
- Family profile
- Child ages
- Budget sensitivity
- Pace preference
- Occasion
- Time of day
- Weather
- Accessibility needs
- Prior preferences
- Editorial confidence

## Recommendation Layers

### 1. Eligibility

Determine whether an entity can be recommended at all.

Inputs:

- Editorial status
- Verification recency
- Minimum confidence
- Retired or warning flags
- Context constraints

### 2. Context Match

Determine whether the entity fits the person's actual situation.

Inputs:

- Family fit
- Seasonality
- Pace
- Duration
- Cost
- Location
- Occasion

### 3. Editorial Strength

Determine how strongly the company believes in the recommendation.

Inputs:

- Halo Experience scores
- Verdict
- Reviewer confidence
- Evidence quality
- Repeat validation

### 4. Explanation

Return the reason, caveats, and confidence level.

Every recommendation should be able to explain:

- Why this fits
- Why it is worth the time
- Who it is best for
- What could make it wrong
- How recently it was verified

## Human Authority

The system can rank, retrieve, filter, and synthesize. It should not independently create final recommendations without human editorial authority.

## AI Role

AI can assist with:

- Retrieval
- Summarization
- Preference matching
- Similarity detection
- Caveat surfacing
- Itinerary assembly
- Question answering

AI output should be grounded in structured editorial assets and should expose uncertainty when confidence is limited.

## Early Technical Requirement

From the first implementation, keep a distinction between:

- Prose content
- Structured recommendation data
- Evaluation methodology
- Recommendation eligibility
- Personalization context

This distinction protects the company from becoming a blog that later needs to be rebuilt as an intelligence platform.
