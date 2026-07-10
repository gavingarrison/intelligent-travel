import Link from "next/link";
import { notFound } from "next/navigation";
import { getGhostPostBySlug } from "../../../lib/ghost";

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export default async function GuidePage({ params }: GuidePageProps) {
  const post = await getGhostPostBySlug(params.slug);

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
      return `<aside class="canonicalPlaceholder"><span>Canonical place card</span><strong>${slug}</strong><p>Structured recommendation data will render here from the canonical database.</p></aside>`;
    }
  );
}

