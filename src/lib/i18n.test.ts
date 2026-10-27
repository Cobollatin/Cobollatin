import { describe, expect, it } from 'vitest';
import { localePath, preferredLocale, switchLocale } from './i18n';

describe('locale routes', () => {
  it('prefixes the locale', () => expect(localePath('es', 'blog/')).toBe('/es/blog/'));
  it('switches an existing localized path', () =>
    expect(switchLocale('/en/pages/', 'es')).toBe('/es/pages/'));
  it('keeps explicit locale routes independent of saved preference', () =>
    expect(switchLocale('/es/blog/', 'es')).toBe('/es/blog/'));
  it('uses saved explicit language before browser languages', () =>
    expect(preferredLocale(['en-US'], 'es')).toBe('es'));
  it('uses the first supported browser language', () =>
    expect(preferredLocale(['fr-FR', 'es-PE', 'en-US'], null)).toBe('es'));
  it('falls back to English for unsupported preferences', () =>
    expect(preferredLocale(['fr-FR'], 'fr')).toBe('en'));
});
