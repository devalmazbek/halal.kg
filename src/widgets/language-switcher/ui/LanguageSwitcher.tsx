import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'kg' ? 'ru' : 'kg';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang); // Сохраняем язык
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === 'kg' ? 'ru' : 'kg'}
    </button>
  );
};

