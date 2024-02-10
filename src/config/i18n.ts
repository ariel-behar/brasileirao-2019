import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        
        supportedLngs: ['en', 'pt'],
        debug: true,
        fallbackLng: 'en',
        detection: {
            order: ['navigator', 'path', 'querystring','cookie', 'localStorage', 'sessionStorage',  'subdomain', 'htmlTag' ]
        }
    })

export default i18n;