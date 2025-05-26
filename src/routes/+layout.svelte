<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderGlobalAction,
    SideNav,
    SideNavItems,
    SideNavLink,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column
  } from 'carbon-components-svelte';
  import Menu20 from 'carbon-icons-svelte/lib/Menu20';

  import 'carbon-components-svelte/css/all.css';
  import '../app.css';

  const isSideNavOpen = writable(false);
  const currentYear = new Date().getFullYear();
</script>

<Header company="My Portfolio">
  <HeaderGlobalAction slot="skip-to-content" href="#main-content">
    <SkipToContent />
  </HeaderGlobalAction>
  <HeaderNav>
    <HeaderNavItem href="/">Home</HeaderNavItem>
    <HeaderNavItem href="/about">About</HeaderNavItem>
    <HeaderNavItem href="/projects">Projects</HeaderNavItem>
  </HeaderNav>
  <HeaderGlobalAction aria-label="Menu" on:click={() => isSideNavOpen.update(v => !v)}>
    <Menu20 />
  </HeaderGlobalAction>
</Header>

<SideNav bind:isOpen={$isSideNavOpen}>
  <SideNavItems>
    <SideNavLink href="/">Home</SideNavLink>
    <SideNavLink href="/about">About</SideNavLink>
    <SideNavLink href="/projects">Projects</SideNavLink>
  </SideNavItems>
</SideNav>

<Content id="main-content">
  <Grid>
    <Row>
      <Column>
        <p>Page content will go here.</p>
        <slot />
      </Column>
    </Row>
  </Grid>
</Content>

<footer class="tw-text-center tw-py-4 tw-bg-gray-100">
  <p>© {currentYear} Your Name</p>
</footer>

<style>
  /* Ensure content has some padding, especially when SideNav is open */
  :global(#main-content) {
    padding-top: 3rem; /* Adjust based on header height */
  }
</style>
