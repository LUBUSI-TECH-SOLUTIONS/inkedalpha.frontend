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
        categoryShowcase: {
          title: "EXPLORA POR",
          titleHighlight: "ESTILO",
          subtitle: "Encuentra tu identidad a través de nuestras cuatro categorías únicas",
          pieces: "PIEZAS",
          viewAll: "VER TODAS LAS CATEGORÍAS",

        },
        header: {
          title_first: "ARTE EN",
          title_second: "MOVIMIENTO",
          description: "InkedAlpha nace de las calles, del arte urbano que no pide permiso. Cada prenda es un lienzo donde el graffiti cobra vida, donde la rebeldía se viste de estilo y la creatividad no tiene límites.",
          features: {
            unique_design: {
              title: "DISEÑO ÚNICO",
              description: "Cada pieza es una obra de arte original, inspirada en el graffiti urbano y la cultura callejera."
            },
            premium_quality: {
              title: "CALIDAD PREMIUM",
              description: "Utilizamos materiales de alta calidad para garantizar durabilidad y comodidad en cada prenda."
            },
            rebellious_identity: {
              title: "IDENTIDAD REBELDE",
              description: "Para quienes no siguen tendencias, sino que las crean. Para los que se atreven a ser diferentes."
            }
          }
        }
      },
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
        categoryShowcase: {
          title: "EXPLORE BY",
          titleHighlight: "STYLE",
          subtitle: "Find your identity through our four unique categories",
          pieces: "PIECES",
          viewAll: "VIEW ALL CATEGORIES",
        },
        header: {
          title_first: "ART IN",
          title_second: "MOVEMENT",
          description: "InkedAlpha is born from the streets, from urban art that doesn't ask for permission. Each garment is a canvas where graffiti comes to life, where rebellion dresses in style, and creativity knows no limits.",
          features: {
            unique_design: {
              title: "UNIQUE DESIGN",
              description: "Each piece is an original work of art, inspired by urban graffiti and street culture."
            },
            premium_quality: {
              title: "PREMIUM QUALITY",
              description: "We use high-quality materials to ensure durability and comfort in every garment."
            },
            rebellious_identity: {
              title: "REBELLIOUS IDENTITY",
              description: "For those who don't follow trends, but create them. For those who dare to be different."
            }
          }
        }
      },
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith('es') ? 'es' : 'en',
  interpolation: { escapeValue: false },
})

export default i18n;