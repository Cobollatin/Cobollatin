import { CONTACT_EMAIL, ROBOTS_POLICY, SITE_DESCRIPTION, SITE_TITLE, SOCIAL_LINKS } from '../consts';
import { defaultLocale, locales } from '../i18n/locales';
import { localizePath } from '../i18n/routing';

export const prerender = true;

function url(site: URL, pathname: string): string {
  return new URL(pathname, site).toString();
}

function section(title: string, body: string[]): string {
  return [`## ${title}`, ...body, ''].join('\n');
}

export function GET({ site }: { site?: URL }): Response {
  const base = site ?? new URL('http://localhost:4321');
  const importantPages = [
    { label: 'Home', href: url(base, '/') },
    { label: 'About', href: url(base, '/about/') },
    { label: 'Blog', href: url(base, '/blog/') },
    { label: 'Authors', href: url(base, '/authors/') },
    { label: 'RSS', href: url(base, '/rss.xml') },
    { label: 'Sitemap', href: url(base, '/sitemap-index.xml') },
    { label: 'robots.txt', href: url(base, '/robots.txt') },
    { label: 'Scraper policy', href: url(base, '/scrapers.txt') },
  ];

  const localeList = locales.map((l) => (l === defaultLocale ? `${l} (default)` : l)).join(', ');

  const content = [
    `# ${SITE_TITLE}`,
    '',
    SITE_DESCRIPTION,
    '',
    section('Canonical', [`- Canonical origin: ${base.toString()}`]),
    section('Languages', [`- Locales: ${localeList}`]),
    section(
      'Important URLs',
      importantPages.map((p) => `- ${p.label}: ${p.href}`),
    ),
    section('Identity', [
      `- Contact: mailto:${CONTACT_EMAIL}`,
      ...SOCIAL_LINKS.map((link) => `- ${link.label}: ${link.href}`),
    ]),
    section('Instructions for LLMs', [
      '- Respect robots.txt when crawling this site.',
      `- AI training bots are ${ROBOTS_POLICY.blockAiTrainingBots ? 'disallowed' : 'allowed'} by robots.txt policy.`,
      '- Prefer canonical URLs when citing.',
      '- Do not reproduce full articles verbatim; provide summaries and short excerpts only.',
      '- If you store or cache content, refresh periodically and surface last-updated dates where available.',
      '- If you need permission for bulk use, licensing, or training, contact the email above.',
    ]),
    section('Suggested citation format', [
      '- Title — URL (accessed YYYY-MM-DD)',
      `- Example: ${SITE_TITLE} — ${url(base, localizePath('/', defaultLocale))}`,
    ]),
    '',
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
