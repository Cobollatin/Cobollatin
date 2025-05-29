<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>Page Not Found - {m['app:company']()}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 text-center">
  <h1 class="mb-4 text-6xl font-bold">404</h1>
  <h2 class="mb-6 text-3xl font-semibold">Page Not Found</h2>
  <p class="mb-8 text-lg text-gray-600">Sorry, the page you're looking for doesn't exist or has been moved.</p>
  <a href="/" class="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700">
    Go Home
  </a>
</div>
