"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  {
    id: 1,
    title: "Women",
    slug: "women",
    image: "/fum-img/bgslide6.png",
  },
  {
    id: 2,
    title: "Men",
    slug: "men",
    image: "/fum-img/bgslide2.png",
  },
  {
    id: 3,
    title: "Opal Exclusive",
    slug: "opalex",
    image: "/fum-img/bgslide1.png",
  },
  {
    id: 4,
    title: "Opal Luxe",
    slug: "opalluxe",
    image: "/fum-img/bgslide4.png",
  },
];

export default function ShopByCategory() {
  const router = useRouter();

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="mb-12 text-center text-sm tracking-[0.3em] uppercase">
        Shop by Category
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/collections/${item.slug}`)}
            className="cursor-pointer text-center group"
          >
            <div className="relative mx-auto md:h-[400px] h-[220px] w-[170px] 
            md:w-[300px] overflow-hidden flex items-end justify-center">
              <Image src={item.image} alt={item.title} fill className="object-contain object-bottom translate-y-11 md:translate-y-30 
               hover:scale-105 transition-transform duration-300" priority />
            </div>

         <p className="mt-6 md:text-sm text-xs md:font-light outfit tracking-widest uppercase"> {item.title} </p>
          </div>
        ))}
      </div>
    </section>
  );
}
