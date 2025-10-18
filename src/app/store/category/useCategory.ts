import { CategoryService } from "@/app/service/category/categoryService";
import type { CategoryType } from "@/app/service/category/categoryType";
import { create } from "zustand";

interface CategoryStore {
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
  isLoading: boolean;

  fetchCategories: (lang: string) => Promise<void>;
  selectCategory: (category: CategoryType | null) => void;
}

export const useCategory = create<CategoryStore>((set) => ({
  categories: [],
  selectedCategory: null,
  isLoading: false,

  fetchCategories: async (lang) => {
    set({ isLoading: true });
    try {
      const response = await CategoryService.getAllCategories(lang);
      set({ categories: response.data });
    } catch (error) {
      // Error handling is done in the service
    } finally {
      set({ isLoading: false });
    }
  },

  selectCategory: (category) => set({ selectedCategory: category }),

}));