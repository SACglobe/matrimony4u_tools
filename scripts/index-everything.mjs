/**
 * Unified Indexing Script for Matrimony4u
 * 
 * This script notifies both Google (Indexing API) and Bing (IndexNow) 
 * about all URLs found in the sitemap.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://www.matrimony4u.com';
const BING_KEY = 'fa2dcb4f37bc4dfb9cb836e80d8debb2'; // Ported from kalyanaveedu, user can update if needed
const GOOGLE_KEY_FILE = process.env.GOOGLE_INDEXING_KEY_PATH || path.join(__dirname, '../service-account.json');
const GOOGLE_KEY_CONTENT = process.env.GOOGLE_INDEXING_KEY; // Support direct JSON content for CI

// Helper: Sleep function for rate limiting
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function getSitemapUrls() {
  console.log('🔍 Fetching sitemap URLs...');
  try {
    const response = await fetch(`${SITE_URL}/sitemap.xml`);
    const xml = await response.text();
    // Simple regex to extract <loc> tags
    const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    console.log(`✅ Found ${urls.length} URLs in sitemap.`);
    return urls;
  } catch (error) {
    console.error('❌ Failed to fetch sitemap:', error.message);
    return [];
  }
}

async function pingBing(urls) {
  console.log('🚀 Pinging Bing IndexNow...');
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(SITE_URL).hostname,
        key: BING_KEY,
        keyLocation: `${SITE_URL}/${BING_KEY}.txt`,
        urlList: urls,
      }),
    });
    if (response.ok) {
      console.log('✅ Bing IndexNow successful.');
    } else {
      const errorText = await response.text();
      console.error('❌ Bing IndexNow failed:', response.status, errorText);
    }
  } catch (error) {
    console.error('❌ Bing IndexNow error:', error.message);
  }
}

async function pingGoogle(urls) {
  let authOptions = {};

  if (GOOGLE_KEY_CONTENT) {
    console.log('🚀 Using Google Indexing API (from ENV content)...');
    try {
      const credentials = JSON.parse(GOOGLE_KEY_CONTENT);
      authOptions = { credentials, scopes: ['https://www.googleapis.com/auth/indexing'] };
    } catch (e) {
      console.error('❌ Failed to parse GOOGLE_INDEXING_KEY env variable as JSON.');
      return;
    }
  } else if (fs.existsSync(GOOGLE_KEY_FILE)) {
    console.log('🚀 Using Google Indexing API (from file)...');
    authOptions = { keyFile: GOOGLE_KEY_FILE, scopes: ['https://www.googleapis.com/auth/indexing'] };
  } else {
    console.log('⚠️ Google Service Account key not found.');
    console.log('Skipping Google Indexing API. Please add service-account.json or GOOGLE_INDEXING_KEY env var.');
    return;
  }

  try {
    const auth = new google.auth.GoogleAuth(authOptions);

    const indexing = google.indexing({ version: 'v3', auth });

    // Google API typically allows 200 requests per day. 
    // We prioritize the first 150 to stay well within safety limits.
    const batch = urls.slice(0, 150);
    console.log(`📡 Notifying Google about ${batch.length} URLs...`);
    
    for (const url of batch) {
      try {
        await indexing.urlNotifications.publish({
          requestBody: { url, type: 'URL_UPDATED' },
        });
        console.log(`✅ Google notified: ${url}`);
        // Add a small delay to avoid hitting rate limits too fast
        await sleep(500); 
      } catch (e) {
        console.error(`❌ Google failed for ${url}:`, e.message);
        if (e.message.includes('quota')) {
          console.error('🛑 Quota exceeded. Stopping Google pings.');
          break;
        }
      }
    }
  } catch (error) {
    console.error('❌ Google Indexing API error:', error.message);
  }
}

async function main() {
  const urls = await getSitemapUrls();
  if (urls.length === 0) {
    console.error('❌ No URLs found to process.');
    return;
  }

  // Bing allows up to 10,000 URLs per request
  await pingBing(urls);

  // Google has strict daily limits
  await pingGoogle(urls);
  
  console.log('\n✨ Indexing notification process complete.');
}

main();
