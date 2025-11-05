import type { AxiosResponse } from "axios"
import type { ProductResponse } from "./productType"
import axios, { AxiosHeaders } from "axios"
import { toast } from "sonner"
import apiClient from "@/app/apiClient"

export const ProductService = {
  getAllProducts: async (params: {
    lang: string,
    product?: ProductResponse,
    include_details?: boolean
  }): Promise<AxiosResponse<ProductResponse[]>> => {
    try {
      const response: AxiosResponse<ProductResponse[]>
        = await apiClient.get('v1/product', {
          params: {
            lang: params.lang,
            product_id: params.product?.product_id,
            collection_id: params.product?.collection_id,
            product_category_id: params.product?.product_category_id,
            include_details: params.include_details ?? false
          },
          headers: new AxiosHeaders()
        })
        return response
    } catch (error: unknown) { 
      let errorMessage = "Error al obtener los productos"
      if(axios.isAxiosError(error)){
        errorMessage = error.response?.data?.message || errorMessage
      } else if (error instanceof Error) {
        errorMessage = error.message
      }
      toast.error(errorMessage)
      throw new Error(errorMessage)
    }
  }
}