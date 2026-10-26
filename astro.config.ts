import type { VercelServerlessConfig } from '@astrojs/vercel';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercelStatic from '@astrojs/vercel';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import spotlightjs from '@spotlightjs/astro';
import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';

dotenv.config({
  path: ['.env.production', '.env.preview', '.env.local', '.env'],
});
const environment = process.env;
const vercel_production_url = environment['VERCEL_PROJECT_PRODUCTION_URL'];
let siteurl = 'http://localhost:4321';
if (vercel_production_url) {
  siteurl = `https://${vercel_production_url}`;
}

type RehypePluginEntry = NonNullable<
  NonNullable<Parameters<typeof defineConfig>[0]['markdown']>['rehypePlugins']
>[number];

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
  integrations: [mdx(), sitemap(), spotlightjs(), react()],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            'aria-label': 'Link to this section',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          rel: ['noreferrer', 'noopener'],
        },
      ],
      rehypeAccessibleEmojis as unknown as RehypePluginEntry,
    ],
  },
  output: 'static',
  site: siteurl,
  vite: {
    plugins: [
      // Put the Sentry vite plugin after all other plugins
      // Only enable when an auth token is present (e.g., on CI/Prod)
      ...(sentry_auth_token
        ? [
            sentryVitePlugin({
              authToken: sentry_auth_token,
              org: 'cobollatin',
              project: 'cobollatin',
              telemetry: false,
            }),
          ]
        : []),
    ],
  },
});
