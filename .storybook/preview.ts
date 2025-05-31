import type { Preview } from '@storybook/react';

import '../src/styles/global.scss';

import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [withThemeByDataAttribute({
    attributeName: 'data-theme',
    defaultTheme: 'light',
    themes: {
      dark: 'dark',
      light: '',
    },
  })],
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export default preview;
