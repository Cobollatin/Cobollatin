<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import BlogPostPreview from './blog-post-preview.svelte';

  const meta = {
    title: 'Content/BlogPostPreview',
    component: BlogPostPreview,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      excerpt: { control: 'text' },
      date: { control: 'date' }, // Storybook can often handle Date objects
      href: { control: 'text' },
      tags: { control: 'object' }, // Array of strings
    },
  } satisfies Meta<BlogPostPreview>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  const defaultArgs = {
    title: 'Exploring Svelte: A Powerful UI Framework',
    excerpt: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.',
    date: new Date(2024, 3, 22), // April 22, 2024 (month is 0-indexed)
    href: '/blog/exploring-svelte',
  };

  export const Default: Story = {
    args: {
      ...defaultArgs,
      tags: [], // Explicitly empty for this story
    },
  };

  export const WithTags: Story = {
    args: {
      ...defaultArgs,
      title: 'Getting Started with SvelteKit and Storybook',
      excerpt: 'Learn how to integrate Storybook into your SvelteKit project to create a robust component library and streamline your development workflow. This guide covers setup, configuration, and creating your first stories.',
      date: new Date(2024, 2, 10), // March 10, 2024
      href: '/blog/sveltekit-storybook',
      tags: ['SvelteKit', 'Storybook', 'UI Components', 'Frontend'],
    },
  };

  export const StringDate: Story = {
    args: {
      ...defaultArgs,
      title: 'Understanding Reactivity in Svelte',
      excerpt: 'One of Svelte\'s core features is its reactivity system. This post dives deep into how Svelte achieves seamless state management without a virtual DOM.',
      date: 'January 5, 2024', // Using a string date
      href: '/blog/svelte-reactivity',
      tags: ['Svelte', 'Reactivity', 'JavaScript'],
    },
  };

</script>

<!-- Template to render stories for easier visualization -->
<h2>Default Preview</h2>
<BlogPostPreview {...Default.args} />

<br />
<hr />
<br />

<h2>Preview With Tags</h2>
<BlogPostPreview {...WithTags.args} />

<br />
<hr />
<br />

<h2>Preview With String Date</h2>
<BlogPostPreview {...StringDate.args} />
