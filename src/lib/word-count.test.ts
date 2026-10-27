import { describe, expect, it } from 'vitest';
import { countText } from './word-count';

describe('countText', () => {
  it('handles blank input', () => expect(countText('  ')).toEqual({ words: 0, characters: 2 }));
  it('counts Unicode characters and separated words', () =>
    expect(countText('Hola  mundo 🌍')).toEqual({ words: 3, characters: 13 }));
});
