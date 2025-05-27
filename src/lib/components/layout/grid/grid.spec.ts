import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Grid from './grid.svelte';
import GridTestSlot from './GridTestSlot.svelte'; // A simple component to test slot content

describe('Grid', () => {
  it('renders slot content', () => {
    render(GridTestSlot); // Renders Grid with some child div
    const slotContentElement = screen.getByTestId('slot-content');
    expect(slotContentElement).toBeInTheDocument();
  });

  it('applies default styles for columns and gap', () => {
    const { container } = render(Grid);
    const gridElement = container.querySelector('.grid-container');
    expect(gridElement).toHaveStyle('display: grid');
    expect(gridElement).toHaveStyle('grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))');
    expect(gridElement).toHaveStyle('gap: 1rem');
  });

  it('applies specified number of columns', () => {
    const { container } = render(Grid, { props: { columns: 3 } });
    const gridElement = container.querySelector('.grid-container');
    expect(gridElement).toHaveStyle('grid-template-columns: repeat(3, 1fr)');
  });

  it('applies specified string for columns', () => {
    const { container } = render(Grid, { props: { columns: '1fr 2fr 1fr' } });
    const gridElement = container.querySelector('.grid-container');
    expect(gridElement).toHaveStyle('grid-template-columns: 1fr 2fr 1fr');
  });

  it('applies specified gap', () => {
    const { container } = render(Grid, { props: { gap: '20px' } });
    const gridElement = container.querySelector('.grid-container');
    expect(gridElement).toHaveStyle('gap: 20px');
  });

  it('renders slot content within the grid structure', () => {
    // Render Grid with a specific child component via the slot
    // GridTestSlot.svelte will render Grid and put a div with data-testid="slot-content" inside it
    const { container } = render(GridTestSlot);
    const gridElement = container.querySelector('.grid-container');
    const slotContentElement = screen.getByTestId('slot-content');

    // Check that the slot content is a child of the grid container
    expect(gridElement).toContainElement(slotContentElement);
  });
});
