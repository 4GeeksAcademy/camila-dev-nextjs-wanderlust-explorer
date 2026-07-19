"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Experience } from "@/types/Experience";

const REQUIRED_CATEGORIES = ["Adventure", "Culture", "Food", "Wellness", "Nature"] as const;

export default function useExperienceFilters(experiences: Experience[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [category, setCategory] = useState(searchParams.get("category") ?? "");
  const [destination, setDestination] = useState(searchParams.get("destination") ?? "");

  useEffect(() => {
    const nextParams = new URLSearchParams();

    if (query.trim()) {
      nextParams.set("q", query.trim());
    }

    if (category) {
      nextParams.set("category", category);
    }

    if (destination) {
      nextParams.set("destination", destination);
    }

    const nextQueryString = nextParams.toString();
    const currentQueryString = searchParams.toString();

    if (nextQueryString !== currentQueryString) {
      router.replace(nextQueryString ? `${pathname}?${nextQueryString}` : pathname, { scroll: false });
    }
  }, [query, category, destination, pathname, router, searchParams]);

  const categories = useMemo(() => {
    const availableCategories = new Set(experiences.map((experience) => experience.category));

    return REQUIRED_CATEGORIES.filter((item) => availableCategories.has(item));
  }, [experiences]);

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.destination))).sort(),
    [experiences],
  );

  const filteredExperiences = useMemo(() => {
    const searchTerm = query.trim();
    const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const titleRegex = escapedSearchTerm.length > 0 ? new RegExp(escapedSearchTerm, "i") : null;

    return experiences.filter((experience) => {
      const matchesQuery = !titleRegex || titleRegex.test(experience.title);
      const matchesCategory = !category || experience.category === category;
      const matchesDestination = !destination || experience.destination === destination;

      return matchesQuery && matchesCategory && matchesDestination;
    });
  }, [experiences, query, category, destination]);

  const hasActiveFilters = query.trim().length > 0 || category.length > 0 || destination.length > 0;

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setDestination("");
  };

  return {
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
  };
}
