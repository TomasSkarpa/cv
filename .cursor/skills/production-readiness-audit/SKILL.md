---
name: production-readiness-audit
description: >-
  Crawls the deployed CV site and reports production/presentation readiness
  (content, links, privacy, console errors, load time, mobile, meta/SEO).
  Use when the user runs /production-readiness-audit, asks if the site is
  ready to ship, or wants a skarpa.dev site audit.
disable-model-invocation: true
---

# Production readiness audit

## Start here

1. Read [.cursor/rules/audit/production-readiness-audit.mdc](../../rules/audit/production-readiness-audit.mdc) and follow it exactly.
2. **Discover routes** before crawling (see below). Never hardcode paths.
3. Run the audit against the deployed site. Default URL: `https://skarpa.dev/`. Use another URL only if the user specifies one (preview, localhost).

## Discover routes

Build the crawl list on every run:

| Source | How |
|--------|-----|
| `src/lib/data/site.ts` | `allRoutes` → each `href` |
| `src/routes/` | Glob `**/+page.svelte` → map to URL paths |
| Live site (optional) | Parse links on `/sitemap` and compare |

Merge, dedupe, sort. Crawl the full union. Note mismatches between sources in the report.

## Tools

Use **Playwright MCP** only. Do not guess or audit from memory.

- `browser_run_code_unsafe` — crawl discovered routes, check hydration, links, meta, mobile viewport
- `browser_console_messages` — console errors when needed

Read each Playwright tool schema under the MCP descriptors before calling.

## Workflow

Execute the rule steps in order:

1. Discover routes, then load each; record status, title, load time, header/main/body after hydration
2. Capture console `error` and `pageerror` per route
3. Scan for placeholder copy
4. HTTP-check links from `/`, `/sitemap`, and `/projects` (or equivalent hub pages from discovered routes)
5. If `/privacy` exists in the crawl list: verify it hydrates and matches `src/lib/data/privacy.ts`
6. Check meta description, canonical, favicon per route
7. Mobile check at 375×812 on `/` plus sample routes from the discovered list

## Output

Return the checklist table from the rule (✅ / ❌ / ⚠️) plus one line:

**Production ready?** Yes / No / Almost — blockers listed briefly.

Include the route count and any route-source mismatches in Notes. Report only; do not fix unless the user asks.

## Project pitfalls (quick ref)

- `EmphasisText` duplicate `**word**` in one string → `each_key_duplicate`, blank page
- `site.url` in `src/lib/data/site.ts` may not match live domain → wrong canonical
- Favicon data URIs: do not fail on HTTP GET 404 for `data:` URLs
