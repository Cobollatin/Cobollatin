import { localePath, type Locale } from './i18n';

export type Tool = {
  id: string;
  title: Record<Locale, string>;
  authors?: readonly string[];
} & ({ path: string; externalUrl?: never } | { path?: never; externalUrl: Record<Locale, string> });

export const tools: readonly Tool[] = [
  {
    id: 'corpuslens',
    title: { en: 'CorpusLens', es: 'CorpusLens' },
    externalUrl: {
      en: 'https://corpuslens.cobollatin.com/en',
      es: 'https://corpuslens.cobollatin.com/es',
    },
    authors: ['adrian-marquina'],
  },
];

export function toolHref(tool: Tool, locale: Locale): string {
  return tool.externalUrl?.[locale] ?? localePath(locale, `tools/${tool.path}/`);
}
