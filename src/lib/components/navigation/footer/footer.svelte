<script lang="ts">
  export let socialLinks: { name: string; href: string }[] = [];
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-800 text-gray-300 p-8 text-center">
  <p class="mb-4">&copy; {currentYear} Your Name</p>
  {#if socialLinks.length > 0}
    <ul class="flex justify-center space-x-4">
      {#each socialLinks as link}
        <li>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white hover:underline"
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</footer>

<!--
Original style block for reference:
<style>
  footer {
    background-color: #333; // Tailwind: bg-gray-800 or similar dark gray
    color: white; // Tailwind: text-white or text-gray-200/300 for slightly softer
    padding: 2rem; // Tailwind: p-8 (2rem = 32px)
    text-align: center; // Tailwind: text-center
  }

  ul {
    list-style: none; // Default with flex
    display: flex; // Tailwind: flex
    justify-content: center; // Tailwind: justify-center
    gap: 1rem; // Tailwind: space-x-4 (for horizontal items)
    padding: 0; // Default with flex
    margin-top: 1rem; // Tailwind: mt-4 (applied to the ul itself, or mb-4 to the p above)
  }

  li a {
    color: white; // Handled by parent, or text-white on link
    text-decoration: none; // Default for Tailwind utility classes on links
  }

  li a:hover {
    text-decoration: underline; // Tailwind: hover:underline
    // Could also add hover:text-gray-100 or hover:text-blue-400 etc.
  }
</style>
-->
