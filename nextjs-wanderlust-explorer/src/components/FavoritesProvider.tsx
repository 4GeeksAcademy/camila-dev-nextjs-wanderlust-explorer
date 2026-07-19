"use client";

import { createContext, useContext, useMemo, useState } from "react";

type FavoritesContextValue = {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  };

  const value = useMemo(
    () => ({
      favoriteIds,
      toggleFavorite,
    }),
    [favoriteIds],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}
