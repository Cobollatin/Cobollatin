<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  const blogPosts = $state([]);
</script>

<svelte:head>
  <title>Blog - {m['app:platform']()}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <header class="mb-12 text-center">
    <h1 class="mb-4 text-4xl font-bold text-gray-900">Blog</h1>
    <p class="mx-auto max-w-2xl text-lg text-gray-600">
      Discover insights, tutorials, and best practices for modern web development. From SvelteKit to CSS techniques,
      explore topics that matter to developers.
    </p>
  </header>

  <div class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-1"></div>

  {#if blogPosts.length === 0}
    <div class="py-12 text-center">
      <p class="text-lg text-gray-500">No blog posts yet. Check back soon for new content!</p>
    </div>
  {/if}
</div>
