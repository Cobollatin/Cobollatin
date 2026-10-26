import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';
import { groupBlogEntries, pickBlogEntry } from '../../content/blog';
import { defaultLocale, locales } from '../../i18n/locales';
import { getLocaleFromParams, localizePath } from '../../i18n/routing';

export async function GET(context) {
  const locale = getLocaleFromParams(context.params.lang);
  const entries = await getCollection('blog');
  const grouped = groupBlogEntries(entries);

  const items = Array.from(grouped.keys())
    .map((translationKey) => {
      const entry = pickBlogEntry(grouped, translationKey, locale);
      if (!entry) return undefined;
      return {
        description: entry.data.description,
        link: localizePath(`/blog/${translationKey}/`, locale),
        pubDate: entry.data.pubDate,
        title: entry.data.title,
      };
    })
    .filter(Boolean);

  return rss({
    description: SITE_DESCRIPTION,
    items,
    site: context.site,
    title: SITE_TITLE,
  });
}

export async function getStaticPaths() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((lang) => ({
      params: { lang },
    }));
}
