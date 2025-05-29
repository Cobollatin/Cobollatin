<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>About - {m['app:platform']()}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="mb-6 text-4xl font-bold">Hello from About Page!</h1>
  <p class="text-lg text-gray-600">
    Welcome to the about page. This is where information about the company or individual would go.
  </p>
</div>
