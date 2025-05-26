<script lang="ts">
  import { getLocale, locales } from '$lib/paraglide/runtime.js';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  
  $: currentLocale = getLocale();
  
  function switchLanguage(locale: string) {
    // Get current path without locale prefix
    const currentPath = $page.url.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|es)/, '') || '/';
    
    // Navigate to the new locale
    const newPath = locale === 'en' ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`;
    goto(newPath);
  }
  
  const languageNames = {
    en: 'English',
    es: 'Español'
  } as const;
</script>

<div class="relative inline-block text-left">
  <div class="flex items-center space-x-2">
    {#each locales as locale}
      <button
        on:click={() => switchLanguage(locale)}
        class="px-3 py-1 text-sm font-medium rounded-md transition-colors"
        class:bg-blue-600={currentLocale === locale}
        class:text-white={currentLocale === locale}
        class:text-gray-700={currentLocale !== locale}
        class:hover:bg-gray-100={currentLocale !== locale}
      >
        {languageNames[locale]}
      </button>
    {/each}
  </div>
</div>
