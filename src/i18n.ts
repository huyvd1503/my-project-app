// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các file ngôn ngữ
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', // Ngôn ngữ mặc định khi không phát hiện được
    interpolation: {
      escapeValue: false, // React đã xử lý XSS
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
