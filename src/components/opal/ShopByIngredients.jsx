"use client";

import Link from "next/link";
import { ingredients } from "@/data/ingredients";

export default function ShopByIngredients() {
  return (
    <section className="bg-[#eeece7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="outfit text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500">
            Formulation First
          </p>

          <h2 className="desc-font text-4xl md:text-5xl text-neutral-900 mt-3">
            Shop by Ingredient
          </h2>

          <p className="outfit text-sm md:text-base text-neutral-500 mt-5 leading-relaxed">
            Explore the considered ingredients behind the Opal Morsel
            formulation philosophy.
          </p>

        </div>

        {/* Ingredients */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-neutral-300">

          {ingredients.map((ingredient) => (
            <Link
              key={ingredient.slug}
              href={`/ingredients/${ingredient.slug}`}
              className="group p-6 md:p-8 min-h-[150px] border-r border-b border-neutral-300 flex flex-col justify-between hover:bg-white transition-colors duration-500"
            >
              <div>

                <span className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                  Ingredient
                </span>

                <h3 className="desc-font text-xl md:text-2xl mt-3 text-neutral-900">
                  {ingredient.name}
                </h3>

              </div>

              <div className="flex items-end justify-between mt-6">

                <p className="outfit text-xs text-neutral-500 leading-relaxed max-w-[160px]">
                  {ingredient.shortDescription}
                </p>

                <span className="text-lg text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all">
                  →
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}