"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
  useEffect(() => {
    const titles = [
      "OPAL MORSEL - The Signature of Quiet Luxury",
      "Born in the wild, crafted by OPAL MORSEL",
    ];

    let index = 0;
    const originalTitle = document.title;

    const interval = setInterval(() => {
      document.title = titles[index % titles.length];
      index++;
    }, 2500); // 2.5 sec

    return () => {
      clearInterval(interval);
      document.title = originalTitle; // cleanup
    };
  }, []);

  return null;
}
