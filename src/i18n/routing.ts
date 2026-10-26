import { defaultLocale, isLocale, type Locale } from './locales';

export function getLocaleFromParams(langParam: string | undefined): Locale {
  if (!langParam) return defaultLocale;
  if (isLocale(langParam)) return langParam;
  return defaultLocale;
}

export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalized = normalizePath(pathname);
  const withoutLeadingLocale = stripLocaleFromPath(normalized).pathname;
  return `${localePrefix(locale)}${withoutLeadingLocale}`;
}

export function stripLocaleFromPath(pathname: string): { locale: Locale; pathname: string } {
  const normalized = normalizePath(pathname);
  const hasTrailingSlash = normalized.length > 1 && normalized.endsWith('/');
  const parts = normalized.split('/').filter(Boolean);
  const first = parts[0];
  if (first && isLocale(first)) {
    const rest = `/${parts.slice(1).join('/')}` || '/';
    const normalizedRest =
      rest === '/' ? '/' : hasTrailingSlash ? `${rest.replace(/\/$/, '')}/` : rest.replace(/\/$/, '');
    return { locale: first, pathname: normalizedRest };
  }
  const normalizedRest =
    normalized === '/' ? '/' : hasTrailingSlash ? `${normalized.replace(/\/$/, '')}/` : normalized.replace(/\/$/, '');
  return { locale: defaultLocale, pathname: normalizedRest };
}

function normalizePath(pathname: string): string {
  if (!pathname.startsWith('/')) return `/${pathname}`;
  return pathname;
}
