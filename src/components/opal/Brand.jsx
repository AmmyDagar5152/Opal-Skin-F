// Server Component (static by default)

export default function BrandStory() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-8xl px-6 md:py-20 py-15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">


                <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
  <h1 className="desc-font tracking-widest text-3xl">
    OPAL MORSEL
  </h1>

  <h2 className="ban-txt text-3xl md:text-4xl font-light tracking-wide text-black">
    The Art of Refined Skincare
  </h2>
</div>

<p className="md:text-base outfit tracking-wide leading-relaxed text-gray-600">
  <span className="font-semibold">
Skincare for the Indian climate.  </span>
  <br />

 Heat. Humidity. Pollution. Sun exposure. Long days.
  <br />

  <span>
 Opal Morsel creates high-performance formulations designed around the realities of modern Indian skin—balancing efficacy, tolerance and sensorial experience.
  </span>
</p>

                </div>
            </div>
        </section>
    );
}
