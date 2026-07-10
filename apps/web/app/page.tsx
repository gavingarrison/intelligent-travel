import Link from "next/link";
import { getGhostPosts, isGhostConfigured } from "../lib/ghost";

export const dynamic = "force-dynamic";

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
          <p className="eyebrow">Leisure Editorial Intelligence</p>
          <h1>Intelligent Travel</h1>
          <p className="lede">
            Trusted judgment for places, routes, stays, meals, and the rare hours
            people get to spend well.
          </p>
        </div>
      </section>

      <section className="section introSection">
        <div className="sectionHeader">
          <p className="eyebrow">What We Cover</p>
          <h2>Judgment for time well spent.</h2>
        </div>
        <p className="introCopy">
          We publish guides and editorial recommendations for hotels, food,
          drink, routes, places, and the small decisions that shape a memorable
          trip.
        </p>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Editorial Guides</p>
          <h2>Latest Guides</h2>
        </div>
        {!ghostReady ? (
          <div className="notice">
            Guides are being prepared. Check back soon for the first Intelligent
            Travel recommendations.
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
