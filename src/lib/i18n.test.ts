import { describe, expect, it } from 'vitest';
import { localePath, messages, preferredLocale, switchLocale } from './i18n';

describe('locale routes', () => {
  it('prefixes the locale', () => expect(localePath('es', 'blog/')).toBe('/es/blog/'));
  it('provides localized About routes and labels', () => {
    expect(localePath('en', 'about/')).toBe('/en/about/');
    expect(localePath('es', 'about/')).toBe('/es/about/');
    expect(messages.en.about).toBe('About');
    expect(messages.es.about).toBe('Acerca de');
  });
  it('switches between About translations', () => {
    expect(switchLocale('/en/about/', 'es')).toBe('/es/about/');
    expect(switchLocale('/es/about/', 'en')).toBe('/en/about/');
  });
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
