// app/components/ShopByNotes.tsx
// Server Component – static by default

import Link from "next/link";

const notes = [
  {
    title: "Aquatic",
    image: "/fum-img/note1.png",
  },
  {
    title: "Citrus",
    image: "/fum-img/note6.png",
  },
  {
    title: "Aromatic",
    image: "/fum-img/note13.png",
  },
  {
    title: "Woody",
    image: "/fum-img/note16.png",
  },
  {
    title: "Floral",
    image: "/fum-img/note1.png",
  },
  {
    title: "Spicy",
    image: "/fum-img/note7.png",
  },
  {
    title: "Fruity",
    image: "/fum-img/note8.png",
  },
  {
    title: "Oriental",
    image: "/fum-img/note9.png",
  },
];

export default function ShopByNotes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex flex-col gap-5 max-w-7xl px-6">

        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className=" text-center outfit md:text-2xl text-xl  tracking-widest font-light text-black">
            An Edit of Signature Notes
          </h2>
          <span className="ban-txt text-2xl text-center md:text-4xl  font-light tracking-wide text-black">Where every note reveals a new expression of elegance.</span>
        </div>

        {/* Grid */}
        {/* Notes List */}
        <div
          className="
    flex gap-6 overflow-x-auto pb-4
    md:grid md:grid-cols-4 md:gap-10 md:overflow-visible
  "
        >
          {notes.map((note) => (
            <Link
              key={note.title}
              href={`/notes/${note.title.toLowerCase()}`}
              className="flex-shrink-0 w-[160px] md:w-auto text-center"
            >

              <div
                key={note.title}
                className="
        flex-shrink-0
        w-[160px]
        md:w-auto
        text-center
      "
              >
                {/* Circle Card */}
                <div
                  className="
          group relative mx-auto
          h-35 w-35 md:h-50 md:w-50
          rounded-full overflow-hidden
          bg-center bg-no-repeat bg-cover
        "
                  style={{ backgroundImage: `url(${note.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 transition group-hover:bg-black/40" />

                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white desc-font bg-[#00000070] w-full text-center 
            text-xl tracking-widest font-light">
                      {note.title.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Bottom Label */}
                <p className="mt-4 text-sm outfit tracking-widest text-black">
                  {note.title.toUpperCase()}
                </p>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
}
