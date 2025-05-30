import { describe, it, expect } from 'vitest';
import { capitalize } from './string.utils';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns the same string if already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('returns an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });
});
