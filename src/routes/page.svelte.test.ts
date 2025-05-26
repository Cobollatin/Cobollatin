import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
  test('should render h1', () => {
    render(Page);
    expect(1 + 1).toBe(2);
  });
});
