"use client";

import { useState } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";

const filters = {
  category: {
    label: "Category",
    options: [
      { label: "Cleansers", value: "cleansers" },
      { label: "Serums", value: "serums" },
      { label: "Moisturisers", value: "moisturisers" },
      { label: "Masks", value: "masks" },
      { label: "Sunscreen", value: "sunscreen" },
      { label: "Eye & Lip", value: "eye-lip" },
    ],
  },

  concern: {
    label: "Concern",
    options: [
      { label: "Acne & Congestion", value: "blemishes" },
      { label: "Uneven Tone", value: "uneven-tone" },
      { label: "Dullness", value: "radiance" },
      { label: "Dehydration", value: "dehydration" },
      { label: "Barrier Support", value: "barrier" },
      { label: "Excess Oil", value: "excess-oil" },
      { label: "Texture & Pores", value: "texture-pores" },
      { label: "Fine Lines", value: "firmness" },
      { label: "UV Protection", value: "uv-protection" },
    ],
  },

  ingredient: {
    label: "Ingredient",
    options: [
      { label: "Niacinamide", value: "niacinamide" },
      { label: "Salicylic Acid", value: "salicylic-acid" },
      { label: "Ceramides", value: "ceramides" },
      { label: "Ectoin", value: "ectoin" },
      { label: "Peptides", value: "peptides" },
      { label: "Bakuchiol", value: "bakuchiol" },
      { label: "Hyaluronic Acid", value: "hyaluronic-acid" },
      { label: "Centella / CICA", value: "centella" },
    ],
  },

  skinType: {
    label: "Skin Type",
    options: [
      { label: "Oily", value: "oily" },
      { label: "Combination", value: "combination" },
      { label: "Dry", value: "dry" },
      { label: "Normal", value: "normal" },
      { label: "Sensitive", value: "sensitive" },
      { label: "Acne-Prone", value: "acne-prone" },
    ],
  },
};

export default function ProductFilters({
  selectedFilters,
  setSelectedFilters,
  sort,
  setSort,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilter = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? "" : value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: "",
      concern: "",
      ingredient: "",
      skinType: "",
    });
  };

  const filterContent = (
    <div className="space-y-8">
      {Object.entries(filters).map(([key, filter]) => (
        <div key={key}>
          <p className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {filter.label}
          </p>

          <div className="mt-4 space-y-3">
            {filter.options.map((option) => {
              const active = selectedFilters[key] === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFilter(key, option.value)}
                  className={`block w-full text-left outfit text-xs transition-colors ${
                    active
                      ? "text-[#101c2c]"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  <span className="mr-2 inline-block w-3">
                    {active ? "●" : "○"}
                  </span>

                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={clearFilters}
        className="outfit text-[9px] uppercase tracking-[0.25em] text-neutral-400 hover:text-neutral-900"
      >
        Clear All
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop Filter / Sort */}
      <div className="hidden border-y border-black/10 py-5 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={15} strokeWidth={1.2} />

            <span className="outfit text-[10px] uppercase tracking-[0.25em]">
              Filter
            </span>
          </div>

          {Object.entries(filters).map(([key, filter]) => (
            <div key={key} className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 outfit text-[10px] uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-900"
              >
                {filter.label}
                <ChevronDown size={12} strokeWidth={1.2} />
              </button>

              <div className="pointer-events-none absolute left-0 top-full z-30 mt-4 w-56 translate-y-2 bg-white p-5 opacity-0 shadow-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-3">
                  {filter.options.map((option) => {
                    const active =
                      selectedFilters[key] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          updateFilter(key, option.value)
                        }
                        className={`block w-full text-left outfit text-xs ${
                          active
                            ? "text-neutral-900"
                            : "text-neutral-500 hover:text-neutral-900"
                        }`}
                      >
                        {active ? "● " : "○ "}
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent outfit text-[10px] uppercase tracking-[0.2em] text-neutral-500 outline-none"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price — Low to High</option>
          <option value="price-high">Price — High to Low</option>
        </select>
      </div>

      {/* Mobile */}
      <div className="flex border-y border-black/10 py-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex flex-1 items-center justify-center gap-2 border-r border-black/10 outfit text-[10px] uppercase tracking-[0.25em]"
        >
          <SlidersHorizontal size={14} strokeWidth={1.2} />
          Filter
        </button>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="flex-1 bg-transparent text-center outfit text-[10px] uppercase tracking-[0.2em] text-neutral-500 outline-none"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price — Low to High</option>
          <option value="price-high">Price — High to Low</option>
        </select>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-md overflow-y-auto bg-[#f7f6f3] p-6">
            <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-5">
              <p className="outfit text-[10px] uppercase tracking-[0.3em]">
                Filter Skincare
              </p>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
              >
                <X size={20} strokeWidth={1.2} />
              </button>
            </div>

            {filterContent}

            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="mt-10 w-full bg-[#101c2c] py-4 text-white outfit text-[10px] uppercase tracking-[0.3em]"
            >
              View Results
            </button>
          </div>
        </div>
      )}
    </>
  );
}