// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const TextOver = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Text animations
//   const textY = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", "-60%"]
//   );

//   const textOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.7],
//     [1, 0]
//   );

//   return (
//     <>
//       {/* =========================================
//           FIXED BACKGROUND VIDEO
//       ========================================= */}

//       <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="
//             absolute
//             inset-0
//             w-full
//             h-full
//             object-cover
//             object-center
//           "
//         >
//           <source
//             src="https://res.cloudinary.com/dr1jqpozn/video/upload/v1788680664/bannervd.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Slight luxury blur */}
//         <div className="absolute inset-0 backdrop-blur-[2px]" />

//       </div>


//       {/* =========================================
//           HERO SECTION
//       ========================================= */}

//       <section
//         ref={ref}
//         className="
//           relative
//           h-screen
//           flex
//           items-center
//           justify-center
//           overflow-hidden
//         "
//       >

//         {/* TEXT */}

//         <motion.div
//           style={{
//             y: textY,
//             opacity: textOpacity,
//           }}
//           className="
//             relative
//             z-10
//             px-6
//             text-center
//             text-white
//             max-w-3xl
//           "
//         >

//           <p className="
//             mb-4
//             text-sm
//             outfit
//             tracking-widest
//             uppercase
//             opacity-80
//           ">
//             The savoir-faire
//           </p>


//           <h1 className="
//             mb-6
//             text-4xl
//             desc-font
//             md:text-6xl
//             leading-tight
//           ">
//             Born in the wild,
//             <br />
//             crafted by OPAL MORSEL
//           </h1>


//           <p className="
//             mx-auto
//             max-w-xl
//             outfit
//             text-sm
//             md:text-base
//             opacity-90
//             leading-relaxed
//           ">
//             The sandalwood used by the House of Dior is grown
//             with utmost care during its early years, then left
//             to grow free in a harsh, untamed environment.
//           </p>

//         </motion.div>

//       </section>
//     </>
//   );
// };

// export default TextOver;


"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "INCENSE",
    subtitle: "introducing our new creations...",
    video: "https://res.cloudinary.com/dr1jqpozn/video/upload/v1788680664/bannervd.mp4",
  },
  {
    id: 2,
    title: "BODY — HAIR — FACE",
    subtitle: "sensorial creations for the body, hair, and face...",
    video: "/videos/body-hair-face.mp4",
  },
  {
    id: 3,
    title: "ABOUT OPAL MORSEL",
    subtitle: "thoughtfully formulated and refined for modern rituals...",
    video: "https://res.cloudinary.com/dr1jqpozn/video/upload/v1788680664/bannervd.mp4",
  },
];

export default function TextOver() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExperience = experiences[activeIndex];

  const changeExperience = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.video
            key={activeExperience.id}
            src={activeExperience.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            initial={{
              opacity: 0,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
              scale: {
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Subtle top gradient */}
        <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* =====================================================
          CENTER / TOP BRAND CONTENT
      ===================================================== */}

      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-8 md:px-10 md:py-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <p className="outfit text-[9px] uppercase tracking-[0.45em] text-white/70 md:text-[10px]">
            The World of Opal Morsel
          </p>
        </motion.div>

        {/* =================================================
            BOTTOM CONTENT
        ================================================= */}

        <div className="w-full">
          {/* Active description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExperience.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 md:absolute md:bottom-28 md:left-10 md:mb-0 md:max-w-[280px]"
            >
              <p className="desc-font text-2xl tracking-wide text-white md:text-3xl">
                {activeExperience.title}
              </p>

              <p className="mt-2 max-w-[260px] outfit text-[11px] leading-relaxed text-white/65 md:text-xs">
                {activeExperience.subtitle}
              </p>

              <button
                type="button"
                className="mt-4 border-b border-white/60 pb-1 outfit text-[9px] uppercase tracking-[0.3em] text-white transition-opacity hover:opacity-60"
              >
                Discover
              </button>
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              EXPERIENCE NAVIGATION
          ================================================= */}

          <div className="flex w-full flex-col gap-5 md:flex-row md:items-end md:justify-end md:gap-14">
            {experiences.map((experience, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={experience.id}
                  type="button"
                  onMouseEnter={() => changeExperience(index)}
                  onFocus={() => changeExperience(index)}
                  onClick={() => changeExperience(index)}
                  animate={{
                    opacity: isActive ? 1 : 0.38,
                    y: isActive ? -4 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative text-left md:text-center"
                >
                  {/* Number */}
                  <span
                    className={`mb-2 block outfit text-[8px] tracking-[0.3em] transition-colors duration-500 ${
                      isActive ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <span
                    className={`block desc-font text-xl tracking-wide transition-all duration-500 md:text-2xl ${
                      isActive
                        ? "text-white"
                        : "text-white/55 group-hover:text-white/80"
                    }`}
                  >
                    {experience.title}
                  </span>

                  {/* Subtitle */}
                  <span
                    className={`mt-1 block max-w-[220px] outfit text-[10px] leading-relaxed transition-colors duration-500 md:text-xs ${
                      isActive ? "text-white/65" : "text-white/30"
                    }`}
                  >
                    {experience.subtitle}
                  </span>

                  {/* Active line */}
                  <motion.span
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-3 block h-px bg-white"
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}