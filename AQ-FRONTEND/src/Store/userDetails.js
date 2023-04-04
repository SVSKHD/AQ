import { create } from "zustand";

export const userStatus = create((set) => ({
  userSinginStatus: false,
  signup: false,
  userData: "",
  toggleSingup: () => set((state) => ({ signup: true })),
  toggleUserSinginStatus: () => set({ userSinginStatus: true }),
  saveUserData: (payload) => set(() => ({ userData:payload })),
}));
