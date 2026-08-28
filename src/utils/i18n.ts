import { getTranslation, getAllTranslations } from '../i18n/translations';
import {
  getLocalizedPath as getLocalizedPathConfig,
  getLocaleDisplayName,
  getLocaleDirection,
  defaultLocale,
  locales,
  supportedLocales,
} from '../i18n/config';

export function useI18n(locale: string = defaultLocale) {
  const dir = getLocaleDirection(locale);
  return {
    locale,
    t: (key: string) => getTranslation(locale, key),
    translations: getAllTranslations(locale),
    getLocalizedPath: (path: string = '') => getLocalizedPathConfig(locale, path),
    getLocaleDisplayName: (loc: string = locale) => getLocaleDisplayName(loc),
    getLocaleDirection: (loc: string = locale) => getLocaleDirection(loc),
    isRTL: dir === 'rtl',
    locales,
    supportedLocales,
    defaultLocale,
  };
}

export {
  locales,
  supportedLocales,
  defaultLocale,
  getLocaleDisplayName,
  getLocaleDirection,
  getTranslation,
  getAllTranslations,
};
