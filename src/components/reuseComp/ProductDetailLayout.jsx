"use client";

import Image from "next/image";
import { useState } from "react";
import ProductAccordion from "@/components/reuseComp/ProductAccordion";
import ScentNotesSection from "@/components/reuseComp/ScentNotesSection";
import { useCart } from "@/context/CartContext";

const sizes = ["35 ml", "50 mL", "80 ml", "125 mL"];

export default function ProductDetailLayout({ product }) {
  const [selectedSize, setSelectedSize] = useState("80 ml");
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="min-h-screen bg-[#f6f6f6] flex justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full md:pt-10 pt-18">

          <div className="flex justify-center">
            <div className="relative md:w-[220px] w-[160px] h-[260px] md:h-[320px]">
              <Image
                src={product.main}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex bg-gray-200 h-full items-center justify-center">
            <div className="relative md:w-[340px] w-[280px] h-[380px] md:h-[440px]">
              <Image
                src={product.main}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center space-y-6">

              <p className="text-sm text-gray-400">Fragrances</p>

              <h1 className="text-3xl font-serif">
                {product.title}
              </h1>

              <p className="text-gray-500">
                {product.subtitle}
              </p>

              <p className="text-xl font-medium">
                ₹ {product.price}
              </p>

              <div className="flex gap-3 pt-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-md text-sm border ${selectedSize === size
                        ? "border-black"
                        : "border-gray-300"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white px-10 py-3 uppercase"
              >
                Add to Bag
              </button>


            </div>

            <ProductAccordion />
          </div>

        </div>
      </div>

      <ScentNotesSection />
    </div>
  );
}
