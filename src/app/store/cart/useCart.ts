import type {
  ProductItem,
  ProductResponse,
  ProductSelectedItem,
} from "@/app/service/products/productType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartStore {
  productItems: ProductSelectedItem[];
  isCartOpen: boolean;

  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;

  addToCart: (
    product: ProductResponse,
    selectedItem: ProductItem,
    size_id: string,
    size_name: string,
    color_name: string
  ) => void;

  removeFromCart: (itemId: string, size_id?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  updateItemQuantity: (itemId: string, quantity: number) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      productItems: [],
      isCartOpen: false,

      // 🔹 Añadir producto al carrito
      addToCart: (product, selectedItem, size_id, size_name, color_name) => {
        const existingItemIndex = get().productItems.findIndex(
          (item) =>
            item.product_id === product.product_id &&
            item.color_id === selectedItem.color_id &&
            item.size_id === size_id &&
            item.color_name === selectedItem.color_name
        );

        if (existingItemIndex > -1) {
          // Si el producto ya existe, aumentar cantidad
          const newProductItems = [...get().productItems];
          newProductItems[existingItemIndex].quantity += 1;
          set({ productItems: newProductItems });
        } else {
          // Si no, agregarlo nuevo
          const newItem: ProductSelectedItem = {
            product_id: product.product_id || "",
            product_name: product.product_name,
            description: product.description,
            color_id: selectedItem.color_id,
            color_name: color_name,
            hexadecimal: selectedItem.hexadecimal,
            size_id: size_id,
            size_name: size_name,
            quantity: 1,
            original_price: selectedItem.original_price,
            sale_price: selectedItem.sale_price,
            images: selectedItem.images,
            product_category_id: product.product_category_id,
            collection_id: product.collection_id || "",
          };
          set({ productItems: [...get().productItems, newItem] });
        }
      },

      // 🔹 Remover un producto específico
      removeFromCart: (itemId, size_id) => {
        set({
          productItems: get().productItems.filter(
            (item) =>
              item.product_id !== itemId ||
              (size_id ? item.size_id !== size_id : false)
          ),
        });
      },

      // 🔹 Limpiar carrito completo
      clearCart: () => {
        set({ productItems: [] });
      },

      // 🔹 Alternar apertura del carrito
      toggleCart: () => {
        set({ isCartOpen: !get().isCartOpen });
      },

      // 🔹 Forzar apertura o cierre del carrito
      setCartOpen: (isOpen) => {
        set({ isCartOpen: isOpen });
      },

      // 🔹 Calcular cantidad total
      getTotalItems: () => {
        return get().productItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },

      // 🔹 Calcular precio total
      getTotalPrice: () => {
        return get().productItems.reduce(
          (total, item) =>
            total +
            (item.sale_price || item.original_price || 0) * item.quantity,
          0
        );
      },

      // 🔹 Actualizar cantidad
      updateItemQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(itemId);
          return;
        }
        const updatedItems = get().productItems.map((item) =>
          item.product_id === itemId ? { ...item, quantity } : item
        );
        set({ productItems: updatedItems });
      },
    }),
    {
      name: "cart-storage", // 🔸 Clave para localStorage
      partialize: (state) => ({
        productItems: state.productItems,
      }),
      // 🔹 Sanitiza los datos en caso de corrupción del localStorage
      onRehydrateStorage: () => (state) => {
        if (state?.productItems?.some((p) => !p.product_id)) {
          state.productItems = [];
        }
      },
    }
  )
);
