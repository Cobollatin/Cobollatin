import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Button from './button.svelte';

describe('Button', () => {
  const defaultLabel = 'Test Button';

  it('renders with the correct label', () => {
    render(Button, { props: { label: defaultLabel } });
    const buttonElement = screen.getByRole('button', { name: defaultLabel });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent).toBe(defaultLabel);
  });

  it('applies default kind (primary) and size (medium) classes', () => {
    const { container } = render(Button, { props: { label: defaultLabel } });
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('cds-button');
    expect(buttonElement).toHaveClass('cds-button--primary');
    expect(buttonElement).toHaveClass('cds-button--md');
  });

  // Test for each kind
  (['primary', 'secondary', 'danger', 'ghost'] as const).forEach((kind) => {
    it(`applies correct class for kind: ${kind}`, () => {
      const { container } = render(Button, { props: { label: defaultLabel, kind } });
      const buttonElement = container.querySelector('button');
      expect(buttonElement).toHaveClass(`cds-button--${kind}`);
    });
  });

  // Test for each size
  (['small', 'medium', 'large'] as const).forEach((size) => {
    it(`applies correct class for size: ${size}`, () => {
      const { container } = render(Button, { props: { label: defaultLabel, size } });
      const buttonElement = container.querySelector('button');
      const sizeClass = size === 'small' ? 'sm' : size === 'medium' ? 'md' : 'lg';
      expect(buttonElement).toHaveClass(`cds-button--${sizeClass}`);
    });
  });

  it('dispatches a click event when clicked', async () => {
    const { component } = render(Button, { props: { label: defaultLabel } });
    const buttonElement = screen.getByRole('button', { name: defaultLabel });

    const mockClickHandler = vi.fn();
    component.$on('click', mockClickHandler);

    await fireEvent.click(buttonElement);
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });

  it('applies disabled attribute and class when disabled prop is true', () => {
    const { container } = render(Button, { props: { label: defaultLabel, disabled: true } });
    const buttonElement = container.querySelector('button');
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('cds-button--disabled');
    expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('does not dispatch click event when disabled', async () => {
    const { component } = render(Button, { props: { label: defaultLabel, disabled: true } });
    const buttonElement = screen.getByRole('button', { name: defaultLabel });

    const mockClickHandler = vi.fn();
    component.$on('click', mockClickHandler);

    await fireEvent.click(buttonElement);
    expect(mockClickHandler).not.toHaveBeenCalled();
  });

  it('does not have disabled attributes or class when disabled prop is false', () => {
    const { container } = render(Button, { props: { label: defaultLabel, disabled: false } });
    const buttonElement = container.querySelector('button');
    expect(buttonElement).not.toBeDisabled();
    expect(buttonElement).not.toHaveClass('cds-button--disabled');
    expect(buttonElement).not.toHaveAttribute('aria-disabled', 'true'); // Should not have aria-disabled="true"
  });
});
