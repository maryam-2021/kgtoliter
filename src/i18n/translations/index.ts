import en from './en.json';
import hi from './hi.json';
import es from './es.json';
import ru from './ru.json';
import fr from './fr.json';
import de from './de.json';
import it from './it.json';
import pt from './pt.json';
import bn from './bn.json';
import ja from './ja.json';
import ko from './ko.json';
import ms from './ms.json';
import pl from './pl.json';
import id from './id.json';
import ar from './ar.json';
import bg from './bg.json';
import tr from './tr.json';
import sv from './sv.json';

const translations: Record<string, any> = {
  en,
  hi,
  es,
  ru,
  fr,
  de,
  it,
  pt,
  bn,
  ja,
  ko,
  ms,
  pl,
  id,
  ar,
  bg,
  tr,
  sv,
};

export function getTranslation(locale: string = 'en', key: string): string {
  const keys = key.split('.');
  let value = translations[locale] || translations.en;
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  return value || key;
}

export function getAllTranslations(locale: string = 'en'): any {
  return translations[locale] || translations.en;
}
