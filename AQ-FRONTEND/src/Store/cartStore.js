import {create} from "zustand"

export const useCartStore = create((set) => ({
    cart: [],
    addItem: (payload) =>
      set((state) => ({ cart: [...state.cart, payload] })),
    removeItem:((payload) =>
    set((state) => ({
      items: state.items.filter((item) => item !== payload),
    })),
  }));