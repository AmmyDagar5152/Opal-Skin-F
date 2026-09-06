// app/components/CollectionHighlight.tsx
// Server Component – static by default

import Image from "next/image";

const products = [
  {
    name: "Divine",
    size: "30 ML x 2",
    price: "₹4,000",
    oldPrice: "₹5,000",
    image: "/fum-img/note1.png",
  },
  {
    name: "Asmira",
    size: "100 ML",
    price: "₹2,500",
    image: "/fum-img/note6.png",
  },
  {
    name: "Purple Blue",
    size: "75 ML",
    price: "₹2,250",
    oldPrice: "₹3,000",
    image: "/fum-img/note3.png",
  },
  {
    name: "Twin Paradise",
    size: "75 ML",
    price: "₹2,250",
    oldPrice: "₹3,000",
    image: "/fum-img/note2.png",
  },
];

export default function CollectionHighlight() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-lg tracking-widest outfit text-gray-500 uppercase">
              An Ode to Modern Femininity
            </span>

            <h2 className="mt-4 ban-txt text-3xl md:text-4xl font-light text-black">
              The Art of Feminine Confidence
            </h2>

            <div className="mt-10 space-y-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-2">
                    <Image src={item.image} alt={item.name} width={50} height={50} />
                    <div className="flex flex-col gap-1">
                      <p className="text-md outfit tracking-wide text-black">
                        {item.name}
                      </p>
                      <span className="text-xs text-gray-500">
                        {item.size}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-black">{item.price}</p>
                    {item.oldPrice && (
                      <p className="text-xs text-red-500 line-through">
                        {item.oldPrice}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 w-full bg-yellow-100 py-4 text-sm tracking-widest uppercase text-black hover:bg-yellow-200 transition">
              Add Set to Cart
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="h-[520px] w-full group relative mx-auto  overflow-hidden 
             bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/fum-img/note14.png)" }}
          />

        </div>
      </div>
    </section>
  );
}
