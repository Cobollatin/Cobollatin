<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import BlogPostPreview from './blog-post-preview.svelte';

  const { Story } = defineMeta({
    title: 'Content/BlogPostPreview',
    component: BlogPostPreview,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      excerpt: { control: 'text' },
      author: { control: 'text' },
      date: { control: 'date' },
      href: { control: 'text' },
      tags: { control: 'object' },
    },
  });
</script>

<Story
  name="WithTags"
  args={{
    title: 'Getting Started with SvelteKit and Storybook',
    excerpt: 'Learn how to set up SvelteKit with Storybook for a streamlined development experience.',
    author: 'John Doe',
    date: new Date('2024-01-05'),
    href: '/blog/sveltekit-storybook',
    tags: ['SvelteKit', 'Storybook', 'Web Development'],
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>

<Story
  name="WithoutTags"
  args={{
    title: 'Understanding JavaScript Promises',
    excerpt: 'A deep dive into JavaScript promises and how to use them effectively in your applications.',
    author: 'Jane Smith',
    date: new Date('2024-01-10'),
    href: '/blog/javascript-promises',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>

<Story
  name="LongExcerpt"
  args={{
    title: 'Advanced Techniques in Svelte',
    excerpt:
      'This article explores advanced techniques in Svelte, including stores, actions, and transitions. We will cover how to manage state effectively, create reusable components, and enhance user experience with smooth transitions.',
    author: 'John Doe',
    date: new Date('2024-01-15'),
    href: '/blog/advanced-svelte',
    tags: ['Svelte', 'Web Development'],
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>

<Story
  name="ShortExcerpt"
  args={{
    title: 'Quick Tips for CSS Flexbox',
    excerpt: 'A quick guide to mastering CSS Flexbox for responsive layouts.',
    author: 'John Doe',
    date: new Date('2024-01-20'),
    href: '/blog/css-flexbox-tips',
    tags: ['CSS', 'Web Design'],
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>

<Story
  name="NoExcerpt"
  args={{
    title: 'Exploring the New Features in Svelte 4',
    author: 'Jane Smith',
    date: new Date('2024-01-25'),
    href: '/blog/svelte-4-features',
    tags: ['Svelte', 'New Features'],
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>
