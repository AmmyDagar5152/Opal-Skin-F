"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextOver = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text animations only
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* FIXED BACKGROUND */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fum-img/ban2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* HERO SECTION */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* TEXT */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="px-6 text-center text-white max-w-3xl"
        >
          <p className="mb-4 text-sm outfit tracking-widest uppercase opacity-80">
            The savoir-faire
          </p>

          <h1 className="mb-6 text-4xl desc-font md:text-6xl leading-tight">
            Born in the wild,
            <br />
            crafted by OPAL MORSEL
          </h1>

          <p className="mx-auto max-w-xl outfit text-sm md:text-base opacity-90">
            The sandalwood used by the House of Dior is grown with utmost care
            during its early years, then left to grow free in a harsh, untamed
            environment.
          </p>
        </motion.div>
      </section>

  
    </>
  );
};

export default TextOver;
