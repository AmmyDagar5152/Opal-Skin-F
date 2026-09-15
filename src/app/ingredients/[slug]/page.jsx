import { notFound } from "next/navigation";
import { ingredients } from "@/data/ingredients";
import IngredientProducts from "@/components/reuseComp/IngredientProducts";
import { skincareByCategory } from "@/data/skincare";

export default async function IngredientPage({ params }) {
  const { slug } = await params;

  const ingredient = ingredients.find(
    (item) => item.slug === slug
  );

  if (!ingredient) {
    notFound();
  }
  const allProducts = Object.values(skincareByCategory).flat();

const products = allProducts.filter((product) =>
  product.ingredients?.includes(slug)
);

  return (
    <main className="bg-[#eeece7] min-h-screen">

      {/* Hero */}
      <section className="min-h-[65vh] flex items-center justify-center px-5 py-24">

        <div className="max-w-4xl text-center">

          <p className="outfit text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500">
            Ingredient Library
          </p>

          <h1 className="desc-font text-5xl md:text-7xl text-neutral-900 mt-5">
            {ingredient.name}
          </h1>

          <p className="outfit text-sm md:text-base text-neutral-500 mt-6">
            {ingredient.shortDescription}
          </p>

          <p className="outfit max-w-2xl mx-auto text-sm md:text-base text-neutral-600 leading-relaxed mt-8">
            {ingredient.intro}
          </p>

        </div>

      </section>

      {/* What is it */}
      <section className="bg-white py-20 md:py-28">

        <div className="max-w-5xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 md:gap-24">

          <div>

            <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
              The Ingredient
            </p>

            <h2 className="desc-font text-4xl mt-4">
              What is {ingredient.name}?
            </h2>

          </div>

          <div>

            <p className="outfit text-sm md:text-base text-neutral-600 leading-relaxed">
              {ingredient.whatIsIt}
            </p>

          </div>

        </div>

      </section>

      {/* Benefits */}
      <section className="bg-[#eeece7] py-20 md:py-28">

        <div className="max-w-6xl mx-auto px-5 md:px-10">

          <div className="max-w-xl">

            <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
              The Role
            </p>

            <h2 className="desc-font text-4xl md:text-5xl mt-4">
              What does it do?
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-0 mt-12 border-t border-l border-neutral-300">

            {ingredient.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-7 md:p-10 border-r border-b border-neutral-300 min-h-[160px]"
              >
                <span className="outfit text-xs text-neutral-400">
                  0{index + 1}
                </span>

                <p className="outfit text-sm text-neutral-800 leading-relaxed mt-8">
                  {benefit}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Who is it for */}
      <section className="bg-white py-20 md:py-28">

        <div className="max-w-5xl mx-auto px-5 md:px-10">

          <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            Skin Profile
          </p>

          <h2 className="desc-font text-4xl md:text-5xl mt-4">
            Who is it for?
          </h2>

          <div className="flex flex-wrap gap-3 mt-10">

            {ingredient.suitableFor.map((item) => (
              <span
                key={item}
                className="border border-neutral-300 px-5 py-3 outfit text-xs"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* How to use */}
      <section className="bg-[#eeece7] py-20 md:py-28">

        <div className="max-w-5xl mx-auto px-5 md:px-10">

          <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
            Routine
          </p>

          <h2 className="desc-font text-4xl md:text-5xl mt-4">
            How to use it
          </h2>

          <div className="grid md:grid-cols-3 mt-12 border-t border-l border-neutral-300">

            <div className="p-7 md:p-10 border-r border-b border-neutral-300">
              <p className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Time
              </p>

              <p className="desc-font text-2xl mt-4">
                {ingredient.routine.time}
              </p>
            </div>

            <div className="p-7 md:p-10 border-r border-b border-neutral-300">
              <p className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Routine Step
              </p>

              <p className="desc-font text-2xl mt-4">
                {ingredient.routine.step}
              </p>
            </div>

            <div className="p-7 md:p-10 border-r border-b border-neutral-300">
              <p className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                Frequency
              </p>

              <p className="outfit text-sm text-neutral-600 mt-4 leading-relaxed">
                {ingredient.routine.frequency}
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Formulation philosophy */}
      <section className="bg-[#1d1c1a] text-white py-24 md:py-32">

        <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">

          <p className="outfit text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Opal Morsel Formulation
          </p>

          <h2 className="desc-font text-4xl md:text-5xl mt-5">
            {ingredient.name}, considered.
          </h2>

          <p className="outfit text-sm md:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto mt-7">
            {ingredient.formulationNote}
          </p>

        </div>

      </section>
 <IngredientProducts
  products={products}
  ingredientName={ingredient.name}
  ingredientSlug={slug}
/>
     


      {/* 8. Related ingredients */}
      {/* <RelatedIngredients
        currentSlug={slug}
      /> */}

    </main>
  );
}