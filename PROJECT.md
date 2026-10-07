# Project: Matrimony4U Site-Wide Audit, SEO, AdSense & Caching Optimization

## Architecture
- **Framework**: Next.js 16.1.1 (App Router), React 19.2.3, Tailwind CSS v4.
- **Rendering Model**: 100% Static Site Generation (SSG) with Weekly Incremental Static Regeneration (ISR `revalidate = 604800` seconds / 7 days).
- **Edge Deployment**: Optimized for Vercel Hobby tier. No serverless function executions on cache hits.
- **Data Architecture**: Self-contained static datasets in `lib/` (`lib/blog.js`, `lib/data/regionalGuides.js`, `lib/config.js`, `lib/seo.js`). No database or runtime API dependencies.
- **Page Inventory**: 46 distinct public pages (23 static pages + 20 blog posts + 3 regional registration guides) plus dynamic/SSG `/sitemap.xml`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | AdSense Under Construction Fix | Replace all 5 "Coming Soon" banners with interactive tools or functional worksheets in calculator pages | M1 | Survey 1, Survey 3 |
| 2 | Thin Content Expansion | Expand `/wedding-savings-calculator`, `/contact`, and short blog posts to well above 500-700+ words | M1 | Survey 1 |
| 3 | Metadata & Open Graph Uniformity | Standardize `generatePageMetadata()` on `/registration/[slug]`, fix fallback OG image (`/logo.png`), remove duplicate schemas | M1 | Survey 1 |
| 4 | Weekly ISR Caching | Set `export const revalidate = 604800;` on all 25 page routes and root layout | M2 | Survey 2 |
| 5 | Static Route Fallback Lock | Add `dynamic = 'force-static'` and `dynamicParams = false` to dynamic routes | M2 | Survey 2 |
| 6 | Sitemap SSG & Dynamic Generation | Remove `runtime = 'edge'` from `app/sitemap.js`, add `revalidate = 604800`, dynamically include all 46 pages | M2 | Survey 1, Survey 2 |
| 7 | Next.js & Vercel Config Tuning | Set `images.minimumCacheTTL = 604800`, clean unused API function block from `vercel.json` | M2 | Survey 2 |
| 8 | Broken Link Remediation | Fix `wedding-timeline-planner` broken link in `app/wedding-planning/page.js` | M3 | Survey 3 |
| 9 | Orphaned Route Integration | Link 3 regional guides (`/registration/*`) from tools, documents checklist, registration page, and footer | M3 | Survey 1, Survey 3 |
| 10 | Trailing Slash Normalization | Normalize all 56 internal links across `app/` and `components/` to remove trailing slashes | M3 | Survey 1, Survey 3 |
| 11 | Hydration Mismatch Elimination | Fix date formatting in `BlogListClient.js`, max date in date pickers, and `Header.js` state in effect | M3 | Survey 3 |
| 12 | UI/UX Micro-Fixes | Fix `Breadcrumbs.js` CSS typo (`hover:text-primary-600`), normalize homepage category links | M3 | Survey 3 |
| 13 | Dead Code & Asset Purge | Remove `matrimony4u.zip`, delete unused Next.js template SVGs from `public/` | M4 | Survey 3 |
| 14 | Dependency & Script Cleanup | Move `googleapis` to `devDependencies`, add `"audit": "node audit.mjs"` to `package.json` | M4 | Survey 2, Survey 3 |
| 15 | Build & Static Output Validation | Verify `npm run build` produces 100% static/SSG routes with zero dynamic `ƒ` routes | M5 | Acceptance Criteria |
| 16 | Audit Script Acceptance | Verify `node audit.mjs` passes 100% of pages with >300 words, valid h1, title, and meta descriptions | M5 | Acceptance Criteria |
| 17 | Browser Agent Verification | Launch server, verify 0 broken links (404), 0 console errors, 0 hydration warnings via browser navigation | M5 | Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | AdSense & Content Threshold | Remove "Coming Soon" banners, expand thin content (>500w), fix `/registration` metadata, fix OG image fallback, deduplicate schema | none | DONE |
| M2 | Vercel Caching & Static SSG | Add `revalidate = 604800` & `force-static` across all routes, remove edge runtime from sitemap, sync sitemap to 46 URLs, update `next.config.mjs` & `vercel.json` | none | DONE |
| M3 | UI/UX, Navigation Links & Hydration | Fix broken 404 links, link orphaned regional guides, remove trailing slashes from internal links, fix hydration issues in date inputs and blog list | M1 | DONE |
| M4 | Code Cleanup & Dead Code Removal | Delete `matrimony4u.zip`, remove unused SVGs, clean `package.json` (move googleapis to devDeps, add audit script), clean `vercel.json` | none | DONE |
| M5 | Build & Browser Verification | Verify `npm run build` static output, run `node audit.mjs` (100% pass), launch local server, test user journeys with browser agent | M1, M2, M3, M4 | DONE |

## Interface Contracts
### Route Segments ↔ Next.js Build Engine
- All route segments must export:
  ```javascript
  export const revalidate = 604800; // 7 days (weekly revalidation)
  export const dynamic = 'force-static';
  ```
- Dynamic route segments (`app/blog/[slug]/page.js`, `app/registration/[slug]/page.js`) must additionally export:
  ```javascript
  export const dynamicParams = false;
  ```
  And implement `generateStaticParams()` dynamically bound to their source arrays.

### Internal Link Protocol
- All internal URLs must match `next.config.mjs` (`trailingSlash: false`).
- Format: `/${route}` without trailing slashes (e.g., `/wedding-budget-calculator`, not `/wedding-budget-calculator/`).
- Use `<Link>` component from `next/link` for all internal routes.

### SEO Metadata Standard
- Every page must use `generatePageMetadata()` or `generateToolMetadata()` from `lib/seo.js`.
- Fallback `ogImage` must resolve to an existing asset (`/logo.png`).
- Word count on every rendered route must exceed 500 words (safety margin above the strict 300-word AdSense cutoff).

## Code Layout
- `app/`: Next.js App Router route components and layouts
  - `app/layout.js`: Global root layout, font imports, root metadata, global schema
  - `app/page.js`: Homepage
  - `app/sitemap.js`: Sitemap generator (SSG, 46 routes)
  - `app/blog/[slug]/`: Dynamic blog post route
  - `app/registration/[slug]/`: Regional registration guides
  - `app/*-calculator/`, `app/*-checker/`, `app/*-planner/`: Calculator & tool routes
- `components/`: UI components
  - `components/layout/`: Header, Footer, Breadcrumbs
  - `components/tools/`: Calculator logic and interactive widgets
  - `components/blog/`: Blog components
- `lib/`: Business logic and data
  - `lib/blog.js`: Blog post records (20 posts)
  - `lib/data/regionalGuides.js`: Regional registration guides (3 states)
  - `lib/seo.js`: Metadata and schema generators
  - `lib/config.js`: Site configuration
- `public/`: Static assets (`logo.png`, `ads.txt`, `robots.txt`)
- `audit.mjs`: Cheerio-based static HTML verification script
