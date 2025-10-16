import { create } from "zustand";
import type { CategoryType } from "../types/productCategoryType";
import { ProductCategoryService } from "../service/productCategoryService";

interface CategoryStore {
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
  isLoading: boolean;

  fetchCategories: () => Promise<void>;
  selectCategory: (category: CategoryType | null) => void;
  clearCategories: () => void;
}

export const useProductCategory = create<CategoryStore>((set) => ({
  categories: [],
  selectedCategory: null,
  isLoading: false,

  fetchCategories: async () => {
    set({ isLoading: true });
    try {
      const response = await ProductCategoryService.getAllCategories();
      set({ categories: response.data });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  selectCategory: (category) => set({ selectedCategory: category }),
  clearCategories: () => set({ categories: [], selectedCategory: null })
}))
