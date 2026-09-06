import ProductDetailLayout from "@/components/reuseComp/ProductDetailLayout";
import { perfumesByCategory } from "@/data/catperfume";

export default function CollectionProductPage({ params }) {
  const { type, id } = params;

  const product = perfumesByCategory[type]?.find(
    (p) => String(p.id) === String(id)
  );

  return <ProductDetailLayout product={product} />;
}
