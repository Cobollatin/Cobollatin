import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Tag from './tag.svelte';

// Define the TagType more broadly for testing, or import if exported from component
type TagType = 'red' | 'magenta' | 'purple' | 'blue' | 'cyan' | 'teal' | 'green' | 'gray' | 'cool-gray' | 'warm-gray' | 'high-contrast' | 'outline';

describe('Tag', () => {
  const defaultLabel = 'Test Tag';

  it('renders with the correct label', () => {
    render(Tag, { props: { label: defaultLabel } });
    const tagElement = screen.getByText(defaultLabel);
    expect(tagElement).toBeInTheDocument();
    expect(tagElement.tagName).toBe('SPAN'); // As per component implementation
  });

  it('applies default type (gray) class if no type is specified', () => {
    const { container } = render(Tag, { props: { label: defaultLabel } });
    const tagElement = container.querySelector('span');
    expect(tagElement).toHaveClass('cds-tag');
    expect(tagElement).toHaveClass('cds-tag--gray');
  });

  const tagTypes: TagType[] = [
    'red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green',
    'gray', 'cool-gray', 'warm-gray', 'high-contrast', 'outline'
  ];

  tagTypes.forEach((type) => {
    it(`applies correct class for type: ${type}`, () => {
      const { container } = render(Tag, { props: { label: defaultLabel, type } });
      const tagElement = container.querySelector('span');
      expect(tagElement).toHaveClass('cds-tag');
      expect(tagElement).toHaveClass(`cds-tag--${type}`);
    });
  });

  it('renders with the default label "Tag" if no label is provided', () => {
    render(Tag, { props: { type: 'blue' } }); // Type provided to avoid default gray interfering with label check
    const tagElement = screen.getByText('Tag');
    expect(tagElement).toBeInTheDocument();
  });

  // Example for checking specific styles (more brittle, use with caution)
  // This is generally better handled by class-based assertions if styles are tied to classes
  it('applies high-contrast specific styles (example check)', () => {
    const { container } = render(Tag, { props: { label: 'High Contrast Tag', type: 'high-contrast' } });
    const tagElement = container.querySelector('.cds-tag--high-contrast');
    // Note: getComputedStyle might be needed for more accurate style checking,
    // but @testing-library/jest-dom's toHaveStyle works on inline/stylesheet styles directly applied.
    // These are placeholder values, actual values depend on the CSS in tag.svelte
    expect(tagElement).toHaveStyle('background-color: var(--cds-background-inverse, #161616)');
    expect(tagElement).toHaveStyle('color: var(--cds-text-on-color, #ffffff)');
  });
});
