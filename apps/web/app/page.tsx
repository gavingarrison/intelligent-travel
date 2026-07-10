import Link from "next/link";
import { getGhostPosts, isGhostConfigured } from "../lib/ghost";

const launchSlices = [
  {
    location: "Big Sur",
    vertical: "Hotels",
    href: "/locations/big-sur/hotels",
    verdict: "Remote coastal stays where the view, silence, and service justify the trip."
  },
  {
    location: "San Gabriel Valley",
    vertical: "Boba",
    href: "/locations/san-gabriel-valley/boba",
    verdict: "A dense, opinionated guide to texture, tea quality, sweetness, and line-worthiness."
  },
  {
    location: "Paso Robles",
    vertical: "Wine",
    href: "/locations/paso-robles/wine",
    verdict: "A practical route through producers, tasting rooms, food stops, and weekend pacing."
  }
];

export default async function HomePage() {
  const posts = await getGhostPosts(3);
  const ghostReady = isGhostConfigured();

  return (
    <main>
      <section className="hero">
        <div className="heroImage" aria-hidden="true">
          <div className="routeLine" />
          <div className="mapPin pinOne" />
          <div className="mapPin pinTwo" />
          <div className="mapPin pinThree" />
        </div>
        <div className="heroCopy">
          <p className="eyebrow">Editorial Intelligence Platform</p>
          <h1>Intelligent Travel</h1>
          <p className="lede">
            Trusted judgment for places, routes, stays, meals, and the rare hours
            people get to spend well.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Phase 1</p>
          <h2>Launch Slices</h2>
        </div>
        <div className="sliceGrid">
          {launchSlices.map((slice) => (
            <Link className="sliceCard" href={slice.href} key={`${slice.location}-${slice.vertical}`}>
              <p className="sliceMeta">{slice.location}</p>
              <h3>{slice.vertical}</h3>
              <p>{slice.verdict}</p>
              <span className="status">View canonical records</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Ghost Publishing</p>
          <h2>Latest Guides</h2>
        </div>
        {!ghostReady ? (
          <div className="notice">
            Add <code>GHOST_CONTENT_API_URL</code> and{" "}
            <code>GHOST_CONTENT_API_KEY</code> in Railway to display published
            Ghost guides here.
          </div>
        ) : posts.length > 0 ? (
          <div className="guideList">
            {posts.map((post) => (
              <Link className="guideLink" href={`/guides/${post.slug}`} key={post.id}>
                <span>{post.title}</span>
                <span>Read guide</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="notice">
            Ghost is connected, but no published posts are available yet.
          </div>
        )}
      </section>
    </main>
  );
}
