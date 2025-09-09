import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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
          words: [
            "ESTILO",
            "ACTITUD",
            "CALLE",
            "REBELDÍA",
            "INKEDALPHA",
            "TATUAJES",
          ],
        },
        categoryShowcase: {
          title: "EXPLORA POR",
          titleHighlight: "ESTILO",
          subtitle:
            "Encuentra tu identidad a través de nuestras cuatro categorías únicas",
          pieces: "PIEZAS",
          viewAll: "VER TODAS LAS CATEGORÍAS",
        },
        header: {
          title_first: "ARTE EN",
          title_second: "MOVIMIENTO",
          description:
            "InkedAlpha nace de las calles y del arte corporal, fusionando moda urbana y tatuajes. Cada prenda y diseño es un lienzo donde el graffiti y el tatuaje cobran vida, donde la rebeldía se viste de estilo y la creatividad no tiene límites.",
          features: {
            unique_design: {
              title: "DISEÑO ÚNICO",
              description:
                "Cada pieza y tatuaje es una obra de arte original, inspirada en el graffiti urbano, la cultura callejera y el arte corporal.",
            },
            premium_quality: {
              title: "CALIDAD PREMIUM",
              description:
                "Utilizamos materiales de alta calidad para garantizar durabilidad y comodidad en cada prenda y seguridad en cada tatuaje.",
            },
            rebellious_identity: {
              title: "IDENTIDAD REBELDE",
              description:
                "Para quienes no siguen tendencias, sino que las crean. Para los que se atreven a ser diferentes y expresan su identidad a través de la moda y el tatuaje.",
            },
          },
        },
      },
      about: {
        our_mission: "Nuestra Misión",
        mission_description:
          "En InkedAlpha, nuestra misión es ofrecer productos y tatuajes de alta calidad que combinen tecnología, arte y estilo, brindando a nuestros clientes una experiencia única y satisfactoria.",
        see_more: "Conoce más",

        who_we_are: "Quienes somos",
        characteristics_description:
          "InkedAlpha es más que una tienda; es una comunidad para los amantes del arte urbano y el tatuaje. Nos dedicamos a ofrecer productos que reflejen la esencia de la cultura callejera, combinando moda, tecnología y creatividad en cada diseño.",
        characteristics: {
          quality: "Calidad",
          innovation: "Innovación",
          style: "Estilo",
          rebellion: "Rebeldía",
        },

        metrics: [
          { key: "products", label: "Productos", value: "500+" },
          {
            key: "satisfied_clients",
            label: "Clientes Satisfechos",
            value: "300+",
          },
          { key: "years_market", label: "Años en el Mercado", value: "10+" },
          { key: "countries_shipping", label: "Países de Envío", value: "20+" },
        ],
      },
      footer: {
        description:
          "Ropa y tatuajes urbanos que expresan tu identidad. Irreverente, creativo y único.",
        shop: {
          title: "Tienda",
          men: "Hombre",
          women: "Mujer",
          accessories: "Accesorios",
          new: "Novedades",
        },
        support: {
          title: "Soporte",
          contact: "Contacto",
          shipping: "Envíos",
          returns: "Devoluciones",
          sizeGuide: "Guía de tallas",
        },
        newsletter: {
          title: "Boletín",
          description:
            "Suscríbete para recibir las últimas novedades, ofertas exclusivas y noticias sobre tatuajes.",
          placeholder: "Tu correo electrónico",
          subscribe: "Suscribirse",
        },
        legal: {
          rights: "Todos los derechos reservados.",
          privacy: "Privacidad",
          terms: "Términos",
          cookies: "Cookies",
        },
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
          words: [
            "STYLE",
            "ATTITUDE",
            "STREET",
            "REBELLION",
            "INKEDALPHA",
            "TATTOOS",
          ],
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
          description:
            "InkedAlpha is born from the streets and body art, merging urban fashion and tattoos. Each garment and design is a canvas where graffiti and tattoos come to life, where rebellion dresses in style, and creativity knows no limits.",
          features: {
            unique_design: {
              title: "UNIQUE DESIGN",
              description:
                "Each piece and tattoo is an original work of art, inspired by urban graffiti, street culture, and body art.",
            },
            premium_quality: {
              title: "PREMIUM QUALITY",
              description:
                "We use high-quality materials to ensure durability and comfort in every garment and safety in every tattoo.",
            },
            rebellious_identity: {
              title: "REBELLIOUS IDENTITY",
              description:
                "For those who don't follow trends, but create them. For those who dare to be different and express their identity through fashion and tattoos.",
            },
          },
        },
      },
      about: {
        our_mission: "Our Mission",
        mission_description:
          "At InkedAlpha, our mission is to offer high-quality products and tattoos that combine technology, art, and style, providing our clients with a unique and satisfying experience.",

        who_we_are: "Who we are",
        characteristics_description:
          "InkedAlpha is more than a store; it's a community for lovers of urban art and tattoos. We are dedicated to offering products that reflect the essence of street culture, combining fashion, technology, and creativity in every design.",
        characteristics: ["Quality", "Innovation", "Style", "Rebellion"],
        metrics: [
          { key: "products", label: "Products", value: "500+" },
          {
            key: "satisfied_clients",
            label: "Satisfied Clients",
            value: "300+",
          },
          { key: "years_market", label: "Years in the Market", value: "10+" },
          {
            key: "countries_shipping",
            label: "Countries Shipping",
            value: "20+",
          },
        ],
      },
      footer: {
        description:
          "Urban clothing and tattoos that express your identity. Irreverent, creative, and unique.",
        shop: {
          title: "Shop",
          men: "Men",
          women: "Women",
          accessories: "Accessories",
          new: "New Releases",
        },
        support: {
          title: "Support",
          contact: "Contact",
          shipping: "Shipping",
          returns: "Returns",
          sizeGuide: "Size Guide",
        },
        newsletter: {
          title: "Newsletter",
          description:
            "Subscribe to receive the latest news, exclusive offers, and tattoo updates.",
          placeholder: "Your email",
          subscribe: "Subscribe",
        },
        legal: {
          rights: "All rights reserved.",
          privacy: "Privacy",
          terms: "Terms",
          cookies: "Cookies",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: navigator.language.startsWith("es") ? "es" : "en",
  interpolation: { escapeValue: false },
});

export default i18n;
