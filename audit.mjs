import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NEXT_APP_DIR = path.join(__dirname, '.next', 'server', 'app');

if (!fs.existsSync(NEXT_APP_DIR)) {
    console.error(`Directory not found: ${NEXT_APP_DIR}. Please run 'npm run build' first.`);
    process.exit(1);
}

function countWords(str) {
    if (!str) return 0;
    return str.trim().split(/\s+/).length;
}

function findHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findHtmlFiles(filePath, fileList);
        } else if (filePath.endsWith('.html') && !file.endsWith('.route.html') && !file.startsWith('_')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = findHtmlFiles(NEXT_APP_DIR);
const results = [];

const MANDATORY_PAGES = ['/privacy-policy', '/terms-of-service', '/contact', '/about', '/disclaimer'];
const mandatoryFound = new Set();

for (const file of htmlFiles) {
    let relativePath = file.replace(NEXT_APP_DIR, '').replace('.html', '');
    if (relativePath === '/index') relativePath = '/';
    
    // Normalize path to use forward slashes
    relativePath = relativePath.split(path.sep).join('/');

    if (MANDATORY_PAGES.includes(relativePath)) {
        mandatoryFound.add(relativePath);
    }

    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);

    // Remove script and style tags to get clean text
    $('script, style, noscript, iframe, svg').remove();

    const title = $('title').text().trim();
    const metaDesc = $('meta[name="description"]').attr('content')?.trim() || '';
    const h1 = $('h1').first().text().trim();
    
    // Focus on main content if it exists, otherwise body
    let mainText = $('main').text();
    if (!mainText) {
         mainText = $('body').text();
    }
    
    const wordCount = countWords(mainText);
    
    const errors = [];
    if (!title || title.length < 10) errors.push('Title missing or too short');
    if (!metaDesc || metaDesc.length < 30) errors.push('Meta description missing or too short');
    if (!h1) errors.push('Missing H1 tag');
    
    // AdSense thin content threshold (typically want > 300 words)
    let passedContent = true;
    if (wordCount < 300) {
        errors.push(`Thin content (${wordCount} words. Target: >300)`);
        passedContent = false;
    }

    results.push({
        url: relativePath,
        wordCount,
        title: title || 'MISSING',
        hasMetaDesc: !!metaDesc,
        hasH1: !!h1,
        passed: errors.length === 0,
        errors
    });
}

// Check mandatory pages
const missingMandatory = MANDATORY_PAGES.filter(p => !mandatoryFound.has(p));

console.log('--- AUDIT RESULTS ---');
console.log(`Total URLs audited: ${results.length}`);
console.log(`Passed: ${results.filter(r => r.passed).length}`);
console.log(`Failed: ${results.filter(r => !r.passed).length}`);
console.log('');

if (missingMandatory.length > 0) {
    console.log('CRITICAL: Missing mandatory AdSense pages:');
    missingMandatory.forEach(p => console.log(`- ${p}`));
    console.log('');
}

console.log('Failed URLs Details:');
const failed = results.filter(r => !r.passed).sort((a, b) => a.wordCount - b.wordCount);
failed.forEach(r => {
    console.log(`\nURL: ${r.url}`);
    r.errors.forEach(e => console.log(`  - ${e}`));
});

// Write JSON for agent to parse
fs.writeFileSync('audit_results.json', JSON.stringify({ results, missingMandatory }, null, 2));
console.log('\nResults written to audit_results.json');
