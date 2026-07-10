# Railway MVP Setup

## Current Public Web URL

```text
https://intelligent-travel-production.up.railway.app
```

Use this value for:

```text
NEXT_PUBLIC_SITE_URL
```

## Services

The MVP should run in one Railway project with these services:

- `web`: Next.js public website.
- `canonical-db`: Railway PostgreSQL for canonical structured data.
- `ghost`: Ghost publishing and editorial admin.
- `ghost-db`: MySQL for Ghost only.

The `web` service should deploy from the GitHub repo with this root directory:

```text
apps/web
```

The service commands are:

```text
npm install
npm run build
npm run start
```

## Environment Variables For `web`

```text
NEXT_PUBLIC_SITE_URL=https://intelligent-travel-production.up.railway.app
DATABASE_URL=<Railway PostgreSQL DATABASE_URL>
GHOST_CONTENT_API_URL=https://intelligent-travel.ghost.io
GHOST_CONTENT_API_KEY=<Ghost Content API key>
```

Do not use `*.railway.internal` for `GHOST_CONTENT_API_URL`. The web app needs the public Ghost URL when rendering published content.

## Ghost Setup

In Ghost Admin:

1. Open Settings.
2. Open Integrations.
3. Add a custom integration for the website.
4. Copy the Content API URL and Content API Key.
5. Add those values to the Railway `web` service.

Current Ghost URL:

```text
https://intelligent-travel.ghost.io
```

Ghost owns articles, guides, newsletters, authors, and publishing workflow. It does not own canonical travel knowledge.

Do not commit the Ghost Content API key to the repository. Store it only in Railway service variables and local ignored environment files.

## Canonical Database Setup

Railway PostgreSQL owns the product memory:

- Regions
- Locations
- Places
- Verticals
- Recommendations
- Scores
- Relationships
- Verification status
- Ghost content links

The application should read Ghost content and canonical data separately, then compose them in the custom frontend.

## MVP Integration Contract

Ghost guide content can include canonical references like:

```text
{{canonical-place-card slug="post-ranch-inn"}}
```

The Next.js frontend should replace those references with live canonical place cards from the database.
