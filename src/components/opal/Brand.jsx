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
    Opal Morsel skincare is an expression of refined care, created for skin that deserves nothing less than exceptional.
  </span>
  <br />

  Each formulation is thoughtfully crafted with carefully selected ingredients,
  considered textures, and a commitment to modern skin wellness. Designed to
  nourish, restore, and reveal the natural luminosity of your skin, every
  creation transforms your daily routine into a quiet ritual of self-care.
  <br />

  <span>
    Where sophisticated formulations meet timeless elegance — created for those
    who believe true luxury is felt, not flaunted.
  </span>
</p>

                </div>
            </div>
        </section>
    );
}
