import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export type Post = CollectionEntry<'posts'>;

export async function publishedPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft && data.locale === locale);
  return posts.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function postSlug(post: Post): string {
  return post.id.split('/').at(-1) ?? post.id;
}
