import Link from "next/link";
import { notFound } from "next/navigation";
import { CanonicalPlaceCard } from "../../../components/canonical-place-card";
import { getCanonicalPlace } from "../../../lib/canonical";

type PlacePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlacePage({ params }: PlacePageProps) {
  const { slug } = await params;
  const place = getCanonicalPlace(slug);

  if (!place) {
    notFound();
  }

  return (
    <main>
      <section className="article">
        <Link className="backLink" href="/">
          Back to Intelligent Travel
        </Link>
        <p className="eyebrow">Canonical Place</p>
        <h1>{place.name}</h1>
        <p className="lede">
          Structured editorial memory for {place.location} / {place.vertical}.
        </p>
        <CanonicalPlaceCard place={place} />
      </section>
    </main>
  );
}

