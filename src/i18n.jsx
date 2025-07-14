// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations via HTTP
  .use(LanguageDetector) // Detect language from localStorage or browser settings
  .use(initReactI18next) // Integrate with React
  .init({
    lng: localStorage.getItem('language') || 'eng', // Default language (check localStorage first)
    fallbackLng: 'eng', // Fallback language
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['localStorage', 'navigator'], // Check localStorage first, then browser settings
      caches: ['localStorage'], // Cache the language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
