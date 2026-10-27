export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    home: 'Home', blog: 'Writing', pages: 'Pages', tools: 'Tools', authors: 'Authors',
    noPosts: 'No published writing.', noPages: 'No published pages.', noTools: 'No published tools.', noAuthors: 'No published authors.',
    by: 'By', siteDescription: 'Cobollatin',
    localeLabel: 'Language', themeLabel: 'Switch theme', dark: 'Dark', light: 'Light',
    unavailable: 'No translation; opens the home page',
  },
  es: {
    home: 'Inicio', blog: 'Escritos', pages: 'Páginas', tools: 'Herramientas', authors: 'Autores',
    noPosts: 'No hay escritos publicados.', noPages: 'No hay páginas publicadas.', noTools: 'No hay herramientas publicadas.', noAuthors: 'No hay autores publicados.',
    by: 'Por', siteDescription: 'Cobollatin',
    localeLabel: 'Idioma', themeLabel: 'Cambiar tema', dark: 'Oscuro', light: 'Claro',
    unavailable: 'Sin traducción; abre la página de inicio',
  },
} as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function preferredLocale(browserLanguages: readonly string[], saved: string | null): Locale {
  if (saved && isLocale(saved)) return saved;
  for (const language of browserLanguages) {
    const primary = language.toLowerCase().split('-')[0];
    if (isLocale(primary)) return primary;
  }
  return 'en';
}

export function localePath(locale: Locale, path = ''): string {
  return `/${locale}/${path.replace(/^\/+/, '')}`;
}

export function switchLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length && isLocale(segments[0])) segments[0] = locale;
  else segments.unshift(locale);
  return `/${segments.join('/')}${pathname.endsWith('/') ? '/' : ''}`;
}
