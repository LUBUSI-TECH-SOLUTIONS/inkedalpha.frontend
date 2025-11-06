import { productsData } from "@/app/dataExample/products";
import { ProductService } from "@/app/service/products/productService";
import type { ProductResponse } from "@/app/service/products/productType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Añadimos un tipo extendido con fecha de cache
interface CachedProduct extends ProductResponse {
  cachedAt?: number;
}

interface ProductStore {
  products: ProductResponse[];
  selectedProduct?: CachedProduct;
  isLoading: boolean;

  fetchProducts: (_lang: string) => Promise<void>;
  fetchSingleProduct: (product: ProductResponse, _lang: string) => Promise<void>;

  selectProduct: (product: ProductResponse) => void;
  resetProducts(): void;
}

const CACHE_EXPIRATION = 1000 * 60 * 10; // 10 minutos

export const useProduct = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: productsData,
      isLoading: false,
      selectedProduct: undefined,

      // 🔹 Obtiene todos los productos
      fetchProducts: async (_lang) => {
        set({ isLoading: true });
        try {
          const response = await ProductService.getAllProducts({
            lang: _lang,
            include_details: false,
          });

          set({
            products: Array.isArray(response.data)
              ? response.data
              : [response.data],
          });
        } catch (error) {
          console.error("Error al obtener productos:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      // 🔹 Obtiene un solo producto (usa cache si está fresco)
      fetchSingleProduct: async (product, _lang) => {
        const { selectedProduct } = get();

        // Si el producto ya está seleccionado y no ha expirado, úsalo
        if (
          selectedProduct &&
          selectedProduct.product_id === product.product_id &&
          selectedProduct.cachedAt &&
          Date.now() - selectedProduct.cachedAt < CACHE_EXPIRATION
        ) return;


        // Si no, haz la solicitud al backend
        set({ isLoading: true });
        try {
          const response = await ProductService.getAllProducts({
            lang: _lang,
            product_id: product.product_id,
            include_details: true,
            single: true,
          });

          const data = Array.isArray(response.data)
            ? response.data[0]
            : response.data;

          // Guardamos el producto con timestamp
          set({
            selectedProduct: { ...data, cachedAt: Date.now() },
          });
        } catch (error) {
          console.error("Error al obtener producto:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      // 🔹 Selecciona manualmente un producto (por ejemplo desde una lista)
      selectProduct: (product) => set({ selectedProduct: { ...product, cachedAt: Date.now() } }),

      // 🔹 Restaura la lista base
      resetProducts: () => set({ products: productsData }),
    }),
    {
      name: "product-storage", // 🔸 clave del localStorage
      partialize: (state) => ({
        products: state.products,
        selectedProduct: state.selectedProduct,
      }),
    }
  )
);
