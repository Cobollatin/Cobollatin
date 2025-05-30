import { describe, expect, it } from 'vitest';
import { formatDate } from './date.utils';
import { setLocale } from '$lib/paraglide/runtime';

describe('formatDate', () => {
  it('formats the date correctly in English', () => {
    setLocale('en');
    const date = new Date('2023-03-15');
    const formatted = formatDate(date);
    expect(formatted).toBe('March 15, 2023');
  });

  it('formats the date correctly in Spanish', () => {
    setLocale('es');
    const date = new Date('2023-03-15');
    const formatted = formatDate(date);
    expect(formatted).toBe('15 de marzo de 2023');
  });
});
