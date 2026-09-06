"use client";

import Image from "next/image";
import Link from "next/link";

const skinCareCards = [
  {
    title: "The Opal Morsel Difference",
    description: (
      <>
        <span className="font-semibold">
          Opal Morsel believes skincare should be effective, intentional, and
          beautifully simple.
        </span>{" "}
        Our formulations bring together carefully selected active ingredients
        and thoughtful textures to create a refined daily ritual for your skin.
        <br />
        <br />
        From hydration and barrier support to visible radiance, every formula is
        created with a focus on skin health, balance, and lasting results.
      </>
    ),
    button: "DISCOVER OUR PHILOSOPHY",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },

  {
    title: "Meet the Formulations",
    description: (
      <>
        Discover thoughtfully formulated essentials designed around
        high-performance skincare actives.
        <br />
        <br />
        <span className="font-semibold">
          Niacinamide. Hyaluronic Acid. Peptides. Retinol.
        </span>{" "}
        Each ingredient is selected for a purpose — supporting hydration,
        strengthening the skin barrier, improving the appearance of uneven tone,
        and promoting a smoother, more youthful-looking complexion.
      </>
    ),
    button: "SHOP SKINCARE",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },
];

export default function SkinCareDifference() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {skinCareCards.map((card, index) => (
          <div
            key={index}
            className="
              group
              relative
              min-h-[620px]
              md:min-h-[700px]
              overflow-hidden
              bg-[#f5f4f1]
            "
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-white/25" />

            {/* Content */}
            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-[620px]
                md:min-h-[700px]
                flex-col
                p-8
                md:p-10
                lg:p-10
              "
            >
              {/* Heading */}
              <div className="max-w-[650px]">
                <h2
                  className="
                    text-2xl
                    md:text-3xl
                    lg:text-[32px]
                    font-light
                    tracking-tight
                    text-black
                  "
                >
                  {card.title}
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-[620px]
                    text-base
                    md:text-base
                    leading-[1.5]
                    tracking-wide
                    text-gray-700
                    outfit
                  "
                >
                  {card.description}
                </p>

                {/* Button */}
                <Link
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    mt-8
                    min-w-[230px]
                    border
                    border-black
                    bg-white/40
                    px-7
                    py-3
                    text-xs
                    font-semibold
                    tracking-wider
                    text-black
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  {card.button}
                </Link>
              </div>

              {/* Bottom Label */}
              <div className="mt-auto pt-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700">
                  Opal Morsel · Modern Skin Science
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
