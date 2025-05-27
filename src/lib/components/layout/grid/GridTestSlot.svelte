<script lang="ts">
  import Grid from './grid.svelte';
</script>

<Grid {...$$props}>
  <div data-testid="slot-content">
    <p>Slotted Content</p>
  </div>
</Grid>
