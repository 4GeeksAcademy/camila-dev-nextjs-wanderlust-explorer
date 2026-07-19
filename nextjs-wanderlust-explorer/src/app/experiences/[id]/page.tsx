import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MobileBottomNav from "@/components/mobile-bottom-nav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { experiences } from "@/data/experiences";

type ExperienceDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const experienceId = Number(id);
  const experience = experiences.find((item) => item.id === experienceId);

  if (!experience) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#e8ebf1] text-[#121c2a]">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 md:px-8 md:pb-14 lg:px-10">
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-[#121c2a] sm:text-3xl">Detalle</h1>

        <div className="mb-4">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 rounded-xl border border-[#d9e3f6] bg-white px-4 py-2 text-sm font-medium text-[#415271] transition-colors hover:bg-[#f2f5fb]"
          >
            ← Back to Explorer
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-[#d9e3f6] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-5xl">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              priority
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1100px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Experience #{experience.id}</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {experience.title}
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 p-5 sm:p-6 md:grid-cols-2 md:gap-5 md:p-8">
            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Description</p>
              <p className="mt-2 text-sm leading-6 text-[#364152] sm:text-base">{experience.description}</p>
            </div>

            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Destination</p>
              <p className="mt-2 text-sm font-semibold text-[#121c2a] sm:text-base">{experience.destination}</p>
            </div>

            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Category</p>
              <p className="mt-2 inline-flex rounded-full bg-[#d7e5ff] px-3 py-1 text-sm font-semibold text-[#0b57db]">
                {experience.category}
              </p>
            </div>

            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Price</p>
              <p className="mt-2 text-xl font-bold text-[#0b57db]">${experience.price}</p>
            </div>

            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Rating</p>
              <p className="mt-2 text-sm font-semibold text-[#121c2a] sm:text-base">★ {experience.rating.toFixed(1)}</p>
            </div>

            <div className="rounded-xl bg-[#f8f9ff] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#596175]">Image URL (dataset)</p>
              <p className="mt-2 break-all text-xs leading-5 text-[#364152] sm:text-sm">{experience.imageUrl}</p>
            </div>
          </div>
        </article>

        <Footer />
      </section>

      <MobileBottomNav />
    </main>
  );
}
