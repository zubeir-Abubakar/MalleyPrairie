import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

export const localeContent = { fr, en, de, it };
export type Language = keyof typeof localeContent;
export type LocaleContent = typeof fr;

export function getLanguage(value: string | undefined): Language {
  if (value === "en" || value === "de" || value === "it") return value;
  return "fr";
}

export function getContent(language: Language): LocaleContent {
  return localeContent[language];
}

function initialLanguage(): Language {
  try {
    return getLanguage(window.localStorage.getItem("malleyprairie-language") ?? undefined);
  } catch (error) {
    console.warn("Could not read the saved language preference.", error);
    return "fr";
  }
}

void i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    de: { translation: de },
    it: { translation: it },
  },
  lng: initialLanguage(),
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
