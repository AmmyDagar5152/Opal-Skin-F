"use client";

import Image from "next/image";
import { useState } from "react";
import ProductOverview from "../opal/ProductOverview";

export default function ProductGrid({ items, detailUrlBase }) {
  const [openOverview, setOpenOverview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              setSelectedProduct(item);
              setOpenOverview(true);
            }}
          >
            <div className="relative w-full bg-gray-100 py-5 h-[360px] mb-6">
              <Image
                src={item.main}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-sm font-medium">
              {item.title}
            </h3>

            <p className="mt-2 text-xs text-gray-500 max-w-xs">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>

      <ProductOverview
        open={openOverview}
        product={selectedProduct}
        detailUrl={`${detailUrlBase}/${selectedProduct?.id}`}
        onClose={() => setOpenOverview(false)}
      />
    </>
  );
}
