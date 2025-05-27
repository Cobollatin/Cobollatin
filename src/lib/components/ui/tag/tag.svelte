<script lang="ts">
  export let label: string = 'Tag';
  export let type: 'red' | 'magenta' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green' | 'gray' | 'cool-gray' | 'warm-gray' | 'high-contrast' | 'outline' = 'gray';

  // Base classes for all tags
  // Original: padding: 0 0.5rem (px-2); height: 1.25rem (h-5); border-radius: 1.25rem (rounded-full);
  // font-size: 0.75rem (text-xs); font-weight: 600 (font-semibold); line-height: 1 (leading-none);
  // display: inline-flex; align-items: center;
  const baseStyles = 'inline-flex items-center px-2 h-5 text-xs font-semibold rounded-full whitespace-nowrap box-border leading-none';
  // Note: h-5 (1.25rem) might make text centering tricky with text-xs if not perfectly aligned by browser.
  // Adjusting padding slightly for better vertical centering with text-xs: py-0.5 is common.
  // Let's use `py-0.5 px-2.5` from the task description for the base.
  const updatedBaseStyles = 'inline-flex items-center py-0.5 px-2.5 text-xs font-semibold rounded-full whitespace-nowrap box-border';


  // Type-specific classes
  let typeClasses = '';
  $: {
    switch (type) {
      case 'red':
        typeClasses = 'bg-red-100 text-red-800 border border-transparent';
        break;
      case 'magenta': // Approximated with pink
        typeClasses = 'bg-pink-100 text-pink-800 border border-transparent';
        break;
      case 'purple':
        typeClasses = 'bg-purple-100 text-purple-800 border border-transparent';
        break;
      case 'blue':
        typeClasses = 'bg-blue-100 text-blue-800 border border-transparent';
        break;
      case 'cyan':
        typeClasses = 'bg-cyan-100 text-cyan-800 border border-transparent';
        break;
      case 'teal':
        typeClasses = 'bg-teal-100 text-teal-800 border border-transparent';
        break;
      case 'green':
        typeClasses = 'bg-green-100 text-green-800 border border-transparent';
        break;
      case 'gray':
        typeClasses = 'bg-gray-200 text-gray-800 border border-transparent'; // Default gray, slightly darker bg than -100 for more visibility
        break;
      case 'cool-gray': // Approximated with slate
        typeClasses = 'bg-slate-200 text-slate-800 border border-transparent';
        break;
      case 'warm-gray': // Approximated with stone
        typeClasses = 'bg-stone-200 text-stone-800 border border-transparent';
        break;
      case 'high-contrast':
        // Ensuring border makes it visible on same-color backgrounds.
        typeClasses = 'bg-black text-white border border-gray-400'; // Or border-white if on dark mode
        break;
      case 'outline':
        // Using current text color for border is not directly possible with Tailwind standard classes for border-color.
        // We'll use a neutral border color. text-gray-700 is a common choice for outline text.
        typeClasses = 'border border-gray-500 text-gray-700 bg-transparent';
        break;
      default:
        typeClasses = 'bg-gray-200 text-gray-800 border border-transparent';
    }
  }

  $: finalClass = `
    ${updatedBaseStyles}
    ${typeClasses}
  `.replace(/\s+/g, ' ').trim();
</script>

<span class={finalClass}>
  {label}
</span>

<!-- Original <style> block and class computation logic removed -->
