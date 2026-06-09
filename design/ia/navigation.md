## Navigation and IA

**Purpose:** Working CV for Tomáš Škarpa (Tech Lead · Bata Group). Two entry paths on Home: hiring (CV → Projects → LinkedIn) and technical review (Stack → Projects → How I work). Shallow hierarchy (3 levels max). Labels match `content/textations/site.md` verbatim.

**Layout:** Sticky top navigation on all viewports; desktop brand block sits left of the slim content column, nav buttons share the row and align vertically to center inside the column. Mobile uses a sheet menu. All page content uses `PageShell` / `.site-container` (40rem). Long pages (`/cv`, `/projects`, `/professional`, `/personal`) include `PageTOC` as horizontal link pills below the page header.

### Primary navigation (header)

| Label | Route |
|-------|-------|
| Home | `/` |
| How I work | `/professional` |
| Outside work | `/personal` |
| Stack | `/stack` |
| CV | `/cv` |
| Projects | `/projects` |
| Contact | `/contact` |

### Footer quick links

| Label | Route |
|-------|-------|
| CV | `/cv` |
| Projects | `/projects` |
| Stack | `/stack` |
| Contact | `/contact` |
| Sitemap | `/sitemap` |

### Footer social

LinkedIn, GitHub, Instagram, Facebook (external URLs from `site.md`).

### Secondary routes (detail content)

Linked from primary pages, not in main header nav.

| Label | Route | Linked from |
|-------|-------|-------------|
| Recommendations | `/recommendations` | Professional, CV, Projects |
| Skills | `/skills` | CV, Stack |
| Volunteering | `/volunteering` | Personal, CV |
| Flagged It | `/projects/flagged-it` | Home, Personal, Projects |
| Bata Figurine Generation | `/projects/bata-figurine-generation` | Home, Personal, Projects, CV, Volunteering |

### Hierarchy

```
Home (landing)
How I work
Outside work
  └── Volunteering (linked)
Stack
  └── Skills (linked)
CV
  └── Skills, Volunteering, Recommendations (linked)
Projects
  ├── Flagged It (detail)
  └── Bata Figurine Generation (detail)
Contact
Sitemap (utility)
Recommendations (linked)
Skills (linked)
Volunteering (linked)
```

### In-page section nav

| Page | Sections in PageTOC |
|------|---------------------|
| `/cv` | Summary, Experience, Volunteering, Education, Certifications, Core skills, Contact |
| `/projects` | Side projects, Enterprise, Client delivery |
| `/professional` | Current focus, Principles, Impact signals, How I work |
| `/personal` | Values, Interests, Community, Teaching |

### Label consistency

- Page titles use the same label as nav where applicable.
- "Continue reading" links use the same labels as their destination pages.
- Breadcrumbs on detail pages: `Projects / Flagged It`.
- PageTOC heading: "On this page".
