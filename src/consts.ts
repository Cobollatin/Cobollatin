// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Cobollatin';
export const SITE_DESCRIPTION = 'Cobollatin — personal website and multi-author blog.';

export const CONTACT_EMAIL = 'contact@cobollatin.com';

export const SITE_AUTHOR = {
  name: 'Cobollatin',
} as const;

export const SEO = {
  twitterHandle: '@Cobollatin',
} as const;

export const ROBOTS_POLICY = {
  allowIndexing: true,
  blockAiTrainingBots: true,
  blockAggressiveScrapers: true,
  crawlDelaySeconds: 10,
} as const;

export const SOCIAL_LINKS = [
  { href: 'https://github.com/Cobollatin', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/Cobollatin/', label: 'LinkedIn' },
  { href: 'https://www.reddit.com/user/Cobollatin/', label: 'Reddit' },
  { href: 'https://twitter.com/Cobollatin', label: 'Twitter' },
  { href: 'https://instagram.com/Cobollatin', label: 'Instagram' },
  { href: 'https://facebook.com/Cobollatin', label: 'Facebook' },
  { href: 'https://youtube.com/@Cobollatin', label: 'YouTube' },
] as const;
