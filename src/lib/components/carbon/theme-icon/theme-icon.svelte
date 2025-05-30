<script lang="ts">
  import { Theme } from 'carbon-components-svelte';
  import { Light, LightFilled } from 'carbon-icons-svelte';

  let {
    theme,
  }: {
    theme: 'white' | 'g100' | undefined;
  } = $props();
</script>

<div class="flex items-center gap-x-2">
  <Theme
    render="toggle"
    toggle={{
      themes: ['white', 'g100'],
      labelA: '',
      labelB: '',
      hideLabel: true,
      size: 'sm',
    }}
    bind:theme
    persist
    persistKey="__carbon-theme"
  />
  {#if theme == 'white'}
    <LightFilled class="flex" />
  {:else}
    <Light class="flex" />
  {/if}
</div>
