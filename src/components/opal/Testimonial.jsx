"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        text:
            "Their perfumes are really good as well as their service. Hats off to the team, they are very knowledgeable and friendly.",
        highlight: "It was a great experience!",
        author: "Dilsha Amina",
        location: "OPAL MORSEL Store | Hilite Mall Calicut",
    },
    {
        text:
            "Amazing fragrance collection and top-notch service. Highly recommended for anyone who loves luxury scents.",
        highlight: "Absolutely loved it!",
        author: "Ayaan Khan",
        location: "OPAL MORSEL Customer",
    },
    {
        text:
            "The personalized perfume experience was unforgettable. Staff really knows their craft.",
        highlight: "Will visit again!",
        author: "Meera Joseph",
        location: "OPAL MORSEL Boutique",
    },
];

export default function TestimonialSection() {
    return (
        <section className="relative w-full overflow-hidden bg-black/90 text-white rounded-t-2xl py-28 px-6 md:px-20">


            <header className="relative z-10 text-center mb-12">
                <h2 className="tracking-widest ban-txt md:text-4xl text-2xl font-semibold">
                    Sweet Words. Sweeter Smiles.
                </h2>
                <p className="mt-2 outfit md:text-lg text-sm text-white/70 italic">
                    Loved by our happy fragrance family.
                </p>
            </header>


            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1
                    className="
            text-[10rem] md:text-[18rem] lg:text-[16rem] text-center
            font-extrabold tracking-wider text-blue-200/5 select-none whitespace-nowrap
          "
                >
                    OPAL  <br />
                    <span>MORSEL</span>
                </h1>
            </div>


            <div className="relative z-10 max-w-5xl mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    loop
                    className="text-center outfit"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className="text-6xl mb-6">“</div>


                            <p className="uppercase outfit tracking-widest text-sm md:text-lg leading-relaxed">
                                {item.text}
                            </p>


                            <p className="mt-6 text-orange-500 text-xl tracking-widest uppercase">
                                {item.highlight}
                            </p>


                            <p className="mt-8 text-sm tracking-wide text-white/70">
                                — {item.author} | {item.location}
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
