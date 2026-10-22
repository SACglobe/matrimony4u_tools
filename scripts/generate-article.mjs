#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// generate-article.mjs — Automated AI Article Generator for matrimony4u.com
// Uses Gemini API to write 1200-1800 word comprehensive matrimonial & wedding guides
//
// Usage:
//   node scripts/generate-article.mjs                  # picks next topic from queue
//   node scripts/generate-article.mjs --dry-run        # preview only, no file write
//   node scripts/generate-article.mjs --index 0        # pick specific topic by index
// ─────────────────────────────────────────────────────────────────────────────

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Load .env.local if present ──
let primaryKey = process.env.GEMINI_API_KEY;
let backupKey = process.env.GEMINI_API_KEY_BACKUP;

if (existsSync(join(ROOT, '.env.local'))) {
  const envContent = readFileSync(join(ROOT, '.env.local'), 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (trimmed.startsWith('GEMINI_API_KEY=')) {
      primaryKey = primaryKey || trimmed.substring('GEMINI_API_KEY='.length).trim().replace(/^["']|["']$/g, '');
    }
    if (trimmed.startsWith('GEMINI_API_KEY_BACKUP=')) {
      backupKey = backupKey || trimmed.substring('GEMINI_API_KEY_BACKUP='.length).trim().replace(/^["']|["']$/g, '');
    }
  }
}

const API_KEYS = [primaryKey, backupKey].filter(Boolean);

if (API_KEYS.length === 0) {
  console.error('❌ Neither GEMINI_API_KEY nor GEMINI_API_KEY_BACKUP is set.');
  process.exit(1);
}

// ── Models fallback chain ──
const GEMINI_MODELS = [
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-flash-latest',
  'gemini-flash-lite-latest',
  'gemini-3.1-flash-lite'
];

const DRY_RUN = process.argv.includes('--dry-run');
const INDEX_ARG = process.argv.indexOf('--index');
const FORCE_INDEX = INDEX_ARG !== -1 ? parseInt(process.argv[INDEX_ARG + 1], 10) : null;

// ── Load topics queue ──
const topicsFile = join(__dirname, 'article-topics.json');
if (!existsSync(topicsFile)) {
  console.error('❌ article-topics.json not found');
  process.exit(1);
}
const topics = JSON.parse(readFileSync(topicsFile, 'utf-8'));
const progressFile = join(__dirname, '.article-progress.json');
let progress = existsSync(progressFile)
  ? JSON.parse(readFileSync(progressFile, 'utf-8'))
  : { lastIndex: -1, generated: [] };

// ── Pick next topic ──
const topicIndex = FORCE_INDEX !== null ? FORCE_INDEX : progress.lastIndex + 1;
if (topicIndex >= topics.length) {
  console.log('✅ All topics in queue have been generated!');
  process.exit(0);
}
const topic = topics[topicIndex];
console.log(`\n🎯 Generating matrimonial article ${topicIndex + 1}/${topics.length}:`);
console.log(`   Slug: ${topic.slug}`);
console.log(`   Category: ${topic.category}`);
console.log(`   Topic: ${topic.topic}\n`);

// ── Category & Author metadata ──
const CATEGORY_MAP = {
  legal: { name: 'Legal & Compliance', slug: 'legal', color: 'primary' },
  planning: { name: 'Wedding Planning', slug: 'planning', color: 'secondary' },
  finance: { name: 'Financial Planning', slug: 'finance', color: 'accent' },
  culture: { name: 'Cultural Traditions', slug: 'culture', color: 'purple' },
  relationships: { name: 'Relationships', slug: 'relationships', color: 'pink' },
};

const AUTHOR_MAP = {
  legal: { name: 'Adv. Rajesh Kumar & Legal Research Team', role: 'Senior Matrimonial Law Consultant' },
  finance: { name: 'Chithrai Selvan & Financial Editorial Desk', role: 'Wedding Budget & Economics Analyst' },
  planning: { name: 'Priya Sharma & Wedding Planning Guild', role: 'Lead Event Architect' },
  culture: { name: 'Dr. Meenakshi Sundaram & Heritage Desk', role: 'Indian Wedding Anthropologist' },
  relationships: { name: 'Dr. Ananya Roy, Ph.D.', role: 'Relationship Counselor & Family Therapist' },
};

const author = AUTHOR_MAP[topic.category] || AUTHOR_MAP.planning;

// Valid existing tool routes on matrimony4u.com
const VALID_TOOLS = [
  { name: 'Marriage Eligibility Checker', href: '/marriage-eligibility-checker' },
  { name: 'Marriage Registration Documents Guide', href: '/marriage-registration-documents' },
  { name: 'Legal Marriage Age Guide', href: '/legal-marriage-age-india' },
  { name: 'Wedding Budget Calculator', href: '/wedding-budget-calculator' },
  { name: 'Marriage Date Calculator', href: '/marriage-date-calculator' },
  { name: 'Age Difference Calculator', href: '/age-difference-calculator' },
  { name: 'Kundli Matching Tool', href: '/kundli-matching' },
  { name: 'Wedding Expense Split Calculator', href: '/wedding-expense-split-calculator' },
  { name: 'Wedding Timeline Planner', href: '/wedding-timeline-planner' },
  { name: 'Wedding Savings Calculator', href: '/wedding-savings-calculator' },
  { name: 'Wedding Guest List Planner', href: '/wedding-guest-list-planner' },
];

function sanitizeRecommendedTools(tools) {
  if (!Array.isArray(tools) || tools.length === 0) {
    return [VALID_TOOLS[0], VALID_TOOLS[1], VALID_TOOLS[3]];
  }
  const validHrefs = new Set(VALID_TOOLS.map(t => t.href));
  const filtered = tools.filter(t => validHrefs.has(t.href));
  if (filtered.length === 0) {
    return [VALID_TOOLS[0], VALID_TOOLS[1], VALID_TOOLS[3]];
  }
  return filtered;
}
const SYSTEM_PROMPT = `You are a distinguished wedding expert, matrimonial legal scholar, and senior editor for MATRIMONY4U (matrimony4u.com), India's leading matrimonial tools and wedding planning platform.

Write an authoritative, highly comprehensive, 1200-1800 word guide on the specified topic.
Your response MUST be valid JSON only (no markdown code blocks, no backticks, just raw parseable JSON) matching this exact schema:

{
  "title": "Compelling, SEO-Optimized Title (60-70 characters)",
  "excerpt": "Concise meta summary (150-160 characters) explaining what readers will gain.",
  "readTime": "8 min read",
  "keyTakeaways": [
    "Key takeaway point 1",
    "Key takeaway point 2",
    "Key takeaway point 3",
    "Key takeaway point 4"
  ],
  "tableOfContents": [
    { "id": "section-id-1", "title": "Section Title 1" },
    { "id": "section-id-2", "title": "Section Title 2" }
  ],
  "sections": [
    {
      "id": "section-id-1",
      "heading": "Section Heading",
      "contentHtml": "<p>Detailed paragraphs with rich insights...</p><ul><li>Points...</li></ul>",
      "callout": {
        "type": "tip|warning|info|legal",
        "title": "Callout Box Title",
        "text": "Specific actionable insight or legal warning."
      }
    }
  ],
  "faq": [
    {
      "question": "Frequently asked question 1?",
      "answer": "Clear, direct, and factual answer."
    },
    {
      "question": "Frequently asked question 2?",
      "answer": "Clear, direct, and factual answer."
    },
    {
      "question": "Frequently asked question 3?",
      "answer": "Clear, direct, and factual answer."
    }
  ],
  "recommendedTools": [
    { "name": "Marriage Eligibility Checker", "href": "/marriage-eligibility-checker" },
    { "name": "Wedding Budget Calculator", "href": "/wedding-budget-calculator" }
  ]
}

Formatting requirements:
1. Ensure the article is practical, up-to-date (2025-2026 legal framework and real market pricing in INR ₹), unbiased, and highly actionable.
2. In 'sections', generate at least 4-6 detailed sections with substantive paragraphs (<p>), bullet points (<ul><li>), and structured data tables (<table>) where applicable.
3. Every section ID must correspond to an item in tableOfContents.
4. FAQs must address real pain points searchers type into Google.
5. Do NOT include markdown wrappers like \`\`\`json. Return only raw JSON.`;

async function callGemini(promptText) {
  for (const apiKey of API_KEYS) {
    const maskedKey = apiKey.slice(0, 8) + '...' + apiKey.slice(-4);
    for (const model of GEMINI_MODELS) {
      try {
        console.log(`🤖 Requesting from ${model} with key (${maskedKey})...`);
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const payload = {
          contents: [
            {
              role: 'user',
              parts: [
                { text: SYSTEM_PROMPT },
                { text: `Topic to write about:\nTopic: ${topic.topic}\nCategory: ${topic.category}\nSlug: ${topic.slug}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 8192,
            responseMimeType: 'application/json'
          }
        };

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.warn(`⚠️ Key ${maskedKey} / Model ${model} returned status ${res.status}: ${errorText.slice(0, 120)}...`);
          // If quota exceeded (429), break immediately to next key
          if (res.status === 429) {
            console.warn(`⚠️ Rate limit / quota hit for key ${maskedKey}. Switching to next API key...`);
            break;
          }
          continue;
        }

        const data = await res.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!rawText) {
          console.warn(`⚠️ Model ${model} returned empty content.`);
          continue;
        }

        return rawText;
      } catch (err) {
        console.warn(`⚠️ Error calling ${model} with key ${maskedKey}: ${err.message}`);
      }
    }
  }
  throw new Error('All Gemini API keys and models in fallback chain failed.');
}

async function run() {
  try {
    const rawResult = await callGemini(topic.topic);
    let parsed;
    try {
      const sanitized = rawResult.trim().replace(/^```json\s*/i, '').replace(/```$/g, '');
      parsed = JSON.parse(sanitized);
    } catch (e) {
      console.error('❌ Failed to parse Gemini output as JSON:', e.message);
      console.error('Raw content preview:', rawResult.slice(0, 300));
      process.exit(1);
    }

    const fullArticleData = {
      slug: topic.slug,
      title: parsed.title || topic.topic,
      excerpt: parsed.excerpt || '',
      category: topic.category,
      author: author.name,
      authorRole: author.role,
      publishDate: topic.date || new Date().toISOString().split('T')[0],
      readTime: parsed.readTime || '8 min read',
      keyTakeaways: parsed.keyTakeaways || [],
      tableOfContents: parsed.tableOfContents || [],
      sections: parsed.sections || [],
      faq: parsed.faq || [],
      recommendedTools: sanitizeRecommendedTools(parsed.recommendedTools)
    };

    console.log(`✅ Generated article: "${fullArticleData.title}"`);
    console.log(`   Word count estimate: ~${JSON.stringify(fullArticleData.sections).split(/\s+/).length} words`);
    console.log(`   Sections: ${fullArticleData.sections.length}, FAQs: ${fullArticleData.faq.length}`);

    if (DRY_RUN) {
      console.log('\n[DRY RUN] Skipping file writes. Output preview:');
      console.log(JSON.stringify(fullArticleData, null, 2).slice(0, 500) + '...\n');
      return;
    }

    // Write article JSON to data/articles/
    const dataDir = join(ROOT, 'data', 'articles');
    if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
    const targetFile = join(dataDir, `${topic.slug}.json`);
    writeFileSync(targetFile, JSON.stringify(fullArticleData, null, 2), 'utf-8');
    console.log(`💾 Saved article JSON to ${targetFile}`);

    // Update progress tracker
    progress.lastIndex = topicIndex;
    if (!progress.generated.includes(topic.slug)) {
      progress.generated.push(topic.slug);
    }
    writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf-8');
    console.log(`📌 Updated progress: ${progress.generated.length} generated topics.`);

  } catch (error) {
    console.error('❌ Fatal error generating article:', error);
    process.exit(1);
  }
}

run();
