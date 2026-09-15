"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { skincareByCategory } from "@/data/skincare";
import ProductFilters from "@/components/allcomp/ProductFilters";
import ProductCard from "@/components/opal/ProductCard";

const categories = [
  {
    name: "All",
    slug: "",
  },
  {
    name: "Cleansers",
    slug: "cleansers",
  },
  {
    name: "Serums",
    slug: "serums",
  },
  {
    name: "Moisturisers",
    slug: "moisturisers",
  },
  {
    name: "Masks",
    slug: "masks",
  },
  {
    name: "Sunscreen",
    slug: "sunscreen",
  },
  {
    name: "Eye & Lip",
    slug: "eye-lip",
  },
];

export default function ShopPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    concern: "",
    ingredient: "",
    skinType: "",
  });

  const [sort, setSort] = useState("featured");

  /*
  |--------------------------------------------------------------------------
  | ALL PRODUCTS
  |--------------------------------------------------------------------------
  */

  const allProducts = useMemo(() => {
    return Object.values(skincareByCategory || {})
      .flat()
      .filter(Boolean);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | FILTER + SORT
  |--------------------------------------------------------------------------
  */

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];

    const {
      category,
      concern,
      ingredient,
      skinType,
    } = selectedFilters;

    // Category
    if (category) {
      products = products.filter(
        (product) =>
          product.category === category ||
          product.categorySlug === category
      );
    }

    // Concern
    if (concern) {
      products = products.filter((product) =>
        product.concerns?.includes(concern)
      );
    }

    // Ingredient
    if (ingredient) {
      products = products.filter((product) =>
        product.ingredients?.includes(ingredient)
      );
    }

    // Skin Type
    if (skinType) {
      products = products.filter((product) =>
        product.skinTypes?.includes(skinType)
      );
    }

    // Sort
    if (sort === "price-low") {
      products.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }

    if (sort === "newest") {
      products.sort(
        (a, b) =>
          new Date(b.createdAt || 0) -
          new Date(a.createdAt || 0)
      );
    }

    return products;
  }, [allProducts, selectedFilters, sort]);

  /*
  |--------------------------------------------------------------------------
  | CATEGORY CHANGE
  |--------------------------------------------------------------------------
  */

  const handleCategoryChange = (slug) => {
    setSelectedFilters((prev) => ({
      ...prev,
      category: slug,
    }));
  };

  const activeCategory =
    categories.find(
      (item) => item.slug === selectedFilters.category
    )?.name || "All Skincare";

  return (
    <main className="min-h-screen bg-[#f5f3ed]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[65vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg"
          alt="Opal Morsel Skincare"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex min-h-[65vh] items-center justify-center px-5 text-center text-white">
          <div className="max-w-3xl">

            <p className="outfit text-[10px] uppercase tracking-[0.4em] text-white/70 md:text-xs">
              Opal Morsel · Skincare
            </p>

            <h1 className="desc-font mt-5 text-5xl tracking-wide md:text-7xl">
              The Skincare Edit
            </h1>

            <p className="outfit mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
              Modern formulations, thoughtfully developed for
              everyday skin.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <section className="border-b border-black/10 bg-[#f7f6f3]">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-5 md:justify-center md:px-10">

          {categories.map((category) => {
            const active =
              selectedFilters.category === category.slug;

            return (
              <button
                key={category.slug || "all"}
                type="button"
                onClick={() =>
                  handleCategoryChange(category.slug)
                }
                className={`relative shrink-0 outfit text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  active
                    ? "text-[#101c2c]"
                    : "text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {category.name}

                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-[#101c2c]" />
                )}
              </button>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-[#f7f6f3] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="outfit text-[9px] uppercase tracking-[0.35em] text-neutral-400">
              Formulations
            </p>

            <h2 className="desc-font mt-3 text-4xl text-[#101c2c] md:text-5xl">
              Skincare, considered.
            </h2>

            <p className="outfit mt-5 text-sm leading-relaxed text-neutral-500 md:text-base">
              Explore our considered formulations by category,
              concern, ingredient and skin profile.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="bg-[#f7f6f3] px-5 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <ProductFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            sort={sort}
            setSort={setSort}
          />

        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section className="bg-[#f5f3ed] px-5 py-12 md:px-10 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Product Header */}

          <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">

            <div>

              <p className="outfit text-[9px] uppercase tracking-[0.35em] text-neutral-400">
                Opal Morsel
              </p>

              <h2 className="desc-font mt-2 text-2xl text-[#101c2c] md:text-3xl">
                {activeCategory}
              </h2>

            </div>

            <p className="outfit text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              {filteredProducts.length} formulations
            </p>

          </div>

          {/* Product Grid */}

          {filteredProducts.length > 0 ? (

            <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          ) : (

            <div className="flex min-h-[350px] items-center justify-center">

              <p className="outfit text-xs uppercase tracking-[0.25em] text-neutral-400">
                No formulations match your selection.
              </p>

            </div>

          )}

        </div>
      </section>

      {/* =====================================================
          ROUTINE CTA
      ===================================================== */}

      <section className="bg-[#1d1c1a] px-5 py-24 text-white md:py-32">

        <div className="mx-auto max-w-3xl text-center">

          <p className="outfit text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Your Skin, Considered
          </p>

          <h2 className="desc-font mt-5 text-4xl md:text-6xl">
            Not sure where to begin?
          </h2>

          <p className="outfit mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-300">
            Discover a considered routine based on your skin,
            concerns and everyday needs.
          </p>

          <Link
            href="/routine"
            className="mt-8 inline-block border-b border-white pb-2 outfit text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-60"
          >
            Build Your Routine
          </Link>

        </div>

      </section>

    </main>
  );
}