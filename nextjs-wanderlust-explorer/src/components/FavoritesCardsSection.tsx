"use client";

import type { Experience } from "@/types/Experience";
import ExperienceGrid from "@/components/ExperienceGrid";
import { useFavorites } from "@/components/FavoritesProvider";

export default function FavoritesCardsSection({ experiences }: { experiences: Experience[] }) {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <div className="mt-6">
      <p className="text-sm text-[#596175]">Mostrando {favoriteExperiences.length} experiencias favoritas</p>
      <ExperienceGrid
        experiences={favoriteExperiences}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        emptyMessage="Aún no tienes favoritos. Toca el ícono de corazón en el Explorador para guardarlos aquí."
      />
    </div>
  );
}
