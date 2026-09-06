"use client";


import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";


import "swiper/css";
import "swiper/css/navigation";
import ProductOverview from "./ProductOverview";
import { products } from "../../data/fragranceSlide";



export default function FragranceSlider() {
  const [openOverview, setOpenOverview] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="w-full md:px-10 md:py-24 py-15 bg-white">
      {/* Heading */}
      <div className="mb-16 text-center">
        <h1 className="text-[64px] md:text-[110px] outfit font-extrabold tracking-tight">
          THAT&apos;S NOT OVER
        </h1>
        <p className="mt-2 text-sm outfit font-semibold tracking-widest uppercase">
          Discover our fragrances
        </p>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
        className="px-6 w-full"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div
              className={`relative h-[480px] w-full outfit ${item.bg} flex flex-col items-center justify-between py-10`}
            >
              {item.isNew && (
                <span className="absolute top-4 right-4 border border-white px-2 py-1 text-xs text-white">
                  NEW
                </span>
              )}

              <div className="relative w-[200px] h-[320px]">
                <Image
                  src={item.main}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full px-6 text-left text-white">
                <h3 className="text-lg font-bold uppercase">{item.title}</h3>
                <p className="text-xs opacity-80">{item.subtitle}</p>

                {/* {item.cta && ( */}
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setOpenOverview(true);
                  }}
                  className="mt-4 border border-white px-4 py-2 text-xs uppercase hover:bg-white hover:text-black transition"
                >
                  Shop the Scent
                </button>

                {/* )} */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

<ProductOverview
  open={openOverview}
  product={selectedProduct}
  detailUrl={`/product/${selectedProduct?.id}`}
  onClose={() => setOpenOverview(false)}
/>



    </section>
  );
}
