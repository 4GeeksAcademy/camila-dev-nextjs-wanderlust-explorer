"use client";

import Image from "next/image";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFavorites } from "@/components/FavoritesProvider";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  const summaryCards = [
    {
      title: "Favoritos",
      value: favoriteIds.length,
      subtitle: "Total guardado",
      icon: "❤",
      iconClassName: "bg-[#ffe7ea] text-[#d84b67]",
      barClassName: "bg-[#f9a4b5]",
    },
    {
      title: "Completados",
      value: 8,
      subtitle: "Viajes realizados",
      icon: "✓",
      iconClassName: "bg-[#e3f7ee] text-[#2f9d70]",
      barClassName: "bg-[#8ed8ba]",
    },
    {
      title: "Reseñas",
      value: 2,
      subtitle: "Impacto global",
      icon: "★",
      iconClassName: "bg-[#fff4df] text-[#d29a2a]",
      barClassName: "bg-[#f2cd7a]",
    },
  ];

  const quickActions = ["Editar perfil", "Preferencias", "Soporte", "Cerrar sesión"];

  const overviewCards = [
    {
      title: "Favoritos",
      value: favoriteIds.length,
      subtitle: "Experiencias en lista de deseos",
      icon: "❤",
      iconClassName: "bg-[#e9f7ee] text-[#28935f]",
    },
    {
      title: "Viajes completados",
      value: 8,
      subtitle: "Viajes completados",
      icon: "⦿",
      iconClassName: "bg-[#e8f1ff] text-[#2f69d9]",
    },
    {
      title: "Reseñas escritas",
      value: 2,
      subtitle: "Reseñas escritas",
      icon: "★",
      iconClassName: "bg-[#fff4e2] text-[#c58c22]",
    },
  ];

  const settingsRows = [
    {
      title: "Preferencias",
      description: "Idioma, notificaciones y tema visual",
      icon: "⚙",
    },
    {
      title: "Seguridad y privacidad",
      description: "Contraseña y autenticación de la cuenta",
      icon: "◉",
    },
    {
      title: "Soporte",
      description: "Centro de ayuda y contacto con el equipo",
      icon: "⚑",
    },
  ];

  return (
    <main className="min-h-screen bg-[#eceef3] text-[#121c2a]">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-2 pb-24 pt-3 sm:px-4 md:px-6 md:pb-14 lg:px-8">
        <div className="rounded-[22px] border border-[#d8ddea] bg-[#f7f8fc] p-2 shadow-[0_10px_25px_rgba(16,24,40,0.08)] md:rounded-[26px] md:p-3">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-3">
            <aside className="space-y-2.5">
              <article className="rounded-2xl border border-[#dce2f0] bg-white p-4 text-center shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border-4 border-[#e7eeff] bg-[#e8edf8]">
                  <Image src="/images/profile-woman.webp" alt="Alex Explorador" fill priority className="object-cover" />
                  <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-[#0b57db]" />
                </div>

                <h1 className="mt-3 text-lg font-bold leading-tight">Alex Explorador</h1>
                <p className="mt-1 text-xs text-[#607089]">Málaga, España</p>

                <p className="mx-auto mt-3 max-w-[230px] text-xs leading-5 text-[#6f7b90]">
                  Amante de las montañas y la comida local. Siempre en busca de la siguiente aventura.
                </p>

                <button className="mt-4 w-full rounded-lg bg-[#0b57db] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0848b3]">
                  Editar perfil
                </button>

                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[#ebeff7] pt-3 text-center">
                  <div>
                    <p className="text-sm font-bold text-[#0b57db]">24</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#7a869a]">Publicaciones</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0b57db]">1.2k</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#7a869a]">Seguidores</p>
                  </div>
                </div>
              </article>

              {summaryCards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-[#dce2f0] bg-white p-3 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-xs ${item.iconClassName}`}>
                      {item.icon}
                    </span>
                    <span className="text-[10px] text-[#8b96aa]">{item.subtitle}</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-[#24344c]">
                    {item.value} {item.title}
                  </p>
                  <div className="mt-2 h-[2px] w-full rounded-full bg-[#edf2fb]">
                    <div className={`h-[2px] rounded-full ${item.barClassName}`} style={{ width: "38%" }} />
                  </div>
                </article>
              ))}

              <article className="rounded-xl border border-[#dce2f0] bg-white p-3 shadow-[0_8px_20px_rgba(15,23,42,0.05)]">
                <ul className="space-y-1.5 text-sm text-[#2f3f57]">
                  {quickActions.map((action) => (
                    <li
                      key={action}
                      className="flex items-center justify-between rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-[#e4ebfb] hover:bg-[#f4f7fd]"
                    >
                      <span>{action}</span>
                      <span aria-hidden="true">›</span>
                    </li>
                  ))}
                </ul>
              </article>
            </aside>

            <section className="hidden rounded-2xl border border-[#dce2f0] bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)] lg:block lg:p-5">
              <h2 className="text-sm font-semibold text-[#66758f]">Resumen del panel</h2>

              <div className="mt-3 grid grid-cols-3 gap-3">
                {overviewCards.map((item) => (
                  <article key={item.title} className="rounded-xl border border-[#e5ebf8] bg-[#f9fbff] p-3">
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md text-[10px] ${item.iconClassName}`}>
                        {item.icon}
                      </span>
                      <p className="text-[11px] text-[#7f8ca2]">{item.title}</p>
                    </div>
                    <p className="mt-2 text-2xl font-bold text-[#24344c]">{item.value}</p>
                    <p className="mt-1 text-[11px] text-[#6f7d93]">{item.subtitle}</p>
                  </article>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-[#e5ebf8] bg-[#fbfcff] p-4">
                <h3 className="text-sm font-semibold text-[#2d3d56]">Configuración de cuenta</h3>

                <ul className="mt-3 divide-y divide-[#e7edf8] text-sm text-[#3e4f68]">
                  {settingsRows.map((row) => (
                    <li key={row.title} className="flex items-center justify-between py-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef3ff] text-xs text-[#4968a9]">
                          {row.icon}
                        </span>
                        <div>
                          <p className="font-medium">{row.title}</p>
                          <p className="text-xs text-[#7a869a]">{row.description}</p>
                        </div>
                      </div>
                      <span aria-hidden="true">›</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="rounded-lg border border-[#ffd3d3] bg-[#fff1f1] px-4 py-2 text-xs font-semibold text-[#cc4b4b] transition-colors hover:bg-[#ffe6e6]">
                  Cerrar sesión
                </button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </section>

          
          
      <MobileBottomNav />
    </main>
  );
}