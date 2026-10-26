import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { groupBlogEntries, pickBlogEntry } from '../content/blog';
import { defaultLocale } from '../i18n/locales';
import { localizePath } from '../i18n/routing';

export async function GET(context) {
  const entries = await getCollection('blog');
  const grouped = groupBlogEntries(entries);

  const posts = Array.from(grouped.keys())
    .map((translationKey) => {
      const entry = pickBlogEntry(grouped, translationKey, defaultLocale);
      if (!entry) return undefined;
      return { entry, translationKey };
    })
    .filter(Boolean);

  return rss({
    description: SITE_DESCRIPTION,
    items: posts.map(({ entry, translationKey }) => ({
      description: entry.data.description,
      link: localizePath(`/blog/${translationKey}/`, defaultLocale),
      pubDate: entry.data.pubDate,
      title: entry.data.title,
    })),
    site: context.site,
    title: SITE_TITLE,
  });
}
