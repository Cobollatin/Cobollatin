<script lang="ts">
  import ThemeIcon from '$lib/components/carbon/theme-icon/theme-icon.svelte';
  import '$lib/styles/app.css';
  import { Content, Header, HeaderNav, HeaderNavItem, SkipToContent } from 'carbon-components-svelte';
  import 'carbon-components-svelte/css/all.css';
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();

  let theme = $state<'white' | 'g100'>('white');
</script>

<Header>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem>
      <ThemeIcon {theme} />
    </HeaderNavItem>
  </HeaderNav>
</Header>

<Content>
  {@render children()}
</Content>
