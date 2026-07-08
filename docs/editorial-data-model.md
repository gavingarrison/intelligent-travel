# Editorial Data Model

## Principle

Editorial content is a structured intellectual asset.

Every review, recommendation, guide, itinerary, observation, and evaluation should be modeled so that it can be reused by future editorial, search, personalization, and recommendation systems.

## Core Entities

### Place

A physical or geographic location.

Examples:

- City
- Region
- Neighborhood
- Resort
- Hotel
- Restaurant
- Park
- Museum
- Winery
- Coffee shop

Suggested fields:

- Name
- Type
- Location
- Parent location
- Coordinates
- Website
- Price band
- Best seasons
- Accessibility notes
- Family fit notes
- Editorial status

### Experience

A discrete thing someone can do or remember.

Examples:

- Morning coffee ritual
- Hotel pool afternoon
- Museum visit
- Scenic drive
- Restaurant meal
- Architecture walk
- Beach day
- Seasonal event

Suggested fields:

- Name
- Experience type
- Associated place
- Duration
- Best time of day
- Best season
- Age suitability
- Pace
- Effort level
- Cost context
- Memory value
- Friction points
- Editorial verdict

### Recommendation

An editorial endorsement with a clear point of view.

Suggested fields:

- Recommended entity
- Recommendation type
- Audience fit
- Context fit
- Why it matters
- Why it may not fit
- Confidence level
- Evidence summary
- Evaluation scores
- Reviewer
- Review date
- Last verified date
- Status

### Review

A structured evaluation supported by prose and evidence.

Suggested fields:

- Subject
- Reviewer
- Visit date
- Review date
- Visit context
- Companion context
- Paid or comped status
- Evaluation framework version
- Scores
- Observations
- Verdict
- Recommendation status

### Guide

A composed editorial artifact that uses structured recommendations.

Suggested fields:

- Title
- Destination
- Audience
- Season
- Trip length
- Included recommendations
- Excluded-but-considered items
- Editorial thesis
- Last updated date

### Itinerary

A sequenced leisure plan.

Suggested fields:

- Destination
- Duration
- Audience profile
- Pace
- Day structure
- Time blocks
- Primary recommendations
- Backup options
- Friction notes
- Weather alternatives

## Editorial States

Recommended states:

- Draft
- In review
- Fact check
- Approved
- Published
- Needs reverification
- Retired

## Provenance

Every durable recommendation should preserve:

- Who experienced it
- When it was experienced
- What the context was
- What evidence supports the claim
- When the recommendation was last verified
- What would cause the verdict to change

## Modeling Constraint

Do not collapse editorial judgment into a single rating. Scores can help, but final recommendation should remain an explainable human judgment.
