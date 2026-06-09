## Component patterns

BEM blocks for the Structured Technical Dossier redesign. All styles live in `src/styles/` modules.

### Shell

| Block | Elements | Usage |
|-------|----------|-------|
| `site-header` | `__inner`, `__brand`, `__name`, `__role`, `__location`, `__toggle` | Sticky top bar |
| `site-nav` | `__list`, `__link`, `__panel` | Primary navigation (horizontal desktop, collapsible mobile) |
| `site-footer` | `__inner`, `__col`, `__heading`, `__list`, `__copyright` | Three-column footer |

### Page structure

| Block | Elements | Usage |
|-------|----------|-------|
| `page-shell` | (default) | Shared page container (`max-w-6xl`) |
| `page-toc` | `__heading`, `__list`, `__link` | Sticky section index on long pages |
| `page-header` | `__overline`, `__subtitle` | Inner page title block |
| `hero` | `--home`, `__eyebrow`, `__lead`, `__actions`, `__band` | Home credential band |
| `stat-strip` | `__item`, `__chip` | Scannable metadata row |
| `section-cta` | `__inner`, `__text` | Closing contact prompts |

### Content cards

| Block | Elements | Usage |
|-------|----------|-------|
| `pathway-card` | `__title`, `__steps`, `__step`, `__number` | Hiring vs technical entry paths |
| `content-card` | `__title`, `__desc`, `__link` | Explore grid, info cards |
| `content-card-grid` | (modifier) | 2-column responsive grid |
| `info-card` | `__title`, `__meta`, `__body` | Education, certifications, volunteering |
| `featured-card` | `__badge`, `__title`, `__desc` | Spotlight project |

### CV and projects

| Block | Elements | Usage |
|-------|----------|-------|
| `timeline` | `__spine`, `__item`, `__marker` | CV experience spine |
| `timeline-card` | `__company`, `__meta`, `__roles` | Company anchor |
| `role-card` | `__title`, `__period`, `__location`, `__details`, `__skills` | Nested role within timeline |
| `definition-grid` | `__item`, `__label`, `__value` | Project role/context/contribution/outcome |
| `project-card` | `__header`, `__links`, `__tags`, `--featured`, `--secondary` | Project blocks |

### Skills and tags

| Block | Elements | Usage |
|-------|----------|-------|
| `tag` | `--chip` | Technology chips |
| `tag-list` | (container) | Flex wrap chip row |

### Quotes and navigation

| Block | Elements | Usage |
|-------|----------|-------|
| `testimonial` | `__quote`, `__author`, `__role` | Recommendations |
| `continue-reading` | `__links`, `__pill` | Pill-style link cluster |
| `btn` | `--primary`, `--secondary` | Actions |
