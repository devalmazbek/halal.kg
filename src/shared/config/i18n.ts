import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';

import kg from './locale/kg.json';
import ru from './locale/ru.json';

i18n
  .use(initReactI18next) // подключаем React
//   .use(LanguageDetector) // определяем язык браузера
  .init({
    resources: {
      kg: { translation: kg },
      ru: { translation: ru },
    },
    lng: localStorage.getItem('lang') || 'ru',
    fallbackLng: 'kg', // язык по умолчанию
    debug: true,
    interpolation: { escapeValue: false },
  });

export default i18n;
