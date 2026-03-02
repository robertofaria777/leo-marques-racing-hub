import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enCommon from "@/locales/en/common.json";
import ptCommon from "@/locales/pt/common.json";
import { DEFAULT_LOCALE, I18N_STORAGE_KEY, normalizeLocale } from "./locales";

const resources = {
  en: { common: enCommon },
  pt: { common: ptCommon },
} as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: ["pt", "en"],
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    debug: import.meta.env.DEV,
    saveMissing: import.meta.env.DEV,
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
      lookupLocalStorage: I18N_STORAGE_KEY,
    },
  });

const syncHtmlLang = (language: string) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = normalizeLocale(language) === "pt" ? "pt-PT" : "en";
};

syncHtmlLang(i18n.resolvedLanguage ?? DEFAULT_LOCALE);
i18n.on("languageChanged", syncHtmlLang);

export default i18n;
