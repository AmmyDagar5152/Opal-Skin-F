import Link from "next/link";


export default function Followus() {
  return (
    <section
      className="flex flex-col bg-white  gap-5 items-center justify-center py-1"
      aria-labelledby="followus-heading"
    >
      <h2
        id="followus-heading"
        className="desc-font text-4xl font-light tracking-wider text-[#0b1c2c]"
      >
        @OPALMORSEL
      </h2>

      <Link
        href="https://www.instagram.com/opalmorsel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Opal Morsel on Instagram"
        className="mt-2 px-6 py-3 desc-font md:text-xl
          bg-[#0b1c2c] hover:bg-[#0b1c2ca2]
          text-white font-semibold tracking-widest transition"
      >
        Follow Us
      </Link>
    </section>
  );
}
