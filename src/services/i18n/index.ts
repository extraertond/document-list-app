import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../../assets/locales/en/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
