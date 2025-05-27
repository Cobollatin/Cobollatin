<script lang="ts">
  export let columns: string | number = 'auto-fit'; // Default to auto-fit
  export let gap: string = '1rem'; // Default gap

  // --- Column Classes ---
  let columnClasses = '';
  $: {
    if (typeof columns === 'number' && columns > 0 && columns <= 12) {
      columnClasses = `grid-cols-${columns}`;
    } else if (columns === 'auto-fit') {
      // Standard responsive auto-fit pattern
      columnClasses = 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]';
    } else if (typeof columns === 'string' && columns.match(/^(\d+fr\s*)+$/)) {
      // For simple fr unit strings like "1fr 2fr", "1fr 1fr 1fr"
      // Tailwind's JIT can handle these in grid-cols, e.g., grid-cols-[1fr_2fr]
      // We might need to replace spaces with underscores for some Tailwind versions/contexts
      // but modern Tailwind JIT is quite good with direct values.
      // Let's try without underscore replacement first.
      columnClasses = `grid-cols-[${columns.replace(/\s+/g, '_')}]`;
    } else if (typeof columns === 'string') {
      // Fallback for other specific string patterns if needed, or direct pass-through
      // For now, if it's an unhandled string, it might not apply a column class correctly.
      // Or, we could default to something like 'grid-cols-1' or the auto-fit behavior.
      // Let's default to auto-fit for unhandled strings for now.
      columnClasses = 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]';
    } else {
      // Default for invalid numbers or other types
      columnClasses = 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]';
    }
  }

  // --- Gap Classes ---
  // Basic mapping for common rem values to Tailwind gap classes (gap-X)
  // Tailwind's default spacing: 1 unit = 0.25rem. So 1rem = gap-4.
  // This can be extended or made more robust.
  const gapMap: { [key: string]: string } = {
    '0px': 'gap-0',
    '0.125rem': 'gap-px', // Often 1px, but gap-px is specific
    '0.25rem': 'gap-1',  // 4px
    '0.5rem': 'gap-2',   // 8px
    '0.75rem': 'gap-3',  // 12px
    '1rem': 'gap-4',    // 16px
    '1.5rem': 'gap-6',   // 24px
    '2rem': 'gap-8',    // 32px
    '2.5rem': 'gap-10',  // 40px
    '3rem': 'gap-12',   // 48px
  };
  let gapClasses = '';
  $: {
    gapClasses = gapMap[gap] || `gap-[${gap}]`; // Use mapped value or arbitrary value
  }

  $: finalClasses = `grid w-full ${columnClasses} ${gapClasses}`;
</script>

<div class={finalClasses}>
  <slot />
</div>

<!--
Original script and style for reference:

<script lang="ts">
  // Define props for the grid component
  export let columns: string | number = 'auto-fit'; // Default to auto-fit, minmax(250px, 1fr) for responsiveness
  export let gap: string = '1rem'; // Default gap between grid items

  // Helper function to generate grid-template-columns style
  function getGridTemplateColumns(cols: string | number): string {
    if (typeof cols === 'number') {
      return `repeat(${cols}, 1fr)`;
    }
    if (cols === 'auto-fit') {
      return 'repeat(auto-fit, minmax(250px, 1fr))'; // Sensible default for auto-fit
    }
    return cols; // Assume it's a valid CSS grid-template-columns string like '1fr 2fr'
  }

  $: gridStyle = `
    display: grid;
    grid-template-columns: ${getGridTemplateColumns(columns)};
    gap: ${gap};
  `;
</script>

<div class="grid-container" style={gridStyle}>
  <slot />
</div>

<style>
  .grid-container {
    width: 100%; // Ensure the grid takes full available width
    /* Add any other base styling for the grid container if needed */
  }
</style>
-->
