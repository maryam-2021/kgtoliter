# Kg to litre

An Astro static site for estimating volume from mass and a substance's reference density. The production site is configured for `https://kgtolitre.com` and can be deployed as a static Cloudflare Pages project.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

The Astro development server prints its local URL. The optional Express API is a separate process:

```sh
npm run dev:api
```

The API is not required for the static site. Do not expose it publicly without reviewing its persistence, authentication, rate-limiting, and deployment model.

## Quality checks

```sh
npm run check       # Astro and TypeScript diagnostics
npm run lint        # ESLint for JS, TS, and Astro
npm run build       # static production build
npm test            # unit, API integration, and generated-link tests
npm run test:e2e    # Playwright interaction and accessibility checks
npm run format:check
```

`npm test` expects `dist/` to exist because its link tests inspect generated HTML. Run `npm run build` first, or use `npm run test:all` after installing Playwright's Chromium browser with `npx playwright install chromium`.

## Project structure

- `src/pages/` — Astro routes and the JSON catalogue endpoint
- `src/components/` — calculators and presentation components
- `src/data/substances.ts` — comprehensive source catalogue
- `src/data/catalog.ts` — normalized adapter used by the directory and API
- `src/content/guides/` — educational articles
- `server.js` — optional Express API
- `tests/` — Node tests and Playwright browser tests

The directory, converters, JSON endpoint, and API all consume the normalized adapter in `src/data/catalog.ts`. Construction formulas live separately in `src/data/constructionCalculators.ts` and contain no density records.

## Density methodology

Conversions use `volume (L) = mass (kg) / density (kg/L)`. Catalogue values are compiled reference estimates, not measurements of the user's material. Temperature, pressure, purity, formulation, moisture, and packing can change density.

The repository does not currently contain a complete per-record bibliography or an independent peer-review log. See the public `/methodology/` page for the disclosure and the proposed verification standard. Safety-critical and commercial work must use a current manufacturer specification, governing standard, or calibrated measurement.

## Deployment

Build command: `npm run build`

Output directory: `dist`

Deploy the production build directly to the configured Cloudflare Pages project:

```sh
npm run deploy:cloudflare
```

Cloudflare Pages project: `kgtoliter`; production branch: `main`.

The service worker and web manifest live in `public/`. The Express API is not part of the static deployment and must be deployed and secured separately if it is ever needed.

## Git baseline

This working tree may not yet have an initial commit. Review generated and local files, then create the first commit deliberately; automated setup does not stage or commit user files.
