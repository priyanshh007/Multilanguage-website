import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng:"en",
    lng: 'en', // Change 'lang' to 'lng' for specifying the default language
    resources: {
      en: {
        translation: {
          greeting: 'Hello, welcome!',
        },
      },
      hi: {
        translation: {
         greeting: 'नमस्ते, स्वागत है!',
        },
      },
      fr: {
        translation: {
          greeting: 'Bonjour bienvenue!',
        },
      },
    },
  });

export default i18n; // Exporting i18n for further use if needed
