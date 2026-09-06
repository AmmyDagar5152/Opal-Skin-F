"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    number: "01",
    category: "CLARIFY",
    name: "Salicylic + Niacinamide Serum",
    description:
      "A targeted serum concept created for skin prone to excess oil, congestion and an uneven-looking complexion.",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    slug: "salicylic-niacinamide-serum",
  },

  {
    number: "02",
    category: "RESTORE",
    name: "Ceramide + Ectoin Barrier Cream",
    description:
      "A nourishing barrier-focused cream designed for skin that needs comfort, moisture and support.",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    slug: "ceramide-ectoin-barrier-cream",
  },

  {
    number: "03",
    category: "PROTECT",
    name: "SPF 50+ Tinted Sunscreen",
    description:
      "Daily UV protection designed to become an effortless part of your everyday skincare ritual.",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    slug: "spf-50-tinted-sunscreen",
  },

  {
    number: "04",
    category: "HYDRATE",
    name: "CICA + Hyaluronic Hydration Mask",
    description:
      "A hydration-focused mask concept for skin that feels dry, tight or depleted.",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    slug: "cica-hyaluronic-mask",
  },

  {
    number: "05",
    category: "RENEW",
    name: "Copper Peptide + Bakuchiol Night Cream",
    description:
      "A night-care concept focused on smoother, firmer-looking and well-nourished skin.",
    image:
      "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    slug: "copper-peptide-bakuchiol-night-cream",
  },
];

export default function FeaturedProducts() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");

      // First card stays visible
      gsap.set(cards, {
        yPercent: (index) => (index === 0 ? 0 : 100),
      });

      // Create scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",

          // One full viewport of scroll for every product
          end: `+=${(cards.length - 1) * window.innerHeight}`,

          pin: true,
          scrub: 1,
          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        timeline.to(
          card,
          {
            yPercent: 0,
            ease: "none",
            duration: 1,
          },
          index - 1
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
    >

      {/* =========================================
          HEADER
      ========================================= */}
      <div className="px-5 md:px-10 py-20 md:py-28 text-center">

        <p className="outfit text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500">
          The Opal Morsel Edit
        </p>

        <h2 className="desc-font text-4xl md:text-6xl text-neutral-900 mt-3">
          Hero Formulations
        </h2>

        <p className="outfit max-w-2xl mx-auto text-sm md:text-base text-neutral-500 leading-relaxed mt-5">
          A considered edit of formulations created around the essential
          rituals of modern skincare.
        </p>

      </div>


      {/* =========================================
          PINNED PRODUCT STAGE
      ========================================= */}
      <div
        ref={stageRef}
        className="
          relative
          w-full
          h-screen
          overflow-hidden
          bg-white
        "
      >

        {products.map((product, index) => (
          <div
            key={product.slug}
            className="
              product-card
              absolute
              inset-0
              w-full
              h-full
              bg-white
            "
            style={{
              zIndex: index + 1,
            }}
          >

            {/* ===================================
                SPLIT LAYOUT
            =================================== */}
            <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full">

              {/* =================================
                  IMAGE
              ================================= */}
              <div
                className={`
                  relative
                  overflow-hidden
                  bg-[#f4f2ee]
                  h-[50vh]
                  md:h-full
                  md:col-span-7
                  ${
                    index % 2 !== 0
                      ? "md:order-2"
                      : "md:order-1"
                  }
                `}
              >

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    object-center
                  "
                  sizes="
                    (max-width: 767px) 100vw,
                    60vw
                  "
                />

              </div>


              {/* =================================
                  CONTENT
              ================================= */}
              <div
                className={`
                  relative
                  h-[50vh]
                  md:h-full
                  md:col-span-5
                  flex
                  flex-col
                  justify-center
                  px-7
                  py-10
                  md:px-12
                  lg:px-20
                  bg-[#faf9f7]
                  ${
                    index % 2 !== 0
                      ? "md:order-1"
                      : "md:order-2"
                  }
                `}
              >

                {/* =================================
                    TOP META
                ================================= */}
                <div
                  className="
                    absolute
                    top-7
                    left-7
                    right-7
                    md:top-10
                    md:left-12
                    md:right-12
                    lg:left-20
                    lg:right-20
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      outfit
                      text-[10px]
                      md:text-xs
                      tracking-[0.3em]
                      text-neutral-400
                    "
                  >
                    {product.number}
                  </span>

                  <span
                    className="
                      outfit
                      text-[10px]
                      md:text-xs
                      tracking-[0.3em]
                      uppercase
                      text-neutral-400
                    "
                  >
                    {product.category}
                  </span>

                </div>


                {/* =================================
                    PRODUCT DETAILS
                ================================= */}
                <div className="max-w-xl">

                  <p
                    className="
                      outfit
                      text-[10px]
                      md:text-xs
                      uppercase
                      tracking-[0.3em]
                      text-neutral-400
                      mb-5
                    "
                  >
                    Opal Morsel
                  </p>


                  <h3
                    className="
                      desc-font
                      text-3xl
                      sm:text-4xl
                      md:text-4xl
                      lg:text-5xl
                      leading-[1.05]
                      tracking-wide
                      text-neutral-900
                    "
                  >
                    {product.name}
                  </h3>


                  <p
                    className="
                      outfit
                      text-sm
                      md:text-base
                      text-neutral-500
                      leading-relaxed
                      mt-6
                      max-w-md
                    "
                  >
                    {product.description}
                  </p>


                  {/* =================================
                      CTA
                  ================================= */}
                  <Link
                    href={`/product/${product.slug}`}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                      mt-8
                    "
                  >

                    <span
                      className="
                        outfit
                        text-[10px]
                        md:text-xs
                        uppercase
                        tracking-[0.3em]
                        border-b
                        border-neutral-900
                        pb-2
                        text-neutral-900
                      "
                    >
                      Discover Formula
                    </span>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="
                        text-neutral-700
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </Link>

                </div>


                {/* =================================
                    BOTTOM META
                ================================= */}
                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    md:bottom-10
                    md:left-12
                    lg:left-20
                  "
                >

                  <span
                    className="
                      outfit
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-neutral-300
                    "
                  >
                    {product.category} / {product.number}
                  </span>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}
      <div
        className="
          flex
          justify-center
          py-20
          md:py-24
          bg-white
        "
      >

        <Link
          href="/shop"
          className="
            outfit
            text-[10px]
            md:text-xs
            uppercase
            tracking-[0.3em]
            border-b
            border-neutral-900
            pb-2
            text-neutral-900
            hover:opacity-50
            transition-opacity
          "
        >
          Explore The Collection
        </Link>

      </div>

    </section>
  );
}