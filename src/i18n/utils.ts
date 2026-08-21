import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import de from './de.json';
import pt from './pt.json';

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
};

export const defaultLang = 'en';

export const translations = {
  en,
  es,
  fr,
  de,
  pt,
};

export function useTranslations(lang: keyof typeof translations = defaultLang) {
  return function t(key: keyof typeof en) {
    return translations[lang]?.[key] || translations[defaultLang][key] || key;
  };
}
