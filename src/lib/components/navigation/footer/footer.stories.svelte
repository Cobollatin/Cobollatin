<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Footer from './footer.svelte';

  const meta = {
    title: 'Navigation/Footer',
    component: Footer,
    tags: ['autodocs'], // Optional: enables automatic documentation generation
    argTypes: {
      socialLinks: {
        control: 'object',
        description: 'Array of social media links (name and href)',
      },
    },
  } satisfies Meta<Footer>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {}, // No social links by default
  };

  export const WithSocialLinks: Story = {
    args: {
      socialLinks: [
        { name: 'GitHub', href: 'https://github.com/yourusername' },
        { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
        { name: 'Twitter', href: 'https://twitter.com/yourusername' },
      ],
    },
  };
</script>

<Footer {...Default.args} />

<h2>With Social Links</h2>
<Footer {...WithSocialLinks.args} />
