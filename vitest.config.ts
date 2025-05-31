import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import { getViteConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { coverageConfigDefaults } from 'vitest/config';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default getViteConfig({
  test: {
    coverage: {
      all: true,
      enabled: true,
      exclude: [...coverageConfigDefaults.exclude],
      include: ['src/**/*.{js,jsx,ts,tsx,astro}'],
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      reportsDirectory: './coverage',
      thresholds: {
        //   statements: 90,
        //   branches: 90,
        //   functions: 90,
        //   lines: 90,
      },
    },
    workspace: [
      {
        extends: true,
        test: {
          include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          name: 'typescript',
        },
      },
      {
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            instances: [{ browser: 'chromium' }],
            provider: 'playwright',
          },
          name: 'storybook',
          setupFiles: ['./.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
