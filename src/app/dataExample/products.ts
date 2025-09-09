import type { Product } from "@/entities/product/types";

export const products: Product[] = [
  {
    id: "1",
    name: "AVARICIA MONEY SHIRT",
    price: 85,
    originalPrice: 110,
    image: "/images/products/avaricia.jpg",
    images: ["/images/products/avaricia.jpg"],
    category: "expresiva",
    categoryLabel: "EXPRESIVA",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white"],
    description: "Camisa con estampado de billetes y chaleco integrado que representa la ambición urbana sin límites.",
    story: {
      inspiration:
        "Nació en las calles de Wall Street a las 3 AM, cuando un artista urbano vio el contraste entre el poder del dinero y la libertad del arte callejero.",
      creation:
        "Cada billete fue dibujado a mano por grafiteros de Nueva York, luego digitalizado y aplicado sobre tela premium que resiste el paso del tiempo y las batallas urbanas.",
      meaning:
        "No es solo sobre el dinero - es sobre la ambición de crear, de romper barreras, de convertir la calle en tu oficina y tus sueños en realidad.",
      vibe: "Para los que no piden permiso, para los que crean su propio camino y entienden que la verdadera riqueza está en la libertad de expresión.",
    },
    isNew: true,
    isFeatured: true,
    tags: ["money", "ambition", "street-art", "power"],
  },
  {
    id: "2",
    name: "TROPICAL FIRE SHIRT",
    price: 75,
    originalPrice: 95,
    image: "/images/products/flor-roja-negra.jpg",
    images: ["/images/products/flor-roja-negra.jpg"],
    category: "tropical",
    categoryLabel: "TROPICAL",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black-red", "navy-red"],
    description:
      "Camisa hawaiana con flores rojas ardientes sobre fondo negro. El paraíso urbano en su máxima expresión.",
    story: {
      inspiration:
        "Inspirada en las noches de verano en Río, donde el asfalto caliente se encuentra con la brisa del océano y las flores de hibisco brillan bajo las luces de neón.",
      creation:
        "Cada flor fue pintada por artistas locales de Brasil, capturando la intensidad del fuego tropical que arde en el corazón de la ciudad.",
      meaning:
        "Representa la pasión que no se apaga, el calor humano en medio del concreto frío, la naturaleza que se rebela contra lo artificial.",
      vibe: "Para las almas ardientes que llevan el verano en el corazón, sin importar la estación o la ciudad donde estén.",
    },
    isNew: true,
    isFeatured: true,
    tags: ["tropical", "fire", "passion", "summer"],
  },
  {
    id: "3",
    name: "DRAGON BOMBER JACKET",
    price: 150,
    originalPrice: 190,
    image: "/images/products/chaqueta-oriental.jpg",
    images: ["/images/products/chaqueta-oriental.jpg"],
    category: "urbana",
    categoryLabel: "URBANA",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "navy"],
    description:
      "Bomber jacket con bordados orientales y dragón azul. Donde el streetwear occidental se encuentra con la sabiduría del este.",
    story: {
      inspiration:
        "Nació en los callejones de Tokio, donde un skater americano se enamoró de los bordados tradicionales japoneses y decidió fusionar dos mundos.",
      creation:
        "Cada dragón es bordado a mano por artesanos de Kyoto, luego aplicado sobre chaquetas bomber cortadas en talleres underground de Los Ángeles.",
      meaning:
        "El dragón no es solo decoración - es el espíritu rebelde que vive en cada uno de nosotros, la fuerza ancestral que nos impulsa a conquistar las calles modernas.",
      vibe: "Para los guerreros urbanos que respetan la tradición pero escriben su propia historia en el asfalto de la ciudad.",
    },
    isNew: false,
    isFeatured: true,
    tags: ["dragon", "oriental", "bomber", "fusion"],
  },
  {
    id: "4",
    name: "SUNSHINE FLORAL SET",
    price: 120,
    originalPrice: 150,
    image: "/images/products/flor-azul-amarilla.jpg",
    images: ["/images/products/flor-azul-amarilla.jpg"],
    category: "tropical",
    categoryLabel: "TROPICAL",
    sizes: ["S", "M", "L", "XL"],
    colors: ["yellow-blue", "white-blue"],
    description: "Conjunto hawaiano amarillo con flores azules. La alegría del trópico urbano en un look completo.",
    story: {
      inspiration:
        "Creado durante un amanecer en Miami Beach, cuando el sol dorado se reflejaba en el océano azul y las palmeras susurraban historias de libertad.",
      creation:
        "Las flores fueron diseñadas por un colectivo de artistas caribeños que viven en Nueva York, mezclando nostalgia tropical con energía metropolitana.",
      meaning:
        "Cada flor azul representa un sueño, cada rayo de sol amarillo es una oportunidad. Juntos crean la sinfonía perfecta del optimismo urbano.",
      vibe: "Para los soñadores que convierten cada día en vacaciones, que llevan el paraíso donde quiera que vayan.",
    },
    isNew: true,
    isFeatured: true,
    tags: ["sunshine", "tropical", "optimism", "vacation"],
  },
  {
    id: "5",
    name: "VARSITY BOMBER GIRL",
    price: 95,
    image: "/images/products/beisbolera-chica.jpg",
    images: ["/images/products/beisbolera-chica.jpg"],
    category: "casual",
    categoryLabel: "CASUAL",
    sizes: ["XS", "S", "M", "L"],
    colors: ["black-yellow", "navy-white"],
    description: "Chaqueta estilo béisbol con letras IA bordadas. El espíritu colegial rebelde con actitud urbana.",
    story: {
      inspiration:
        "Inspirada en las chicas que rompían las reglas en los años 80, que usaban chaquetas de sus novios pero las hacían completamente suyas.",
      creation:
        "Cada letra IA está bordada con hilos que cambian de color según la luz, simbolizando la dualidad entre lo clásico y lo futurista.",
      meaning:
        "No es solo una chaqueta varsity - es un manifiesto de independencia, de tomar lo tradicional y hacerlo revolucionario.",
      vibe: "Para las chicas que no necesitan permiso para brillar, que convierten lo casual en extraordinario con solo llevarlo puesto.",
    },
    isNew: true,
    isFeatured: false,
    tags: ["varsity", "rebel", "casual", "independent"],
  },
  {
    id: "6",
    name: "FLORAL DUO SETS",
    price: 160,
    image: "/images/products/flor-rosa-blanca-pareja.jpg",
    images: ["/images/products/flor-rosa-blanca-pareja.jpg"],
    category: "tropical",
    categoryLabel: "TROPICAL",
    sizes: ["XS", "S", "M", "L"],
    colors: ["white-pink", "yellow-pink"],
    description: "Conjuntos florales para duo. La conexión tropical que trasciende fronteras y corazones.",
    story: {
      inspiration:
        "Nació del amor entre dos artistas callejeros de diferentes continentes que se conocieron pintando murales florales en São Paulo.",
      creation:
        "Cada conjunto cuenta una historia de amor diferente - las flores rosas representan la pasión, las blancas la pureza de la conexión verdadera.",
      meaning:
        "Más que ropa para parejas, es un símbolo de que el amor verdadero florece en cualquier lugar, incluso en el concreto más duro.",
      vibe: "Para las almas gemelas que encontraron su paraíso personal y quieren que el mundo entero lo sepa.",
    },
    isNew: true,
    isFeatured: false,
    tags: ["couple", "love", "tropical", "connection"],
  },
]

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}
