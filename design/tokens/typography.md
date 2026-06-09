## Typography tokens

IBM Plex Sans for everything. IBM Plex Mono for metadata only. Typography carries hierarchy, not color or decoration.

Site-wide type scale uses `--font-scale: 1.075` on `html` (7.5% above browser default). All `rem`-based sizes inherit this bump.

### Font families

| Token | Stack |
|-------|-------|
| `font-heading` | `"IBM Plex Sans", system-ui, -apple-system, sans-serif` |
| `font-body` | `"IBM Plex Sans", system-ui, -apple-system, sans-serif` |
| `font-mono` | `"IBM Plex Mono", "SF Mono", "Cascadia Code", monospace` |

### Type scale

| Role | Size | Weight | Line height | Usage |
|------|------|--------|-------------|-------|
| `heading-2xl` | 3rem (48px) | 600 | 1.1 | Home hero h1 only |
| `heading-xl` | 2rem (32px) | 600 | 1.15 | One per inner page (h1) |
| `heading-l` | 1.375rem (22px) | 600 | 1.25 | Major sections (h2) |
| `heading-m` | 1.125rem (18px) | 600 | 1.3 | Subsections (h3) |
| `heading-s` | 1rem (16px) | 600 | 1.35 | Card titles, hero lead |
| `body` | 1rem (16px) | 400 | 1.65 | Body copy |
| `body-small` | 0.875rem (14px) | 400 | 1.5 | Secondary copy |
| `caption` | 0.8125rem (13px) | 400 | 1.4 | Labels |
| `label` | 0.875rem (14px) | 500 | 1.4 | Form labels, nav items |
| `overline` | 0.75rem (12px) | 600 | 1.4 | Section numbers |
| `meta` | 0.8125rem (13px) | 400 | 1.4 | Dates, role lines (mono) |

### Pairing rules

- Sans for all headings and body.
- Mono for dates, role lines, skill levels, section numbers in metadata contexts.
- Use `heading-2xl` once on home only; `heading-xl` once per inner page.
- Maintain logical heading hierarchy (h1 → h2 → h3).
