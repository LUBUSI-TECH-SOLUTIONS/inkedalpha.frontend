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
        description: "Ropa y tatuajes urbanos que expresan tu identidad. creativo y único.",
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
        about_us: [
          {
            title: "Origen de la marca",
            description: "InkedAlpha nació gracias a la visión de Giancarlo Bianchini, conocido como 'G'. Cansado de ver siempre las mismas propuestas en la moda, decidió crear una marca que rompiera las reglas y diera voz a quienes quieren marcar su propio estilo.",
            img: "/images/about/about-one.webp"     
          },
          {
            title: "Filosofía de diseño",
            description: "Nuestra esencia combina lo mejor de la cultura urbana y el arte del tatuaje. Cada prenda refleja rebeldía, autenticidad y un lenguaje visual que conecta con quienes no siguen tendencias, sino que las crean.",
            img: "/images/about/about-two.webp"
          },
          {
            title: "Diferenciación",
            description: "En InkedAlpha creemos que la moda no debe sacrificar comodidad, calidad ni estilo. Diseñamos ropa con materiales de primera y un enfoque funcional, para que cada pieza se sienta tan bien como se ve.",
            img: "/images/about/about-three.webp"
          },
          {
            title: "Proceso creativo",
            description: "Cada colección es un proceso minucioso: desde la idea inicial, pasando por los bocetos inspirados en tatuajes, hasta la selección de paletas de colores. Todo está pensado para crear prendas únicas y cargadas de personalidad."
          },
          {
            title: "Exclusividad",
            description: "Creemos que lo exclusivo tiene más valor. Por eso, la mayoría de nuestras piezas se producen en ediciones limitadas y muchas solo se fabrican una única vez. Vestir InkedAlpha es vestir algo realmente tuyo."
          }
        ],

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
          "Ropa y tatuajes urbanos que expresan tu identidad, creativo y único.",
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
        description: "Urban clothing and tattoos that express your identity creative, and unique.",
        our_mission: "Our Mission",
        mission_description:
          "At InkedAlpha, our mission is to offer high-quality products and tattoos that combine technology, art, and style, providing our clients with a unique and satisfying experience.",
        see_more: "See more",
        who_we_are: "Who we are",
        characteristics_description:
          "InkedAlpha is more than a store; it's a community for lovers of urban art and tattoos. We are dedicated to offering products that reflect the essence of street culture, combining fashion, technology, and creativity in every design.",
        characteristics: ["Quality", "Innovation", "Style", "Rebellion"],
        about_us: [
          {
            title: "Brand Origin",
            description: "InkedAlpha was born from the vision of Giancarlo Bianchini, known as 'G'. Tired of seeing the same fashion proposals, he decided to create a brand that would break the rules and give voice to those who want to define their own style.",
            img: "/images/about/about-one.webp"          
          },
          {
            title: "Design Philosophy",
            description: "Our essence combines the best of urban culture and tattoo art. Each garment reflects rebellion, authenticity, and a visual language that connects with those who don’t follow trends but create them.",
            img: "/images/about/about-two.webp"
          },
          {
            title: "Differentiation",
            description: "At InkedAlpha we believe fashion should never sacrifice comfort, quality, or style. We design clothing with premium materials and a functional approach, so every piece feels as good as it looks.",
            img: "/images/about/about-three.webp"
          },
          {
            title: "Creative Process",
            description: "Each collection is a meticulous process: from the initial idea, through sketches inspired by tattoos, to the selection of color palettes. Everything is crafted to create unique garments full of personality."
          },
          {
            title: "Exclusivity",
            description: "We believe exclusivity has greater value. That’s why most of our pieces are produced in limited editions, and many are made only once. Wearing InkedAlpha means wearing something truly yours."
          }
        ],
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
          "Urban clothing and tattoos that express your identity. creative, and unique.",
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
