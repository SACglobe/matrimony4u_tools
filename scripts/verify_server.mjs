import * as cheerio from 'cheerio';
import vm from 'node:vm';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3005';

const REQUIRED_ROUTES = [
  '/',
  '/tools',
  // 11 tool and calculator pages
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
  // 3 regional registration guides
  '/registration/tamil-nadu',
  '/registration/delhi',
  '/registration/maharashtra',
  // 5 category hubs
  '/wedding-planning',
  '/legal-eligibility',
  '/financial-planning',
  '/cultural-traditions',
  '/compatibility-assessment',
  // Blog hub and sample posts
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
  // Policy pages
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  // Sitemap
  '/sitemap.xml',
];

const HYDRATION_ERROR_PATTERNS = [
  /text content did not match/i,
  /prop .* did not match/i,
  /hydration failed/i,
  /there was an error while hydrating/i,
  /minified react error/i,
  /hydration-error/i,
];

async function run() {
  console.log(`Starting comprehensive verification on ${BASE_URL}...`);
  const results = [];
  const allDiscoveredLinks = new Set();
  const errors = [];

  for (const route of REQUIRED_ROUTES) {
    const url = `${BASE_URL}${route}`;
    const startTime = Date.now();
    try {
      const res = await fetch(url);
      const duration = Date.now() - startTime;
      const contentType = res.headers.get('content-type') || '';
      const text = await res.text();

      const routeResult = {
        route,
        status: res.status,
        durationMs: duration,
        contentType,
        passed: res.status === 200,
        hydrationErrors: [],
        scriptErrors: [],
        wordCount: 0,
        linksFound: 0,
        h1Count: 0,
        title: '',
      };

      if (res.status !== 200) {
        errors.push(`Route ${route} returned status ${res.status}`);
      }

      if (route === '/sitemap.xml') {
        const locMatches = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
        routeResult.sitemapUrls = locMatches.length;
        for (const loc of locMatches) {
          try {
            const locUrl = new URL(loc);
            allDiscoveredLinks.add(locUrl.pathname);
          } catch {
            allDiscoveredLinks.add(loc);
          }
        }
      } else if (contentType.includes('text/html')) {
        // Check for hydration error markers
        for (const pattern of HYDRATION_ERROR_PATTERNS) {
          if (pattern.test(text)) {
            routeResult.hydrationErrors.push(pattern.toString());
            errors.push(`Hydration error detected on ${route}: ${pattern.toString()}`);
          }
        }

        // Cheerio parse
        const $ = cheerio.load(text);
        routeResult.title = $('title').text().trim();
        routeResult.h1Count = $('h1').length;
        const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
        routeResult.wordCount = bodyText.split(/\s+/).filter(Boolean).length;

        // Collect internal links
        $('a[href]').each((_, el) => {
          const href = $(el).attr('href');
          if (href) {
            if (href.startsWith('/') && !href.startsWith('//')) {
              allDiscoveredLinks.add(href.split('#')[0].split('?')[0]);
              routeResult.linksFound++;
            } else if (href.startsWith(BASE_URL)) {
              const parsed = new URL(href);
              allDiscoveredLinks.add(parsed.pathname);
              routeResult.linksFound++;
            }
          }
        });

        // Script syntax check for embedded scripts
        $('script:not([src])').each((idx, el) => {
          const scriptContent = $(el).html();
          if (scriptContent && scriptContent.trim().length > 0) {
            try {
              new vm.Script(scriptContent);
            } catch (err) {
              routeResult.scriptErrors.push(`Script #${idx} syntax error: ${err.message}`);
              errors.push(`Embedded script syntax error on ${route}: ${err.message}`);
            }
          }
        });
      }

      results.push(routeResult);
    } catch (err) {
      errors.push(`Fetch failed for ${route}: ${err.message}`);
      results.push({
        route,
        status: 'FETCH_ERROR',
        error: err.message,
        passed: false,
      });
    }
  }

  // Crawl all discovered internal links
  console.log(`\nVerifying all discovered internal links (${allDiscoveredLinks.size} unique links)...`);
  const linkCheckResults = [];
  const brokenLinks = [];

  for (const link of allDiscoveredLinks) {
    if (!link || link === '') continue;
    const linkUrl = `${BASE_URL}${link}`;
    try {
      const res = await fetch(linkUrl);
      const isOk = res.status === 200;
      linkCheckResults.push({ link, status: res.status, ok: isOk });
      if (!isOk) {
        brokenLinks.push({ link, status: res.status });
        errors.push(`Broken internal link: ${link} returned status ${res.status}`);
      }
    } catch (err) {
      brokenLinks.push({ link, error: err.message });
      errors.push(`Broken internal link: ${link} fetch failed: ${err.message}`);
    }
  }

  const summary = {
    baseUrl: BASE_URL,
    timestamp: new Date().toISOString(),
    totalRoutesTested: results.length,
    passedRoutes: results.filter(r => r.passed).length,
    failedRoutes: results.filter(r => !r.passed).length,
    totalInternalLinksChecked: linkCheckResults.length,
    brokenLinksCount: brokenLinks.length,
    brokenLinks,
    totalErrors: errors.length,
    errors,
    results,
  };

  console.log('\n--- VERIFICATION SUMMARY ---');
  console.log(`Total Routes Tested: ${summary.totalRoutesTested}`);
  console.log(`Passed Routes: ${summary.passedRoutes}`);
  console.log(`Failed Routes: ${summary.failedRoutes}`);
  console.log(`Total Internal Links Checked: ${summary.totalInternalLinksChecked}`);
  console.log(`Broken Links (404/error): ${summary.brokenLinksCount}`);
  console.log(`Total Verification Errors: ${summary.totalErrors}`);

  if (summary.totalErrors > 0) {
    console.error('\nERRORS:');
    errors.forEach(e => console.error(`- ${e}`));
    process.exit(1);
  } else {
    console.log('\nALL CHECKS PASSED: 100% SUCCESSFUL VERIFICATION.');
  }
}

run().catch(err => {
  console.error('Fatal runner error:', err);
  process.exit(1);
});
