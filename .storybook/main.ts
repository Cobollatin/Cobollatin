import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/lib/components/**/*.mdx', '../src/lib/components/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // Not working with SvelteKit yet
    // '@storybook/addon-coverage',
    // '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
