import { render, screen } from '@testing-library/svelte';
import { beforeEach, describe, expect, it } from 'vitest';
import BlogPost from './blog-post.svelte';
import { setLocale } from '$lib/paraglide/runtime';

describe('BlogPost Component', () => {
  const testProps = {
    title: 'Test Blog Post Title',
    date: new Date('2024-03-15T10:00:00Z'),
    author: 'John Doe',
  };

  beforeEach(() => {
    setLocale('en'); // Set the locale to English for testing
  });

  it('it renders correctly', () => {
    render(BlogPost, { props: testProps });

    expect(screen.getByText(testProps.title)).toBeInTheDocument();
    expect(
      screen.getByText(
        'This is a placeholder for the blog post content. Replace this with the actual content of the blog post.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('March 15, 2024')).toBeInTheDocument();
    expect(screen.getByText(testProps.author)).toBeInTheDocument();
  });
});
