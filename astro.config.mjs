import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  ...(site ? { site } : {}),
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: true },
  },
});
