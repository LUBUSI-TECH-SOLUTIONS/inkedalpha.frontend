import type { ProductItem, ProductResponse, ProductSelectedItem } from "@/app/service/products/productType";
import { create } from "zustand";

interface CartStore {
  productItems: ProductSelectedItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;

  addToCart: (
    product: ProductResponse,
    selectedItem: ProductItem,
    size_id: string,
  ) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  
}

export const useCart = create<CartStore>((set, get) => ({
  productItems: [],
  isCartOpen: false,

  addToCart: (product, selectedItem, size_id) => {
    const existingItemIndex = get().productItems.findIndex(
      (item) =>
        item.product_name === product.product_name &&
        item.product_id === selectedItem.color_id &&
        item.size_id === size_id
    )

    if (existingItemIndex > -1) {
      const newProductItems = [...get().productItems];
      newProductItems[existingItemIndex].quantity += 1;
      set({ productItems: newProductItems });
    } else {
      const newItem: ProductSelectedItem = {
        product_id: product.product_id || "",
        product_name: product.product_name,
        description: product.description,
        color_id: selectedItem.color_id,
        hexadecimal: selectedItem.hexadecimal,
        size_id: size_id,
        quantity: 1,
        original_price: selectedItem.original_price,
        sale_price: selectedItem.sale_price,
        images: selectedItem.images[0],
        product_category_id: product.product_category_id,
        collection_id: product.collection_id || "",
      }
      set({ productItems: [...get().productItems, newItem] });
    }
  },
  removeFromCart: (itemId) => {
    set({
      productItems: get()
        .productItems
        .filter(item => item.product_id !== itemId)
    })
  },
  clearCart: () => {
    set({ productItems: [] })
  },
  toggleCart: () => {
    set({ isCartOpen: !get().isCartOpen });
  },
  getTotalItems: () => {
    return get()
      .productItems
      .reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get()
      .productItems
      .reduce((total, item) => total + (item.sale_price || item.original_price) * item.quantity, 0);
  },
  setCartOpen: (isOpen) => {
    set({ isCartOpen: isOpen })
  },
  updateItemQuantity: (itemId, quantity) => {
    if (quantity <= 0) {
      get().removeFromCart(itemId);
      return;
    };
    const newProductItems = get().productItems.map(item =>
      item.product_id === itemId ? { ...item, quantity } : item
    )
    set({ productItems: newProductItems })
  }
}))


