import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  stories: ['../src/lib/components/**/*.mdx', '../src/lib/components/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-svelte-csf',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
};
export default config;
