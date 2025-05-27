<script lang="ts">
  export let navItems: { text: string; href: string }[] = [];
</script>

<nav class="bg-gray-800 p-4">
  <ul class="flex space-x-4">
    {#each navItems as item}
      <li>
        <a href={item.href} class="text-white hover:text-gray-300 hover:underline">
          {item.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<!--
Original style block for reference during refactoring:
<style>
  nav {
    background-color: #333; // Equivalent: bg-gray-800 or bg-gray-900
    padding: 1rem; // Equivalent: p-4
  }

  ul {
    list-style: none; // Tailwind removes list styles by default with `flex` or `grid`
    display: flex; // Equivalent: flex
    gap: 1rem; // Equivalent: space-x-4 (for horizontal) or space-y-4 (for vertical)
    margin: 0; // Typically handled by Tailwind defaults or reset
    padding: 0; // Typically handled by Tailwind defaults or reset
  }

  li a {
    color: white; // Equivalent: text-white
    text-decoration: none; // Tailwind removes default underline
  }

  li a:hover {
    text-decoration: underline; // Equivalent: hover:underline
    // Might also want a slight color change on hover, e.g., hover:text-gray-300
  }
</style>
-->
