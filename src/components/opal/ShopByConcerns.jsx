"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const concerns = [
  {
    title: "Uneven Tone",
    description: "For a brighter, more even-looking complexion",
    slug: "uneven-tone",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    product: "Salicylic + Niacinamide Serum",
  },

  {
    title: "Blemishes & Congestion",
    description: "For breakout-prone and congested skin",
    slug: "blemishes",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    product: "Salicylic + Niacinamide Serum",
  },

  {
    title: "Excess Oil",
    description: "For oily and combination skin",
    slug: "excess-oil",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    product: "Clay & Peptide Clarifying Mask",
  },

  {
    title: "Dehydrated Skin",
    description: "For skin that feels dry, tight or depleted",
    slug: "dehydration",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    product: "CICA + Hyaluronic Hydration Mask",
  },

  {
    title: "Barrier Support",
    description: "For skin that needs comfort and nourishment",
    slug: "barrier",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    product: "Ceramide + Ectoin Barrier Cream",
  },

  {
    title: "Fine Lines & Firmness",
    description: "For smoother, firmer-looking skin",
    slug: "firmness",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    product: "Copper Peptide + Bakuchiol Night Cream",
  },

  {
    title: "Dullness & Radiance",
    description: "For skin that looks tired or lacklustre",
    slug: "radiance",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    product: "Fermented Honey Glow Cleanser",
  },

  {
    title: "Daily UV Protection",
    description: "Everyday protection for your skincare ritual",
    slug: "uv-protection",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    product: "SPF 50+ Tinted Sunscreen",
  },
];

export default function ShopByConcerns() {
  return (
    <section className="w-full bg-[#f7f6f3] py-20 md:py-28">

      {/* Header */}
      <div className="max-w-3xl mx-auto px-5 text-center">

        <p className="outfit text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-500">
          Skincare, Considered
        </p>

        <h2 className="desc-font text-4xl md:text-6xl tracking-wide mt-3 text-neutral-900">
          Shop by Concerns
        </h2>

        <p className="outfit text-sm md:text-base text-neutral-500 leading-relaxed mt-5">
          Thoughtfully considered formulations for the concerns that matter
          most to your skin.
        </p>

      </div>

      {/* Grid */}
      <div className="mt-12 md:mt-16 px-5 md:px-10 lg:px-14">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-x-5
            gap-y-12
          "
        >
          {concerns.map((concern) => (
            <Link
              key={concern.slug}
              href={`/shop?concern=${concern.slug}`}
              className="group"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={concern.image}
                  alt={concern.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 639px) 90vw,
                    (max-width: 1023px) 45vw,
                    25vw
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/10
                    group-hover:bg-black/25
                    transition-colors
                    duration-500
                  "
                />

                {/* Arrow */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-9
                    h-9
                    rounded-full
                    bg-white/90
                    flex
                    items-center
                    justify-center
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Image Title */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-5">
                  <h3
                    className="
                      desc-font
                      text-2xl
                      md:text-3xl
                      text-white
                      tracking-wide
                      drop-shadow-lg
                    "
                  >
                    {concern.title}
                  </h3>
                </div>

              </div>

              {/* Text */}
              <div className="pt-4">

                <div className="flex items-start justify-between gap-3">

                  <h4 className="desc-font text-xl text-neutral-900">
                    {concern.title}
                  </h4>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.2}
                    className="
                      mt-1
                      text-neutral-400
                      group-hover:text-neutral-900
                      transition-colors
                    "
                  />

                </div>

                <p className="outfit text-xs md:text-sm text-neutral-500 mt-1 leading-relaxed">
                  {concern.description}
                </p>

                <p className="outfit text-[10px] uppercase tracking-[0.15em] text-neutral-400 mt-3">
                  Explore {concern.product}
                </p>

              </div>

            </Link>
          ))}
        </div>

      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-16">

        <Link
          href="/shop"
          className="
            outfit
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-900
            border-b
            border-neutral-900
            pb-2
            hover:opacity-50
            transition-opacity
          "
        >
          Explore All Skincare
        </Link>

      </div>

    </section>
  );
}