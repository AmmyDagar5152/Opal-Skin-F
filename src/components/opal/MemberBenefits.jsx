"use client";

import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    id: 1,
    title: "Save Your Rituals",
    description: "Save your favourite formulations and revisit your skincare rituals anytime.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban3.jpg",
  },
  {
    id: 2,
    title: "Faster Checkout",
    description: "Save your details for a seamless and faster checkout experience.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
  {
    id: 3,
    title: "Personalised Skincare",
    description: "Get a personalised experience tailored to your skin concerns and ritual.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban2.jpg",
  },
  {
    id: 4,
    title: "Early Access",
    description: "Be the first to discover new formulations, rituals and limited creations.",
    image: "https://res.cloudinary.com/dr1jqpozn/image/upload/v1788681685/ban1.jpg",
  },
];

const marqueeBenefits = [...benefits, ...benefits];

export default function MemberBenefits() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f7f3] py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-7xl px-6 md:mb-16 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="outfit mb-4 text-[9px] uppercase tracking-[0.45em] text-neutral-500 md:text-[10px]">
            The Opal Morsel Circle
          </p>

          <h2 className="desc-font text-4xl leading-[1.05] tracking-tight text-[#101c2c] md:text-6xl lg:text-7xl">
            The many benefits of being a member.
          </h2>

          <p className="outfit mt-6 max-w-2xl text-xs leading-relaxed text-neutral-500 md:text-sm">
            Access a more considered experience with member-only benefits,
            personalised rituals and early access to the world of Opal Morsel.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-[#f8f7f3] to-transparent md:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-[#f8f7f3] to-transparent md:w-28" />

        <div className="member-marquee flex w-max gap-5 px-5 md:gap-7 md:px-10">
          {marqueeBenefits.map((benefit, index) => (
            <article key={`${benefit.id}-${index}`} className="flex h-36 w-[86vw] shrink-0 items-center gap-6 rounded-xl bg-white px-5 shadow-[0_8px_35px_rgba(0,0,0,0.06)] sm:w-[500px] md:h-38 md:w-[610px] md:px-6">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg bg-[#f0efeb] md:h-28 md:w-28">
                <Image src={benefit.image} alt={benefit.title} fill sizes="112px" className="object-cover" />
              </div>

              <div className="pr-3">
                <p className="outfit mb-2 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                  Member Benefit
                </p>

                <h3 className="desc-font text-xl tracking-wide text-[#101c2c] md:text-2xl">
                  {benefit.title}
                </h3>

                <p className="outfit mt-2 max-w-md text-[11px] leading-relaxed text-neutral-500 md:text-xs">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center px-6 text-center md:mt-16">
        <Link href="/account/register" className="flex h-13 w-full max-w-105 items-center justify-center rounded-full border border-[#101c2c] px-8 outfit text-[11px] uppercase tracking-[0.25em] text-[#101c2c] transition-all duration-500 hover:bg-[#101c2c] hover:text-white">
          Create My Account
        </Link>

        <p className="outfit mt-8 text-[11px] text-neutral-500">
          Already have an account?{" "}
          <Link href="/account/login" className="border-b border-neutral-400 pb-0.5 transition-colors hover:border-black hover:text-black">
            Log in.
          </Link>
        </p>
      </div>

      <style jsx>{`
        .member-marquee {
          animation: member-scroll 38s linear infinite;
        }

        .member-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes member-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .member-marquee {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .member-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}