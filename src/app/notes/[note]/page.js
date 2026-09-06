import ProductGrid from "@/components/reuseComp/ProductGrid";
import { perfumesByCategory } from "@/data/catperfume";

export default function NotePage({ params }) {
  const note = params.note;

  const allPerfumes = Object.values(perfumesByCategory).flat();

  const filtered = allPerfumes.filter((item) =>
    item.notes?.includes(note)
  );

  return (
    <section className="w-full bg-white py-10 px-6">

      <div className="text-center mb-14">
        <h2 className="text-3xl font-serif capitalize">
          {note} Fragrances
        </h2>
      </div>

     
      <ProductGrid
        items={filtered}
        detailUrlBase={`/notes/${note}`}
      />

    </section>
  );
}
