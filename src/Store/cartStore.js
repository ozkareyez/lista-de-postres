import { create } from "zustand";
import data from "../data.json";
console.log(data);

export const useCartStore = create((set, get) => ({
  isClose: true,
  card: [],
  products: data,

  toggleclose: () =>
    set((state) => ({
      isClose: !state.isClose,
    })),

  resetCart: () =>
    set(() => ({
      card: [],
    })),
  addItemCart: (newItem) =>
    set((state) => ({
      card: [...state.card, newItem],
    })),

  updateItemIncart: (updateItem) =>
    set((state) => ({
      card: state.card.map((item) =>
        item.name === updateItem.name ? { ...updateItem } : item
      ),
    })),

  deleteItemfromCart: (name) =>
    set((state) => ({
      card: state.card.filter((item) => item.name !== name),
    })),

  totalCard: () =>
    get().card.reduce((acc, item) => acc + item.quantity * item.price, 0),
}));
