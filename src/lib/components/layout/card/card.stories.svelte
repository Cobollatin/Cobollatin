<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Card from './card.svelte';

  const meta = {
    title: 'Layout/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
      interactive: {
        control: 'boolean',
        description: 'Adds a hover effect to the card',
      },
      // Slot controls are not directly supported in the same way as props,
      // but we can describe them.
      headerSlot: {
        control: 'text', // Simulate slot content with text input for demo
        description: 'Content for the header slot (HTML allowed)',
        table: { category: 'Slots' }
      },
      defaultSlot: {
        control: 'text', // Simulate slot content with text input for demo
        description: 'Content for the default slot (HTML allowed)',
        table: { category: 'Slots' }
      },
      footerSlot: {
        control: 'text', // Simulate slot content with text input for demo
        description: 'Content for the footer slot (HTML allowed)',
        table: { category: 'Slots' }
      }
    },
  } satisfies Meta<Card>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // --- Story Definitions ---

  // Base story structure for rendering
  const Template: Story = (args) => ({
    Component: Card,
    props: args,
    // Slot content is handled by providing Svelte components or HTML strings
    // Storybook's `slots` property can be used if @storybook/addon-svelte-csf is configured for it
    // For now, we'll render content directly in the template for each story
  });

</script>

<!-- Story: Default Content Only -->
<Story name="DefaultContentOnly">
  <Card>
    <p>This is the main content of the card. It can be any text or HTML elements.</p>
  </Card>
</Story>

<!-- Story: With Header -->
<Story name="WithHeader">
  <Card>
    <div slot="header">
      <h2>Card Title</h2>
    </div>
    <p>This card has a header and some main content. The header provides a clear title.</p>
  </Card>
</Story>

<!-- Story: With Header and Footer -->
<Story name="WithHeaderAndFooter">
  <Card>
    <div slot="header">
      <h3>Complex Card</h3>
    </div>
    <p>This card utilizes all available slots: header, default content, and footer. It's useful for more structured information display.</p>
    <div slot="footer">
      <button type="button">Action 1</button>
      <button type="button" style="margin-left: 8px;">Action 2</button>
    </div>
  </Card>
</Story>

<!-- Story: Interactive Card -->
<Story name="InteractiveCard">
  <Card interactive={true}>
    <div slot="header">
      <h4>Interactive Card Title</h4>
    </div>
    <p>This card has the <code>interactive</code> prop set to true. Hover over it to see the effect (subtle background and shadow change).</p>
    <div slot="footer">
      <p>Clickable or actionable content might go here.</p>
    </div>
  </Card>
</Story>

<!-- Story: Card with only a Footer -->
<Story name="WithFooterOnly">
  <Card>
    <p>This card only has main content and a footer section, no explicit header.</p>
    <div slot="footer">
      <p><em>Footer information or small print.</em></p>
    </div>
  </Card>
</Story>

<!-- Story: Card with Rich HTML Content -->
<Story name="RichHTMLContent">
  <Card interactive={true}>
    <div slot="header">
      <h2><strong>Rich HTML</strong> Example</h2>
    </div>
    <ul>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three with <a href="#">a link</a></li>
    </ul>
    <p>This demonstrates more complex HTML within the default slot.</p>
    <div slot="footer">
      <p>Final notes &copy; {new Date().getFullYear()}</p>
    </div>
  </Card>
</Story>
