import Link from "next/link";

export default function NotFound() {
  return (
    <main className="centered">
      <p className="eyebrow">Not Found</p>
      <h1>This guide is not available.</h1>
      <p className="lede">It may still be in Ghost as a draft or unpublished post.</p>
      <Link className="buttonLink" href="/">
        Return home
      </Link>
    </main>
  );
}

