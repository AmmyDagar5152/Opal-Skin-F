"use client";

import Image from "next/image";
import { useState } from "react";
// import { X } from "lucide-react";
const TAB_DATA = {
  "New Arrivals": {
    heading: "New Arrivals",
    products: [
      {
        img: "/fum-img/bgslide2.png",
        title: "Noctra Bloom",
        subtitle: "Fresh & modern fragrance",
      },
      {
        img: "/fum-img/bgslide5.png",
        title: "Valor Mist",
        subtitle: "Bold everyday scent",
      },
    ],
  },

  "Best sellers": {
    heading: "Best Sellers",
    products: [
      {
        img: "/fum-img/bgslide4.png",
        title: "Dior Addict",
        subtitle: "Most loved fragrance",
      },
      {
        img: "/fum-img/bgslide1.png",
        title: "La Collection Privée",
        subtitle: "Luxury signature scent",
      },
    ],
  },

  "Gift sets": {
    heading: "Gift Sets",
    products: [
      {
        img: "/fum-img/bgslide6.png",
        title: "Festive Gift Box",
        subtitle: "Perfect for occasions",
      },
      {
        img: "/fum-img/bgslide2.png",
        title: "Premium Duo Set",
        subtitle: "Limited edition",
      },
    ],
  },

  "Gift and Personalize": {
    heading: "Personalized Gifts",
    products: [
      {
        img: "/fum-img/bgslide5.png",
        title: "Engraved Bottle",
        subtitle: "Make it yours",
      },
    ],
  },

  "OPAL MORSEL ADDICT": {
    heading: "OPAL MORSEL ADDICT",
    products: [
      {
        img: "/fum-img/bgslide2.png",
        title: "Addict Noir",
        subtitle: "Iconic statement scent",
      },
      {
        img: "/fum-img/bgslide4.png",
        title: "Addict Rose",
        subtitle: "Soft yet powerful",
      },
    ],
  },
};

export default function FragranceMenu({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState("OPAL MORSEL ADDICT");

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      />

      {/* Drawer */}
      <aside
        className=" outfit
          fixed top-0 left-0 z-50 h-screen
          w-[53vw] min-w-[420px] max-w-[1000px]
          bg-white shadow-xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-medium">Fragrance</h2>
          <button onClick={onClose}>{/* <X className="h-5 w-5" /> */}X</button>
        </div>

        {/* Content */}
        <div className="flex justify-center h-full">
          {/* LEFT SECTION */}
          <div className="px-6 py-6 space-y-6 overflow-y-auto">
            <div>
              <p className="text-xs text-black mb-3">ICONICS</p>

              <div className="flex gap-4">
                {[
                  { name: "Noctra", img: "/fum-img/bgslide4.png" },
                  { name: "Valor", img: "/fum-img/bgslide2.png" },
                  { name: "Miss Noctra", img: "/fum-img/bgslide6.png" },
                  { name: "La Valor", img: "/fum-img/bgslide1.png" },
                ].map((item) => (
                  <div key={item.name} className="text-center">
                    <div className="relative w-14 h-14 mx-auto">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-xs mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-3 text-sm">
              {Object.keys(TAB_DATA).map((item) => (
                <li
                  key={item}
                  onMouseEnter={() => setActiveTab(item)}
                  className={`cursor-pointer transition-all
        ${activeTab === item ? "font-semibold underline" : "hover:underline"}
      `}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t text-sm font-medium cursor-pointer">
              Exceptional Fragrance →
            </div>

            <div className="flex items-center gap-5">
              <div className="relative h-60 w-50 rounded overflow-hidden">
                <Image
                  src="/fum-img/ban6.png"
                  alt="HER"
                  fill
                  className="object-fit"
                />
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="font-semibold text-2xl">HER</p>
                </div>
              </div>
              <div className="relative h-60 w-50 rounded overflow-hidden">
                <Image
                  src="/fum-img/ban6.png"
                  alt="Men"
                  fill
                  className="object-fit"
                />
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="font-semibold text-2xl">HIM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="border-l p-6 space-y-6 hidden md:flex flex-col items-center justify-start">
            <p className="text-pink-600 text-center text-sm font-medium">
              {TAB_DATA[activeTab].heading}
            </p>

            {TAB_DATA[activeTab].products.map((product, index) => (
              <div
                key={index}
                className="relative h-56 w-60 rounded overflow-hidden "
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

                <div className="absolute flex flex-col items-center w-full bottom-4 left-4 z-10 text-white">
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm underline">{product.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
