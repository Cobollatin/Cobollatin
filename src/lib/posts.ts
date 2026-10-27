import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { validateEntries } from './content-routes';
export { entrySlug, translatedPath } from './content-routes';

export type Post = CollectionEntry<'posts'>;
export type AuthoredPage = CollectionEntry<'pages'>;
export type AuthoredEntry = Post | AuthoredPage;

export async function publishedAuthors(): Promise<CollectionEntry<'authors'>[]> {
  const authors = await getCollection('authors');
  return authors.filter((author) => !author.data.draft)
    .sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export function authorContent<T extends AuthoredEntry>(entries: T[], authorId: string, locale: Locale): T[] {
  const authored = entries.filter((entry) => entry.data.authors.some((author) => author.id === authorId));
  const localized = authored.filter((entry) => entry.data.locale === locale);
  if (locale === 'en') return localized;
  const translatedKeys = new Set(localized.map((entry) => entry.data.translationKey).filter(Boolean));
  return [...localized, ...authored.filter((entry) => entry.data.locale === 'en' && (!entry.data.translationKey || !translatedKeys.has(entry.data.translationKey)))];
}

export async function validateAuthors(entries: AuthoredEntry[], kind: 'posts' | 'pages'): Promise<void> {
  for (const entry of entries) {
    for (const author of entry.data.authors) {
      if (!await getEntry('authors', author.id)) {
        throw new Error(`${kind}/${entry.id}: unknown author ${author.id}`);
      }
    }
  }
}

export async function publishedPosts(locale?: Locale): Promise<Post[]> {
  const all = await getCollection('posts');
  validateEntries(all, 'posts');
  await validateAuthors(all, 'posts');
  return all.filter((post) => !post.data.draft && (!locale || post.data.locale === locale))
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export async function publishedPages(locale?: Locale): Promise<AuthoredPage[]> {
  const all = await getCollection('pages');
  validateEntries(all, 'pages');
  await validateAuthors(all, 'pages');
  return all.filter((page) => !page.data.draft && (!locale || page.data.locale === locale))
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
}
