<script lang="ts">
  import Card from './card.svelte';
  export let interactive = false;
  export let showHeader = true;
  export let showFooter = true;
</script>

<Card {interactive}>
  {#if showHeader}
    <div slot="header" data-testid="header-content">Header Content</div>
  {/if}
  <div data-testid="default-content">Default Slot Content</div>
  {#if showFooter}
    <div slot="footer" data-testid="footer-content">Footer Content</div>
  {/if}
</Card>
