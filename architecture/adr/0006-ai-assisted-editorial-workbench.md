# ADR 0006: Use Codex And GPT As The Editorial Workbench

## Status

Accepted

## Context

The company needs high editorial leverage. The founder should be able to draft guides, reviews, structured scores, relationship patches, and Ghost-ready content inside Codex or GPT.

At the same time, the platform must preserve trust. AI-generated content and structured data cannot silently become editorial truth.

## Decision

Use Codex and GPT as the primary editorial workbench for drafting:

- Destination briefs
- Article drafts
- Guide drafts
- Structured entity patches
- Relationship suggestions
- Score suggestions
- Recommendation rationales
- Ghost-ready content

All AI-generated structured data must pass through review before becoming public canonical knowledge.

## Consequences

Benefits:

- Faster editorial production.
- Lower data-entry burden.
- Structured knowledge can be drafted alongside prose.
- Codex can operate directly on repository seed files, schemas, prompts, and content packages.

Tradeoffs:

- Requires review workflows and audit metadata.
- AI-generated fields need provenance.
- The system must distinguish draft suggestions from approved editorial judgment.

## Implementation Notes

Early implementation should use YAML or JSON structured patches because they are reviewable in Codex and easy to apply to the database.

Example:

```yaml
entity_patch:
  type: hotel
  slug: post-ranch-inn
  recommendation:
    verdict: recommended_with_caveats
    review_status: needs_human_approval
```

Reviewed patches can later be applied through an internal API or CMS workflow.

