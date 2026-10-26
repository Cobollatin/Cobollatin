import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export const prerender = true;

export function GET({ site }: { site?: URL }): Response {
  const base = site ?? new URL('http://localhost:4321');
  const content = [
    `# ${SITE_TITLE} — AI / LLM Policy`,
    '',
    SITE_DESCRIPTION,
    '',
    'This site publishes machine-readable policies for automated access:',
    `- robots.txt: ${new URL('/robots.txt', base).toString()}`,
    `- llms.txt: ${new URL('/llms.txt', base).toString()}`,
    `- scrapers.txt: ${new URL('/scrapers.txt', base).toString()}`,
    '',
  ].join('\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
