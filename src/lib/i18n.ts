export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    home: 'Home', blog: 'Blog', tools: 'Tools', intro: 'Writing and useful little tools.',
    latest: 'Latest writing', empty: 'No published posts yet.', toolsIntro: 'Small tools for everyday work.',
    wordCounter: 'Word counter', wordCounterDescription: 'Count words and characters in your browser.',
    text: 'Text', words: 'Words', characters: 'Characters', read: 'Read post', by: 'By',
    siteDescription: 'A personal site for writing and useful tools.',
  },
  es: {
    home: 'Inicio', blog: 'Blog', tools: 'Herramientas', intro: 'Artículos y pequeñas herramientas útiles.',
    latest: 'Publicaciones recientes', empty: 'Todavía no hay publicaciones.', toolsIntro: 'Herramientas sencillas para el día a día.',
    wordCounter: 'Contador de palabras', wordCounterDescription: 'Cuenta palabras y caracteres en tu navegador.',
    text: 'Texto', words: 'Palabras', characters: 'Caracteres', read: 'Leer artículo', by: 'Por',
    siteDescription: 'Un sitio personal para artículos y herramientas útiles.',
  },
} as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
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
