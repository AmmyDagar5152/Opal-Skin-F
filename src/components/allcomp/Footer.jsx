import Link from "next/link";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#171815] pt-16 pb-6 text-[#f5f1e8]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Opal Morsel Footer
      </h2>

      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8 lg:gap-16">
          {/* Brand */}
          <section className="md:col-span-1">
            <Link href="/" className="inline-block">
              <p className="desc-font text-3xl tracking-[0.08em] uppercase">
                Opal Morsel
              </p>
            </Link>

            <p className="outfit mt-5 max-w-xs text-xs leading-relaxed text-[#f5f1e8]/60">
              Modern skincare, thoughtfully formulated for the realities of
              Indian skin and climate.
            </p>

            <p className="outfit mt-4 max-w-xs text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/40">
              Cleanse · Treat · Repair · Protect
            </p>

            <nav className="mt-7 flex items-center gap-5" aria-label="Social links">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#f5f1e8]/70 transition-colors duration-300 hover:text-white"
              >
                <FaInstagram size={17} />
              </Link>

              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#f5f1e8]/70 transition-colors duration-300 hover:text-white"
              >
                <FaFacebookF size={15} />
              </Link>

              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-[#f5f1e8]/70 transition-colors duration-300 hover:text-white"
              >
                <FaPinterestP size={17} />
              </Link>
            </nav>
          </section>

          {/* Shop */}
          <section>
            <nav aria-label="Shop links">
              <h3 className="outfit mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f5f1e8]/40">
                Shop
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="/products" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    All Products
                  </Link>
                </li>

                <li>
                  <Link href="/collections/cleanse" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Cleanse
                  </Link>
                </li>

                <li>
                  <Link href="/collections/treat" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Treat
                  </Link>
                </li>

                <li>
                  <Link href="/collections/repair" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Repair
                  </Link>
                </li>

                <li>
                  <Link href="/collections/protect" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Protect
                  </Link>
                </li>

                <li>
                  <Link href="/collections/sets" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Ritual Sets
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Explore */}
          <section>
            <nav aria-label="Explore links">
              <h3 className="outfit mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f5f1e8]/40">
                Explore
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link href="/routine" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Find Your Routine
                  </Link>
                </li>

                <li>
                  <Link href="/ingredients" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Ingredients
                  </Link>
                </li>

                <li>
                  <Link href="/science" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Our Science
                  </Link>
                </li>

                <li>
                  <Link href="/journal" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Journal
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    About Opal Morsel
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </section>

          {/* Customer Care */}
          <section>
            <h3 className="outfit mb-5 text-[10px] uppercase tracking-[0.3em] text-[#f5f1e8]/40">
              Customer Care
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  Shipping & Delivery
                </Link>
              </li>

              <li>
                <Link href="/returns" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link href="/faq" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  FAQs
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/disclaimer" className="outfit text-xs text-[#f5f1e8]/75 transition-colors duration-300 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>

            <div className="mt-7">
              <p className="outfit text-[10px] uppercase tracking-[0.2em] text-[#f5f1e8]/40">
                Need help?
              </p>

              <a
                href="mailto:hello@opalmorsel.com"
                className="outfit mt-2 inline-block text-xs text-[#f5f1e8]/80 transition-colors duration-300 hover:text-white"
              >
                hello@opalmorsel.com
              </a>
            </div>
          </section>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-[#f5f1e8]/10 pt-10 md:mt-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="outfit text-[9px] uppercase tracking-[0.4em] text-[#f5f1e8]/40">
                The Opal Morsel Journal
              </p>

              <h3 className="desc-font mt-3 max-w-xl text-2xl tracking-wide md:text-3xl">
                Thoughtful skincare, delivered to you.
              </h3>

              <p className="outfit mt-3 max-w-lg text-xs leading-relaxed text-[#f5f1e8]/50">
                Discover skincare rituals, ingredient stories and considered
                formulations from the world of Opal Morsel.
              </p>
            </div>

            <form className="flex w-full max-w-xl border-b border-[#f5f1e8]/30 pb-3 md:ml-auto">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="outfit min-w-0 flex-1 bg-transparent text-xs text-white outline-none placeholder:text-[#f5f1e8]/30"
              />

              <button
                type="submit"
                className="outfit shrink-0 text-[9px] uppercase tracking-[0.25em] text-[#f5f1e8]/80 transition-colors duration-300 hover:text-white"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#f5f1e8]/10 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="outfit text-[9px] uppercase tracking-[0.2em] text-[#f5f1e8]/35">
            © {new Date().getFullYear()} Opal Morsel. All rights reserved.
          </p>

          <p className="outfit text-[9px] uppercase tracking-[0.2em] text-[#f5f1e8]/35">
            Modern skincare · Considered rituals
          </p>
        </div>
      </div>
    </footer>
  );
}