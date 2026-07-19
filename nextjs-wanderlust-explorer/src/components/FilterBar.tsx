"use client";

import { getCategoryLabel } from "@/utils/categoryLabels";

type FilterBarProps = {
  categories: string[];
  destinations: string[];
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onClear: () => void;
};

export default function FilterBar({
  categories,
  destinations,
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
  onClear,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="h-11 rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
      >
        <option value="">Todas las categorías</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {getCategoryLabel(item)}
          </option>
        ))}
      </select>

      <select
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        className="h-11 rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
      >
        <option value="">Todos los destinos</option>
        {destinations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={onClear}
        className="h-11 rounded-xl border border-[#d9e3f6] bg-white px-4 text-sm font-semibold text-[#415271] transition-colors hover:bg-[#f2f5fb]"
      >
        Limpiar filtros
      </button>
    </div>
  );
}
