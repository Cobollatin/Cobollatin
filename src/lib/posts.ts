import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { validateEntries } from './content-routes';
export { entrySlug, translatedPath } from './content-routes';

export type Post = CollectionEntry<'posts'>;
export type AuthoredPage = CollectionEntry<'pages'>;
export type AuthoredEntry = Post | AuthoredPage;

export async function publishedAuthors(): Promise<CollectionEntry<'authors'>[]> {
  const [posts, pages, authors] = await Promise.all([
    publishedPosts(), publishedPages(), getCollection('authors'),
  ]);
  const publishedIds = new Set([...posts, ...pages].flatMap((entry) => entry.data.authors.map((author) => author.id)));
  return authors.filter((author) => publishedIds.has(author.id))
    .sort((a, b) => a.data.name.localeCompare(b.data.name));
}

export function authorContent<T extends AuthoredEntry>(entries: T[], authorId: string, locale: Locale): T[] {
  const authored = entries.filter((entry) => entry.data.authors.some((author) => author.id === authorId));
  const localized = authored.filter((entry) => entry.data.locale === locale);
  return localized.length ? localized : authored.filter((entry) => entry.data.locale === 'en');
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
