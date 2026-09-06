"use client";

import { useState } from "react";
import Image from "next/image";
import ProductQuickView from "./ProductOverview";

export default function ProductCard() {
  const [open, setOpen] = useState(false);

  const product = {
    name: "Chance Eau Splendide",
    price: "16,750",
    image: "/fum-img/bgslide3.png",
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
        />
        <p className="mt-2 text-sm">{product.name}</p>
        <p className="text-sm font-medium">₹ {product.price}</p>
      </div>

      {/* QUICK VIEW */}
      <ProductQuickView
        open={open}
        onClose={() => setOpen(false)}
        product={product}
      />
    </>
  );
}
