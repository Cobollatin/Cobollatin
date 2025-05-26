<script lang="ts">
  import { getLocale, locales } from '$lib/paraglide/runtime.js';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  const currentLocale = getLocale();

  function switchLanguage(locale: string) {
    const currentPath = $page.url.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|es)/, '') || '/';
    const newPath = locale === 'en' ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`;
    goto(newPath);
  }

  const languageNames = {
    en: 'English',
    es: 'Español',
  } as const;
</script>

<div class="relative inline-block text-left">
  <div class="flex items-center space-x-2">
    {#each locales as locale (locale)}
      <button
        on:click={() => switchLanguage(locale)}
        class="rounded-md px-3 py-1 text-sm font-medium transition-colors"
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
