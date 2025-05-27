<script lang="ts">
  import type { Meta, StoryObj } from '@storybook/svelte';
  import PortfolioItem from './portfolio-item.svelte';

  const meta = {
    title: 'Content/PortfolioItem',
    component: PortfolioItem,
    tags: ['autodocs'],
    argTypes: {
      title: { control: 'text' },
      description: { control: 'text' },
      imageUrl: { control: 'text' },
      projectUrl: { control: 'text' },
      sourceUrl: { control: 'text' },
      technologies: { control: 'object' }, // Array of strings
    },
  } satisfies Meta<PortfolioItem>;

  export default meta;
  type Story = StoryObj<typeof meta>;

  const defaultArgs = {
    title: 'My Awesome Project',
    description: 'This is a detailed description of my awesome project. It solves a real-world problem and showcases my skills in various technologies. I learned a lot during its development.',
    imageUrl: 'https://via.placeholder.com/600x400.png?text=Project+Thumbnail',
    projectUrl: 'https://example.com/my-awesome-project',
    sourceUrl: 'https://github.com/myusername/my-awesome-project',
    technologies: ['Svelte', 'TypeScript', 'Node.js', 'CSS Grid', 'Storybook'],
  };

  export const Default: Story = {
    args: {
      ...defaultArgs,
    },
  };

  export const NoProjectUrl: Story = {
    args: {
      ...defaultArgs,
      title: 'Portfolio Item (No Live Project Link)',
      projectUrl: undefined,
    },
  };

  export const NoSourceUrl: Story = {
    args: {
      ...defaultArgs,
      title: 'Portfolio Item (No Source Code Link)',
      sourceUrl: undefined,
    },
  };

  export const NoTechnologies: Story = {
    args: {
      ...defaultArgs,
      title: 'Portfolio Item (No Technologies Listed)',
      technologies: [],
    },
  };

  export const Minimal: Story = {
    args: {
      title: 'Simple Showcase',
      description: 'A very simple project just to show the minimal card.',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Minimal+Project',
      projectUrl: undefined,
      sourceUrl: undefined,
      technologies: [],
    },
  };

</script>

<!-- Template to render stories for easier visualization -->
<h2>Default Portfolio Item</h2>
<div style="max-width: 500px; margin-bottom: 2rem;">
  <PortfolioItem {...Default.args} />
</div>

<hr style="margin-bottom: 2rem;"/>

<h2>No Project URL</h2>
<div style="max-width: 500px; margin-bottom: 2rem;">
  <PortfolioItem {...NoProjectUrl.args} />
</div>

<hr style="margin-bottom: 2rem;"/>

<h2>No Source URL</h2>
<div style="max-width: 500px; margin-bottom: 2rem;">
  <PortfolioItem {...NoSourceUrl.args} />
</div>

<hr style="margin-bottom: 2rem;"/>

<h2>No Technologies Listed</h2>
<div style="max-width: 500px; margin-bottom: 2rem;">
  <PortfolioItem {...NoTechnologies.args} />
</div>

<hr style="margin-bottom: 2rem;"/>

<h2>Minimal Portfolio Item (No Buttons, No Tags)</h2>
<div style="max-width: 500px; margin-bottom: 2rem;">
  <PortfolioItem {...Minimal.args} />
</div>
