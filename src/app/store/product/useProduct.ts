import { productsData } from "@/app/dataExample/products";
import type { ProductResponse } from "@/app/service/products/productType";
import { create } from "zustand";

interface ProductStore {
  products: ProductResponse[];
  selectedProduct?: ProductResponse;

  selectProduct: (product: ProductResponse) => void;
  resetProducts(): void;
}

export const useProduct = create<ProductStore>((set) => ({
  products: productsData,

  selectProduct: (product) => set({ selectedProduct: product }),
  resetProducts: () => set({ products: productsData }),
}))