// src/stores/useThemeStore.js
import { create } from "zustand";

export const useThemeStore = create((set) => {
  // Default to dark if no theme is stored
  const savedTheme = localStorage.getItem("theme") || "dark";

  // Apply it immediately (before React renders)
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return {
    theme: savedTheme,
    toggleTheme: () =>
      set((state) => {
        const next = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", next);
        document.documentElement.classList.toggle("dark", next === "dark");
        return { theme: next };
      }),
  };
});
