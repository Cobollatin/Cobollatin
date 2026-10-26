import { ROBOTS_POLICY, SITE_TITLE } from '../consts';
import { AGGRESSIVE_SCRAPERS, AI_TRAINING_BOTS } from '../seo/bots';

export const prerender = true;

function group(userAgents: readonly string[], rules: string[]): string {
  return [...userAgents.map((agent) => `User-agent: ${agent}`), ...rules].join('\n');
}

function lines(...values: Array<string | undefined | false>): string {
  return values.filter(Boolean).join('\n');
}

export function GET({ site }: { site?: URL }): Response {
  const base = site ?? new URL('http://localhost:4321');
  const sitemapURL = new URL('/sitemap-index.xml', base).toString();
  const llmsURL = new URL('/llms.txt', base).toString();
  const scrapersURL = new URL('/scrapers.txt', base).toString();

  const allowRules = [
    'Disallow:',
    ROBOTS_POLICY.crawlDelaySeconds ? `Crawl-delay: ${ROBOTS_POLICY.crawlDelaySeconds}` : undefined,
  ].filter(Boolean) as string[];

  const disallowAllRules = ['Disallow: /'];

  const content = lines(
    `# robots.txt for ${SITE_TITLE}`,
    `# Sitemap: ${sitemapURL}`,
    `# LLM policy: ${llmsURL}`,
    `# Scraper policy: ${scrapersURL}`,
    '',
    group(['*'], ROBOTS_POLICY.allowIndexing ? allowRules : disallowAllRules),
    '',
    ROBOTS_POLICY.blockAiTrainingBots ? group(AI_TRAINING_BOTS, disallowAllRules) : undefined,
    ROBOTS_POLICY.blockAiTrainingBots ? '' : undefined,
    ROBOTS_POLICY.blockAggressiveScrapers ? group(AGGRESSIVE_SCRAPERS, disallowAllRules) : undefined,
    ROBOTS_POLICY.blockAggressiveScrapers ? '' : undefined,
    `Sitemap: ${sitemapURL}`,
    '',
  );

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
