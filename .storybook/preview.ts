import type { Preview } from '@storybook/svelte';
import NavbarDecorator from '$lib/storybook/decorators/navbar.decorator.svelte';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Ignore https://github.com/storybookjs/storybook/issues/29951
  // @ts-expect-error Bug in Storybook
  decorators: [(): Component<$$ComponentProps, object, ''> => NavbarDecorator],
};

export default preview;
