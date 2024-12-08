import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import uk from "./uk";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    uk: { translation: uk },
  },
  lng: "en", // Язык по умолчанию
  fallbackLng: "en", // Язык по умолчанию, если перевод не найден
  interpolation: {
    escapeValue: false, // Не экранировать значения
  },
});

export default i18n;
