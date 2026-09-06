"use client";

import Image from "next/image";
import { useState } from "react";
import ProductOverview from "../opal/ProductOverview";
import { perfumesByCategory } from "@/data/catperfume";

export default function CollectionPerfume({ type }) {
  const perfumes = perfumesByCategory[type] || [];

  const [openOverview, setOpenOverview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="w-full text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-14">
          Esprit de Parfum
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-10">
          {perfumes.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setSelectedProduct(item);
                setOpenOverview(true);
              }}
            >
              <div className="relative w-full bg-gray-100 py-5 h-[320px] md:h-[360px] md:mb-6 mb-2">
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

              <div className="flex items-center gap-3 mt-4">
                <span className="text-xs text-gray-500">
                  Intensity
                </span>

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 ${
                        i < item.intensity
                          ? "bg-gray-700"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

<ProductOverview
  open={openOverview}
  product={selectedProduct}
  detailUrl={`/collections/${type}/${selectedProduct?.id}`}
  onClose={() => setOpenOverview(false)}
/>


    </section>
  );
}
