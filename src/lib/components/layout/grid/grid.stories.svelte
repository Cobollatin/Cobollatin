<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Grid from './grid.svelte';

  const meta = {
    title: 'Layout/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
      columns: {
        control: { type: 'select' },
        options: [1, 2, 3, 4, 'auto-fit', '1fr 2fr'],
        description: 'Number of columns or CSS grid-template-columns string',
      },
      gap: {
        control: 'text',
        description: 'Gap between grid items (e.g., "1rem", "16px")',
      },
    },
  } satisfies Meta<Grid>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // Helper style for placeholder items
  const itemStyle = "background-color: #f0f0f0; padding: 1rem; text-align: center; border: 1px solid #ccc;";

</script>

<Story name="DefaultGrid">
  <Grid>
    <div style={itemStyle}>Item 1</div>
    <div style={itemStyle}>Item 2</div>
    <div style={itemStyle}>Item 3</div>
    <div style={itemStyle}>Item 4</div>
  </Grid>
</Story>

<Story name="ThreeColumnsCustomGap">
  <Grid columns={3} gap="2rem">
    <div style={itemStyle}>Item A</div>
    <div style={itemStyle}>Item B</div>
    <div style={itemStyle}>Item C</div>
    <div style={itemStyle}>Item D</div>
    <div style={itemStyle}>Item E</div>
    <div style={itemStyle}>Item F</div>
  </Grid>
</Story>

<Story name="AutoFitResponsive">
  <Grid columns="auto-fit" gap="0.5rem">
    <div style={itemStyle}>Responsive Item 1</div>
    <div style={itemStyle}>Responsive Item 2</div>
    <div style={itemStyle}>Responsive Item 3</div>
    <div style={itemStyle}>Responsive Item 4</div>
    <div style={itemStyle}>Responsive Item 5</div>
  </Grid>
</Story>

<Story name="CustomColumnDefinition">
  <Grid columns="1fr 2fr 1fr" gap="1.5rem">
    <div style={itemStyle}>Col 1 (1fr)</div>
    <div style={itemStyle}>Col 2 (2fr)</div>
    <div style={itemStyle}>Col 3 (1fr)</div>
  </Grid>
</Story>

<Story name="NoGap">
  <Grid columns={2} gap="0px">
    <div style={itemStyle}>Item X</div>
    <div style={itemStyle}>Item Y</div>
  </Grid>
</Story>
