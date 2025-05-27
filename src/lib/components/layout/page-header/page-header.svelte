<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined = undefined;
</script>

<header class="px-4 py-6 md:px-6 mb-6 border-b border-gray-300">
  <h1 class="text-3xl font-semibold leading-tight mb-2 text-gray-900">
    {title}
  </h1>
  {#if subtitle}
    <p class="text-xl font-normal leading-normal text-gray-700 mt-0">
      {subtitle}
    </p>
  {/if}
</header>

<!--
Original style block for reference:
<style>
  .page-header {
    padding: 1.5rem 1rem; /* Carbon $spacing-06 (1.5rem) and $spacing-05 (1rem) -> Tailwind: py-6 px-4 or md:px-6 */
    margin-bottom: 1.5rem; /* Carbon $spacing-06 -> Tailwind: mb-6 */
    border-bottom: 1px solid #e0e0e0; /* Carbon $ui-03 -> Tailwind: border-b border-gray-300 */
  }

  h1 {
    font-size: 2rem; /* Carbon $heading-04 (1.75rem) or $display-01 (2.625rem) or $heading-05 (2rem). Let's use text-3xl (1.875rem) or text-4xl (2.25rem) as an approximation. text-3xl seems closer to 2rem. */
    font-weight: 600; /* Carbon $font-weight-semibold -> Tailwind: font-semibold */
    line-height: 1.25; /* Tailwind: leading-tight (1.25) */
    margin-bottom: 0.5rem; /* Carbon $spacing-03 -> Tailwind: mb-2 (0.5rem) */
    color: #161616; /* Carbon $text-01 -> Tailwind: text-gray-900 (assuming light theme) */
  }

  .subtitle {
    font-size: 1.25rem; /* Carbon $heading-02 (1.25rem) or $fluid-heading-04 -> Tailwind: text-xl (1.25rem) */
    font-weight: 400; /* Carbon $font-weight-regular -> Tailwind: font-normal */
    line-height: 1.4; /* Tailwind: leading-normal (1.5) or leading-relaxed (1.625). leading-normal is closer. */
    color: #525252; /* Carbon $text-02 -> Tailwind: text-gray-700 (assuming light theme) */
    margin-top: 0; /* Tailwind: mt-0 */
  }
</style>
-->
