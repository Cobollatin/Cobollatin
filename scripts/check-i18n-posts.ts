import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

import { defaultLocale, locales } from '../src/i18n/locales';

const blogRoot = path.join(process.cwd(), 'src', 'content', 'blog');

const entries = await readdir(blogRoot, { withFileTypes: true });
const postDirs = entries.filter((e) => e.isDirectory()).map((e) => path.join(blogRoot, e.name));

const missing: string[] = [];

for (const dir of postDirs) {
  for (const lang of locales) {
    const candidate = path.join(dir, `${lang}.mdx`);
    try {
      const s = await stat(candidate);
      if (!s.isFile()) missing.push(`${path.relative(blogRoot, dir)}/${lang}.mdx`);
    } catch {
      missing.push(`${path.relative(blogRoot, dir)}/${lang}.mdx`);
    }
  }
}

if (missing.length) {
  console.error('Missing blog i18n files:');
  for (const file of missing) {
    console.error(`- ${file}`);
  }

  console.error(
    `\nTip: run "bun run new:post <slug>" to scaffold ${locales.length} locales (default: ${defaultLocale}).`,
  );
  process.exit(1);
}

console.log('Blog i18n files OK.');
