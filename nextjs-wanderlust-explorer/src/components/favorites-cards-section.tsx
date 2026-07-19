"use client";

import type { Experience } from "@/types/Experience";
import ExperienceGrid from "@/components/experience-grid";
import { useFavorites } from "@/components/favorites-provider";

export default function FavoritesCardsSection({ experiences }: { experiences: Experience[] }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <div className="mt-6">
      <p className="text-sm text-[#596175]">Showing {favoriteExperiences.length} favorite experiences</p>
      <ExperienceGrid
        experiences={favoriteExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        emptyMessage="You do not have favorites yet. Tap the heart icon in Explorer to save experiences here."
      />
    </div>
  );
}
