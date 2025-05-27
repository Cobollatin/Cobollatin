<script lang="ts">
  export let interactive: boolean = false;
</script>

<div
  class="card bg-white border border-gray-200 shadow-md rounded-md p-4 flex flex-col text-gray-900"
  class:hover:bg-gray-50={interactive}
  class:hover:shadow-lg={interactive}
  class:cursor-pointer={interactive}
>
  {#if $$slots.header}
    <header class="card-header pb-3 mb-3 border-b border-gray-200">
      <slot name="header" />
    </header>
  {/if}

  <div class="card-content flex-grow">
    <slot />
  </div>

  {#if $$slots.footer}
    <footer class="card-footer pt-3 mt-3 border-t border-gray-200">
      <slot name="footer" />
    </footer>
  {/if}
</div>

<!--
Original style block for reference:
<style>
  .card {
    background-color: var(--cds-ui-background, #f4f4f4); /* Tailwind: bg-gray-100 or bg-white */
    border: 1px solid var(--cds-ui-03, #e0e0e0); /* Tailwind: border border-gray-200 or border-gray-300 */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Tailwind: shadow-md */
    padding: 1rem; /* Carbon $spacing-05 -> Tailwind: p-4 */
    display: flex; /* Tailwind: flex */
    flex-direction: column; /* Tailwind: flex-col */
    color: var(--cds-text-01, #161616); /* Tailwind: text-gray-900 (assuming light theme) */
    /* Carbon cards are often not explicitly rounded, but modern web often uses slight rounding.
       Let's add rounded-md for a common look. */
  }

  .card.interactive:hover {
    background-color: var(--cds-hover-ui, #e8e8e8); /* Tailwind: hover:bg-gray-50 or hover:bg-gray-100 */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15); /* Tailwind: hover:shadow-lg */
    cursor: pointer; /* Tailwind: cursor-pointer (added directly via class:directive) */
  }

  .card-header {
    padding-bottom: 0.75rem; /* Carbon $spacing-04 -> Tailwind: pb-3 */
    border-bottom: 1px solid var(--cds-ui-03, #e0e0e0); /* Tailwind: border-b border-gray-200 */
    margin-bottom: 0.75rem; /* Carbon $spacing-04 -> Tailwind: mb-3 */
  }

  .card-content {
    flex-grow: 1; /* Tailwind: flex-grow */
  }

  .card-footer {
    padding-top: 0.75rem; /* Carbon $spacing-04 -> Tailwind: pt-3 */
    border-top: 1px solid var(--cds-ui-03, #e0e0e0); /* Tailwind: border-t border-gray-200 */
    margin-top: 0.75rem; /* Carbon $spacing-04 -> Tailwind: mt-3 */
  }

  /* :global styles were removed as they are better handled by utility classes on slotted content
     or by the consumer of the component.
  .card-header :global(h1),
  .card-header :global(h2),
  .card-header :global(h3) {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .card-footer :global(button) {
    margin-left: 0.5rem;
  }
  .card-footer :global(p) {
    margin: 0;
    font-size: 0.875rem;
    color: var(--cds-text-02, #525252);
  }
  */
</style>
-->
