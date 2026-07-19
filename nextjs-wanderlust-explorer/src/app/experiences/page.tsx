import Link from "next/link";
import MobileBottomNav from "@/components/mobile-bottom-nav";

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#f8f9ff] px-6 py-20 pb-24 sm:px-10 md:pb-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#d9e3f6] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#0050cb]">Explorer</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#121c2a] sm:text-4xl">
          Experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#424656]">
          Aqui se mostrara el listado completo de experiencias con busqueda y filtros sin recarga.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0066ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0050cb]"
        >
          Volver al inicio
        </Link>
      </div>

      <MobileBottomNav />
    </main>
  );
}
