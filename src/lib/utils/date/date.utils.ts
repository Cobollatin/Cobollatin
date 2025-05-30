import { getLocale } from '$lib/paraglide/runtime';

export function formatDate(d: Date): string {
  const locale = getLocale();
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
