import Link from "next/link";
import { notFound } from "next/navigation";
import { getCanonicalPlace } from "../../../lib/canonical";
import { getGhostPostBySlug } from "../../../lib/ghost";

type GuidePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const post = await getGhostPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="article">
        <Link className="backLink" href="/">
          Back to Intelligent Travel
        </Link>
        <p className="eyebrow">Guide</p>
        <h1>{post.title}</h1>
        {post.excerpt ? <p className="lede">{post.excerpt}</p> : null}
        <div
          className="ghostContent"
          dangerouslySetInnerHTML={{ __html: renderCanonicalShortcodes(post.html ?? "") }}
        />
      </article>
    </main>
  );
}

function renderCanonicalShortcodes(html: string) {
  return html.replace(
    /\{\{canonical-place-card slug=&quot;([^&]+)&quot;\}\}|\{\{canonical-place-card slug="([^"]+)"\}\}/g,
    (_, encodedSlug: string | undefined, plainSlug: string | undefined) => {
      const slug = encodedSlug ?? plainSlug;
      if (!slug) {
        return "";
      }

      const place = getCanonicalPlace(slug);

      if (!place) {
        return `<aside class="canonicalPlaceholder"><span>Missing canonical place card</span><strong>${escapeHtml(slug)}</strong><p>Add this slug to <code>apps/web/content/canonical/places.json</code>.</p></aside>`;
      }

      return `<article class="canonicalCard"><div class="canonicalCardHeader"><div><p class="sliceMeta">${escapeHtml(
        `${place.location} / ${place.vertical}`
      )}</p><h3>${escapeHtml(place.name)}</h3></div><span class="status">${escapeHtml(
        place.confidence
      )}</span></div><p class="canonicalVerdict">${escapeHtml(
        place.verdict
      )}</p><dl class="canonicalDetails"><div><dt>Rationale</dt><dd>${escapeHtml(
        place.rationale
      )}</dd></div><div><dt>Caveats</dt><dd>${escapeHtml(
        place.caveats
      )}</dd></div><div><dt>Best For</dt><dd>${escapeHtml(
        place.bestFor.join(", ")
      )}</dd></div><div><dt>Not Ideal For</dt><dd>${escapeHtml(
        place.notIdealFor.join(", ")
      )}</dd></div><div><dt>Verification</dt><dd>${escapeHtml(
        place.verificationStatus
      )}</dd></div></dl></article>`;
    }
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
