"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Bookmark } from "lucide-react";
import ProductOverview from "../opal/ProductOverview";
import { skincareByCategory } from "@/data/skincare";

export default function CollectionProducts({ category }) {
  const products = skincareByCategory?.[category] || [];

  console.log("Selected category:", category);
  console.log("Available categories:", Object.keys(skincareByCategory || {}));
  console.log("Products:", products);

  const [openOverview, setOpenOverview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <section className="w-full bg-[#f5f3ed] px-5 pb-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Product Header */}
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <div>
            <p className="outfit text-[9px] uppercase tracking-[0.35em] text-neutral-400">
              Opal Morsel
            </p>

            <h2 className="desc-font mt-2 text-2xl text-[#101c2c] md:text-3xl">
              {products[0]?.categoryName || "Skincare"}
            </h2>
          </div>

          <p className="outfit text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            {products.length} products
          </p>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <article
                key={item.id}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProduct(item);
                  setOpenOverview(true);
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe9e2]">
                  <Image
                    src={item.main}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw"
                    className="object-contain p-8 transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute left-4 top-4 bg-white/90 px-3 py-1.5">
                      <span className="outfit text-[8px] uppercase tracking-[0.2em] text-[#101c2c]">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    aria-label={`Save ${item.title}`}
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#101c2c] transition-transform duration-300 hover:scale-105"
                  >
                    <Bookmark size={15} strokeWidth={1.2} />
                  </button>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={16} strokeWidth={1.2} />
                  </div>
                </div>

                {/* Product Information */}
                <div className="pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="outfit text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                        {item.type || "Treatment"}
                      </p>

                      <h3 className="desc-font mt-2 text-lg tracking-wide text-[#101c2c] md:text-xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="outfit pt-1 text-xs text-[#101c2c]">
                      ₹{item.price}
                    </span>
                  </div>

                  <p className="outfit mt-2 max-w-sm text-[11px] leading-relaxed text-neutral-500">
                    {item.subtitle}
                  </p>

                  {item.size && (
                    <p className="outfit mt-3 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                      {item.size}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="outfit text-xs uppercase tracking-[0.25em] text-neutral-400">
              No formulations available yet.
            </p>
          </div>
        )}
      </div>

      <ProductOverview
        open={openOverview}
        product={selectedProduct}
        detailUrl={
          selectedProduct
            ? `/products/${selectedProduct.id}`
            : "/products"
        }
        onClose={() => {
          setOpenOverview(false);
          setSelectedProduct(null);
        }}
      />
    </section>
  );
}