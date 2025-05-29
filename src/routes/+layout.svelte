<script lang="ts">
  import { page } from '$app/state';
  import ThemeIcon from '$lib/components/carbon/theme-icon/theme-icon.svelte';
  import { m } from '$lib/paraglide/messages.js';
  import { locales, localizeHref, setLocale } from '$lib/paraglide/runtime';
  import '$lib/styles/app.css';
  import {
    Content,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SkipToContent,
  } from 'carbon-components-svelte';
  import 'carbon-components-svelte/css/all.css';
  let { children } = $props();
  let isSideNavOpen = $state<boolean>(false);
  let theme = $state<'white' | 'g100'>();
</script>

<Header company={m['app:company']()} platformName={m['app:platform']()} bind:isSideNavOpen expandedByDefault={false}>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text={m['app:navbar.home']()} />
    <HeaderNavItem href="/about" text={m['app:navbar.about']()} />
    <HeaderNavItem href="/projects" text={m['app:navbar.projects']()} />
    <HeaderNavItem href="/blog" text={m['app:navbar.blog']()} />
    <HeaderNavItem href="/services" text={m['app:navbar.services']()} />
    <HeaderNavItem href="/contact" text={m['app:navbar.contact']()} />
    <HeaderNavMenu text="Language">
      {#each locales as locale (locale)}
        <HeaderNavItem onclick={() => setLocale(locale)} text={locale.toUpperCase()} />
      {/each}
    </HeaderNavMenu>
    <HeaderNavItem class="block w-full">
      <ThemeIcon {theme} />
    </HeaderNavItem>
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavMenuItem text={m['app:navbar.home']()} href="/" />
    <SideNavMenuItem text={m['app:navbar.about']()} href="/about" />
    <SideNavMenuItem text={m['app:navbar.projects']()} href="/projects" />
    <SideNavMenuItem text={m['app:navbar.blog']()} href="/blog" />
    <SideNavMenuItem text={m['app:navbar.services']()} href="/services" />
    <SideNavMenuItem text={m['app:navbar.contact']()} href="/contact" />
    <SideNavMenu text="Language">
      {#each locales as locale (locale)}
        <SideNavMenuItem onclick={() => setLocale(locale)} text={locale.toUpperCase()} />
      {/each}
    </SideNavMenu>
    <SideNavMenuItem>
      <ThemeIcon {theme} />
    </SideNavMenuItem>
  </SideNavItems>
</SideNav>

<Content>
  {@render children()}
</Content>

<div class="hidden">
  {#each locales as locale (locale)}
    <a href={localizeHref(page.url.pathname, { locale })} class="hidden">{locale}</a>
  {/each}
</div>
