"use client";

import Image from "next/image";
import Link from "next/link";

const sets = [
  {
    id: 1,
    value: "₹2,999 VALUE",
    save: "SAVE 15%",
    name: "THE BARRIER RITUAL",
    eyebrow: "RESTORE · HYDRATE · PROTECT",
    description:
      "A considered ritual for skin that needs comfort, hydration and barrier support.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    products: [
      "Ceramide + Ectoin Barrier Cream",
      "CICA + Hyaluronic Hydration Mask",
    ],
    href: "/collections/barrier-ritual",
  },
  {
    id: 2,
    value: "₹2,499 VALUE",
    save: "SAVE 12%",
    name: "THE CLARITY RITUAL",
    eyebrow: "CLARIFY · BALANCE · REFINE",
    description:
      "A targeted pairing created for skin prone to excess oil, congestion and blemishes.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.png",
    products: [
      "Salicylic + Niacinamide Serum",
      "Clay + Peptide Clarifying Mask",
    ],
    href: "/collections/clarity-ritual",
  },
  {
    id: 3,
    value: "₹2,799 VALUE",
    save: "SAVE 14%",
    name: "THE RADIANCE RITUAL",
    eyebrow: "GLOW · NOURISH · REVEAL",
    description:
      "A gentle ritual designed to refresh the complexion and bring out its natural luminosity.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    products: [
      "Fermented Honey + Botanical Glow Cleanser",
      "Overnight Brightening Hydrogel Mask",
    ],
    href: "/collections/radiance-ritual",
  },
  {
    id: 4,
    value: "₹3,499 VALUE",
    save: "SAVE 18%",
    name: "THE RENEWAL RITUAL",
    eyebrow: "RENEW · FIRM · NOURISH",
    description:
      "An evening-focused ritual for smoother, firmer-looking and well-nourished skin.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    products: [
      "Copper Peptide + Bakuchiol Night Cream",
      "Overnight Brightening Hydrogel Mask",
    ],
    href: "/collections/renewal-ritual",
  },
  {
    id: 5,
    value: "₹2,699 VALUE",
    save: "SAVE 10%",
    name: "THE DAILY SHIELD",
    eyebrow: "PROTECT · HYDRATE · DEFEND",
    description:
      "Everyday essentials designed around hydration, barrier care and daily UV protection.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.png",
    products: [
      "SPF 50+ Tinted Sunscreen",
      "Ceramide + Ectoin Barrier Cream",
    ],
    href: "/collections/daily-shield",
  },
];

const marqueeSets = [...sets, ...sets];

export default function SaveOnSets() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f7f3] py-20 md:py-28">
      <div className="mb-12 px-6 md:mb-16 md:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="outfit text-[9px] uppercase tracking-[0.45em] text-neutral-500 md:text-[10px]">
              Curated For You
            </p>

            <h2 className="desc-font mt-3 text-4xl tracking-tight text-black md:text-5xl lg:text-6xl">
              Save On Sets
            </h2>

            <p className="outfit mt-4 max-w-lg text-xs leading-relaxed text-neutral-500 md:text-sm">
              Thoughtfully paired rituals, created to bring your skincare
              routine together — beautifully and effortlessly.
            </p>
          </div>

          <Link href="/collections/sets" className="hidden whitespace-nowrap border-b border-black pb-2 outfit text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-50 md:inline-flex">
            Shop All Sets
          </Link>
        </div>

        <Link href="/collections/sets" className="mt-7 inline-flex border-b border-black pb-2 outfit text-[10px] uppercase tracking-[0.3em] md:hidden">
          Shop All Sets
        </Link>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#f8f7f3] to-transparent md:w-28" />

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#f8f7f3] to-transparent md:w-28" />

        <div className="sets-marquee">
          {marqueeSets.map((set, index) => (
            <article key={`${set.id}-${index}`} className="group relative mr-4 w-[84vw] shrink-0 sm:w-[55vw] md:mr-6 md:w-[430px] lg:w-[470px] xl:w-[500px]">
              <div className="relative aspect-[1.05/1] overflow-hidden bg-white">
                <Image
                  src={set.image}
                  alt={set.name}
                  fill
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 55vw, 500px"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-70" />

                <div className="absolute left-4 top-4 bg-black px-4 py-3 text-white md:left-5 md:top-5 md:px-5 md:py-3.5">
                  <p className="outfit whitespace-nowrap text-[9px] tracking-[0.15em] md:text-[10px]">
                    {set.value}
                  </p>

                  <p className="outfit mt-1 text-[8px] tracking-[0.2em] text-neutral-300 md:text-[9px]">
                    {set.save}
                  </p>
                </div>

                <span className="absolute right-5 top-5 outfit text-[9px] tracking-[0.3em] text-white">
                  {String(set.id).padStart(2, "0")}
                </span>

                <Link
                  href={set.href}
                  className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-14"
                  aria-label={`Shop ${set.name}`}
                >
                  <span className="text-lg font-light">↗</span>
                </Link>
              </div>

              <div className="px-1 pt-6 md:pt-7">
                <p className="outfit text-[9px] uppercase tracking-[0.35em] text-neutral-400">
                  {set.eyebrow}
                </p>

                <h3 className="desc-font mt-2 text-2xl tracking-wide text-black md:text-3xl">
                  {set.name}
                </h3>

                <p className="outfit mt-3 max-w-[420px] text-xs leading-relaxed text-neutral-500 md:text-sm">
                  {set.description}
                </p>

                <div className="mt-5 space-y-2">
                  {set.products.map((product) => (
                    <div key={product} className="flex items-center gap-3">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-black" />

                      <span className="outfit text-[10px] text-neutral-600 md:text-[11px]">
                        {product}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={set.href}
                  className="outfit mt-6 inline-flex items-center gap-3 border-b border-black pb-2 text-[9px] uppercase tracking-[0.3em] text-black transition-all duration-300 hover:gap-5 md:text-[10px]"
                >
                  Shop This Ritual
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-4xl px-6 text-center md:mt-28">
        <div className="mx-auto mb-8 h-12 w-px bg-neutral-300" />

        <p className="desc-font text-xl leading-relaxed text-neutral-800 md:text-2xl lg:text-3xl">
          Better together.
          <br />
          Thoughtfully formulated for your ritual.
        </p>
      </div>

      <style jsx>{`
        .sets-marquee {
          display: flex;
          width: max-content;
          padding-left: 48px;
          animation: sets-scroll 45s linear infinite;
        }

        .sets-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes sets-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .sets-marquee {
            padding-left: 20px;
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sets-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}