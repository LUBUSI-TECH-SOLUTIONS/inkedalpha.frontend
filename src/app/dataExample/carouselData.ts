export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price?: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: "Avaricia",
    description: "Diseño urbano que representa la ambición y el deseo de superación. Una pieza única que combina arte callejero con elegancia.",
    image: "/images/products/avaricia.jpg",
    category: "Urbano",
    price: "$89.99"
  },
  {
    id: 2,
    title: "Beisbolera Chica",
    description: "Estilo deportivo con toque urbano. Perfecta para combinar con cualquier outfit y expresar tu personalidad rebelde.",
    image: "/images/products/beisbolera-chica.jpg",
    category: "Deportivo",
    price: "$65.99"
  },
  {
    id: 3,
    title: "Chaqueta Oriental",
    description: "Fusión de culturas en una prenda única. Inspirada en el arte oriental con un toque moderno y urbano.",
    image: "/images/products/chaqueta-oriental.jpg",
    category: "Cultural",
    price: "$125.99"
  },
  {
    id: 4,
    title: "Flor Azul Amarilla",
    description: "Naturaleza y color en perfecta armonía. Un diseño floral que representa la belleza y la vitalidad.",
    image: "/images/products/flor-azul-amarilla.jpg",
    category: "Natural",
    price: "$75.99"
  },
  {
    id: 5,
    title: "Flor Roja Negra",
    description: "Contraste dramático que simboliza la pasión y la elegancia. Un diseño atemporal que nunca pasa de moda.",
    image: "/images/products/flor-roja-negra.jpg",
    category: "Clásico",
    price: "$79.99"
  },
  {
    id: 6,
    title: "Flor Rosa Blanca Pareja",
    description: "Diseño romántico perfecto para parejas. Representa el amor y la conexión entre dos almas.",
    image: "/images/products/flor-rosa-blanca-pareja.jpg",
    category: "Romántico",
    price: "$95.99"
  }
];
