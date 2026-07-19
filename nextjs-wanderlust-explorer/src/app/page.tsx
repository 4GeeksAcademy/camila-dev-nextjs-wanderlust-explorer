import Image from "next/image";
import Link from "next/link";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const categories = [
  { name: "Aventura", image: "/images/cat-adventure.jpg" },
  { name: "Cultura", image: "/images/cat-culture.jpg" },
];

const experiences = [
  {
    title: "Paseo en gondola al atardecer y cena",
    location: "Venecia, Italia",
    duration: "3 horas",
    price: "$145",
    rating: "4.9 (128 reseñas)",
    image: "/images/exp-1.jpg",
  },
  {
    title: "Clase magistral: sushi en Tokio",
    location: "Tokio, Japón",
    duration: "4 horas",
    price: "$210",
    rating: "5.0 (84 reseñas)",
    image: "/images/exp-2.jpg",
  },
  {
    title: "Vuelo al amanecer en Capadocia",
    location: "Goreme, Turquía",
    duration: "2 horas",
    price: "$180",
    rating: "4.8 (312 reseñas)",
    image: "/images/exp-3.jpg",
  },
  {
    title: "Meditación en lago alpino",
    location: "Interlaken, Suiza",
    duration: "5 horas",
    price: "$95",
    rating: "4.9 (95 reseñas)",
    image: "/images/exp-4.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-[#e8ebf1] text-[#121c2a]">
      <Navbar />

      <section className="relative h-[78vh] min-h-[540px] w-full overflow-hidden md:min-h-[620px] lg:min-h-[680px]">
        <Image
          src="/images/hero-coast.jpg"
          alt="Vista costera al atardecer"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-4 md:px-8 lg:px-10">
            <div className="mx-auto max-w-[340px] text-center text-white sm:max-w-[520px] md:mx-0 md:max-w-2xl md:text-left">
              <h1 className="text-4xl font-bold leading-10 tracking-tight sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Descubre experiencias
                <br />
                extraordinarias
              </h1>
              <p className="mx-auto mt-3 max-w-[300px] text-sm leading-5 text-white/80 sm:max-w-[460px] sm:text-base sm:leading-6 md:mx-0 md:max-w-[560px]">
                Reserva tours culturales únicos, escapadas al aire libre y momentos memorables para toda la vida.
              </p>
              <Link
                href="/experiences"
                className="mt-6 inline-flex rounded-xl bg-[#0b57db] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(11,87,219,0.45)] transition-colors hover:bg-[#0050cb] sm:px-8 sm:py-3.5"
              >
                Explorar experiencias
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto min-h-screen w-full max-w-7xl bg-[#e8ebf1] pb-24 md:pb-10">

        <section className="px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
          <h2 className="text-2xl font-semibold">Explora por categoría</h2>
          <p className="mt-1 text-sm text-[#596175]">Encuentra tu próxima pasión</p>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <article key={category.name} className="relative h-40 overflow-hidden rounded-xl sm:h-48 lg:h-52">
                <Image src={category.image} alt={category.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/65" />
                <div className="absolute inset-x-0 bottom-3 flex flex-col items-center text-white">
                  <span className="mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/70 bg-black/20 text-xs">
                    ○
                  </span>
                  <p className="text-sm font-semibold">{category.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Experiencias populares</h2>
              <p className="mt-1 text-sm text-[#596175]">Seleccionadas por nuestros expertos locales</p>
            </div>
            <Link href="/experiences" className="text-sm font-medium text-[#0b57db]">
              Ver todas &gt;
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {experiences.map((experience) => (
              <article key={experience.title} className="overflow-hidden rounded-xl bg-[#f1f4f9] p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="relative h-36 overflow-hidden rounded-lg sm:h-44">
                  <Image src={experience.image} alt={experience.title} fill className="object-cover" />
                  <button
                    aria-label="Favorito"
                    className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-sm text-[#7a8091]"
                  >
                    ♡
                  </button>
                </div>

                <div className="px-1 pb-1 pt-3">
                  <p className="text-xs text-[#5d6372]">☆ {experience.rating}</p>
                  <h3 className="mt-1 text-[17px] font-semibold leading-6">{experience.title}</h3>
                  <p className="mt-1 text-sm text-[#5d6372]">
                    {experience.location} • {experience.duration}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-[#6b7280]">
                      Desde <span className="font-semibold text-[#0b57db]">{experience.price}</span>
                    </p>
                    <Link
                      href="/experiences"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d7e5ff] text-lg text-[#0b57db]"
                    >
                      +
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pt-8 sm:px-6 md:px-8 lg:px-10">
          <div className="rounded-2xl bg-[#0b57db] px-6 py-8 text-center text-white shadow-[0_10px_30px_rgba(11,87,219,0.38)] md:px-10 md:py-10">
            <h2 className="text-3xl font-bold leading-9">Inspira tu próximo viaje</h2>
            <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-blue-100 md:max-w-xl md:text-base">
              Únete a más de 50,000 viajeros que reciben guías semanales de destinos únicos alrededor del mundo.
            </p>

            <div className="mt-5 space-y-2 md:mx-auto md:flex md:max-w-xl md:items-center md:gap-2 md:space-y-0">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 text-sm text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/45"
              />
              <button className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0b57db] transition-colors hover:bg-[#ecf2ff] md:w-auto md:shrink-0 md:px-6">
                Suscribirme
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <MobileBottomNav />
    </main>
  );
}
