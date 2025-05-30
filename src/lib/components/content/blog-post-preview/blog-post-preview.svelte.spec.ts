import { render, screen } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import BlogPostPreview from './blog-post-preview.svelte';
import { setLocale } from '$lib/paraglide/runtime';

describe('BlogPostPreview', () => {
  const testProps = {
    title: 'My Awesome Blog Post',
    excerpt: 'This is a short summary of the post...',
    author: 'Jane Doe',
    date: new Date(2023, 0, 15),
    href: '/blog/my-awesome-post',
    tags: ['Svelte', 'Testing', 'WebDev'],
  };

  beforeEach(() => {
    setLocale('en'); // Set the locale to English for testing
  });

  it('it renders correctly', () => {
    render(BlogPostPreview, { props: testProps });
    expect(screen.getByText(testProps.excerpt)).toBeInTheDocument();
    expect(screen.getByText('January 15, 2023')).toBeInTheDocument();
    expect(screen.getByText(`By ${testProps.author}`)).toBeInTheDocument();
    expect(screen.getByText(testProps.title)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: testProps.title })).toHaveAttribute('href', testProps.href);
    testProps.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
    expect(screen.getByRole('link', { name: `Read more about ${testProps.title}` })).toHaveAttribute(
      'href',
      testProps.href,
    );
    expect(screen.getByRole('link', { name: `Read more about ${testProps.title}` })).toHaveAttribute(
      'aria-label',
      `Read more about ${testProps.title}`,
    );
    expect(screen.getByRole('link', { name: `Read more about ${testProps.title}` })).toHaveAttribute(
      'title',
      `Read more about ${testProps.title}`,
    );
  });
});
