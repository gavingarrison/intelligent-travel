import type { CanonicalPlace } from "../lib/canonical";

type CanonicalPlaceCardProps = {
  place: CanonicalPlace;
};

export function CanonicalPlaceCard({ place }: CanonicalPlaceCardProps) {
  return (
    <article className="canonicalCard">
      <div className="canonicalCardHeader">
        <div>
          <p className="sliceMeta">{place.location} / {place.vertical}</p>
          <h3>{place.name}</h3>
        </div>
        <span className="status">{place.confidence}</span>
      </div>
      <p className="canonicalVerdict">{place.verdict}</p>
      <dl className="canonicalDetails">
        <div>
          <dt>Rationale</dt>
          <dd>{place.rationale}</dd>
        </div>
        <div>
          <dt>Caveats</dt>
          <dd>{place.caveats}</dd>
        </div>
        <div>
          <dt>Best For</dt>
          <dd>{place.bestFor.join(", ")}</dd>
        </div>
        <div>
          <dt>Not Ideal For</dt>
          <dd>{place.notIdealFor.join(", ")}</dd>
        </div>
        <div>
          <dt>Verification</dt>
          <dd>{place.verificationStatus}</dd>
        </div>
      </dl>
    </article>
  );
}

