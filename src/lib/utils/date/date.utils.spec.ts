import { describe, expect, it } from 'vitest';
import { formatDate } from './date.utils';

describe('formatDate', () => {
  it('formats the date correctly in English', () => {
    const date = new Date('2023-03-15');
    const formatted = formatDate(date, 'en');
    expect(formatted).toBe('March 15, 2023');
  });

  it('formats the date correctly in Spanish', () => {
    const date = new Date('2023-03-15');
    const formatted = formatDate(date, 'es');
    expect(formatted).toBe('15 de marzo de 2023');
  });
});
