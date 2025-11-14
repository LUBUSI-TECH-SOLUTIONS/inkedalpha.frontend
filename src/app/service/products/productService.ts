import type { AxiosResponse } from "axios"
import type { ProductResponse } from "./productType"
import axios, { AxiosHeaders } from "axios"
import { toast } from "sonner"
import apiClient from "@/app/apiClient"

// Tipos para parámetros
type ProductServiceParams = {
  lang: string,
  product_id?: string,
  collection_id?: string
  product_category_id?: string
  include_details?: boolean,
  single?: boolean // Si es true, retorna un solo producto; si es false o undefined, retorna un array
}

export const ProductService = {
  getAllProducts: async (params: ProductServiceParams):
    Promise<AxiosResponse<ProductResponse | ProductResponse[]>> => {
    try {
      const response: AxiosResponse<ProductResponse | ProductResponse[]>
        = await apiClient.get('v1/product', {
          params: {
            lang: params.lang,
            product_id: params.product_id,
            collection_id: params.collection_id,
            product_category_id: params.product_category_id,
            include_details: params.include_details ?? false
          },
          headers: new AxiosHeaders()
        })

      // Si se solicita un solo producto y la respuesta es un array, retornar el primer elemento
      if (params.single === true && Array.isArray(response.data)) {
        const singleResponse: AxiosResponse<ProductResponse> = {
          ...response,
          data: response.data[0]
        }
        return singleResponse
      }

      // Si se solicita un solo producto y la respuesta ya es un objeto, retornarlo
      if (params.single === true && !Array.isArray(response.data)) {
        return response as AxiosResponse<ProductResponse>
      }

      // Si no se solicita un solo producto, asegurar que sea un array
      if (params.single !== true) {
        const arrayResponse: AxiosResponse<ProductResponse[]> = {
          ...response,
          data: Array.isArray(response.data) ? response.data : [response.data]
        }
        return arrayResponse
      }

      return response
    } catch (error: unknown) {
      let errorMessage = "Error al obtener los productos"
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage
      } else if (error instanceof Error) {
        errorMessage = error.message
      }
      toast.error(errorMessage)
      throw new Error(errorMessage)
    }
  }
}