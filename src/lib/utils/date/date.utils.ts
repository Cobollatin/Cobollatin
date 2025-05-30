export function formatDate(d: Date, locale: 'en' | 'es'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', // Ensures consistent formatting
  }).format(d);
}
