import places from "../content/canonical/places.json";

export type CanonicalPlace = {
  slug: string;
  name: string;
  location: string;
  vertical: string;
  category: string;
  recommendationPrimitive: string;
  verdict: string;
  rationale: string;
  caveats: string;
  bestFor: string[];
  notIdealFor: string[];
  confidence: string;
  verificationStatus: string;
  lastReviewed: string | null;
  evidence: string[];
};

const canonicalPlaces = places as CanonicalPlace[];

export function getCanonicalPlace(slug: string) {
  return canonicalPlaces.find((place) => place.slug === slug) ?? null;
}

export function getCanonicalPlaces() {
  return canonicalPlaces;
}

export function getPlacesByLocationAndVertical(location: string, vertical: string) {
  const normalizedLocation = normalize(location);
  const normalizedVertical = normalize(vertical);

  return canonicalPlaces.filter(
    (place) =>
      normalize(place.location) === normalizedLocation &&
      normalize(place.vertical) === normalizedVertical
  );
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

