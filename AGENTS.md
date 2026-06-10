# AGENTS.md

Routing context for AI assistants working in **mascarpone-cv-static**.

**Live site:** [tomasskarpa.github.io/cv](https://tomasskarpa.github.io/cv/) · **GitHub Pages base path:** `/cv`

A static **working CV** for two audiences: people hiring for commerce engineering roles, and reviewers doing a technical deep-dive. Not a generic portfolio or marketing site.

## Stack

- SvelteKit 2 + Svelte 5 (runes) with `@sveltejs/adapter-static`
- shadcn-svelte (`src/lib/components/ui/`) + Tailwind CSS v4
- Node **≥ 22.12.0**

## Where to look

| Task | Start here |
|------|------------|
| Page copy / wording | `content/textations/` (source of truth) |
| Typed content wired into pages | `src/lib/data/` (one module per page or domain) |
| Routes and page layout | `src/routes/` |
| Site chrome (header, footer, shell) | `src/lib/components/site/` |
| shadcn/ui primitives | `src/lib/components/ui/` |
| Design tokens (color, type, spacing) | `design/tokens/` |
| Voice, tone, UI labels | `design/content/voice-and-tone.md` |
| Sitemap, nav labels, IA | `design/ia/navigation.md` |
| BEM / component patterns | `design/patterns/components.md` |
| UX, layout, accessibility rules | `.cursor/rules/` |
| Deploy pipeline | `.github/workflows/deploy.yml` |
| Production readiness audit | `/production-readiness-audit` skill (`.cursor/skills/production-readiness-audit/`) · rule: `.cursor/rules/audit/production-readiness-audit.mdc` |

## Content workflow

1. Edit copy in `content/textations/<page>.md` first.
2. Sync the matching module in `src/lib/data/` (e.g. `cv.md` → `cv.ts`).
3. Keep nav labels and page titles aligned with `content/textations/site.md` and `design/ia/navigation.md`.

Do not invent portfolio phrasing. Follow `design/content/voice-and-tone.md` (first person, specific, no filler adjectives).

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:5173
npm run build        # build to ./build/ (set BASE_PATH=/cv for production parity)
npm run preview      # preview production build
npm run check        # svelte-check + TypeScript
```

Production builds use `BASE_PATH=/cv` (see deploy workflow).

## Svelte development

- Use **Svelte 5 runes** (`$props`, `$state`, `$derived`) in app code under `src/`.
- When creating or editing `.svelte` files, use the **Svelte MCP server** (`list-sections`, `get-documentation`, `svelte-autofixer`) before finishing.
- Prefer existing site components (`PageShell`, `PageHeader`, `PageTOC`, `TimelineEntry`, etc.) over new one-offs.

## Design and UX constraints

Always-on rules in `.cursor/rules/core/` cover IA principles, accessibility targets (WCAG 2.1 AA), and Cursor behavior (read existing tokens before inventing styles; do not add UI libraries beyond what the project already uses).

File-specific frontend rules apply when editing routes and components.

## Conventions (short)

- **Scope:** Minimal diffs. Match existing naming, imports, and component patterns.
- **Copy:** No em dashes in new UI text.
- **Layout:** Page content uses `PageShell` / `.site-container` (40rem). Long pages use `PageTOC`.
- **Commits:** Only when explicitly requested by the user.
