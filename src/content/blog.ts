import type { CollectionEntry } from 'astro:content';

import { defaultLocale, type Locale } from '../i18n/locales';

export type BlogEntry = CollectionEntry<'blog'>;

export function getBlogEntryLocale(entry: BlogEntry): Locale {
  return entry.data.lang ?? defaultLocale;
}

export function getTranslationKeyFromId(id: string): string {
  const firstSegment = id.split('/')[0] ?? id;
  return firstSegment.replace(/\.[^.]+$/, '');
}

export function groupBlogEntries(entries: BlogEntry[]): Map<string, Map<Locale, BlogEntry>> {
  const byKey = new Map<string, Map<Locale, BlogEntry>>();

  for (const entry of entries) {
    const key = getTranslationKeyFromId(entry.id);
    const locale = getBlogEntryLocale(entry);
    const localeMap = byKey.get(key) ?? new Map<Locale, BlogEntry>();
    localeMap.set(locale, entry);
    byKey.set(key, localeMap);
  }

  return byKey;
}

export function pickBlogEntry(
  grouped: Map<string, Map<Locale, BlogEntry>>,
  translationKey: string,
  locale: Locale,
): BlogEntry | undefined {
  const localeMap = grouped.get(translationKey);
  if (!localeMap) return undefined;
  return localeMap.get(locale) ?? localeMap.get(defaultLocale);
}
