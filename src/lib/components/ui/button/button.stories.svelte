<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import Button from './button.svelte';

  const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
      label: { control: 'text' },
      kind: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'danger', 'ghost'],
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
      disabled: { control: 'boolean' },
    },
    // Custom event listener for Storybook actions addon
    // on:click: { action: 'clicked' }, // This is one way to do it globally
  } satisfies Meta<Button>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  // --- Stories for Kinds (default size: medium) ---
  export const Primary: Story = {
    args: {
      label: 'Primary Button',
      kind: 'primary',
      // Explicitly set on:click for individual stories if needed, or rely on global
      // For demonstration, let's add it here to show it can be per story
      // This requires @storybook/addon-actions to be configured in your Storybook setup
      // and then you'd typically import { action } from '@storybook/addon-actions';
      // For now, a console log will suffice if actions addon is not set up.
      // onClick: action('Primary Clicked'),
    },
  };

  export const Secondary: Story = {
    args: {
      label: 'Secondary Button',
      kind: 'secondary',
    },
  };

  export const Danger: Story = {
    args: {
      label: 'Danger Button',
      kind: 'danger',
    },
  };

  export const Ghost: Story = {
    args: {
      label: 'Ghost Button',
      kind: 'ghost',
    },
  };

  // --- Stories for Sizes (primary kind) ---
  export const PrimarySmall: Story = {
    args: {
      ...Primary.args, // Inherit from Primary
      label: 'Primary Small',
      size: 'small',
    },
  };

  export const PrimaryMedium: Story = {
    args: {
      ...Primary.args,
      label: 'Primary Medium',
      size: 'medium', // Default, but explicit for clarity
    },
  };

  export const PrimaryLarge: Story = {
    args: {
      ...Primary.args,
      label: 'Primary Large',
      size: 'large',
    },
  };

  // --- Stories for Disabled States (one for each kind) ---
  export const PrimaryDisabled: Story = {
    args: {
      ...Primary.args,
      label: 'Primary Disabled',
      disabled: true,
    },
  };

  export const SecondaryDisabled: Story = {
    args: {
      ...Secondary.args,
      label: 'Secondary Disabled',
      disabled: true,
    },
  };

  export const DangerDisabled: Story = {
    args: {
      ...Danger.args,
      label: 'Danger Disabled',
      disabled: true,
    },
  };

  export const GhostDisabled: Story = {
    args: {
      ...Ghost.args,
      label: 'Ghost Disabled',
      disabled: true,
    },
  };

</script>

<!-- Template to render stories for easier visualization in Storybook canvas -->
<!-- You can create a more structured layout if desired -->

<h2>Button Kinds (Size: Medium)</h2>
<div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px;">
  <Button {...Primary.args} on:click={() => console.log('Primary clicked')} />
  <Button {...Secondary.args} on:click={() => console.log('Secondary clicked')} />
  <Button {...Danger.args} on:click={() => console.log('Danger clicked')} />
  <Button {...Ghost.args} on:click={() => console.log('Ghost clicked')} />
</div>

<h2>Button Sizes (Kind: Primary)</h2>
<div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px;">
  <Button {...PrimarySmall.args} on:click={() => console.log('Primary Small clicked')} />
  <Button {...PrimaryMedium.args} on:click={() => console.log('Primary Medium clicked')} />
  <Button {...PrimaryLarge.args} on:click={() => console.log('Primary Large clicked')} />
</div>

<h2>Disabled Buttons</h2>
<h3>Primary Disabled</h3>
<Button {...PrimaryDisabled.args} />
<h3>Secondary Disabled</h3>
<Button {...SecondaryDisabled.args} />
<h3>Danger Disabled</h3>
<Button {...DangerDisabled.args} />
<h3>Ghost Disabled</h3>
<Button {...GhostDisabled.args} />
