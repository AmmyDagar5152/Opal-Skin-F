"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Bookmark } from "lucide-react";
import ProductOverview from "../opal/ProductOverview";

export default function ProductCard({ product }) {
  const [openOverview, setOpenOverview] = useState(false);

  return (
    <>
      <article
        className="group cursor-pointer"
        onClick={() => setOpenOverview(true)}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe9e2]">
          <Image
            src={product.main}
            alt={product.title}
            fill
            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw"
            className="object-contain p-8 transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute left-4 top-4 bg-white/90 px-3 py-1.5">
              <span className="outfit text-[8px] uppercase tracking-[0.2em] text-[#101c2c]">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist */}
          <button
            type="button"
            aria-label={`Save ${product.title}`}
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

        {/* Information */}
        <div className="pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="outfit text-[9px] uppercase tracking-[0.25em] text-neutral-400">
                {product.type || "Treatment"}
              </p>

              <h3 className="desc-font mt-2 text-lg tracking-wide text-[#101c2c] md:text-xl">
                {product.title}
              </h3>
            </div>

            <span className="outfit pt-1 text-xs text-[#101c2c]">
              ₹{product.price}
            </span>
          </div>

          <p className="outfit mt-2 max-w-sm text-[11px] leading-relaxed text-neutral-500">
            {product.subtitle}
          </p>

          {product.size && (
            <p className="outfit mt-3 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
              {product.size}
            </p>
          )}
        </div>
      </article>

      <ProductOverview
        open={openOverview}
        product={product}
        detailUrl={`/products/${product.slug || product.id}`}
        onClose={() => setOpenOverview(false)}
      />
    </>
  );
}