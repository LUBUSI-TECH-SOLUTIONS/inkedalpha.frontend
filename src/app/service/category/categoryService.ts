import type { AxiosResponse } from "axios";
import type { CategoryType } from "./categoryType";
import axios, { AxiosHeaders } from "axios";
import { toast } from "sonner";
import apiClient from "@/app/apiClient";

export const CategoryService = {
  getAllCategories: async (lang: string):
    Promise<AxiosResponse<CategoryType[]>> => {
    try {
      const response: AxiosResponse<CategoryType[]> 
        = await apiClient.get('v1/product-categories', {
          params: { lang },
          headers: new AxiosHeaders()
        });
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
  }
}