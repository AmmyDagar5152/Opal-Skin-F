"use client";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 

  return (
    <div className="w-full bg-purple-700 text-white text-sm relative">
      <div className="container mx-auto px-4 py-2 text-xs text-center">
        Free delivery on orders above ₹1599 • Freshly made every morning
      </div>
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 text-lg"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  );
}
