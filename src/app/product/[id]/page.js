import ProductDetailLayout from "@/components/reuseComp/ProductDetailLayout";
import { products } from "@/data/fragranceSlide";

export default function SliderProductPage({ params }) {
  const product = products.find(
    (p) => String(p.id) === String(params.id)
  );

  return <ProductDetailLayout product={product} />;
}
