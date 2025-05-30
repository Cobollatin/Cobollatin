import { paraglideVitePlugin } from '@inlang/paraglide-js';
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { optimizeCss } from 'carbon-preprocess-svelte';
// import path from 'path';
// import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { coverageConfigDefaults } from 'vitest/config';

// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    enhancedImages(),
    tailwindcss(),
    sveltekit(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ['cookie', 'baseLocale'],
    }),
    optimizeCss(),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      reportsDirectory: './coverage',
      all: true,
      include: ['src/**/*.{js,ts,svelte}'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        '**/.storybook/**',
        '**/*.stories.*',
        '**/storybook-static/**',
        '**/paraglide/**',
      ],
      enabled: true,
      thresholds: {
        //   statements: 90,
        //   branches: 90,
        //   functions: 90,
        //   lines: 90,
      },
    },
    workspace: [
      {
        extends: './vite.config.ts',
        plugins: [svelteTesting()],
        test: {
          name: 'client',
          environment: 'jsdom',
          clearMocks: true,
          include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
          exclude: ['src/lib/server/**'],
          setupFiles: ['./vitest-setup-client.ts'],
        },
      },
      {
        extends: './vite.config.ts',
        test: {
          name: 'server',
          environment: 'node',
          include: ['src/**/*.{test,spec}.{js,ts}'],
          exclude: ['src/**/*.svelte.{test,spec}.{js,ts}'],
        },
      },
      // Note: Storybook Vitest integration is not fully supported yet.
      // Uncomment the following block when support is available.
      // {
      //   extends: './vite.config.ts',
      //   plugins: [
      //     storybookTest({
      //       configDir: path.join(dirname, '.storybook'),
      //     }),
      //   ],
      //   test: {
      //     name: 'storybook',
      //     browser: {
      //       enabled: true,
      //       provider: 'playwright',
      //       headless: true,
      //       instances: [{ browser: 'chromium' }],
      //     },
      //     setupFiles: ['./.storybook/vitest.setup.ts'],
      //   },
      // },
    ],
  },
});
