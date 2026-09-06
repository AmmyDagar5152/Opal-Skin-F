import Image from "next/image";
import Link from "next/link";
// import NewsletterForm from "./NewsletterForm";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
// import Newletter from "../NewLetter";

export default function Footer() {
  return (
    <footer
      className="bg-black desc-font text-white pt-10 pb-5 w-full"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <section>
          <div className="flex items-center gap-5">
            <Image
              src="/site-img/logon1.png"
              alt="Opal Morsel logo"
              height={80}
              width={70}
            />
            <p className="text-3xl uppercase font-medium tracking-wider">
              Opal Morsel
            </p>
          </div>

          <p className="text-base mt-3 tracking-wider leading-relaxed">
            Not your regular sweets — our ladoos are handmade with love,
            powered by nutrition, and free from all the artificial fuss.
          </p>

          <nav
            className="flex items-center justify-center space-x-4 mt-6"
            aria-label="Social links"
          >
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </Link>
          </nav>
        </section>

        {/* Navigation */}
        <section className="flex items-start justify-between mt-5">
          <nav aria-label="Shop links">
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 tracking-wider">
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/new">New Launches & Offers</Link></li>
              <li><Link href="/bakery">Bakery Bites</Link></li>
              <li><Link href="/ladoos">Ladoos</Link></li>
              <li><Link href="/dry-fruits">Dry Fruits & Seeds</Link></li>
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 tracking-wider">
              <li><Link href="/ship">Shipping & Delivery</Link></li>
              <li><Link href="/term">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </nav>
        </section>

        {/* Contact + Newsletter */}
        <section className="mt-5 text-center">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>Ph: +91 9606030616</p>
          <p>Mon–Sat, 10 AM – 6 PM</p>
          <p>Email: opalmorsel@gmail.com</p>
          <p>We respond within 48 hours.</p>
          {/* <Newletter/> */}

        </section>
      </div>

      {/* Bottom */}
      <div className="border-t bg-white text-[#0b1c2c] mt-10 pt-4 text-center text-base">
        <p>
          Cravings? Poof! Our ladoos turn them into blissful bites of health.
        </p>
        <p className="mt-2">Created with ❤️ © 2025, Opal Morsel</p>
      </div>
    </footer>
  );
}
