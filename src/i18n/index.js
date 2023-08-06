import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import * as resources from './translations.json'
//empty for now


const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  //.use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    compatibilityJSON:"v3",
    resources: resources,
  });

 
export default i18next;