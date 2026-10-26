import { describe, expect, it } from 'vitest';
import { localePath, switchLocale } from './i18n';

describe('locale routes', () => {
  it('prefixes the locale', () => expect(localePath('es', 'blog/')).toBe('/es/blog/'));
  it('switches an existing localized path', () =>
    expect(switchLocale('/en/tools/word-counter/', 'es')).toBe('/es/tools/word-counter/'));
});
