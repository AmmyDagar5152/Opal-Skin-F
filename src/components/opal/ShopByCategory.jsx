"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Skin",
    subtitle: "Elevated care for your daily skin ritual",
    slug: "skin",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
  {
    title: "Hair & Scalp",
    subtitle: "Rooted in thoughtful scalp & hair care",
    slug: "hair-scalp",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },
  {
    title: "Lip Care",
    subtitle: "Nourishment for softer, healthier-looking lips",
    slug: "lip-care",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
  {
    title: "Rituals",
    subtitle: "Masks, oils & treatments for elevated self-care",
    slug: "rituals",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
  },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-white py-16 md:py-24">

      {/* Heading */}
      <div className="px-5 md:px-10 text-center mb-10 md:mb-14">

        <p className="outfit text-[10px] md:text-xs tracking-[0.35em] uppercase text-neutral-500 mb-3">
          Explore The Collection
        </p>

        <h2 className="desc-font text-3xl md:text-5xl tracking-wide text-neutral-900">
          Shop by Category
        </h2>

      </div>

      {/* Cards */}
      <div
        className="
          flex
          md:grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-4
          md:gap-5
          overflow-x-auto
          md:overflow-visible
          px-5
          md:px-10
          lg:px-14
          pb-5
          md:pb-0
          snap-x
          snap-mandatory
          scrollbar-hide
        "
      >
        {categories.map((category) => (
          <Link
            href={`/shop?category=${category.slug}`}
            key={category.slug}
            className="
              group
              relative
              min-w-[78vw]
              sm:min-w-[48vw]
              md:min-w-0
              aspect-[4/5]
              overflow-hidden
              snap-start
            "
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="
                object-cover
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-105
              "
              sizes="
                (max-width: 767px) 80vw,
                (max-width: 1023px) 50vw,
                25vw
              "
            />

            {/* Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/10
                to-transparent
              "
            />

            {/* Content */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                p-6
                md:p-7
                text-white
              "
            >
              <h3 className="desc-font text-2xl md:text-3xl tracking-wide">
                {category.title}
              </h3>

              <p className="outfit text-xs md:text-sm font-light mt-2 opacity-90 max-w-[250px]">
                {category.subtitle}
              </p>

              <div
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  outfit
                  text-[10px]
                  tracking-[0.25em]
                  uppercase
                  border-b
                  border-white/70
                  pb-1
                  opacity-0
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >
                Explore
                <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}