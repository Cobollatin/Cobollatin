import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { defaultLocale, locales } from '../src/i18n/locales';

function usage(): never {
  console.error('Usage: bun run new:post <slug> [title]');
  process.exit(1);
}

const [slugRaw, titleRaw] = process.argv.slice(2);
if (!slugRaw) usage();

const slug = slugRaw.trim();
if (!slug) usage();

const title = (titleRaw?.trim() || 'TODO: Title').trim();
const nowIso = new Date().toISOString();

const dir = path.join(process.cwd(), 'src', 'content', 'blog', slug);
await mkdir(dir, { recursive: false });

const baseFrontmatter = (lang: string): string =>
  [
    '---',
    `title: "${title}"`,
    'description: "TODO: Description"',
    'authors: ["cobollatin"]',
    'keywords: []',
    `pubDate: "${nowIso}"`,
    'heroImage: "/blog-placeholder-1.jpg"',
    `lang: "${lang}"`,
    '---',
    '',
  ].join('\n');

for (const lang of locales) {
  const filename = `${lang}.mdx`;
  const filepath = path.join(dir, filename);
  const body =
    lang === defaultLocale
      ? `${baseFrontmatter(lang)}Write your post in **English** here.\n`
      : `${baseFrontmatter(lang)}TODO: Translate this post into **${lang}**.\n`;
  await writeFile(filepath, body, 'utf8');
}

console.log(`Created ${locales.length} files in ${path.relative(process.cwd(), dir)}`);
