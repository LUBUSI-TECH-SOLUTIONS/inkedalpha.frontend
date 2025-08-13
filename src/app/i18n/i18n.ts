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
      header: {
        shop: "Tienda",
        categories: {
          category: "Categoría",
          tropical: "Tropical",
          urban: "Urbano",
        },
        about: "Nosotros",
        Search: "Buscar...",
      },
      home: {
        hero: {
          words: ["ESTILO", "ACTITUD", "CALLE", "REBELDÍA", "INKEDALPHA"],
        },
      }
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      change_Language: "Change Language",
      comming_soon: "Coming soon...",
      search: "Search..",
      header: {
        shop: "Shop",
        categories: {
          category: "Category",
          tropical: "Tropical",
          urban: "Urban",
        },
        about: "About",
        Search: "Search...",
      },
      home: {
        hero: {
          words: ["STYLE", "ATTITUDE", "STREET", "REBELLION", "INKEDALPHA"],
        },
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith('es') ? 'es' : 'en',
  interpolation: { escapeValue: false },
})

export default i18n;