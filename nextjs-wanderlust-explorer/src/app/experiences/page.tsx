import Image from "next/image";
import MobileBottomNav from "@/components/mobile-bottom-nav";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";
import { experiences } from "@/data/experiences";
import experiencePreview from "../../../images/experience.png";

type SearchParams = {
  q?: string;
  category?: string;
  destination?: string;
};

export default function ExperiencesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const query = (searchParams.q ?? "").trim().toLowerCase();
  const activeCategory = (searchParams.category ?? "").trim();
  const activeDestination = (searchParams.destination ?? "").trim();

  const categories = Array.from(new Set(experiences.map((experience) => experience.category)));
  const destinations = Array.from(new Set(experiences.map((experience) => experience.destination))).sort();

  const filteredExperiences = experiences.filter((experience) => {
    const matchesQuery =
      query.length === 0 ||
      experience.title.toLowerCase().includes(query) ||
      experience.description.toLowerCase().includes(query);
    const matchesCategory = activeCategory.length === 0 || experience.category === activeCategory;
    const matchesDestination = activeDestination.length === 0 || experience.destination === activeDestination;

    return matchesQuery && matchesCategory && matchesDestination;
  });

  const hasActiveFilters = query.length > 0 || activeCategory.length > 0 || activeDestination.length > 0;

  return (
    <main className="min-h-screen bg-[#e8ebf1] text-[#121c2a]">
      <SiteNavbar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 md:px-8 md:pb-14 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#0b57db] p-5 text-white shadow-[0_12px_30px_rgba(11,87,219,0.28)] sm:p-6 md:p-8">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Wanderlust Explorer</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Explore 100 Curated Experiences</h1>
            <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
              Browse, compare and discover unforgettable activities around the world.
            </p>
          </div>

          <Image
            src={experiencePreview}
            alt="Preview of featured experience"
            className="absolute -right-10 bottom-0 hidden h-full w-auto max-w-none object-cover opacity-30 md:block"
            priority
          />
        </div>

        <div className="mt-8 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">All Experiences</h2>
            <p className="mt-1 text-sm text-[#596175]">Showing {filteredExperiences.length} of {experiences.length} experiences</p>
          </div>
        </div>

        <form action="/experiences" method="get" className="mt-5 rounded-2xl border border-[#d9e3f6] bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:p-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <input
              type="search"
              name="q"
              defaultValue={activeCategory.length > 0 || activeDestination.length > 0 || query.length > 0 ? (searchParams.q ?? "") : ""}
              placeholder="Search experiences"
              className="h-11 rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
            />

            <select
              name="category"
              defaultValue={activeCategory}
              className="h-11 rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              name="destination"
              defaultValue={activeDestination}
              className="h-11 rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
            >
              <option value="">All destinations</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <button
                type="submit"
                className="h-11 flex-1 rounded-xl bg-[#0b57db] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0050cb]"
              >
                Apply
              </button>
              <a
                href="/experiences"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#d9e3f6] bg-white px-4 text-sm font-semibold text-[#415271] transition-colors hover:bg-[#f2f5fb]"
              >
                Clear
              </a>
            </div>
          </div>
        </form>

        {hasActiveFilters && (
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {query.length > 0 && <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">Search: {searchParams.q}</span>}
            {activeCategory.length > 0 && <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">Category: {activeCategory}</span>}
            {activeDestination.length > 0 && <span className="rounded-full bg-[#d7e5ff] px-3 py-1 font-medium text-[#0b57db]">Destination: {activeDestination}</span>}
          </div>
        )}

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {filteredExperiences.map((experience) => (
            <article
              key={experience.id}
              className="group overflow-hidden rounded-2xl border border-[#d9e3f6] bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out transform-gpu hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-44 overflow-hidden rounded-xl">
                <Image
                  src={experiencePreview}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#0b57db]">
                  {experience.category}
                </span>
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
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="mt-6 rounded-2xl border border-[#d9e3f6] bg-white p-6 text-center text-sm text-[#596175]">
            No experiences match your current search and filters.
          </div>
        )}

        <SiteFooter />
      </section>

      <MobileBottomNav />
    </main>
  );
}
