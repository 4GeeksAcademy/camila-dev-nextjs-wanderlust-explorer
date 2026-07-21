"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../images/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isExperiences = pathname.startsWith("/experiences");
  const isFavorites = pathname.startsWith("/favorites");
  const isProfile = pathname.startsWith("/profile");

  return (
    <header className="sticky top-0 z-40">
      <div className="w-full  bg-white/95 px-4 py-2 shadow-[0_6px_18px_rgba(15,23,42,0.12)] backdrop-blur-md sm:px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2">
            <Image src={logo} alt="Logotipo de Voyage" width={20} height={20} className="rounded-full" />
            <span className="text-base font-bold text-[#0f4fd8]">Voyage</span>
          </div>

          <nav className="hidden items-center justify-start gap-8 text-[13px] font-medium text-[#415271] md:ml-8 md:mr-auto md:flex lg:ml-10">
            <Link href="/" className={isHome ? "text-[#0b57db]" : "transition-colors hover:text-[#0b57db]"}>
              Home
            </Link>
            <Link href="/experiences" className={isExperiences ? "text-[#0b57db]" : "transition-colors hover:text-[#0b57db]"}>
              Explorador
            </Link>
            <Link href="/favorites" className={isFavorites ? "text-[#0b57db]" : "transition-colors hover:text-[#0b57db]"}>
              Favoritos
            </Link>
            <Link href="/profile" className={isProfile ? "text-[#0b57db]" : "transition-colors hover:text-[#0b57db]"}>
              Perfil
            </Link>
          </nav>

          <div className="flex items-center gap-2 text-[#4b5565]">
            <button
              aria-label="Buscar"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-[#eef3ff]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>

            <Link
              href="/experiences"
              className="hidden rounded-md bg-[#0b57db] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0050cb] md:inline-flex"
            >
              Iniciar sesión
            </Link>

            <details className="group relative md:hidden">
              <summary
                aria-label="Abrir menú"
                className="inline-flex h-8 w-8 list-none items-center justify-center rounded-md transition-colors hover:bg-[#eef3ff] [&::-webkit-details-marker]:hidden"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              </summary>

              <div className="invisible absolute right-0 top-10 w-52 rounded-xl border border-[#d9e3f6] bg-white p-2 opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition group-open:visible group-open:opacity-100">
                <nav className="flex flex-col">
                  <Link
                    href="/"
                    className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#eef3ff] ${
                      isHome ? "text-[#0b57db]" : "text-[#415271]"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/experiences"
                    className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#eef3ff] ${
                      isExperiences ? "text-[#0b57db]" : "text-[#415271]"
                    }`}
                  >
                    Explorador
                  </Link>
                  <Link
                    href="/favorites"
                    className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#eef3ff] ${
                      isFavorites ? "text-[#0b57db]" : "text-[#415271]"
                    }`}
                  >
                    Favoritos
                  </Link>
                  <Link
                    href="/profile"
                    className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-[#eef3ff] ${
                      isProfile ? "text-[#0b57db]" : "text-[#415271]"
                    }`}
                  >
                    Perfil
                  </Link>
                  <Link
                    href="/experiences"
                    className="mt-1 rounded-lg bg-[#0b57db] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#0050cb]"
                  >
                    Iniciar sesión
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
