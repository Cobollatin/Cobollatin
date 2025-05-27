<script lang="ts">
  import Card from '$lib/components/layout/card/card.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import Tag from '$lib/components/ui/tag/tag.svelte';

  export let title: string;
  export let excerpt: string;
  export let date: string | Date;
  export let href: string;
  export let tags: string[] = [];

  function formatDate(d: string | Date): string {
    if (d instanceof Date) {
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    return d;
  }

  $: formattedDate = formatDate(date);
</script>

<Card interactive={true}>
  <div slot="header">
    <h2>
      <a href={href} class="text-lg font-semibold text-gray-800 hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
        {title}
      </a>
    </h2>
  </div>

  <div class="flex flex-col space-y-2"> {/* Replaces .content-wrapper and its gap */}
    <p class="text-sm text-gray-600 mb-1"> {/* Replaces .date */}
      {formattedDate}
    </p>
    <p class="text-base text-gray-700 leading-relaxed"> {/* Replaces .excerpt, using leading-relaxed for 1.625 which is close to 1.5 line-height */}
      {excerpt}
    </p>

    {#if tags.length > 0}
      <div class="mt-3 flex flex-wrap gap-2"> {/* Replaces .tags-container */}
        {#each tags as tagName}
          <Tag label={tagName} type="gray" />
        {/each}
      </div>
    {/if}
  </div>

  <div slot="footer" class="flex justify-end mt-4"> {/* Replaces .footer-actions, added mt-4 for spacing */}
    <Button label="Read More" kind="primary" on:click={() => window.location.href = href} />
  </div>
</Card>

<!--
Original style block for reference:
<style>
  .title-link { // text-lg font-semibold text-gray-800 hover:text-blue-600 hover:underline
    color: inherit;
    text-decoration: none;
  }
  .title-link:hover {
    text-decoration: underline;
  }

  .content-wrapper { // flex flex-col space-y-2 (space-y-2 is 0.5rem, gap-2 is also 0.5rem)
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .date { // text-sm text-gray-600 mb-1 (0.25rem)
    font-size: 0.875rem;
    color: var(--cds-text-02, #525252);
    margin-bottom: 0.25rem;
  }

  .excerpt { // text-base text-gray-700 leading-relaxed (1.625 for line-height 1.5)
    font-size: 1rem;
    color: var(--cds-text-01, #161616);
    line-height: 1.5;
  }

  .tags-container { // mt-3 (0.75rem) flex flex-wrap gap-2 (0.5rem)
    margin-top: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .footer-actions { // flex justify-end mt-4 (1rem, assuming card content has padding, this adds space from content to footer)
    display: flex;
    justify-content: flex-end;
  }
</style>
-->
