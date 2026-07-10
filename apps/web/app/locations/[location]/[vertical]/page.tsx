import Link from "next/link";
import { CanonicalPlaceCard } from "../../../../components/canonical-place-card";
import { getPlacesByLocationAndVertical } from "../../../../lib/canonical";

type LocationVerticalPageProps = {
  params: Promise<{
    location: string;
    vertical: string;
  }>;
};

export default async function LocationVerticalPage({
  params
}: LocationVerticalPageProps) {
  const { location, vertical } = await params;
  const places = getPlacesByLocationAndVertical(location, vertical);

  return (
    <main>
      <section className="article">
        <Link className="backLink" href="/">
          Back to Intelligent Travel
        </Link>
        <p className="eyebrow">Location / Vertical</p>
        <h1>{titleize(location)} {titleize(vertical)}</h1>
        <p className="lede">
          Canonical records for this slice. Draft records should be reviewed
          before becoming final recommendations.
        </p>
        <div className="canonicalStack">
          {places.length > 0 ? (
            places.map((place) => <CanonicalPlaceCard place={place} key={place.slug} />)
          ) : (
            <div className="notice">No canonical records exist for this slice yet.</div>
          )}
        </div>
      </section>
    </main>
  );
}

function titleize(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

