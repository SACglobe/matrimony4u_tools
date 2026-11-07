# Deploying matrimony4u.com (Cloudflare Pages)

The site is a **static export** (`output: 'export'`) hosted on **Cloudflare Pages**. It moved off Vercel in Nov 2026
after the Hobby plan was paused for fair-use overage.

| | |
|---|---|
| Live URL | https://www.matrimony4u.com (apex `matrimony4u.com` 301-redirects to `www`) |
| Pages project | `matrimony4u-tools` (Cloudflare account: Matrimony4u.tech) |
| GitHub repo | `SACglobe/matrimony4u_tools`, production branch `main` |
| Preview URL | https://matrimony4u-tools.pages.dev |

## Build settings (Cloudflare → Pages → Settings → Builds)

- Framework preset: **None**
- Build command: `npm run build` (runs `next build --webpack`)
- Output directory: `out`
- Variables: `NODE_VERSION` = `20`, and the analytics IDs below

Every push to `main` builds and deploys automatically.

## Environment variables

`NEXT_PUBLIC_*` values are **baked in at build time** — after changing one, trigger a new build (push a commit).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 Measurement ID (`G-XXXXXXXXXX`). Without it no GA script is added. |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID (optional). |
| `NEXT_PUBLIC_DISABLE_ADS` | Set to `true` to hide the ad-block notice in a preview. |

## Redirects and headers

- `public/_redirects` — `/index`, `/index.html` → `/`; `/privacy` → `/privacy-policy`
- No custom headers file; Cloudflare's defaults apply.
- `sitemap.xml`, `robots.txt`, `ads.txt`, `llms.txt` are generated/served as static files.

## Domains / DNS (zone `matrimony4u.com`, DNS managed in Cloudflare)

- Pages → Custom domains: `www.matrimony4u.com` (and the apex if you want it attached directly).
- Apex needs a proxied record (Pages CNAME or placeholder A `192.0.2.1`) + **Redirect Rule**
  "Redirect from root to WWW": `https://matrimony4u.com/*` → `https://www.matrimony4u.com/${1}`, 301.
- Do **not** keep any Vercel A records (`64.29.17.65`, `216.198.79.65`, `64.29.17.1`) or `_domainconnect` → vercel-dns.
- `matrimony4u.in` is a separate zone used for contact email. If its apex redirect rule exists but `www.matrimony4u.in`
  does not, turn the rule off.

## Troubleshooting

- *402 / "DEPLOYMENT_DISABLED"*: the DNS still points at Vercel. Check the zone records.
- *Analytics missing*: variable not set, or no rebuild since setting it.
- *Wrong domain on a project*: removing a custom domain also deletes its DNS record. Re-add it to the right project.
- Local DNS cache can show stale results; flush with `sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder`.
