## Spacing tokens

4px base unit. Consistent vertical rhythm across layout and components.

### Scale

| Token | Value |
|-------|-------|
| `spacing-1` | 4px |
| `spacing-2` | 8px |
| `spacing-3` | 12px |
| `spacing-4` | 16px |
| `spacing-5` | 24px |
| `spacing-6` | 32px |
| `spacing-7` | 40px |
| `spacing-8` | 56px |
| `spacing-9` | 72px |

### Layout

| Token | Value | Usage |
|-------|-------|-------|
| `content-width` | 40rem (`max-w-content`) | Slim reading column for all page content via `PageShell` |
| `header-height` | 4rem | Sticky header |
| `section-gap` | `spacing-8` | Between major page sections |
| `card-padding` | `spacing-5` | Inside cards and panels |
| `gutter-narrow` | `spacing-4` | Mobile page gutters |
| `gutter-wide` | `spacing-6` | Desktop page gutters |

### Radius and elevation

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 0.375rem | Tags, focus rings |
| `radius-md` | 0.5rem | Inputs, small cards |
| `radius-card` | 0.75rem | Content cards |
| `radius-button` | 1.25rem | Buttons |
| `shadow-sm` | `0 1px 2px rgba(15,20,25,0.06)` | Subtle lift |
| `shadow-card` | `0 2px 8px rgba(15,20,25,0.08)` | Cards, elevated panels |

### Usage guidance

- Inside components (label to input): `spacing-1` to `spacing-3`
- Between related controls: `spacing-3` or `spacing-4`
- Between sections: `spacing-5` to `spacing-7`
- Page top/bottom padding: `spacing-7` or `spacing-8`
