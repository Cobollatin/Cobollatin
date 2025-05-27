<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Navbar from './navbar.svelte';

  const meta = {
    title: 'Navigation/Navbar',
    component: Navbar,
    tags: ['autodocs'], // Optional: enables automatic documentation generation
    argTypes: {
      navItems: {
        control: 'object',
        description: 'Array of navigation items (text and href)',
      },
    },
  } satisfies Meta<Navbar>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
      navItems: [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'CV', href: '/cv' },
      ],
    },
  };
</script>

<Navbar {...Default.args} />
