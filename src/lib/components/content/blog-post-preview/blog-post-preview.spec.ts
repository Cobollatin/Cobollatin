import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import BlogPostPreview from './blog-post-preview.svelte';
// Mock the window.location.href assignment for testing the button click
// Svelte Testing Library should handle child components by rendering them.

describe('BlogPostPreview', () => {
  const testProps = {
    title: 'My Awesome Blog Post',
    excerpt: 'This is a short summary of the post...',
    date: new Date(2023, 0, 15), // Month is 0-indexed, so 0 = January
    href: '/blog/my-awesome-post',
    tags: ['Svelte', 'Testing', 'WebDev'],
  };

  const formattedTestDate = 'January 15, 2023'; // Expected format from component

  it('renders the title correctly and it is a link', () => {
    render(BlogPostPreview, { props: testProps });
    const titleElement = screen.getByRole('link', { name: testProps.title });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute('href', testProps.href);
    // Check if it's inside an H2, which is inside the header slot
    expect(titleElement.closest('h2')).toBeInTheDocument();
  });

  it('renders the formatted date correctly', () => {
    render(BlogPostPreview, { props: testProps });
    const dateElement = screen.getByText(formattedTestDate);
    expect(dateElement).toBeInTheDocument();
  });

  it('renders the excerpt correctly', () => {
    render(BlogPostPreview, { props: testProps });
    const excerptElement = screen.getByText(testProps.excerpt);
    expect(excerptElement).toBeInTheDocument();
  });

  it('renders the "Read More" button', () => {
    render(BlogPostPreview, { props: testProps });
    const buttonElement = screen.getByRole('button', { name: 'Read More' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('"Read More" button click attempts to navigate to href', async () => {
    // Mock window.location.href
    const originalLocation = window.location;
    // @ts-ignore
    delete window.location;
    // @ts-ignore
    window.location = { href: '' }; // Basic mock, can be more sophisticated if needed

    render(BlogPostPreview, { props: testProps });
    const buttonElement = screen.getByRole('button', { name: 'Read More' });
    await fireEvent.click(buttonElement);

    expect(window.location.href).toBe(testProps.href);

    window.location = originalLocation; // Restore original location
  });


  it('renders tags when provided', () => {
    render(BlogPostPreview, { props: testProps });
    testProps.tags.forEach(tagLabel => {
      const tagElement = screen.getByText(tagLabel);
      expect(tagElement).toBeInTheDocument();
      // Check it's a Tag component (e.g. by checking a class if Tag component has one)
      // Assuming Tag component adds 'cds-tag' class from its implementation
      expect(tagElement).toHaveClass('cds-tag');
    });
  });

  it('does not render tags container if no tags are provided', () => {
    const { container } = render(BlogPostPreview, { props: { ...testProps, tags: [] } });
    // Assuming the tags container has a specific class like 'tags-container'
    const tagsContainerElement = container.querySelector('.tags-container');
    expect(tagsContainerElement).not.toBeInTheDocument();
  });

  it('renders correctly with a string date', () => {
    const stringDate = "February 1, 2024";
    render(BlogPostPreview, { props: { ...testProps, date: stringDate } });
    const dateElement = screen.getByText(stringDate);
    expect(dateElement).toBeInTheDocument();
  });
});
