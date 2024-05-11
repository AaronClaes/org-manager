import { create } from "zustand";

export interface DashboardState {
  sidebarOpen: boolean;
  update: (options: Partial<DashboardState>) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  sidebarOpen: true,
  // function to update the different fields inside the store
  update: (options) => set((state) => ({ ...state, ...options })),
}));
