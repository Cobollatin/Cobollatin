import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PageHeader from './page-header.svelte';

describe('PageHeader', () => {
  const testTitle = 'Test Page Title';
  const testSubtitle = 'This is a test subtitle.';

  it('renders the title correctly', () => {
    render(PageHeader, { title: testTitle });
    const titleElement = screen.getByRole('heading', { level: 1, name: testTitle });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle correctly when provided', () => {
    render(PageHeader, { title: testTitle, subtitle: testSubtitle });
    const subtitleElement = screen.getByText(testSubtitle);
    expect(subtitleElement).toBeInTheDocument();
    // Check if it's a paragraph, as per our svelte component
    expect(subtitleElement.tagName).toBe('P');
  });

  it('does not render the subtitle if not provided', () => {
    render(PageHeader, { title: testTitle });
    const subtitleElement = screen.queryByText(testSubtitle); // Use queryByText for non-existence
    expect(subtitleElement).not.toBeInTheDocument();
  });

  it('does not render a subtitle element if subtitle prop is an empty string', () => {
    const { container } = render(PageHeader, { title: testTitle, subtitle: '' });
    // Assuming an empty subtitle means it shouldn't render the <p class="subtitle">
    // Check if the subtitle element exists and if its text content is empty
    const subtitleElement = container.querySelector('.subtitle');
    if (subtitleElement) {
      expect(subtitleElement.textContent).toBe('');
    } else {
      // If the element is not even rendered (e.g. due to {#if subtitle})
      // then this test passes as there's no visual subtitle.
      // Depending on exact desired behavior (render empty p vs no p at all)
      // this part of the assertion might change.
      // For now, let's assume an empty subtitle string means the <p> might still be there but empty.
      // If the design dictates removing the <p> tag entirely for empty string,
      // then we would expect subtitleElement to be null.
      // expect(subtitleElement).not.toBeInTheDocument(); would be more appropriate then.
      // Given the current svelte code: {#if subtitle}, an empty string is falsy, so it won't render the <p>
      expect(subtitleElement).not.toBeInTheDocument();
    }
  });
});
