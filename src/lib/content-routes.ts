import type { Locale } from './i18n';

export type RoutableEntry = {
  id: string;
  data: { locale: Locale; draft: boolean; translationKey?: string };
};

export function entrySlug(entry: RoutableEntry): string {
  return entry.id.replace(/^(en|es)\//, '').replace(/\.(md|mdx)$/, '');
}

export function validateEntries(entries: RoutableEntry[], kind: 'posts' | 'pages'): void {
  const routes = new Set<string>();
  const translations = new Set<string>();
  for (const entry of entries) {
    const folderLocale = entry.id.split('/')[0];
    if (folderLocale !== entry.data.locale) {
      throw new Error(`${kind}/${entry.id}: folder locale must match frontmatter locale`);
    }
    const slug = entrySlug(entry);
    if (!slug || slug === 'index' || slug.split('/').some((segment) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(segment)) || (kind === 'posts' && slug.includes('/'))) {
      throw new Error(`${kind}/${entry.id}: use lowercase hyphenated path segments`);
    }
    const route = `${entry.data.locale}/${slug}`;
    if (routes.has(route)) throw new Error(`${kind}: duplicate route ${route}`);
    routes.add(route);
    if (entry.data.translationKey) {
      const key = `${entry.data.locale}/${entry.data.translationKey}`;
      if (translations.has(key)) throw new Error(`${kind}: duplicate translation key ${key}`);
      translations.add(key);
    }
  }
}

export function translatedPath(
  entry: RoutableEntry,
  peers: RoutableEntry[],
  kind: 'blog' | 'pages',
  target: Locale,
): string | undefined {
  if (!entry.data.translationKey) return undefined;
  const translation = peers.find((peer) =>
    !peer.data.draft && peer.data.locale === target && peer.data.translationKey === entry.data.translationKey);
  return translation ? `/${target}/${kind}/${entrySlug(translation)}/` : undefined;
}
