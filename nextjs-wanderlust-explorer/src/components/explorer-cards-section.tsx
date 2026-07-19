"use client";

import type { Experience } from "@/types/Experience";
import ExperienceGrid from "@/components/experience-grid";
import { useFavorites } from "@/components/favorites-provider";

export default function ExplorerCardsSection({ experiences }: { experiences: Experience[] }) {
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <ExperienceGrid
      experiences={experiences}
      favoriteIds={favoriteIds}
      onToggleFavorite={toggleFavorite}
      emptyMessage="No experiences match your current search and filters."
    />
  );
}
