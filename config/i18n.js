import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../translations';

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: 'uk', // Встановлюємо українську мову за замовчуванням
    fallbackLng: 'en', // Мова, яка буде використана, якщо переклад відсутній
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;