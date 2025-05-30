import NavbarDecorator from '$lib/storybook/decorators/navbar.decorator.svelte';
import type { Preview } from '@storybook/svelte';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    docs: {
      codePanel: true,
    },
  },
  // Ignore https://github.com/storybookjs/storybook/issues/29951
  // @ts-expect-error Bug in Storybook
  decorators: [(): Component<$$ComponentProps, object, ''> => NavbarDecorator],
};

export default preview;
