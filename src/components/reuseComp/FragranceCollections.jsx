"use client";

import Image from "next/image";

export default function FragranceCollections({ data }) {
  return (
    <section className="w-full bg-white pt-28 pb-15 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-serif mb-20">
          {data.title}
        </h2>

        <div className="flex  justify-center gap-12 mb-32">
          {data.items.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative md:w-[90px] w-[80px] h-[110px] md:h-[120px] bg-gray-50 rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <p className="mt-4 text-sm text-gray-600">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl md:text-4xl font-serif mb-6">
          {data.introTitle}
        </h3>

        <p className="max-w-xl mx-auto text-sm text-gray-600">
          {data.description}
        </p>
      </div>
    </section>
  );
}
