"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function BannerSlider({ images, title, subtitle }) {
  const handleSlideChange = (swiper) => {
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector("img");
      if (!img) return;

      gsap.set(img, { scale: 1 });
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeImg = activeSlide.querySelector("img");

    gsap.fromTo(
      activeImg,
      { scale: 1 },
      {
        scale: 1.08,
        duration: 2,
        ease: "power3.out",
      }
    );
  };

  return (
    <div className="relative w-full h-[715px] md:h-[800px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        slidesPerView={1}
        loop
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        onSwiper={handleSlideChange}
        className="banner-swiper h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay */}
      <div className="absolute bottom-10 left-[2%] md:left-[38%] z-10 flex  items-center justify-center pointer-events-none">
        <div className="bg-black/20 px-6 py-4 rounded text-white text-center">
          <h1 className="text-3xl   desc-font font- tracking-wide">
            {/* {title} */}
            OPAL MORSEL FRAGNANCES
          </h1>
          <p className="text-sm outfit md:text-base font-extralight mt-1">
            {/* {subtitle} */}
            Crafted for Those Who Leave a Lasting Impression
          </p>
          <button className="underline outfit text-xs font-extralight tracking-wider">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
}
