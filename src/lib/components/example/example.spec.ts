import { fireEvent, render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Example from './example.svelte';

describe('Example', () => {
  it('it toggles exampleProperty when button is clicked', async () => {
    const { getByText } = render(Example);
    const button = getByText(/Toggle Example Property/);
    expect(button.innerHTML).toBe('Toggle Example Property');
    await fireEvent.click(button);
    const exampleProperty = getByText(/Example Property: true/);
    expect(exampleProperty).toBeInTheDocument();
  });
});
