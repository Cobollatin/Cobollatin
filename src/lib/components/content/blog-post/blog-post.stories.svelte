<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { Accordion, AccordionItem, CodeSnippet, ListItem, UnorderedList } from 'carbon-components-svelte';
  import BlogPost from './blog-post.svelte';

  const { Story } = defineMeta({
    title: 'Content/BlogPost',
    component: BlogPost,
    tags: ['autodocs', 'dark'],
    argTypes: {
      title: { control: 'text' },
      date: { control: 'date' },
      author: { control: 'text' },
      readTime: { control: 'number' },
      tags: { control: 'object' },
      imageUrl: { control: 'text' },
    },
  });
</script>

<Story
  name="Preview"
  args={{
    title: 'Getting Started with SvelteKit and Modern Web Development',
    date: new Date('2024-01-15'),
    author: 'Sarah Johnson',
    readTime: 8,
    tags: ['SvelteKit', 'Web Development', 'JavaScript', 'Tutorial'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
/>

<Story
  name="PreviewWithoutImage"
  args={{
    title: 'Understanding JavaScript Promises and Async/Await',
    date: new Date('2024-01-20'),
    author: 'Mike Chen',
    readTime: 6,
    tags: ['JavaScript', 'Async', 'Programming'],
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <h1>This is a sample article</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</Story>

<Story
  name="FullArticle"
  args={{
    title: 'Building Scalable Component Libraries with Storybook',
    date: new Date('2024-01-10'),
    author: 'Alex Rodriguez',
    readTime: 12,
    tags: ['Storybook', 'Component Library', 'Design System', 'Frontend'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <h1>This is a sample article</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</Story>

<Story
  name="LongTitle"
  args={{
    title:
      'Advanced Techniques for Building Performant Single Page Applications with Modern JavaScript Frameworks and Optimization Strategies',
    date: new Date('2024-01-30'),
    author: 'David Kim',
    readTime: 15,
    tags: ['Performance', 'SPA', 'JavaScript', 'Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <h1>This is a sample article</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</Story>

<Story
  name="WithoutTags"
  args={{
    title: 'Understanding JavaScript Promises and Async/Await: A Comprehensive Guide',
    date: new Date('2024-01-30'),
    author: 'David Kim',
    readTime: 15,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <h1>This is a sample article</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</Story>

<!-- Stories based on our example blog posts -->
<Story
  name="SvelteKitGuidePreview"
  args={{
    title: 'Getting Started with SvelteKit and Storybook: A Complete Guide',
    date: new Date('2024-12-15'),
    author: 'Sarah Johnson',
    readTime: 8,
    tags: ['SvelteKit', 'Storybook', 'Web Development', 'Tutorial'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <h1>Getting Started with SvelteKit and Storybook: A Complete Guide</h1>

  <p class="lead">
    Learn how to integrate Storybook with your SvelteKit project to build, test, and document your components in
    isolation.
  </p>

  <h2>What is Storybook?</h2>
  <p>
    Storybook is a powerful tool for developing UI components in isolation. It allows you to create stories for your
    components, making it easier to develop, test, and document them outside of your main application.
  </p>

  <h2>Setting Up Storybook with SvelteKit</h2>
  <p>
    To get started, you'll need to install Storybook in your SvelteKit project. The process is straightforward thanks to
    Storybook's built-in SvelteKit support.
  </p>

  <pre><code>npx storybook@latest init</code></pre>

  <p>
    This command will automatically detect that you're using SvelteKit and configure Storybook accordingly. It will
    create the necessary configuration files and install the required dependencies.
  </p>

  <h2>Creating Your First Story</h2>
  <p>
    Once Storybook is set up, you can start creating stories for your components. A story is a function that describes
    how to render a component with specific props and state.
  </p>

  <p>
    With Storybook and SvelteKit working together, you'll have a powerful development environment that makes component
    development more efficient and enjoyable.
  </p>
</Story>

<Story
  name="CSSGuidePreview"
  args={{
    title: 'Building Responsive Web Components with CSS Grid and Flexbox',
    date: new Date('2024-12-20'),
    author: 'Marcus Chen',
    readTime: 10,
    tags: ['CSS', 'Responsive Design', 'Web Development', 'Flexbox', 'Grid'],
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop',
  }}
  loaders={async () => {
    document.documentElement.setAttribute('theme', 'white');
  }}
>
  <p>
    Master the art of creating flexible, responsive layouts using CSS Grid and Flexbox. Learn when to use each layout
    method and how to combine them effectively.
  </p>
  <Accordion class="h-full">
    <AccordionItem title="Understanding CSS Grid vs Flexbox">
      <p>
        CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Grid is designed for
        two-dimensional layouts (rows and columns), while Flexbox excels at one-dimensional layouts (either rows or
        columns).
      </p>
    </AccordionItem>

    <AccordionItem title="When to Use CSS Grid">
      <p>CSS Grid is perfect when you need to create complex layouts with both rows and columns. It's ideal for:</p>
      <UnorderedList expressive>
        <ListItem>Page layouts with header, sidebar, main content, and footer</ListItem>
        <ListItem>Image galleries and card grids</ListItem>
        <ListItem>Complex dashboard layouts</ListItem>
        <ListItem>Any layout where you need precise control over both dimensions</ListItem>
      </UnorderedList>
    </AccordionItem>

    <AccordionItem title="When to Use Flexbox">
      <p>Flexbox is your go-to choice for simpler, one-dimensional layouts. It's excellent for:</p>
      <UnorderedList expressive>
        <ListItem>Navigation bars and menus</ListItem>
        <ListItem>Centering content vertically and horizontally</ListItem>
        <ListItem>Creating equal-height columns</ListItem>
        <ListItem>Distributing space between elements</ListItem>
      </UnorderedList>
    </AccordionItem>

    <AccordionItem title="Combining CSS Grid and Flexbox">
      <p>
        The real power comes from combining both layout methods. Use Grid for the overall page structure and Flexbox for
        individual components within grid areas.
      </p>
      <CodeSnippet
        type="multi"
        showMoreLess={false}
        code="
.page-layout &#123; 
  display: grid; 
  grid-template-areas: 'header header' 'sidebar main' 'footer footer'; 
&#125;
.navigation &#123; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
&#125;"
      ></CodeSnippet>
    </AccordionItem>
    <AccordionItem title="Conclusion">
      <p>
        By understanding both CSS Grid and Flexbox, you'll be able to create any layout you can imagine while
        maintaining clean, maintainable code.
      </p>
    </AccordionItem>
  </Accordion>
</Story>
