<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Tag from './tag.svelte';

  // Define the TagType, matching the component's props
  type TagType = 'red' | 'magenta' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green' | 'gray' | 'cool-gray' | 'warm-gray' | 'high-contrast' | 'outline';

  const tagTypes: TagType[] = [
    'red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green',
    'gray', 'cool-gray', 'warm-gray', 'high-contrast', 'outline'
  ];

  const meta = {
    title: 'UI/Tag',
    component: Tag,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      type: {
        control: { type: 'select' },
        options: tagTypes,
      },
    },
  } satisfies Meta<Tag>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // --- Base Story for individual tag types ---
  // This allows us to map over tagTypes to create stories programmatically
  // or define them individually if more customization per story is needed.

  export const Default: Story = {
    args: {
      label: 'Gray Tag',
      type: 'gray',
    },
  };

  // --- Stories for each Tag Type ---
  // We can generate these dynamically or list them out for clarity
  // For this example, let's list some key ones and then show a way to do all.

  export const Red: Story = { args: { label: 'Red Tag', type: 'red' } };
  export const Magenta: Story = { args: { label: 'Magenta Tag', type: 'magenta' } };
  export const Purple: Story = { args: { label: 'Purple Tag', type: 'purple' } };
  export const Blue: Story = { args: { label: 'Blue Tag', type: 'blue' } };
  export const Cyan: Story = { args: { label: 'Cyan Tag', type: 'cyan' } };
  export const Teal: Story = { args: { label: 'Teal Tag', type: 'teal' } };
  export const Green: Story = { args: { label: 'Green Tag', type: 'green' } };
  export const CoolGray: Story = { args: { label: 'Cool Gray Tag', type: 'cool-gray' } };
  export const WarmGray: Story = { args: { label: 'Warm Gray Tag', type: 'warm-gray' } };
  export const HighContrast: Story = { args: { label: 'High Contrast Tag', type: 'high-contrast' } };
  export const Outline: Story = { args: { label: 'Outline Tag', type: 'outline' } };

</script>

<!-- Template to render all tag types for easy visual comparison in Storybook -->
<h2>All Tag Types</h2>
<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
  {#each tagTypes as type}
    <Tag label={type.charAt(0).toUpperCase() + type.slice(1) + ' Tag'} {type} />
  {/each}
</div>

<h2>Individual Story Examples:</h2>

<h3>Default (Gray)</h3>
<Tag {...Default.args} />

<h3>Red</h3>
<Tag {...Red.args} />

<h3>Blue</h3>
<Tag {...Blue.args} />

<h3>High Contrast</h3>
<Tag {...HighContrast.args} />

<h3>Outline</h3>
<Tag {...Outline.args} />
