"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "CLEANSERS",
    subtitle: "Elevated care for your daily skin ritual",
    slug: "cleansers",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
  {
    title: "SERUMS",
    subtitle: "Targeted formulations for considered skin care",
    slug: "serums",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },
  {
    title: "MOISTURISERS",
    subtitle: "Daily hydration for softer, healthier-looking skin",
    slug: "moisturisers",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
  {
    title: "SUNSCREEN",
    subtitle: "Everyday protection for modern Indian skin",
    slug: "sunscreen",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
  },
  {
    title: "MASKS",
    subtitle: "Targeted rituals for elevated self-care",
    slug: "masks",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
  },
];

export default function ShopByCategory() {
  const containerRef = useRef(null);

  const x = useMotionValue(0);

  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
   * Number of cards visible at once
   */
  const [visibleCards, setVisibleCards] = useState(4);

  /*
   * Gap between cards
   */
  const gap = 20;

  /*
   * Responsive visible cards
   */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  /*
   * Container width
   */
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setContainerWidth(width);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /*
   * Card width
   */
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - gap * (visibleCards - 1)) / visibleCards
      : 0;

  /*
   * Maximum index we can move to
   */
  const maxIndex = Math.max(
    0,
    categories.length - visibleCards
  );

  /*
   * Move carousel
   */
  const moveToIndex = (index) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, maxIndex)
    );

    setCurrentIndex(nextIndex);

    animate(
      x,
      -(nextIndex * (cardWidth + gap)),
      {
        type: "spring",
        stiffness: 260,
        damping: 30,
        mass: 0.8,
      }
    );
  };

  /*
   * Drag end
   */
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    /*
     * Strong swipe
     */
    if (velocity < -500 || offset < -cardWidth * 0.2) {
      moveToIndex(currentIndex + 1);
      return;
    }

    if (velocity > 500 || offset > cardWidth * 0.2) {
      moveToIndex(currentIndex - 1);
      return;
    }

    /*
     * Otherwise snap back
     */
    moveToIndex(currentIndex);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      {/* Heading */}
      <div className="mb-10 px-5 text-center md:mb-14 md:px-10">
        <p className="outfit mb-3 text-[10px] uppercase tracking-[0.35em] text-neutral-500 md:text-xs">
          Explore The Collection
        </p>

        <h2 className="desc-font text-3xl tracking-wide text-neutral-900 md:text-5xl">
          Shop by Category
        </h2>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="relative overflow-hidden px-5 md:px-10 lg:px-14"
      >
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{
            x,
            gap: `${gap}px`,
          }}
          drag="x"
          dragConstraints={{
            left:
              -(Math.max(0, categories.length - visibleCards)) *
              (cardWidth + gap),
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          {categories.map((category) => (
            <Link
             href={`/shop/${category.slug}`}
              key={category.slug}
              draggable={false}
              className="group relative block shrink-0 overflow-hidden"
              style={{
                width:
                  cardWidth > 0
                    ? `${cardWidth}px`
                    : `calc((100% - ${(visibleCards - 1) * gap}px) / ${visibleCards})`,
                aspectRatio: "4 / 5",
              }}
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                draggable={false}
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="
                  (max-width: 639px) 85vw,
                  (max-width: 1023px) 45vw,
                  25vw
                "
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                <h3 className="desc-font text-2xl tracking-wide md:text-3xl">
                  {category.title}
                </h3>

                <p className="outfit mt-2 max-w-[250px] text-xs font-light opacity-90 md:text-sm">
                  {category.subtitle}
                </p>

                <div className="outfit mt-4 inline-flex translate-y-2 items-center gap-2 border-b border-white/70 pb-1 text-[10px] uppercase tracking-[0.25em] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* Previous */}
        <button
          type="button"
          onClick={() => moveToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          aria-label="Previous categories"
          className={`absolute left-7 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-all md:left-12 ${
            currentIndex === 0
              ? "pointer-events-none opacity-0"
              : "opacity-100 hover:bg-black/40"
          }`}
        >
          ←
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={() => moveToIndex(currentIndex + 1)}
          disabled={currentIndex === maxIndex}
          aria-label="Next categories"
          className={`absolute right-7 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-all md:right-12 ${
            currentIndex === maxIndex
              ? "pointer-events-none opacity-0"
              : "opacity-100 hover:bg-black/40"
          }`}
        >
          →
        </button>
      </div>

      {/* Progress */}
      <div className="mt-7 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => moveToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[2px] transition-all duration-500 ${
              currentIndex === index
                ? "w-10 bg-black"
                : "w-5 bg-black/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}