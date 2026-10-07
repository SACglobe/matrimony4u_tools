import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';
import vm from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const NEXT_APP_DIR = path.join(ROOT_DIR, '.next', 'server', 'app');

console.log('================================================================');
console.log('MATRIMONY4U SITE-WIDE EMPIRICAL VERIFICATION HARNESS');
console.log('================================================================');
console.log(`Build directory: ${NEXT_APP_DIR}\n`);

if (!fs.existsSync(NEXT_APP_DIR)) {
  console.error(`ERROR: .next build directory not found at ${NEXT_APP_DIR}.`);
  process.exit(1);
}

// 1. Expected Route Catalog
const REQUIRED_TOOLS = [
  '/wedding-timeline-planner',
  '/wedding-budget-calculator',
  '/marriage-date-calculator',
  '/wedding-guest-list-planner',
  '/wedding-savings-calculator',
  '/wedding-expense-split-calculator',
  '/marriage-eligibility-checker',
  '/age-difference-calculator',
  '/kundli-matching',
  '/marriage-registration-documents',
  '/legal-marriage-age-india',
];

const REQUIRED_REGIONAL = [
  '/registration/tamil-nadu',
  '/registration/delhi',
  '/registration/maharashtra',
];

const REQUIRED_CATEGORIES = [
  '/wedding-planning',
  '/legal-eligibility',
  '/financial-planning',
  '/cultural-traditions',
  '/compatibility-assessment',
];

const REQUIRED_POLICY = [
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
];

const REQUIRED_BLOG_SAMPLE = [
  '/blog',
  '/blog/legal-marriage-age-india-explained',
  '/blog/tamil-6-month-marriage-planning-guide',
  '/blog/indian-wedding-budget-breakdown',
  '/blog/marriage-registration-process-guide',
  '/blog/age-difference-marriage-significance',
  '/blog/kundli-matching-modern-perspective',
  '/blog/hindu-wedding-rituals-complete-guide',
  '/blog/regional-wedding-customs-comparison',
  '/blog/wedding-budget-city-wise-breakdown',
  '/blog/pre-wedding-ceremonies-explained',
  '/blog/wedding-venue-selection-guide',
  '/blog/indian-wedding-photography-guide',
  '/blog/bridal-trousseau-essential-guide',
  '/blog/destination-wedding-planning-india',
  '/blog/wedding-entertainment-music-guide',
  '/blog/post-wedding-rituals-traditions',
  '/blog/tamil-traditional-marriage-rituals-kasi-yatra',
  '/blog/tamil-subha-muhurtham-selection-panchangam',
  '/blog/tamil-wedding-budget-planning-tips',
  '/blog/tamil-marriage-porutham-importance',
];

const CORE_PAGES = [
  '/',
  '/tools',
  ...REQUIRED_TOOLS,
  ...REQUIRED_REGIONAL,
  ...REQUIRED_CATEGORIES,
  ...REQUIRED_POLICY,
  ...REQUIRED_BLOG_SAMPLE,
];

// Helper to map route to .html path
function routeToHtmlPath(route) {
  if (route === '/') return path.join(NEXT_APP_DIR, 'index.html');
  const clean = route.startsWith('/') ? route.slice(1) : route;
  return path.join(NEXT_APP_DIR, `${clean}.html`);
}

// 2. Discover all HTML pages generated
function getAllHtmlFiles(dir, list = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllHtmlFiles(fullPath, list);
    } else if (entry.isFile() && entry.name.endsWith('.html') && !entry.name.startsWith('_') && !entry.name.endsWith('.route.html')) {
      list.push(fullPath);
    }
  }
  return list;
}

const allGeneratedHtmlFiles = getAllHtmlFiles(NEXT_APP_DIR);
console.log(`Discovered ${allGeneratedHtmlFiles.length} statically generated HTML pages in .next/server/app.`);

// 3. Page Audit
const pageAuditMap = new Map();
const allInternalLinks = new Set();
const linkOccurrences = new Map();
const trailingSlashViolations = [];
const hydrationErrorsFound = [];
const scriptErrorsFound = [];

for (const filePath of allGeneratedHtmlFiles) {
  const relativeFromApp = path.relative(NEXT_APP_DIR, filePath);
  let route = '/' + relativeFromApp.replace(/\.html$/, '').split(path.sep).join('/');
  if (route === '/index') route = '/';

  const html = fs.readFileSync(filePath, 'utf-8');

  // Check hydration markers
  const hydrationSignatures = [
    /text content did not match/i,
    /prop .* did not match/i,
    /hydration failed/i,
    /there was an error while hydrating/i,
    /minified react error/i,
  ];

  for (const sig of hydrationSignatures) {
    if (sig.test(html)) {
      hydrationErrorsFound.push({ route, error: sig.toString() });
    }
  }

  const $ = cheerio.load(html);

  // Parse title, meta desc, h1
  const title = $('title').text().trim();
  const metaDesc = $('meta[name="description"]').attr('content')?.trim() || '';
  const h1 = $('h1').first().text().trim();
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogImage = $('meta[property="og:image"]').attr('content') || '';

  // Extract schemas
  const schemas = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).html());
      schemas.push(parsed);
    } catch (e) {
      scriptErrorsFound.push({ route, error: `Invalid JSON-LD: ${e.message}` });
    }
  });

  // Embedded script validation
  $('script:not([src])').each((idx, el) => {
    const scriptType = $(el).attr('type');
    if (!scriptType || scriptType === 'text/javascript') {
      const code = $(el).html();
      if (code && code.trim().length > 0) {
        try {
          new vm.Script(code);
        } catch (err) {
          scriptErrorsFound.push({ route, error: `Script #${idx} syntax error: ${err.message}` });
        }
      }
    }
  });

  // Extract text word count (strip scripts, styles, etc.)
  const $clean = cheerio.load(html);
  $clean('script, style, noscript, iframe, svg').remove();
  let contentText = $clean('main').text();
  if (!contentText || contentText.trim().length === 0) {
    contentText = $clean('body').text();
  }
  const words = contentText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Collect links
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;

    if (href.startsWith('/') && !href.startsWith('//')) {
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref.length > 1 && cleanHref.endsWith('/')) {
        trailingSlashViolations.push({ source: route, target: href });
      }
      allInternalLinks.add(cleanHref);
      if (!linkOccurrences.has(cleanHref)) {
        linkOccurrences.set(cleanHref, []);
      }
      linkOccurrences.get(cleanHref).push(route);
    }
  });

  const passedThreshold = wordCount >= 300 && title.length >= 10 && metaDesc.length >= 30 && !!h1;

  pageAuditMap.set(route, {
    route,
    filePath,
    title,
    metaDesc,
    h1,
    canonical,
    ogTitle,
    ogImage,
    wordCount,
    schemasCount: schemas.length,
    passedThreshold,
  });
}

// 4. Verify all Required Routes Exist
console.log('\n--- VERIFYING CORE USER JOURNEY ROUTES EXISTENCE ---');
const missingCoreRoutes = [];
for (const reqRoute of CORE_PAGES) {
  if (!pageAuditMap.has(reqRoute)) {
    missingCoreRoutes.push(reqRoute);
  }
}

if (missingCoreRoutes.length > 0) {
  console.error(`FAIL: Missing core routes in build output:`, missingCoreRoutes);
} else {
  console.log(`PASS: All ${CORE_PAGES.length} core pages exist as compiled static HTML!`);
}

// 5. Verify Internal Link Graph (Broken Links / 404s)
console.log('\n--- VERIFYING INTERNAL LINK GRAPH & BROKEN LINKS (404s) ---');
console.log(`Total unique internal links discovered: ${allInternalLinks.size}`);
const brokenLinks = [];
for (const link of allInternalLinks) {
  if (link === '' || link === '/') continue;
  // Does link map to an HTML file in .next/server/app?
  const expectedFile = routeToHtmlPath(link);
  if (!fs.existsSync(expectedFile)) {
    brokenLinks.push({
      link,
      referencedBy: (linkOccurrences.get(link) || []).slice(0, 3),
    });
  }
}

if (brokenLinks.length > 0) {
  console.error(`FAIL: Discovered ${brokenLinks.length} broken 404 links:`, brokenLinks);
} else {
  console.log(`PASS: ZERO 404 broken internal links detected! Every referenced internal link resolves.`);
}

console.log(`Trailing slash violations count: ${trailingSlashViolations.length}`);
if (trailingSlashViolations.length > 0) {
  console.warn(`WARNING: Found trailing slash violations:`, trailingSlashViolations);
}

// 6. Verify Sitemap.xml Static Generation & Consistency
console.log('\n--- VERIFYING SITEMAP.XML ---');
const sitemapPath = path.join(NEXT_APP_DIR, 'sitemap.xml.body');
let sitemapUrls = [];
if (!fs.existsSync(sitemapPath)) {
  console.error(`FAIL: sitemap.xml.body does not exist in ${NEXT_APP_DIR}`);
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  sitemapUrls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`PASS: /sitemap.xml is statically generated! Contains ${sitemapUrls.length} <loc> entries.`);
  
  // Verify each URL in sitemap maps to an existing HTML route
  const sitemapBroken = [];
  for (const loc of sitemapUrls) {
    try {
      const parsed = new URL(loc);
      const pathname = parsed.pathname;
      const htmlPath = routeToHtmlPath(pathname);
      if (!fs.existsSync(htmlPath)) {
        sitemapBroken.push({ loc, pathname, missingHtml: htmlPath });
      }
    } catch (e) {
      sitemapBroken.push({ loc, error: e.message });
    }
  }
  if (sitemapBroken.length > 0) {
    console.error(`FAIL: Sitemap contains broken entries:`, sitemapBroken);
  } else {
    console.log(`PASS: 100% of URLs in sitemap.xml correspond to verified static pages.`);
  }
}

// 7. Verify Hydration & Script Errors
console.log('\n--- VERIFYING HYDRATION & RUNTIME ERRORS ---');
console.log(`Hydration error signatures found: ${hydrationErrorsFound.length}`);
if (hydrationErrorsFound.length > 0) {
  console.error(`FAIL: Hydration errors detected:`, hydrationErrorsFound);
} else {
  console.log(`PASS: ZERO React hydration errors found across all pages.`);
}

console.log(`Embedded script syntax errors: ${scriptErrorsFound.length}`);
if (scriptErrorsFound.length > 0) {
  console.error(`FAIL: Script syntax errors detected:`, scriptErrorsFound);
} else {
  console.log(`PASS: ZERO script syntax errors found across all embedded calculator scripts.`);
}

// 8. Verify "Coming Soon" absence
console.log('\n--- VERIFYING "COMING SOON" OCCURRENCES ---');
function searchDirectoryForPattern(dir, pattern, matches = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.agents') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      searchDirectoryForPattern(full, pattern, matches);
    } else if (entry.isFile()) {
      const content = fs.readFileSync(full, 'utf-8');
      if (pattern.test(content)) {
        matches.push(full);
      }
    }
  }
  return matches;
}

const comingSoonInApp = searchDirectoryForPattern(path.join(ROOT_DIR, 'app'), /coming\s+soon/i);
console.log(`"Coming Soon" occurrences in app/: ${comingSoonInApp.length}`);
if (comingSoonInApp.length > 0) {
  console.error(`FAIL: "Coming Soon" detected in app/:`, comingSoonInApp);
} else {
  console.log(`PASS: ZERO "Coming Soon" occurrences in app/!`);
}

// 9. Summary Table for 11 Tools
console.log('\n--- 11 TOOLS & CALCULATORS AUDIT TABLE ---');
const toolAuditSummary = REQUIRED_TOOLS.map(t => {
  const data = pageAuditMap.get(t);
  return {
    route: t,
    status: data ? 200 : 404,
    wordCount: data ? data.wordCount : 0,
    hasH1: data ? !!data.h1 : false,
    hasTitle: data ? !!data.title : false,
    hasMetaDesc: data ? !!data.metaDesc : false,
    passed: data ? data.passedThreshold : false,
  };
});
console.table(toolAuditSummary);

// 10. Summary Table for 3 Regional Guides
console.log('\n--- 3 REGIONAL GUIDES AUDIT TABLE ---');
const regionalAuditSummary = REQUIRED_REGIONAL.map(r => {
  const data = pageAuditMap.get(r);
  return {
    route: r,
    status: data ? 200 : 404,
    wordCount: data ? data.wordCount : 0,
    hasH1: data ? !!data.h1 : false,
    hasTitle: data ? !!data.title : false,
    hasMetaDesc: data ? !!data.metaDesc : false,
    passed: data ? data.passedThreshold : false,
  };
});
console.table(regionalAuditSummary);

// 11. Summary Table for Category Hubs & Policy Pages
console.log('\n--- CATEGORY HUBS & POLICY PAGES AUDIT TABLE ---');
const hubAndPolicySummary = [...REQUIRED_CATEGORIES, ...REQUIRED_POLICY].map(p => {
  const data = pageAuditMap.get(p);
  return {
    route: p,
    status: data ? 200 : 404,
    wordCount: data ? data.wordCount : 0,
    hasH1: data ? !!data.h1 : false,
    hasTitle: data ? !!data.title : false,
    hasMetaDesc: data ? !!data.metaDesc : false,
    passed: data ? data.passedThreshold : false,
  };
});
console.table(hubAndPolicySummary);

// 12. Overall Verdict
const isAllPassed = 
  missingCoreRoutes.length === 0 &&
  brokenLinks.length === 0 &&
  trailingSlashViolations.length === 0 &&
  hydrationErrorsFound.length === 0 &&
  scriptErrorsFound.length === 0 &&
  comingSoonInApp.length === 0 &&
  sitemapUrls.length >= 46;

console.log('\n================================================================');
console.log(`OVERALL VERIFICATION RESULT: ${isAllPassed ? '100% PASSED' : 'FAILED'}`);
console.log('================================================================\n');

// Write machine-readable output to verifier directory
const reportOutput = {
  timestamp: new Date().toISOString(),
  isAllPassed,
  totalHtmlPagesGenerated: allGeneratedHtmlFiles.length,
  missingCoreRoutes,
  brokenLinksCount: brokenLinks.length,
  brokenLinks,
  trailingSlashViolationsCount: trailingSlashViolations.length,
  trailingSlashViolations,
  hydrationErrorsCount: hydrationErrorsFound.length,
  hydrationErrors: hydrationErrorsFound,
  scriptErrorsCount: scriptErrorsFound.length,
  scriptErrors: scriptErrorsFound,
  comingSoonInAppCount: comingSoonInApp.length,
  sitemapUrlsCount: sitemapUrls.length,
  toolAuditSummary,
  regionalAuditSummary,
  hubAndPolicySummary,
};

fs.writeFileSync(
  path.join(ROOT_DIR, '.agents', 'teamwork', 'worker_verifier', 'empirical_results.json'),
  JSON.stringify(reportOutput, null, 2)
);

if (!isAllPassed) {
  process.exit(1);
}
