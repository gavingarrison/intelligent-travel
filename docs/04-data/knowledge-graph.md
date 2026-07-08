# Knowledge Graph

Relationships are first-class citizens.

## Core Relationships

- belongs_to
- contains
- nearby
- appears_in
- references
- recommends
- good_for
- not_good_for
- worth_the_splurge
- hidden_gem
- similar_to
- better_than
- pairs_with
- best_before
- best_after
- belongs_to_vertical

## Examples

```text
Post Ranch Inn -> belongs_to -> Big Sur
Post Ranch Inn -> belongs_to_vertical -> Hotels
Best Family Hotels in Big Sur -> references -> Post Ranch Inn
Boba Shop -> belongs_to -> San Gabriel Valley
Boba Shop -> belongs_to_vertical -> Boba
Winery -> belongs_to -> Paso Robles
Wine Producer -> belongs_to_vertical -> Wine
```

## Rule

Relationships should store context, evidence, strength, confidence, and visibility.

