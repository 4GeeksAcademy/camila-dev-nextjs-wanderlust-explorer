import MobileBottomNav from "@/components/MobileBottomNav";
import FavoritesCardsSection from "@/components/FavoritesCardsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-[#e8ebf1] text-[#121c2a]">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 md:px-8 md:pb-14 lg:px-10">
        <div className="rounded-2xl border border-[#d9e3f6] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0b57db]">Explorador</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Favoritos</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#596175] sm:text-base">
            Aquí encuentras las experiencias que marcaste con corazón.
          </p>
        </div>

        <FavoritesCardsSection experiences={experiences} />

        <Footer />
      </section>

      <MobileBottomNav />
    </main>
  );
}
