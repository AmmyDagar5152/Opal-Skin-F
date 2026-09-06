"use client";

import Image from "next/image";

const climateFactors = [
  {
    number: "01",
    title: "Heat",
    subtitle: "Lightweight Rituals",
    description:
      "Thoughtfully considered textures designed to feel comfortable through warm Indian days.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
  },

  {
    number: "02",
    title: "Humidity",
    subtitle: "Balanced Care",
    description:
      "A skincare approach that considers the oil, sweat and texture challenges that humidity can bring.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },

  {
    number: "03",
    title: "Pollution",
    subtitle: "Cleanse & Support",
    description:
      "A considered daily ritual built around cleansing, nourishment and maintaining a healthy-looking skin barrier.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },

  {
    number: "04",
    title: "Sun",
    subtitle: "Daily Protection",
    description:
      "Protection belongs at the centre of an everyday skincare ritual, especially under strong Indian sun exposure.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },
];

export default function IndianClimate() {
  return (
    <section className="relative w-full bg-[#171715] text-white overflow-hidden">

      {/* Intro */}
      <div className="relative px-5 md:px-10 py-20 md:py-28 text-center">

        <p className="outfit text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50">
          Created With India In Mind
        </p>

        <h2 className="desc-font text-4xl md:text-6xl lg:text-7xl tracking-wide mt-4">
          Made for the
          <br />
          Indian Climate
        </h2>

        <p className="outfit max-w-2xl mx-auto text-sm md:text-base text-white/60 leading-relaxed mt-6">
          From heat and humidity to pollution and intense sun, Opal Morsel
          considers the realities of everyday life in India when shaping
          the skincare ritual.
        </p>

      </div>

      {/* Climate cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          border-t
          border-white/10
        "
      >

        {climateFactors.map((factor) => (
          <div
            key={factor.number}
            className="
              group
              relative
              min-h-[470px]
              md:min-h-[540px]
              border-b
              lg:border-b-0
              border-r
              last:border-r-0
              border-white/10
              overflow-hidden
            "
          >

            {/* Background */}
            <Image
              src={factor.image}
              alt={factor.title}
              fill
              className="
                object-cover
                opacity-45
                group-hover:opacity-60
                group-hover:scale-105
                transition-all
                duration-1000
              "
              sizes="(max-width: 1023px) 50vw, 25vw"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">

              {/* Number */}
              <span className="outfit text-[10px] tracking-[0.3em] text-white/50">
                {factor.number}
              </span>

              {/* Bottom */}
              <div>

                <p className="outfit text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3">
                  {factor.subtitle}
                </p>

                <h3 className="desc-font text-4xl md:text-5xl tracking-wide">
                  {factor.title}
                </h3>

                <p className="
                  outfit
                  text-xs
                  md:text-sm
                  text-white/70
                  leading-relaxed
                  mt-4
                  max-w-xs
                ">
                  {factor.description}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Bottom statement */}
      <div className="px-5 md:px-10 py-16 md:py-20 text-center">

        <p className="desc-font text-2xl md:text-3xl lg:text-4xl max-w-4xl mx-auto leading-relaxed text-white/90">
          "Skincare should adapt to the world
          <br className="hidden md:block" />
          your skin lives in."
        </p>

        <div className="mt-7">
          <span className="outfit text-[10px] uppercase tracking-[0.35em] text-white/40">
            Opal Morsel
          </span>
        </div>

      </div>

    </section>
  );
}