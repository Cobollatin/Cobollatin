import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, beforeEach } from 'vitest';
import BlogPost from './blog-post.svelte';

describe('BlogPost Component', () => {
  const mockDate = new Date('2024-03-15T10:00:00Z');

  const defaultProps = {
    title: 'Test Blog Post Title',
    content: '<p>This is the main content of the blog post.</p>',
    date: mockDate,
    author: 'John Doe',
  };

  beforeEach(() => {
    // Reset any global state if needed
  });

  describe('Basic Rendering', () => {
    it('should render the blog post with required props', () => {
      render(BlogPost, { props: defaultProps });

      expect(screen.getByText('Test Blog Post Title')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('March 15, 2024')).toBeInTheDocument();
      expect(screen.getByText('This is the main content of the blog post.')).toBeInTheDocument();
    });

    it('should render the title as h1', () => {
      render(BlogPost, { props: defaultProps });

      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveTextContent('Test Blog Post Title');
    });

    it('should render the content as HTML', () => {
      const propsWithHtmlContent = {
        ...defaultProps,
        content: '<p>Paragraph with <strong>bold text</strong></p><h2>Heading 2</h2>',
      };

      render(BlogPost, { props: propsWithHtmlContent });

      expect(screen.getByText('bold text')).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading 2');
    });
  });

  describe('Date Formatting', () => {
    it('should format the date correctly', () => {
      render(BlogPost, { props: defaultProps });

      expect(screen.getByText('March 15, 2024')).toBeInTheDocument();
    });

    it('should include proper datetime attribute', () => {
      render(BlogPost, { props: defaultProps });

      const timeElement = screen.getByText('March 15, 2024');
      expect(timeElement.closest('time')).toHaveAttribute('datetime', mockDate.toISOString());
    });
  });

  describe('Optional Props', () => {
    it('should render read time when provided', () => {
      const propsWithReadTime = {
        ...defaultProps,
        readTime: 5,
      };

      render(BlogPost, { props: propsWithReadTime });

      expect(screen.getByText('5 min read')).toBeInTheDocument();
    });

    it('should not render read time when not provided', () => {
      render(BlogPost, { props: defaultProps });

      expect(screen.queryByText(/min read/)).not.toBeInTheDocument();
    });

    it('should render tags when provided', () => {
      const propsWithTags = {
        ...defaultProps,
        tags: ['JavaScript', 'Svelte', 'Web Development'],
      };

      render(BlogPost, { props: propsWithTags });

      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      expect(screen.getByText('Svelte')).toBeInTheDocument();
      expect(screen.getByText('Web Development')).toBeInTheDocument();
    });

    it('should not render tags section when no tags provided', () => {
      render(BlogPost, { props: defaultProps });

      // Check that no tag elements are rendered
      const tagElements = screen.queryAllByText(/JavaScript|Svelte|Web Development/);
      expect(tagElements).toHaveLength(0);
    });

    it('should render image when imageUrl is provided', () => {
      const propsWithImage = {
        ...defaultProps,
        imageUrl: 'https://example.com/test-image.jpg',
      };

      render(BlogPost, { props: propsWithImage });

      const image = screen.getByAltText('Test Blog Post Title');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
    });

    it('should not render image section when imageUrl is not provided', () => {
      render(BlogPost, { props: defaultProps });

      const image = screen.queryByAltText('Test Blog Post Title');
      expect(image).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      render(BlogPost, { props: defaultProps });

      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
    });

    it('should have proper semantic structure with article element', () => {
      const { container } = render(BlogPost, { props: defaultProps });

      const article = container.querySelector('article');
      expect(article).toBeInTheDocument();
    });

    it('should have proper time element with datetime attribute', () => {
      render(BlogPost, { props: defaultProps });

      const timeElement = screen.getByText('March 15, 2024').closest('time');
      expect(timeElement).toHaveAttribute('datetime', mockDate.toISOString());
    });
  });

  describe('Styling and Classes', () => {
    it('should apply proper CSS classes to the main container', () => {
      const { container } = render(BlogPost, { props: defaultProps });

      const tileElement = container.querySelector('.group');
      expect(tileElement).toHaveClass('mx-auto', 'max-w-4xl', 'transition-all', 'duration-200');
    });

    it('should apply proper styling classes to the title', () => {
      render(BlogPost, { props: defaultProps });

      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveClass('text-3xl', 'leading-tight', 'font-bold', 'text-gray-800');
    });

    it('should apply proper styling to content area', () => {
      const { container } = render(BlogPost, { props: defaultProps });

      const contentDiv = container.querySelector('.space-y-4.text-base.leading-relaxed.text-gray-700');
      expect(contentDiv).toBeInTheDocument();
    });
  });

  describe('Complex Content Scenarios', () => {
    it('should handle empty content gracefully', () => {
      const propsWithEmptyContent = {
        ...defaultProps,
        content: '',
      };

      render(BlogPost, { props: propsWithEmptyContent });

      expect(screen.getByText('Test Blog Post Title')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('should handle complex HTML content with multiple elements', () => {
      const propsWithComplexContent = {
        ...defaultProps,
        content: `
          <h2>Introduction</h2>
          <p>This is a paragraph with <code>inline code</code>.</p>
          <blockquote>This is a blockquote</blockquote>
          <pre><code>console.log('Hello, World!');</code></pre>
          <ul>
            <li>First item</li>
            <li>Second item</li>
          </ul>
        `,
      };

      render(BlogPost, { props: propsWithComplexContent });

      expect(screen.getByText('Introduction')).toBeInTheDocument();
      expect(screen.getByText('inline code')).toBeInTheDocument();
      expect(screen.getByText('This is a blockquote')).toBeInTheDocument();
      expect(screen.getByText('First item')).toBeInTheDocument();
      expect(screen.getByText('Second item')).toBeInTheDocument();
    });

    it('should handle special characters in title and author', () => {
      const propsWithSpecialChars = {
        ...defaultProps,
        title: 'Blog Post with "Quotes" & Symbols',
        author: "Ñoño O'Reilly",
      };

      render(BlogPost, { props: propsWithSpecialChars });

      expect(screen.getByText('Blog Post with "Quotes" & Symbols')).toBeInTheDocument();
      expect(screen.getByText("Ñoño O'Reilly")).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle very long titles', () => {
      const propsWithLongTitle = {
        ...defaultProps,
        title:
          'This is a very long blog post title that might wrap to multiple lines and should still be displayed correctly without breaking the layout',
      };

      render(BlogPost, { props: propsWithLongTitle });

      expect(screen.getByText(propsWithLongTitle.title)).toBeInTheDocument();
    });

    it('should handle large number of tags', () => {
      const propsWithManyTags = {
        ...defaultProps,
        tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6', 'Tag7', 'Tag8', 'Tag9', 'Tag10'],
      };

      render(BlogPost, { props: propsWithManyTags });

      propsWithManyTags.tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });

    it('should handle zero read time', () => {
      const propsWithZeroReadTime = {
        ...defaultProps,
        readTime: 0,
      };

      render(BlogPost, { props: propsWithZeroReadTime });

      expect(screen.getByText('0 min read')).toBeInTheDocument();
    });
  });
});
