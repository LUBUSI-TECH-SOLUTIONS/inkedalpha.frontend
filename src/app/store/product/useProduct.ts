import { ProductService } from "@/app/service/products/productService";
import type { ProductResponse } from "@/app/service/products/productType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const CACHE_EXPIRATION = 1000 * 60 * 10;

export const useProduct = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      isLoading: false,
      selectedProduct: undefined,

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

      fetchSingleProduct: async (product, _lang) => {
        const { selectedProduct } = get();

        if (
          selectedProduct &&
          selectedProduct.product_id === product.product_id &&
          selectedProduct.cachedAt &&
          Date.now() - selectedProduct.cachedAt < CACHE_EXPIRATION
        ) return;


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

          set({
            selectedProduct: { ...data, cachedAt: Date.now() },
          });
        } catch (error) {
          console.error("Error al obtener producto:", error);
        } finally {
          set({ isLoading: false });
        }
      },

      selectProduct: (product) => set({ selectedProduct: { ...product, cachedAt: Date.now() } }),

      resetProducts: () => set({ products: []}),
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
