<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import BlogPost from '$lib/components/content/blog-post/blog-post.svelte';

  const blogData = {
    title: 'Getting Started with SvelteKit and Storybook: A Complete Guide',
    content: `
      <p>SvelteKit and Storybook form a powerful combination for modern web development. This comprehensive guide will walk you through setting up both tools and creating a seamless development workflow.</p>
      
      <h3>Why SvelteKit and Storybook?</h3>
      <p>SvelteKit offers a modern, fast framework for building web applications, while Storybook provides an excellent environment for developing and testing components in isolation. Together, they enable:</p>
      <ul>
        <li><strong>Component-driven development:</strong> Build UI components before integrating them into pages</li>
        <li><strong>Better collaboration:</strong> Designers and developers can work from the same component library</li>
        <li><strong>Improved testing:</strong> Test components in various states and scenarios</li>
        <li><strong>Documentation:</strong> Automatically generate component documentation</li>
      </ul>

      <h3>Setting Up Your Development Environment</h3>
      <p>Let's start by creating a new SvelteKit project and adding Storybook to it:</p>
      
      <pre><code># Create a new SvelteKit project
npm create svelte@latest my-app
cd my-app
npm install

# Add Storybook
npx storybook@latest init</code></pre>
      
      <p>Storybook will automatically detect that you're using SvelteKit and configure itself accordingly. This includes setting up the necessary addons and configuration files.</p>

      <h3>Creating Your First Component</h3>
      <p>Let's create a simple Button component to demonstrate the workflow:</p>

      <pre><code>&lt;script lang="ts"&gt;
  type Props = {
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  };

  const { variant = 'primary', size = 'medium', disabled = false }: Props = $props();
&lt;/script&gt;

&lt;button 
  class="btn btn--{variant} btn--{size}" 
  {disabled}
  on:click
&gt;
  &lt;slot /&gt;
&lt;/button&gt;</code></pre>

      <h3>Writing Stories</h3>
      <p>Now create a story file to showcase your component in different states:</p>

      <pre><code>import { defineMeta } from '@storybook/addon-svelte-csf';
import Button from './Button.svelte';

const { Story } = defineMeta({
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
});

// Export different variations
export const Primary = {
  args: { variant: 'primary' }
};

export const Secondary = {
  args: { variant: 'secondary' }
};</code></pre>

      <blockquote>
        <p>Stories help you visualize components in isolation, making it easier to spot issues and ensure consistency across your application.</p>
      </blockquote>

      <h3>Best Practices for SvelteKit + Storybook</h3>
      <p>Here are some tips to get the most out of this combination:</p>
      <ul>
        <li>Keep components pure and focused on a single responsibility</li>
        <li>Use TypeScript for better component APIs and documentation</li>
        <li>Write stories for all component states and edge cases</li>
        <li>Leverage Storybook addons for accessibility testing and design tokens</li>
        <li>Use the Controls addon to make stories interactive</li>
      </ul>

      <h3>Conclusion</h3>
      <p>SvelteKit and Storybook together provide a robust foundation for building scalable, maintainable web applications. By following component-driven development practices, you'll create more reliable and reusable code that benefits your entire team.</p>

      <p>Start small with a few components, and gradually build up your component library. The investment in proper tooling and development practices will pay dividends as your project grows.</p>
    `,
    date: new Date('2024-12-15'),
    author: 'Sarah Johnson',
    readTime: 8,
    tags: ['SvelteKit', 'Storybook', 'Web Development', 'Tutorial', 'JavaScript'],
    variant: 'full' as const,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'
  };
</script>

<svelte:head>
  <title>{blogData.title} - {m['app:platform']()}</title>
  <meta name="description" content="Learn how to set up SvelteKit with Storybook for component-driven development. Complete guide with examples and best practices." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <BlogPost {...blogData} />
  
  <div class="mt-8 flex justify-center">
    <a 
      href="/blog" 
      class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
    >
      ← Back to Blog
    </a>
  </div>
</div>
