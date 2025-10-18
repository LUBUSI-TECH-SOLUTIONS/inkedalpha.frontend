import type { ProductResponse } from "../service/products/productType";

export const productsData: ProductResponse[] = [
  {
    product_category_id: "outerwear",
    product_name: "Chaqueta de Cuero Clásica",
    description: "Chaqueta de cuero genuino con cierre frontal y bolsillos laterales, ideal para un look urbano.",
    model_height: "1.80 m",
    model_wearing: "Talla M",
    care_instructions: "Limpiar con un paño húmedo. No lavar a máquina.",
    story_time: "Inspirada en el estilo rebelde de los años 80, esta chaqueta representa libertad y actitud.",
    attributes: [
      { attribute_name: "Material", attribute_value: "Cuero genuino" },
      { attribute_name: "Cierre", attribute_value: "Cremallera metálica" }
    ],
    items: [
      {
        color_id: "black",
        original_price: 450000,
        sale_price: 399000,
        images: [
          "https://jtlkbdepwztxqxwfsjag.supabase.co//storage/v1/object/public/products/9daccf59-5911-42b1-a13e-5c772aba6e42_20251018_002104.webp?",
          "https://jtlkbdepwztxqxwfsjag.supabase.co//storage/v1/object/public/products/f72216b0-7569-4a66-b0a6-69ebf592fcc9_20251017_170153.jpg?",
          "https://jtlkbdepwztxqxwfsjag.supabase.co//storage/v1/object/public/products/f72216b0-7569-4a66-b0a6-69ebf592fcc9_20251017_170153.jpg?",
          "https://jtlkbdepwztxqxwfsjag.supabase.co//storage/v1/object/public/products/9daccf59-5911-42b1-a13e-5c772aba6e42_20251018_002104.webp?"
        ],
        variations: [
          { size_id: "S", qty_in_stock: 5 },
          { size_id: "M", qty_in_stock: 8 },
          { size_id: "L", qty_in_stock: 3 }
        ]
      }
    ],
    collection_id: "autumn-collection-2025"
  },
  {
    product_category_id: "tops",
    product_name: "Camiseta Básica de Algodón",
    description: "Camiseta suave, transpirable y cómoda para uso diario.",
    model_height: "1.75 m",
    model_wearing: "Talla S",
    care_instructions: "Lavar a máquina con agua fría y colores similares.",
    story_time: "Un clásico que nunca falla: comodidad y versatilidad en una sola prenda.",
    attributes: [
      { attribute_name: "Material", attribute_value: "100% Algodón" },
      { attribute_name: "Fit", attribute_value: "Regular" }
    ],
    items: [
      {
        color_id: "white",
        original_price: 59000,
        sale_price: 49000,
        images: [
          "./images/products/chaqueta-oriental.jpg",
          "./images/products/flor-azul-amarilla.jpg"
        ],
        variations: [
          { size_id: "S", qty_in_stock: 10 },
          { size_id: "M", qty_in_stock: 15 },
          { size_id: "L", qty_in_stock: 7 }
        ]
      }
    ],
    collection_id: "basics-collection"
  },
  {
    product_category_id: "bottoms",
    product_name: "Jeans Slim Fit Oscuros",
    description: "Jeans de mezclilla elástica que se ajustan perfectamente sin perder comodidad.",
    model_height: "1.82 m",
    model_wearing: "Talla 32",
    care_instructions: "Lavar al revés para mantener el color.",
    story_time: "Diseñados para quienes buscan un estilo moderno con libertad de movimiento.",
    attributes: [
      { attribute_name: "Material", attribute_value: "Denim stretch" },
      { attribute_name: "Corte", attribute_value: "Slim Fit" }
    ],
    items: [
      {
        color_id: "dark-blue",
        original_price: 189000,
        sale_price: 159000,
        images: [
          "./images/products/flor-roja-negra.jpg",
          "./images/products/flor-rosa-blanca-pareja.jpg"
        ],
        variations: [
          { size_id: "S", qty_in_stock: 12 },
          { size_id: "M", qty_in_stock: 9 },
          { size_id: "L", qty_in_stock: 4 }
        ]
      }
    ],
    collection_id: "denim-collection"
  },
  {
    product_category_id: "footwear",
    product_name: "Zapatillas Urban Runner",
    description: "Zapatillas ligeras con suela antideslizante y amortiguación avanzada.",
    model_height: "1.78 m",
    model_wearing: "Talla 42",
    care_instructions: "Limpiar con cepillo suave y agua tibia.",
    story_time: "Inspiradas en la energía urbana, perfectas para moverte con estilo.",
    attributes: [
      { attribute_name: "Material", attribute_value: "Malla transpirable" },
      { attribute_name: "Suela", attribute_value: "Goma antideslizante" }
    ],
    items: [
      {
        color_id: "gray",
        original_price: 320000,
        sale_price: 289000,
        images: [
          "./images/products/flor-azul-amarilla.jpg",
          "./images/products/chaqueta-oriental.jpg"
        ],
        variations: [
          { size_id: "L", qty_in_stock: 6 },
          { size_id: "XL", qty_in_stock: 5 }
        ]
      }
    ],
    collection_id: "sport-essentials"
  },
  {
    product_category_id: "accessories",
    product_name: "Bolso Tote de Lona",
    description: "Bolso espacioso y resistente, ideal para el día a día.",
    model_height: "1.68 m",
    model_wearing: "Única talla",
    care_instructions: "Lavar a mano con detergente suave.",
    story_time: "Un accesorio funcional que combina elegancia y sostenibilidad.",
    attributes: [
      { attribute_name: "Material", attribute_value: "Lona reciclada" },
      { attribute_name: "Cierre", attribute_value: "Imán oculto" }
    ],
    items: [
      {
        color_id: "beige",
        original_price: 129000,
        sale_price: 99000,
        images: [
          "./images/products/beisbolera-chica.jpg",
          "./images/products/flor-azul-amarilla.jpg"
        ],
        variations: [
          { size_id: "L", qty_in_stock: 20 }
        ]
      }
    ],
    collection_id: "eco-line"
  },
  {
    product_category_id: "accessories",
    product_name: "Gorra Clásica Logo Bordado",
    description: "Gorra de algodón con visera curva y cierre ajustable.",
    model_height: "1.83 m",
    model_wearing: "Talla única",
    care_instructions: "No usar secadora. Secar a la sombra.",
    story_time: "El complemento perfecto para completar tu outfit casual.",
    attributes: [
      { attribute_name: "Material", attribute_value: "100% Algodón" },
      { attribute_name: "Ajuste", attribute_value: "Hebilla metálica" }
    ],
    items: [
      {
        color_id: "navy-blue",
        original_price: 69000,
        sale_price: 59000,
        images: [
          "./images/products/chaqueta-oriental.jpg",
          "./images/products/flor-azul-amarilla.jpg"
        ],
        variations: [
          { size_id: "L", qty_in_stock: 25 }
        ]
      }
    ],
    collection_id: "casual-accessories"
  }
];
