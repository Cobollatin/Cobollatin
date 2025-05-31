import type { VercelServerlessConfig } from '@astrojs/vercel';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel';
import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const environment = loadEnv('', process.cwd(), 'STORYBLOK');
const vercerl_production_url = environment['VERCEL_PROJECT_PRODUCTION_URL'];
let siteurl = 'http://localhost:4321';
if (vercerl_production_url) {
  siteurl = `https://${vercerl_production_url}`;
}

const vercelConfig: VercelServerlessConfig = {
  devImageService: 'sharp',
  imagesConfig: {
    domains: [],
    sizes: [640, 750, 828, 1080, 1200],
  },
  imageService: true,
  webAnalytics: {
    enabled: true,
  },
};

// https://astro.build/config
export default defineConfig({
  adapter: vercelStatic(vercelConfig),
  integrations: [mdx(), sitemap(), sentry(), spotlightjs(), react(), tailwind()],
  output: 'static',
  site: siteurl,
});
