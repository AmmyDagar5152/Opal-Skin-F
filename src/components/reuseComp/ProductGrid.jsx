import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  if (!products.length) {
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        <p className="outfit text-xs uppercase tracking-[0.25em] text-neutral-400">
          No formulations match your selection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}