<script lang="ts">
  export let label: string = 'Button';
  export let kind: 'primary' | 'secondary' | 'danger' | 'ghost' = 'primary';
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let disabled: boolean = false;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleClick(event: MouseEvent) {
    if (!disabled) {
      dispatch('click', event);
    }
  }

  // Base classes for all buttons
  const baseStyles = 'font-semibold focus:outline-none transition-colors duration-150 ease-in-out';
  // Adding rounded corners, as it's a common modern UI practice, though Carbon is often sharp.
  // Tailwind's default focus ring (often blue) will be used if not overridden by kind-specific focus rings.
  // For more Carbon-like focus, it would be `focus:outline-offset-[-2px] focus:outline-2 focus:outline-blue-500`

  // Kind-specific classes
  let kindClasses = '';
  $: {
    switch (kind) {
      case 'primary':
        kindClasses = `bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`;
        break;
      case 'secondary':
        // Using a lighter gray for secondary, more typical in Tailwind context
        kindClasses = `bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50`;
        break;
      case 'danger':
        kindClasses = `bg-red-600 text-white border border-red-600 hover:bg-red-700 hover:border-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
        break;
      case 'ghost':
        kindClasses = `text-blue-600 bg-transparent border border-transparent hover:bg-blue-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`;
        break;
      default: // Fallback to primary styling
        kindClasses = `bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`;
    }
  }

  // Size-specific classes
  let sizeClasses = '';
  $: {
    switch (size) {
      case 'small':
        sizeClasses = 'py-1 px-3 text-sm rounded-sm'; // Adjusted padding and rounding for small
        break;
      case 'medium':
        sizeClasses = 'py-2 px-4 text-base rounded-md'; // Default size
        break;
      case 'large':
        sizeClasses = 'py-3 px-6 text-lg rounded-md';
        break;
      default:
        sizeClasses = 'py-2 px-4 text-base rounded-md';
    }
  }

  // Disabled state classes
  // Applied in the final class string conditionally
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  $: finalClass = `
    ${baseStyles}
    ${kindClasses}
    ${sizeClasses}
    ${disabled ? disabledClasses : ''}
    ${disabled && kind === 'ghost' ? 'hover:bg-transparent' : ''} 
    inline-flex items-center justify-center whitespace-nowrap
  `.replace(/\s+/g, ' ').trim();
  // Added inline-flex, items-center, justify-center, whitespace-nowrap from original Carbon styles.
  // Added a specific rule for disabled ghost buttons to not show hover background.
</script>

<button
  type="button"
  class={finalClass}
  {disabled}
  on:click={handleClick}
  aria-disabled={disabled ? 'true' : undefined}
>
  {label}
</button>

<!-- Original <style> block and class computation logic removed -->
