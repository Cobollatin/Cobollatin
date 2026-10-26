import { getViteConfig } from 'astro/config';
import { coverageConfigDefaults } from 'vitest/config';

export default getViteConfig({
  test: {
    coverage: {
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
    projects: [
      {
        extends: true,
        test: {
          include: ['src/**/*.{test,spec}.{ts,tsx,js,jsx}'],
          name: 'typescript',
        },
      },
    ],
  },
});
