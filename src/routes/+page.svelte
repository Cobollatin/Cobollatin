<script lang="ts">
  import { Grid, Row, Column, Button, Heading } from 'carbon-components-svelte';
</script>

<svelte:head>
  <title>Home - My Portfolio</title>
</svelte:head>

<Heading>Welcome to My Portfolio</Heading>

<Grid>
  <Row class="tw-mt-4">
    <Column>
      <p>
        This is the homepage of my portfolio, built with SvelteKit, IBM Carbon Design System, and Tailwind CSS. 
        Explore the site to learn more about my work and skills.
      </p>
    </Column>
  </Row>
  <Row class="tw-mt-6">
    <Column md={8}>
      <p>
        <strong>Section 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nullam nec purus ut libero facilisis laoreet. Vivamus auctor,
        nisl et aliquet aliquam, metus nisl consequat nunc, nec facilisis
        nisi lorem et nisl.
      </p>
    </Column>
    <Column md={8}>
      <p>
        <strong>Section 2:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Column>
  </Row>
  <Row class="tw-mt-6">
    <Column>
      <Button href="/about">Learn More About Me</Button>
    </Column>
  </Row>
</Grid>
