<script lang="ts">
  export let exampleProperty: boolean = true;
</script>

<div class="example-component">
  <h2>Example Component</h2>
  <p>This is an example component demonstrating reactive properties in Svelte.</p>
  <p>Example Property is: {exampleProperty ? 'Enabled' : 'Disabled'}</p>
  <button on:click={() => (exampleProperty = !exampleProperty)}> Toggle Example Property </button>
</div>
