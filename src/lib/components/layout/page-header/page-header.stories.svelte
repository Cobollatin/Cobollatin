<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import PageHeader from './page-header.svelte';

  const meta = {
    title: 'Layout/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    argTypes: {
      title: {
        control: 'text',
        description: 'The main title for the page header',
      },
      subtitle: {
        control: 'text',
        description: 'Optional subtitle displayed below the main title',
      },
    },
  } satisfies Meta<PageHeader>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  export const WithTitleOnly: Story = {
    args: {
      title: 'Dashboard',
    },
  };

  export const WithTitleAndSubtitle: Story = {
    args: {
      title: 'User Settings',
      subtitle: 'Manage your account preferences and details.',
    },
  };
</script>

<!-- Template to render stories -->
<PageHeader {...WithTitleOnly.args} />

<br /> <!-- For visual separation in Storybook UI -->

<PageHeader {...WithTitleAndSubtitle.args} />
