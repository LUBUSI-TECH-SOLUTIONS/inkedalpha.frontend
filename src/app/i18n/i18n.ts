import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
/**
 * Internationalization (i18n) configuration for the application.
 * 
 * This file initializes i18next with React support and defines translation resources
 * for Spanish and English languages.
 * 
 * @module configI18n
 */

const resources = {
  es: {
    translation: {
      welcome: "Bienvenido",
      change_Language: "Cambiar idioma",
      comming_soon: "Próximamente...",
      search: "Buscar..",
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      change_Language: "Change Language",
      comming_soon: "Coming soon...",
      search: "Search..",
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith('es') ? 'es' : 'en',
  interpolation: { escapeValue: false },
})

export default i18n;