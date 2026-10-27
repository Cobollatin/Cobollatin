import { describe, expect, it } from 'vitest';
import { entrySlug, translatedPath, validateEntries, type RoutableEntry } from './content-routes';

const entry = (id: string, locale: 'en' | 'es', translationKey?: string, draft = false) => ({
  id, data: { locale, translationKey, draft },
}) as RoutableEntry;

describe('authored content routes', () => {
  it('creates translated paths from the counterpart slug', () => {
    const en = entry('en/about-us', 'en', 'about');
    const es = entry('es/sobre-nosotros', 'es', 'about');
    expect(entrySlug(en)).toBe('about-us');
    expect(translatedPath(en, [en, es], 'pages', 'es')).toBe('/es/pages/sobre-nosotros/');
  });
  it('has no counterpart route when a translation is absent', () => {
    expect(translatedPath(entry('en/story', 'en', 'story'), [], 'blog', 'es')).toBeUndefined();
  });
  it('rejects locale mismatch, duplicate routes and translation keys', () => {
    expect(() => validateEntries([entry('es/story', 'en')], 'posts')).toThrow('folder locale');
    expect(() => validateEntries([entry('en/story', 'en'), entry('en/story.mdx', 'en')], 'posts')).toThrow('duplicate route');
    expect(() => validateEntries([entry('en/a', 'en', 'key'), entry('en/b', 'en', 'key')], 'posts')).toThrow('duplicate translation key');
  });
  it('rejects invalid and reserved slugs even in drafts', () => {
    expect(() => validateEntries([entry('en/Bad Name', 'en', undefined, true)], 'pages')).toThrow('lowercase');
    expect(() => validateEntries([entry('en/index', 'en')], 'posts')).toThrow('lowercase');
    expect(() => validateEntries([entry('en/topic/nested', 'en')], 'posts')).toThrow('lowercase');
  });
});
