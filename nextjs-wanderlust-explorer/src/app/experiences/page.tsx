import Image from "next/image";
import ExplorerFiltersSection from "@/components/ExplorerFiltersSection";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { experiences } from "@/data/experiences";
import experiencePreview from "../../../images/experience.png";
export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#e8ebf1] text-[#121c2a]">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 md:px-8 md:pb-14 lg:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#0b57db] p-5 text-white shadow-[0_12px_30px_rgba(11,87,219,0.28)] sm:p-6 md:p-8">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">Explorador Voyage</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Explora 100 experiencias curadas</h1>
            <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
              Busca, compara y descubre actividades inolvidables alrededor del mundo.
            </p>
          </div>

          <Image
            src={experiencePreview}
            alt="Vista previa de experiencia destacada"
            className="absolute -right-10 bottom-0 hidden h-full w-auto max-w-none object-cover opacity-30 md:block"
            priority
          />
        </div>

        <ExplorerFiltersSection experiences={experiences} />

        <Footer />
      </section>

      <MobileBottomNav />
    </main>
  );
}
