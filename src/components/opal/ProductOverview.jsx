"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import PerfumeViewCard from "../reuseComp/PerfumeViewCard";
import { useCart } from "@/context/CartContext";

export default function ProductOverview({ open, onClose, product, detailUrl }) {
  const { addToCart } = useCart();

  const router = useRouter();

  if (!open || !product) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-xl">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black z-1 text-xl"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* IMAGE */}
            <div className="relative bg-gray-50 md:p-10 p-4 flex items-center justify-center">
              <div className="relative md:h-[380px] h-[240px] w-full">
                <Image
                  src={product.main}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* DETAILS */}
            <div className="md:p-8 px-4 py-2 flex flex-col justify-between">

              <PerfumeViewCard product={product} />


              <div className="flex flex-col gap-3 md:mt-8 mt-3">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-black text-white md:text-sm rounded text-xs px-10 md:py-3 py-2 uppercase"
                >
                  Add to Bag
                </button>
                <button
                  onClick={() => router.push(detailUrl)}

                  className="border border-black md:py-3 py-2 rounded uppercase tracking-widest md:text-sm text-xs"
                >
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
