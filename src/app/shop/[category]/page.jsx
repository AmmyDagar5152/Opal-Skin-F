"use client";

import React from "react";

import { skincareCategories } from "@/data/categories";
import CollectionProducts from "@/components/reuseComp/CollectionProducts";

export default function CategoryPage({ params }) {
  const { category } = React.use(params);

  const data = skincareCategories.find(
    (item) => item.slug === category
  );

  if (!data) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#f5f3ed]">
        <p className="outfit text-xs uppercase tracking-[0.25em] text-neutral-500">
          Category not found
        </p>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f5f3ed]">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] overflow-hidden md:h-[65vh]">

        <img
          src={data.image}
          alt={data.name}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 text-white md:px-10 md:pb-16 lg:px-14">

          <p className="outfit text-[10px] uppercase tracking-[0.4em] text-white/70 md:text-xs">
            Shop by Category
          </p>

          <h1 className="desc-font mt-4 text-5xl md:text-7xl">
            {data.name}
          </h1>

          <p className="outfit mt-5 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
            {data.description}
          </p>

        </div>

      </section>

      {/* Category Navigation */}
      <div className="flex overflow-x-auto border-b border-neutral-300 bg-[#f5f3ed]">

        {skincareCategories.map((item) => (
          <a
            key={item.slug}
            href={`/shop/${item.slug}`}
            className={`outfit shrink-0 border-r border-neutral-300 px-5 py-5 text-[10px] uppercase tracking-[0.2em] md:px-7 ${
              item.slug === category
                ? "bg-neutral-900 text-white"
                : "text-neutral-500 hover:bg-white hover:text-neutral-900"
            }`}
          >
            {item.name}
          </a>
        ))}

      </div>

      {/* Products */}
      <CollectionProducts category={category} />

    </main>
  );
}