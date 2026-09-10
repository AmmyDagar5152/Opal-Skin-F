"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import gsap from "gsap";

import { Volume2, VolumeX } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function BannerSlider({
  images = [],
  videoUrl,
  title,
  subtitle,
}) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleSlideChange = (swiper) => {
    swiper.slides.forEach((slide) => {
      const img = slide.querySelector("img");

      if (!img) return;

      gsap.set(img, {
        scale: 1,
      });
    });

    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeImg = activeSlide?.querySelector("img");

    if (activeImg) {
      gsap.fromTo(
        activeImg,
        { scale: 1 },
        {
          scale: 1.08,
          duration: 2,
          ease: "power3.out",
        }
      );
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMutedState = !isMuted;

    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <div className="relative w-full h-[715px] md:h-[800px] overflow-hidden bg-black">
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
        className="banner-swiper h-full w-full"
      >
        {/* ================= VIDEO ================= */}
        {videoUrl && (
          <SwiperSlide>
            <div className="relative w-full h-full overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />
            </div>
          </SwiperSlide>
        )}

        {/* ================= IMAGES ================= */}
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={`Banner ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= MUTE / UNMUTE ================= */}
      {videoUrl && (
        <button
          type="button"
          onClick={toggleMute}
          className="
            absolute
            bottom-1
            right-1
            sm:bottom-8
            sm:right-8
            z-50
            w-9
            h-9
            rounded-full
            bg-black/50
            backdrop-blur-md
            border
            border-white/30
            text-white
            flex
            items-center
            justify-center
            hover:bg-black/70
            transition-all
            duration-300
          "
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX size={20} strokeWidth={1.8} />
          ) : (
            <Volume2 size={20} strokeWidth={1.8} />
          )}
        </button>
      )}

      {/* ================= TEXT ================= */}
      <div className="absolute bottom-10 left-[9%] md:left-[38%] z-20 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col p-2 gap-1 items-center bg-white/50 backdrop-blur-[20px] rounded no-underline overflow-hidden">
          <h1 className="text-3xl desc-font tracking-wide">
            OPAL MORSEL FRAGNANCES
          </h1>

          <p className="text-sm outfit md:text-base font-extralight mt-1">
            Crafted for Those Who Leave a Lasting Impression
          </p>

          <button className="underline outfit text-xs font-extralight tracking-wider">
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
}