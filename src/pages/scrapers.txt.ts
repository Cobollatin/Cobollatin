import { CONTACT_EMAIL, ROBOTS_POLICY, SITE_TITLE } from '../consts';

export const prerender = true;

export function GET({ site }: { site?: URL }): Response {
  const base = site ?? new URL('http://localhost:4321');
  const content = [
    `# ${SITE_TITLE} — Scraper / Crawler Policy`,
    '',
    'This page provides instructions for automated scrapers and crawlers.',
    '',
    '## General rules',
    '- Follow /robots.txt. If your crawler does not support robots, do not crawl.',
    '- Identify yourself with a stable User-Agent and include a contact URL or email.',
    '- Use conditional requests (ETag / If-Modified-Since) if available via your client.',
    '- Do not fetch the same URL repeatedly; cache responsibly and respect reasonable backoff.',
    '- Do not attempt to bypass rate limits, access controls, or bot protections.',
    '',
    '## Preferred crawling behavior',
    `- Keep concurrency low (crawl-delay is set to ${ROBOTS_POLICY.crawlDelaySeconds}s for compliant bots).`,
    '- Prefer the sitemap for discovery: /sitemap-index.xml',
    '- Prefer RSS for blog updates: /rss.xml',
    '',
    '## LLM / model training',
    `- Known AI training bots are ${ROBOTS_POLICY.blockAiTrainingBots ? 'blocked' : 'not blocked'} in /robots.txt.`,
    '- If you want to use content for training or large-scale datasets, request permission.',
    '',
    '## Contact',
    `- Email: ${CONTACT_EMAIL}`,
    `- Site: ${base.toString()}`,
    '',
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
