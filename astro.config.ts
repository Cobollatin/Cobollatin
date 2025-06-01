import type { VercelServerlessConfig } from '@astrojs/vercel';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import spotlightjs from '@spotlightjs/astro';
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.production', '.env.preview', '.env.local', '.env'],
});
const environment = process.env;
const vercel_production_url = environment['VERCEL_PROJECT_PRODUCTION_URL'];
let siteurl = 'http://localhost:4321';
if (vercel_production_url) {
  siteurl = `https://${vercel_production_url}`;
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

const sentry_auth_token = environment['SENTRY_AUTH_TOKEN'];

// https://astro.build/config
export default defineConfig({
  adapter: vercelStatic(vercelConfig),
  integrations: [mdx(), sitemap(), spotlightjs(), react(), tailwind()],
  output: 'static',
  site: siteurl,
  vite: {
    plugins: [
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        authToken: sentry_auth_token,
        org: 'cobollatin',
        project: 'cobollatin',
        telemetry: false,
      }),
    ],
  },
});
