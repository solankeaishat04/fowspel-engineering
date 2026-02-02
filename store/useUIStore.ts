// store/ui.store.ts
import { create } from "zustand";

interface UIState {
  mobileNav: boolean;
  toggleNav: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileNav: false,
  toggleNav: () =>
    set((state) => ({ mobileNav: !state.mobileNav })),
}));
