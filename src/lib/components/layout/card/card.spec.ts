import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CardTestSlots from './CardTestSlots.svelte'; // Using the helper for easier testing
import Card from './card.svelte'; // Also import Card for direct class testing if needed

describe('Card', () => {
  it('renders default slot content', () => {
    render(CardTestSlots);
    const defaultContent = screen.getByTestId('default-content');
    expect(defaultContent).toBeInTheDocument();
    expect(defaultContent.textContent).toBe('Default Slot Content');
  });

  it('renders header slot content when provided', () => {
    render(CardTestSlots, { props: { showHeader: true } });
    const headerContent = screen.getByTestId('header-content');
    expect(headerContent).toBeInTheDocument();
    expect(headerContent.textContent).toBe('Header Content');
  });

  it('does not render header slot if not provided', () => {
    render(CardTestSlots, { props: { showHeader: false } });
    const headerContent = screen.queryByTestId('header-content');
    expect(headerContent).not.toBeInTheDocument();
  });

  it('renders footer slot content when provided', () => {
    render(CardTestSlots, { props: { showFooter: true } });
    const footerContent = screen.getByTestId('footer-content');
    expect(footerContent).toBeInTheDocument();
    expect(footerContent.textContent).toBe('Footer Content');
  });

  it('does not render footer slot if not provided', () => {
    render(CardTestSlots, { props: { showFooter: false } });
    const footerContent = screen.queryByTestId('footer-content');
    expect(footerContent).not.toBeInTheDocument();
  });

  it('has the base "card" class', () => {
    const { container } = render(Card); // Render the Card component directly
    const cardElement = container.querySelector('.card');
    expect(cardElement).toBeInTheDocument();
  });

  it('applies "interactive" class when interactive prop is true', () => {
    const { container } = render(Card, { props: { interactive: true } });
    const cardElement = container.querySelector('.card');
    expect(cardElement).toHaveClass('interactive');
  });

  it('does not apply "interactive" class when interactive prop is false or default', () => {
    const { container } = render(Card, { props: { interactive: false } });
    const cardElement = container.querySelector('.card');
    expect(cardElement).not.toHaveClass('interactive');

    const { container: containerDefault } = render(Card);
    const cardElementDefault = containerDefault.querySelector('.card');
    expect(cardElementDefault).not.toHaveClass('interactive');
  });
});
