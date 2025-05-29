<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
  import BlogPost from '$lib/components/content/blog-post/blog-post.svelte';

  const blogData = {
    title: 'Building Responsive Web Components with CSS Grid and Flexbox',
    content: `
      <p>Modern CSS layout techniques have revolutionized how we build responsive web interfaces. CSS Grid and Flexbox provide powerful tools for creating flexible, maintainable layouts that adapt beautifully to any screen size.</p>
      
      <h3>Understanding the Basics</h3>
      <p>Before diving into complex layouts, it's important to understand when to use each technique:</p>
      <ul>
        <li><strong>Flexbox:</strong> Perfect for one-dimensional layouts (rows or columns)</li>
        <li><strong>CSS Grid:</strong> Ideal for two-dimensional layouts (rows and columns simultaneously)</li>
        <li><strong>Combined approach:</strong> Use both together for maximum flexibility</li>
      </ul>

      <h3>Flexbox Fundamentals</h3>
      <p>Flexbox excels at distributing space and aligning items within a container. Here's a practical example:</p>
      
      <pre><code>.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  min-height: 200px;
  padding: 1rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}</code></pre>
      
      <p>This creates a responsive card layout that automatically wraps to new lines when space is limited.</p>

      <h3>CSS Grid for Complex Layouts</h3>
      <p>Grid shines when you need precise control over both rows and columns:</p>

      <pre><code>.dashboard {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 250px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>

      <blockquote>
        <p>Grid template areas make it incredibly easy to visualize and maintain complex layouts. You can literally see the layout structure in your CSS!</p>
      </blockquote>

      <h3>Responsive Design Patterns</h3>
      <p>Combining Grid and Flexbox creates powerful responsive patterns:</p>

      <pre><code>/* Mobile-first approach */
.layout {
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .layout {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 250px 1fr 250px;
    max-width: 1200px;
    margin: 0 auto;
  }
}</code></pre>

      <h3>Advanced Techniques</h3>
      <p>Here are some advanced patterns that can elevate your layouts:</p>
      <ul>
        <li><strong>Intrinsic sizing:</strong> Use <code>fit-content</code> and <code>minmax</code> for flexible dimensions</li>
        <li><strong>Subgrid:</strong> Perfect for aligning nested elements (when browser support allows)</li>
        <li><strong>Container queries:</strong> The future of responsive design, now gaining browser support</li>
        <li><strong>Logical properties:</strong> Use <code>inline-size</code> and <code>block-size</code> for international layouts</li>
      </ul>

      <h3>Performance Considerations</h3>
      <p>Modern CSS layout is performant by default, but keep these tips in mind:</p>
      <ul>
        <li>Avoid frequent layout recalculations by using transform for animations</li>
        <li>Use <code>contain: layout</code> to isolate layout changes</li>
        <li>Prefer CSS over JavaScript for layout whenever possible</li>
        <li>Test your layouts on various devices and screen sizes</li>
      </ul>

      <h3>Browser Support and Fallbacks</h3>
      <p>While Grid and Flexbox have excellent browser support, consider these strategies:</p>

      <pre><code>/* Fallback for older browsers */
.layout {
  display: block; /* fallback */
  display: grid;
}

/* Feature detection */
@supports (display: grid) {
  .layout {
    grid-template-columns: repeat(3, 1fr);
  }
}</code></pre>

      <h3>Conclusion</h3>
      <p>CSS Grid and Flexbox have transformed web layout from a series of hacks into a straightforward, logical system. By understanding the strengths of each technique and combining them thoughtfully, you can create responsive, maintainable layouts that work beautifully across all devices.</p>

      <p>The key is practice – start with simple layouts and gradually incorporate more complex patterns as you become comfortable with these powerful tools.</p>
    `,
    date: new Date('2024-12-20'),
    author: 'Marcus Chen',
    readTime: 10,
    tags: ['CSS', 'Responsive Design', 'Web Development', 'Flexbox', 'Grid'],
    variant: 'full' as const,
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop'
  };
</script>

<svelte:head>
  <title>{blogData.title} - {m['app:platform']()}</title>
  <meta name="description" content="Learn modern CSS layout techniques with Grid and Flexbox. Complete guide with practical examples for responsive web design." />
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <BlogPost {...blogData} />
  
  <div class="mt-8 flex justify-center">
    <a 
      href="/blog" 
      class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
    >
      ← Back to Blog
    </a>
  </div>
</div>
