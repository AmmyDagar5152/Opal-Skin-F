"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MENU_DATA = {
  SHOP: {
    label: "Shop",
    heading: "Shop Skincare",
    items: [
      {
        label: "All Skincare",
        href: "/shop",
      },
      {
        label: "New Arrivals",
        href: "/shop?sort=new",
      },
      {
        label: "Bestsellers",
        href: "/shop?sort=bestsellers",
      },
      {
        label: "Cleansers",
        href: "/shop?category=cleansers",
      },
      {
        label: "Serums",
        href: "/shop?category=serums",
      },
      {
        label: "Moisturisers",
        href: "/shop?category=moisturisers",
      },
      {
        label: "Masks",
        href: "/shop?category=masks",
      },
      {
        label: "Sunscreen",
        href: "/shop?category=sunscreen",
      },
      {
        label: "Eye & Lip",
        href: "/shop?category=eye-lip",
      },
    ],
  },

  CONCERNS: {
    label: "Shop by Concern",
    heading: "Shop by Concern",
    items: [
      {
        label: "Acne & Congestion",
        href: "/collections/blemishes",
      },
      {
        label: "Uneven Tone",
        href: "/collections/uneven-tone",
      },
      {
        label: "Dullness",
        href: "/collections/radiance",
      },
      {
        label: "Dehydration",
        href: "/collections/dehydration",
      },
      {
        label: "Barrier Support",
        href: "/collections/barrier",
      },
      {
        label: "Excess Oil",
        href: "/collections/excess-oil",
      },
      {
        label: "Texture & Pores",
        href: "/collections/texture",
      },
      {
        label: "Fine Lines & Firmness",
        href: "/collections/firmness",
      },
      {
        label: "Daily UV Protection",
        href: "/collections/uv-protection",
      },
    ],
  },

  INGREDIENTS: {
    label: "Shop by Ingredient",
    heading: "Shop by Ingredient",
    items: [
      {
        label: "Niacinamide",
        href: "/ingredients/niacinamide",
      },
      {
        label: "Salicylic Acid",
        href: "/ingredients/salicylic-acid",
      },
      {
        label: "Ceramides",
        href: "/ingredients/ceramides",
      },
      {
        label: "Ectoin",
        href: "/ingredients/ectoin",
      },
      {
        label: "Peptides",
        href: "/ingredients/peptides",
      },
      {
        label: "Bakuchiol",
        href: "/ingredients/bakuchiol",
      },
      {
        label: "Hyaluronic Acid",
        href: "/ingredients/hyaluronic-acid",
      },
      {
        label: "CICA",
        href: "/ingredients/cica",
      },
    ],
  },

  ROUTINES: {
    label: "Routines",
    heading: "Build Your Routine",
    items: [
      {
        label: "AM Routine",
        href: "/routines/am",
      },
      {
        label: "PM Routine",
        href: "/routines/pm",
      },
      {
        label: "Beginner Routine",
        href: "/routines/beginner",
      },
      {
        label: "Barrier Routine",
        href: "/routines/barrier",
      },
      {
        label: "Clarity Routine",
        href: "/routines/clarity",
      },
      {
        label: "Radiance Routine",
        href: "/routines/radiance",
      },
    ],
  },

  EXPLORE: {
    label: "Explore",
    heading: "Explore Opal Morsel",
    items: [
      {
        label: "Build Your Routine",
        href: "/routine-builder",
      },
      {
        label: "The Opal Journal",
        href: "/journal",
      },
      {
        label: "Our Story",
        href: "/about",
      },
      {
        label: "Ritual Sets",
        href: "/collections/sets",
      },
      {
        label: "Gift Cards",
        href: "/gift-cards",
      },
    ],
  },
};

const FEATURED_DATA = {
  SHOP: {
    eyebrow: "THE FORMULATION EDIT",
    title: "CLARIFY",
    subtitle: "Salicylic + Niacinamide Serum",
    description:
      "A considered treatment for congestion and blemish-prone skin.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    href: "/product/salicylic-niacinamide-serum",
  },

  CONCERNS: {
    eyebrow: "THE CONCERN EDIT",
    title: "UNEVEN TONE",
    subtitle: "Explore targeted skincare",
    description:
      "Explore formulations designed around uneven tone and dullness.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    href: "/collections/uneven-tone",
  },

  INGREDIENTS: {
    eyebrow: "THE INGREDIENT EDIT",
    title: "CERAMIDES",
    subtitle: "Support the skin barrier",
    description:
      "Discover formulations built around barrier-supporting ingredients.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
    href: "/ingredients/ceramides",
  },

  ROUTINES: {
    eyebrow: "YOUR SKIN. YOUR ROUTINE.",
    title: "BUILD YOUR ROUTINE",
    subtitle: "A simpler way to understand your skin",
    description:
      "Discover an AM + PM routine designed around your skin concerns.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
    href: "/routine-builder",
  },

  EXPLORE: {
    eyebrow: "THE OPAL JOURNAL",
    title: "UNDERSTAND YOUR SKIN",
    subtitle: "Knowledge before more products",
    description:
      "Explore ingredients, routines and modern skincare.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
    href: "/journal",
  },
};

export default function SkincareMenu({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("SHOP");

  if (!isOpen) return null;

  const featured = FEATURED_DATA[activeTab];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]"
      />

      {/* Drawer */}
      <aside className="outfit fixed left-0 top-0 z-50 h-screen w-[min(820px,92vw)] bg-[#fdfdfb] shadow-2xl">
        {/* Header */}
        <div className="flex h-[74px] items-center justify-between border-b border-black/15 px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-black/45">
              OPAL MORSEL
            </p>

            <h2 className="mt-1 text-[17px] font-medium tracking-tight">
              Skincare
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center text-xl font-light transition-opacity hover:opacity-50"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex h-[calc(100vh-74px)]">
          {/* LEFT NAVIGATION */}
          <div className="w-[48%] overflow-y-auto px-8 py-8">
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-black/45">
              Discover
            </p>

            {/* MAIN MENU */}
            <div className="space-y-1">
              {Object.entries(MENU_DATA).map(([key, menu]) => {
                const isActive = activeTab === key;

                return (
                  <div key={key}>
                    {/* Parent item */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveTab(key)}
                      onClick={() => setActiveTab(key)}
                      className={`group flex w-full items-center justify-between py-2 text-left text-[16px] transition-all ${
                        isActive
                          ? "font-medium"
                          : "font-normal text-black/80 hover:text-black"
                      }`}
                    >
                      <span>{menu.label}</span>

                      <span
                        className={`text-sm transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                        }`}
                      >
                        →
                      </span>
                    </button>

                    {/* INLINE SUBMENU */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-3 border-l border-black/15 py-2 pl-4">
                          <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-black/40">
                            {menu.heading}
                          </p>

                          <div className="space-y-2.5">
                            {menu.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-center justify-between text-[13px] text-black/70 transition-all hover:text-black"
                              >
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                  {item.label}
                                </span>

                                <span className="text-[11px] opacity-0 transition-opacity group-hover:opacity-50">
                                  →
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* GIFTING */}
            <div className="mt-8 border-t border-black/15 pt-6">
              <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-black/45">
                Gifting
              </p>

              <div className="space-y-3">
                <Link
                  href="/collections/sets"
                  onClick={onClose}
                  className="group flex items-center justify-between text-[14px]"
                >
                  <span>Ritual Sets</span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-50">
                    →
                  </span>
                </Link>

                <Link
                  href="/gift-cards"
                  onClick={onClose}
                  className="group flex items-center justify-between text-[14px]"
                >
                  <span>Gift Cards</span>
                  <span className="opacity-0 transition-opacity group-hover:opacity-50">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT FEATURED PANEL */}
          <div className="hidden w-[52%] flex-col border-l border-black/15 bg-[#f5f3ee] md:flex">
            {/* Featured image */}
            <Link
              href={featured.href}
              onClick={onClose}
              className="group relative mx-6 mt-6 block h-[330px] overflow-hidden"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="mb-2 text-[9px] uppercase tracking-[0.25em] opacity-80">
                  {featured.eyebrow}
                </p>

                <h3 className="text-2xl font-medium tracking-tight">
                  {featured.title}
                </h3>

                <p className="mt-1 text-sm">
                  {featured.subtitle}
                </p>
              </div>
            </Link>

            {/* Description */}
            <div className="px-6 pt-6">
              <p className="max-w-[310px] text-sm leading-6 text-black/65">
                {featured.description}
              </p>

              <Link
                href={featured.href}
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-2 border-b border-black pb-1 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
              >
                Discover
                <span>→</span>
              </Link>
            </div>

            {/* Bottom brand message */}
            <div className="mt-auto border-t border-black/10 px-6 py-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                OPAL MORSEL
              </p>

              <p className="mt-2 max-w-[280px] text-xs leading-5 text-black/55">
                Modern skincare, considered for the realities of Indian skin.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}