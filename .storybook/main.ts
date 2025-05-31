import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-a11y"
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    "name": "@storybook/react-vite",
    "options": {}
  },
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
};
export default config;