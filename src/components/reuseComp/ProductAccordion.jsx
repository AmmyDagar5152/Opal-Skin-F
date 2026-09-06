"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Description",
    content:
      "A bold and modern fragrance that blends elegance with intensity, designed to leave a lasting impression.",
  },
  {
    title: "Notes",
    content:
      "Top: Bergamot, Cardamom\nHeart: Lavender, Amber\nBase: Vanilla, Musk",
  },
  {
    title: "Ingredients",
    content:
      "Alcohol Denat., Fragrance (Parfum), Aqua (Water), Limonene, Linalool.",
  },
  {
    title: "How to Use",
    content:
      "Spray on pulse points such as wrists, neck, and behind ears. Avoid rubbing.",
  },
  {
    title: "Layer It With",
    content:
      "Pair with woody or musky fragrances for a deeper, long-lasting scent.",
  },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-10 divide-y divide-gray-300">
      {accordionData.map((item, index) => (
        <div key={index} className="py-2">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between text-left"
          >
            <span className="text-xs font-medium uppercase tracking-wider">
              {item.title}
            </span>

            <span className="text-xl font-light">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`mt-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
