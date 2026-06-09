# Tomáš Škarpa · Working CV

A static **working CV** for two audiences: people hiring for commerce engineering roles, and reviewers doing a technical deep-dive. Not a generic portfolio or marketing site.

## Stack

- [SvelteKit](https://kit.svelte.dev) with static adapter
- [shadcn-svelte](https://www.shadcn-svelte.com) component library
- [Tailwind CSS v4](https://tailwindcss.com)

## Source of truth

All page copy lives in `content/textations/`. Typed modules in `src/lib/data/` wire that content into pages. When copy changes, update the textation first, then sync the matching data module.

## Design

Design tokens and IA live in `design/`. Follow `.cursor/rules/` for layout, accessibility, and UX patterns.

## Commands

| Command | Action |
| ------- | ------ |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:5173` |
| `npm run build` | Build to `./build/` |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check Svelte and TypeScript |

## Structure

```
content/textations/   Page copy (markdown specs)
src/lib/data/         Typed content wired into routes
src/routes/           SvelteKit routes
src/lib/components/   Site components + shadcn/ui
design/               Tokens, IA, voice and tone
.cursor/rules/        Design and UX constraints for Cursor
```

## Routes

Primary: Home, How I work, Outside work, Stack, CV, Projects, Contact.

Secondary (linked from content): Recommendations, Skills, Volunteering, Flagged It, Bata Figurine Generation.

See `design/ia/navigation.md` for the full map.
