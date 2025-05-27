<script lang="ts">
  import Card from '$lib/components/layout/card/card.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import Tag from '$lib/components/ui/tag/tag.svelte';

  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let projectUrl: string | undefined = undefined;
  export let sourceUrl: string | undefined = undefined;
  export let technologies: string[] = [];
</script>

<Card class="portfolio-item-card w-full"> {/* Ensure Card can take full width if needed */}
  <div slot="header">
    <h3 class="text-xl font-semibold text-gray-800">{title}</h3>
  </div>

  <div class="mb-4"> {/* Replaces .image-container, provides bottom margin */}
    <img src={imageUrl} alt="Project: {title}" class="w-full h-auto object-cover rounded-md block" />
  </div>
  <p class="text-gray-700 mb-4 leading-relaxed">{description}</p>

  {#if technologies.length > 0}
    <div class="flex flex-wrap gap-2 mb-4"> {/* Replaces .technologies-container */}
      {#each technologies as tech}
        <Tag label={tech} type="blue" />
      {/each}
    </div>
  {/if}

  <div slot="footer" class="flex flex-wrap justify-start gap-3"> {/* Replaces .footer-buttons */}
    {#if projectUrl}
      <Button label="View Project" kind="primary" on:click={() => window.open(projectUrl, '_blank')} />
    {/if}
    {#if sourceUrl}
      <Button label="View Source" kind="secondary" on:click={() => window.open(sourceUrl, '_blank')} />
    {/if}
  </div>
</Card>

<!--
Original style block for reference:
<style>
  .portfolio-item-card {} // Handled by Card component + w-full if needed here

  // h3 styling: text-xl font-semibold text-gray-800 (applied directly)

  .image-container { // mb-4
    width: 100%;
    margin-bottom: 1rem;
  }

  .project-image { // w-full h-auto object-cover rounded-md block
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }

  .description { // text-gray-700 mb-4 leading-relaxed
    font-size: 1rem;
    line-height: 1.5; // leading-relaxed is 1.625, leading-normal is 1.5
    margin-bottom: 1rem;
  }

  .technologies-container { // flex flex-wrap gap-2 mb-4
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-buttons { // flex flex-wrap justify-start gap-3
    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
  }
</style>
-->
