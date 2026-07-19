"use client";

import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/Experience";

type ExperienceGridProps = {
  experiences: Experience[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
  emptyMessage: string;
};

export default function ExperienceGrid({
  experiences,
  favoriteIds,
  onToggleFavorite,
  emptyMessage,
}: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-[#d9e3f6] bg-white p-6 text-center text-sm text-[#596175]">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {experiences.map((experience) => {
        const isFavorite = favoriteIds.includes(experience.id);

        return (
          <Link key={experience.id} href={`/experiences/${experience.id}`}>
            <article className="group overflow-hidden rounded-2xl border border-[#d9e3f6] bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
              <div className="relative h-44 overflow-hidden rounded-xl">
                <Image
                  src={experience.imageUrl}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#0b57db]">
                  {experience.category}
                </span>

                <button
                  type="button"
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onToggleFavorite(experience.id);
                  }}
                  className={`absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors ${
                    isFavorite ? "bg-[#ef4444] text-white" : "bg-white/90 text-[#6b7280] hover:bg-white"
                  }`}
                >
                  ♥
                </button>
              </div>

              <div className="px-1 pb-1 pt-3">
                <h3 className="line-clamp-2 text-[17px] font-semibold leading-6">{experience.title}</h3>
                <p className="mt-1 text-sm text-[#5d6372]">{experience.destination}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#6b7280]">{experience.description}</p>

                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#0b57db]">${experience.price}</p>
                  <p className="text-xs font-medium text-[#5d6372]">★ {experience.rating.toFixed(1)}</p>
                </div>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
