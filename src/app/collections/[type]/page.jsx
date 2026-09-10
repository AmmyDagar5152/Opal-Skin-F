"use client";

import React, { useEffect, useState } from "react";
import CollectionProducts from "@/components/reuseComp/CollectionProducts";
import { collectionsData } from "@/data/collection";
import SkincareCollectionHeader from "@/components/reuseComp/SkincareCollectionHeader";

export default function CollectionPage({ params }) {
  const { type } = React.use(params);

  const data = collectionsData[type];

  const [selectedCategory, setSelectedCategory] = useState(
    data?.categories?.[0]?.slug || ""
  );

  useEffect(() => {
    setSelectedCategory(data?.categories?.[0]?.slug || "");
  }, [type, data]);

  if (!data) {
    return (
      <main className="flex min-h-[60vh] w-full items-center justify-center bg-[#f5f3ed]">
        <p className="outfit text-xs uppercase tracking-[0.25em] text-neutral-500">
          Collection not found
        </p>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#f5f3ed]">
      <SkincareCollectionHeader
        data={data}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <CollectionProducts category={selectedCategory} />
    </main>
  );
}