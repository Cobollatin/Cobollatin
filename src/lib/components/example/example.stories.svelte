<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Example from './example.svelte';
  import { expect, userEvent, within } from '@storybook/test';

  const { Story } = defineMeta({
    title: 'Example',
    component: Example,
  });
</script>

<Story name="Default" />

<Story name="Example property is true" args={{ exampleProperty: true }} />
<Story name="Example property is false" args={{ exampleProperty: false }} />

<Story
  name="Example with toggle"
  play={async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Toggle Example Property'));

    await expect(
      canvas.getByText('Example Property is: ' + (args.exampleProperty ? 'Enabled' : 'Disabled')),
    ).toBeInTheDocument();
  }}
/>
