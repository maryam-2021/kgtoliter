export interface LocaleInfo {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
}

export const locales: Record<string, LocaleInfo> = {
  en: { code: 'en', name: 'English', dir: 'ltr' },
  hi: { code: 'hi', name: 'हिन्दी', dir: 'ltr' },
  es: { code: 'es', name: 'Español', dir: 'ltr' },
  ru: { code: 'ru', name: 'Русский', dir: 'ltr' },
  fr: { code: 'fr', name: 'Français', dir: 'ltr' },
  de: { code: 'de', name: 'Deutsch', dir: 'ltr' },
  it: { code: 'it', name: 'Italiano', dir: 'ltr' },
  pt: { code: 'pt', name: 'Português', dir: 'ltr' },
  bn: { code: 'bn', name: 'বাংলা', dir: 'ltr' },
  ja: { code: 'ja', name: '日本語', dir: 'ltr' },
  ko: { code: 'ko', name: '한국어', dir: 'ltr' },
  ms: { code: 'ms', name: 'Bahasa Melayu', dir: 'ltr' },
  pl: { code: 'pl', name: 'Polski', dir: 'ltr' },
  id: { code: 'id', name: 'Bahasa Indonesia', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', dir: 'rtl' },
  bg: { code: 'bg', name: 'Български', dir: 'ltr' },
  tr: { code: 'tr', name: 'Türkçe', dir: 'ltr' },
  sv: { code: 'sv', name: 'Svenska', dir: 'ltr' },
};

export const defaultLocale = 'en';
export const supportedLocales = Object.keys(locales);

export function getLocaleFromUrl(url: URL): string {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && supportedLocales.includes(segments[0])) {
    return segments[0];
  }
  return defaultLocale;
}

export function getLocalizedPath(locale: string, path: string = ''): string {
  if (locale === defaultLocale) {
    return `/${path}`.replace(/\/+/g, '/');
  }
  return `/${locale}/${path}`.replace(/\/+/g, '/');
}

export function getLocaleDisplayName(locale: string): string {
  return locales[locale]?.name || locale;
}

export function getLocaleDirection(locale: string): string {
  return locales[locale]?.dir || 'ltr';
}
