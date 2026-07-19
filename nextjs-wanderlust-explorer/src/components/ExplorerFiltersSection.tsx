"use client";

import type { Experience } from "@/types/Experience";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import ExplorerCardsSection from "@/components/ExplorerCardsSection";
import useExperienceFilters from "@/hooks/useExperienceFilters";
import { getCategoryLabel } from "@/utils/categoryLabels";

export default function ExplorerFiltersSection({ experiences }: { experiences: Experience[] }) {
  const {
    query,
    category,
    destination,
    categories,
    destinations,
    filteredExperiences,
    hasActiveFilters,
    setQuery,
    setCategory,
    setDestination,
    clearFilters,
  } = useExperienceFilters(experiences);

  return (
    <>
      <div className="mt-8 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Explorador</h2>
          <p className="mt-1 text-sm text-[#596175]">
            Mostrando {filteredExperiences.length} de {experiences.length} experiencias
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-[#d9e3f6] bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:p-5">
        <div className="grid grid-cols-1 gap-3">
          <SearchBar value={query} onChange={setQuery} />
          <FilterBar
            categories={categories}
            destinations={destinations}
            category={category}
            destination={destination}
            onCategoryChange={setCategory}
            onDestinationChange={setDestination}
            onClear={clearFilters}
          />
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {query.trim().length > 0 && (
            <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">Búsqueda: {query}</span>
          )}
          {category.length > 0 && (
            <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">
              Categoría: {getCategoryLabel(category)}
            </span>
          )}
          {destination.length > 0 && (
            <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">Destino: {destination}</span>
          )}
        </div>
      )}

      <ExplorerCardsSection experiences={filteredExperiences} />
    </>
  );
}
