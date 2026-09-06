"use client";

import { useState } from "react";

const sizes = ["35 ml", "50 mL", "80 ml", "125 mL"];

export default function PerfumeViewCard({ product }) {
  const [selectedSize, setSelectedSize] = useState("80 ml");

  if (!product) return null;

  return (
    <>
    <div className="outfit flex flex-col md:gap-2 gap-1">
      <p className="text-sm text-gray-400">Fragrances</p>

      <h1 className="md:text-3xl text-2xl font-serif">
        {product.title}
      </h1>

      <p className="text-sm text-gray-500">
        {product.subtitle}
      </p>

       <div className="flex items-center justify-start gap-2 text-gray-400 text-sm">
          <span>Intensity</span>
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-700" />
            <span className="w-2 h-2 rounded-full bg-gray-700" />
            <span className="w-2 h-2 rounded-full bg-gray-700" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
        </div>

      <p className="text-lg font-medium md:mt-4 mt-2">
        ₹ {product.price}
      </p>
         <div className="flex gap-3 md:pt-4 pt-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-md text-sm border ${
                  selectedSize === size
                    ? "border-black"
                    : "border-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          </div>
    </>
  );
}
