"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SkincareCollectionHeader({
  data,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="w-full bg-[#f5f3ed]">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[55vh] min-h-[480px] w-full md:h-[620px]">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16">
              <div className="max-w-xl text-white">
                <p className="outfit mb-5 text-[9px] uppercase tracking-[0.45em] text-white/70 md:text-[10px]">
                  Opal Morsel / {data.eyebrow || "Skincare"}
                </p>

                <h1 className="desc-font text-4xl leading-[1.05] tracking-wide md:text-6xl lg:text-7xl">
                  {data.title}
                </h1>

                <p className="outfit mt-6 max-w-lg text-xs leading-6 text-white/85 md:text-sm md:leading-7">
                  {data.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20 lg:px-12">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="outfit text-[9px] uppercase tracking-[0.4em] text-neutral-400">
              Explore the ritual
            </p>

            <h2 className="desc-font mt-2 text-2xl text-[#101c2c] md:text-3xl">
              Shop by category
            </h2>
          </div>

          <ArrowUpRight size={20} strokeWidth={1} className="hidden text-neutral-400 md:block" />
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max gap-8 border-b border-black/10 md:gap-12">
            {data.categories?.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => onCategoryChange(category.slug)}
                className={`outfit relative pb-4 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  selectedCategory === category.slug
                    ? "text-[#101c2c]"
                    : "text-neutral-400 hover:text-[#101c2c]"
                }`}
              >
                {category.name}

                {selectedCategory === category.slug && (
                  <span className="absolute bottom-[-1px] left-0 h-px w-full bg-[#101c2c]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}