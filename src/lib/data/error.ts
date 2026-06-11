export const errorPage = {
  metaDescription: 'This page does not exist on skarpa.dev.',
  notFound: {
    title: 'Page not found',
    subtitle: 'This URL is not on the site.',
  },
  generic: {
    title: 'Something went wrong',
    subtitle: 'The page could not load. Try Home or come back later.',
  },
  actions: [
    { label: 'Home', href: '/' },
    { label: 'CV', href: '/cv' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
} as const;
