export type GhostPost = {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  html?: string;
  plaintext?: string;
  published_at?: string;
};

type GhostPostsResponse = {
  posts?: GhostPost[];
};

const GHOST_CONTENT_API_URL = process.env.GHOST_CONTENT_API_URL;
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

export function isGhostConfigured() {
  return Boolean(GHOST_CONTENT_API_URL && GHOST_CONTENT_API_KEY);
}

export async function getGhostPosts(limit = 3): Promise<GhostPost[]> {
  if (!isGhostConfigured()) {
    return [];
  }

  const url = ghostUrl(
    `/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&limit=${limit}&fields=id,slug,title,excerpt,published_at&order=published_at%20desc`
  );

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GhostPostsResponse;
  return data.posts ?? [];
}

export async function getGhostPostBySlug(slug: string): Promise<GhostPost | null> {
  if (!isGhostConfigured()) {
    return null;
  }

  const url = ghostUrl(
    `/ghost/api/content/posts/slug/${encodeURIComponent(
      slug
    )}/?key=${GHOST_CONTENT_API_KEY}&formats=html,plaintext`
  );

  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GhostPostsResponse;
  return data.posts?.[0] ?? null;
}

function ghostUrl(path: string) {
  const baseUrl = GHOST_CONTENT_API_URL?.replace(/\/$/, "");
  return `${baseUrl}${path}`;
}

