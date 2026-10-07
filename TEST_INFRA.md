# E2E Test Infra: matrimony4u

## Test Philosophy
- Opaque-box, requirement-driven, validating user journeys and compliance criteria.
- Dual automated verification:
  1. Programmatic Node.js audit script (`node audit.mjs`) analyzing 100% of generated HTML routes for word count (>= 300 words), `<title>`, `<meta>`, and `<h1>` tags.
  2. Local server execution (`npm run dev` or `npm run start`) with browser navigation verifying 0 broken links (404s) and 0 React hydration console warnings.
  3. Build output inspection (`npm run build`) verifying static generation (SSG) and weekly revalidation.

## Feature Inventory & Test Coverage
| # | Feature | Verification Channel | Acceptance Criteria |
|---|---------|----------------------|---------------------|
| 1 | AdSense Content Threshold | `node audit.mjs` | 100% of pages >= 300 words; 0 thin content errors |
| 2 | Meta Tags & H1 | `node audit.mjs` | 100% of pages have valid `<title>`, `<meta description>`, and `<h1>` |
| 3 | Mandatory Legal Pages | `node audit.mjs` | All 5 mandatory pages present: privacy, terms, contact, about, disclaimer |
| 4 | Internal Links & Navigation | Browser Navigation | 0 broken 404 links; `/wedding-planning` links work; regional guides accessible |
| 5 | React Hydration | Browser Console Monitor | 0 React hydration mismatches on client components |
| 6 | Sitemap XML Completeness | HTTP GET `/sitemap.xml` | Contains all 46 URLs (including all 20 blog posts and 3 regional guides) |
| 7 | Static Caching (604800s) | Build Manifest & Source Inspection | All routes have `revalidate = 604800`; static SSG pre-rendering |

## Acceptance Criteria Cross-Reference
- Browser Verification: Dev/prod server launched, no 404 broken links or React hydration errors on main journeys.
- SEO & AdSense: `audit.mjs` confirms 100% of pages meet 300+ word count, valid h1, title, meta tags.
- Caching: Next.js build output confirms routes are statically generated with weekly revalidate (604800).
