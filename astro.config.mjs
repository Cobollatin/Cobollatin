import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: true },
  },
});
