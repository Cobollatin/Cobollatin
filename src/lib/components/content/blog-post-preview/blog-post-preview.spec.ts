import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import BlogPostPreview from './blog-post-preview.svelte';

describe('BlogPostPreview', () => {
  const testProps = {
    title: 'My Awesome Blog Post',
    excerpt: 'This is a short summary of the post...',
    date: new Date(2023, 0, 15),
    href: '/blog/my-awesome-post',
    tags: ['Svelte', 'Testing', 'WebDev'],
  };

  const formattedTestDate = 'January 15, 2023';

  it('renders the title correctly and it is a link', () => {
    const { getByText } = render(BlogPostPreview);
    const titleElement = getByText(testProps.title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute('href', testProps.href);
    expect(titleElement.closest('h2')).toBeInTheDocument();
  });

  it('renders the formatted date correctly', () => {
    const { getByText } = render(BlogPostPreview, { props: testProps });
    const dateElement = getByText(formattedTestDate);
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the excerpt correctly', () => {
    const { getByText } = render(BlogPostPreview, { props: testProps });
    const excerptElement = getByText(testProps.excerpt);
    expect(excerptElement).toBeInTheDocument();
  });

  it('renders the "Read More" button', () => {
    const { getByText } = render(BlogPostPreview, { props: testProps });
    const buttonElement = getByText('Read More');
    expect(buttonElement).toBeInTheDocument();
  });

  it('"Read More" button click attempts to navigate to href', async () => {
    const { getByText } = render(BlogPostPreview, { props: testProps });
    const buttonElement = getByText('Read More');
    buttonElement.click();
    expect(window.location.href).toBe(testProps.href);
  });

  it('renders tags when provided', () => {
    const { getByText } = render(BlogPostPreview, { props: testProps });
    testProps.tags.forEach((tagLabel) => {
      const tagElement = getByText(tagLabel);
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveClass('cds-tag');
    });
  });

  it('does not render tags container if no tags are provided', () => {
    const { container } = render(BlogPostPreview, { props: { ...testProps, tags: [] } });
    const tagsContainerElement = container.querySelector('.tags-container');
    expect(tagsContainerElement).not.toBeInTheDocument();
  });

  it('renders correctly with a string date', () => {
    const stringDate = 'February 1, 2024';
    const { getByText } = render(BlogPostPreview, { props: { ...testProps, date: new Date(stringDate) } });
    const dateElement = getByText(stringDate);
    expect(dateElement).toBeInTheDocument();
  });
});
