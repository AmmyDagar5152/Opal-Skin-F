"use client";

import Image from "next/image";

export default function ScentNotesSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 outfit">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-sm tracking-[0.3em] font-semibold mb-10">
            SCENT NOTES
          </h2>

          {/* TOP */}
          <div className="border-t border-gray-300 pt-3 pb-3">
            <p className="text-xs tracking-widest text-gray-500 mb-2">
              TOP
            </p>
            <ul className="space-y-1 text-sm font-light">
              <li>Pink Pepper</li>
              <li>Pink Apple</li>
              <li>Sugar Crystals</li>
            </ul>
          </div>

          {/* HEART */}
          <div className="border-t border-gray-300 pt-3 pb-3">
            <p className="text-xs tracking-widest text-gray-500 mb-2">
              HEART
            </p>
            <ul className="space-y-1 text-sm font-light">
              <li>Lily</li>
              <li>Jasmine Petals</li>
              <li>Cashmere Wood</li>
            </ul>
          </div>

          {/* BASE */}
          <div className="border-t border-gray-300 pt-3">
            <p className="text-xs tracking-widest text-gray-500 mb-2">
              BASE
            </p>
            <ul className="space-y-1 text-sm font-light">
              <li>Benzoin</li>
              <li>Vanilla</li>
              <li>Sandalwood</li>
              <li>Agarwood</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[320px] md:h-[520px]">
          <Image
            src="/fum-img/notes.png" 
            alt="Scent Notes Ingredients"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
