"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialClient({ reviews = [] }) {
  return (
    <section
      className="md:py-16 p-3 w-full overflow-hidden bg-[#efeee9c1]"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Header */}
        <header className="text-center md:mb-12 mb-6">
          <h2
            id="testimonial-heading"
            className="ban-txt tracking-widest md:text-4xl text-2xl text-[#0B1C2C] font-semibold"
          >
            Sweet Words. Sweeter Smiles.
          </h2>

          <p className="mt-2 md:text-lg font-serif italic text-sm text-gray-600">
            Loved by our happy family of ladoo lovers.
          </p>
        </header>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <article
                className="border border-[#0b1c2c29] rounded-xl
                md:p-6 p-4 shadow-lg bg-[#ffffff88] h-full"
                itemScope
                itemType="https://schema.org/Review"
              >
                <p
                  className="font-serif italic text-sm md:text-base
                  font-medium text-gray-800 mb-4"
                  itemProp="reviewBody"
                >
                  {review.message}
                </p>

                <div className="flex items-center space-x-3">
                  <Image
                    src={review.img}
                    alt={`${review.name} testimonial`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h4
                      className="font-semibold font-serif italic text-sm md:text-base text-gray-900"
                      itemProp="author"
                    >
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
