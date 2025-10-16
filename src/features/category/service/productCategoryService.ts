import apiClient from "@/app/apiClient";
import axios, { type AxiosResponse } from "axios";
import { toast } from "sonner";
import type { CategoryType } from "../types/productCategoryType";


export const ProductCategoryService = {
  getAllCategories: async ():
    Promise<AxiosResponse<CategoryType[]>> => {
    try {
      const response: AxiosResponse<CategoryType[]>
        = await apiClient.get<CategoryType[]>('v1/product-categories');
      return response;
    } catch (error: unknown) {
      let errorMessage = "Error al obtener las categorias.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  },
}