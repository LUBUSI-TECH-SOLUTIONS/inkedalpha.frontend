import { productsData } from "@/app/dataExample/products";
import { ProductService } from "@/app/service/products/productService";
import type { ProductResponse } from "@/app/service/products/productType";
import { create } from "zustand";

interface ProductStore {
  products: ProductResponse[];
  selectedProduct?: ProductResponse;
  isLoading: boolean;

  fetchProducts: () => void;

  selectProduct: (product: ProductResponse) => void;
  resetProducts(): void;
}

export const useProduct = create<ProductStore>((set) => ({
  products: productsData,
  isLoading: false,

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await ProductService.getAllProducts({
        lang: 'es',
        product: undefined as ProductResponse | undefined,
        include_details: false,
      });
      set({ products: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  selectProduct: (product) => set({ selectedProduct: product }),
  resetProducts: () => set({ products: productsData }),
}))