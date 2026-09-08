"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";

/* =========================================================
   ROUTINE QUESTIONS
========================================================= */

const questions = [
  {
    id: "routineType",
    type: "single",
    title: "How Do You Want to Build Your Routine?",
    description:
      "Start with a new skincare routine created around your skin's needs.",
    options: [
      "I want to start a new routine",
      "I want to build a routine around a product",
    ],
  },

  {
    id: "topConcern",
    type: "single",
    title: "What Is Your Top Concern?",
    description:
      "Your routine will be designed around your primary skin concern.",
    options: [
      "Fine Lines & Wrinkles",
      "Blemishes",
      "Redness",
      "Dull Skin",
      "Discoloration",
      "Dehydrated Skin",
      "Puffiness Under Eyes",
      "Pollution",
      "Scar Control",
      "None",
      "Other",
    ],
  },

  {
    id: "otherConcerns",
    type: "multi",
    max: 3,
    title: "What Other Skin Concerns Do You Have?",
    description: "Select up to 3 concerns.",
    options: [
      "Fine Lines & Wrinkles",
      "Blemishes",
      "Redness",
      "Dull Skin",
      "Discoloration",
      "Pollution",
      "Scar Control",
      "Puffiness Under Eyes",
      "Dehydrated Skin",
      "Other",
      "None",
      "Prefer Not to Answer",
    ],
  },

  {
    id: "skinType",
    type: "single",
    title: "How Would You Describe Your Skin Type?",
    description:
      "Every skin type has different needs. Choose the option that best describes your skin.",
    options: [
      "Dehydrated",
      "Combination",
      "Oily",
      "Balanced",
    ],
  },

  {
    id: "sensitive",
    type: "single",
    title: "Is Your Skin Sensitive?",
    description:
      "Some people may need to avoid specific ingredients to minimize irritation.",
    options: [
      "Yes",
      "No",
    ],
  },

  {
    id: "sunProtection",
    type: "single",
    title: "Daily Sun Protection Is Essential. Which Do You Prefer?",
    description:
      "Choose the type of daily sun protection you prefer.",
    options: [
      "Sheer Mineral",
      "Tinted Mineral",
      "Chemical",
      "No Preference",
    ],
  },

  {
    id: "ingredients",
    type: "multi",
    max: 3,
    title: "Do Any Of These Key Ingredients Interest You?",
    description:
      "Your routine may include desired ingredients where appropriate. Select up to 3.",
    options: [
      "Hyaluronic Acid",
      "Retinol",
      "Vitamin C",
      "Salicylic Acid",
      "Glycolic Acid",
      "Niacinamide",
      "Peptides",
      "Ceramides",
      "Bakuchiol",
      "None",
    ],
  },

  {
    id: "procedures",
    type: "single",
    title: "Have You Ever Received In-Office Skincare Procedures?",
    description:
      "This helps us understand your current skincare experience.",
    options: [
      "Yes",
      "No, but I am curious",
      "No, and I do not want any",
    ],
  },

  {
    id: "environment",
    type: "single",
    title: "What Best Describes Your Everyday Environment?",
    description:
      "We consider heat, humidity, sun exposure and pollution when shaping your routine.",
    options: [
      "Hot & Humid",
      "Hot & Dry",
      "Polluted / Urban",
      "Mostly Indoors",
      "A Mix of Everything",
    ],
  },

  {
    id: "age",
    type: "single",
    title: "Skin Needs Change With Age.",
    description:
      "Your age group helps us understand which routine priorities may suit you best.",
    options: [
      "18–24",
      "25–34",
      "35–44",
      "45–54",
      "55–64",
      "64+",
    ],
  },

  {
    id: "gender",
    type: "single",
    title: "How Do You Identify?",
    description:
      "We want to address you correctly for future communications.",
    options: [
      "Female",
      "Male",
      "Other",
      "Prefer Not to Answer",
    ],
  },
];


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = {
  clarify: {
    name: "Salicylic + Niacinamide Serum",
    category: "CLARIFY",
    description:
      "A targeted serum concept for skin prone to excess oil, congestion and an uneven-looking complexion.",
    slug: "salicylic-niacinamide-serum",
  },

  restore: {
    name: "Ceramide + Ectoin Barrier Cream",
    category: "RESTORE",
    description:
      "A barrier-focused cream concept created for skin that needs comfort, moisture and support.",
    slug: "ceramide-ectoin-barrier-cream",
  },

  protect: {
    name: "SPF 50+ Tinted Sunscreen",
    category: "PROTECT",
    description:
      "Daily UV protection designed to become an effortless part of your skincare ritual.",
    slug: "spf-50-tinted-sunscreen",
  },

  hydrate: {
    name: "CICA + Hyaluronic Hydration Mask",
    category: "HYDRATE",
    description:
      "A hydration-focused mask concept for skin that feels dry, tight or depleted.",
    slug: "cica-hyaluronic-mask",
  },

  renew: {
    name: "Copper Peptide + Bakuchiol Night Cream",
    category: "RENEW",
    description:
      "A night-care concept focused on smoother, firmer-looking and well-nourished skin.",
    slug: "copper-peptide-bakuchiol-night-cream",
  },
};


/* =========================================================
   ROUTINE BUILDER
========================================================= */

export default function RoutineBuilder() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const question = questions[step];

  /* -------------------------------------------------------
     Restore saved answers
  ------------------------------------------------------- */

  useEffect(() => {
    const saved = localStorage.getItem("opal-morsel-routine");

    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch {
        localStorage.removeItem("opal-morsel-routine");
      }
    }
  }, []);


  /* -------------------------------------------------------
     Save answers
  ------------------------------------------------------- */

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem(
        "opal-morsel-routine",
        JSON.stringify(answers)
      );
    }
  }, [answers]);


  /* -------------------------------------------------------
     Start Builder
  ------------------------------------------------------- */

  const startBuilder = () => {
    setIsOpen(true);
    setStep(0);
    setShowResults(false);
  };


  /* -------------------------------------------------------
     Close Builder
  ------------------------------------------------------- */

  const closeBuilder = () => {
    setIsOpen(false);
  };


  /* -------------------------------------------------------
     Select Single Answer
  ------------------------------------------------------- */

  const selectSingleAnswer = (answer) => {
    const updatedAnswers = {
      ...answers,
      [question.id]: answer,
    };

    setAnswers(updatedAnswers);

    /*
      Small delay gives the user visual feedback
      before moving to the next question.
    */

    setTimeout(() => {
      if (step === questions.length - 1) {
        setShowResults(true);
      } else {
        setStep((prev) => prev + 1);
      }
    }, 300);
  };


  /* -------------------------------------------------------
     Multi Select
  ------------------------------------------------------- */

  const selectMultiAnswer = (answer) => {
    const current = answers[question.id] || [];

    let updated;

    if (current.includes(answer)) {
      updated = current.filter((item) => item !== answer);
    } else {
      if (current.length >= question.max) {
        return;
      }

      updated = [...current, answer];
    }

    setAnswers({
      ...answers,
      [question.id]: updated,
    });
  };


  /* -------------------------------------------------------
     Next
  ------------------------------------------------------- */

  const nextStep = () => {
    if (question.type === "multi") {
      const selected = answers[question.id] || [];

      if (selected.length === 0) return;
    }

    if (step === questions.length - 1) {
      setShowResults(true);
      return;
    }

    setStep((prev) => prev + 1);
  };


  /* -------------------------------------------------------
     Back
  ------------------------------------------------------- */

  const previousStep = () => {
    if (showResults) {
      setShowResults(false);
      setStep(questions.length - 1);
      return;
    }

    if (step === 0) {
      setIsOpen(false);
      return;
    }

    setStep((prev) => prev - 1);
  };


  /* -------------------------------------------------------
     Reset
  ------------------------------------------------------- */

  const resetBuilder = () => {
    localStorage.removeItem("opal-morsel-routine");

    setAnswers({});
    setStep(0);
    setShowResults(false);
  };


  return (
    <>
      {/* ===================================================
          HOMEPAGE SECTION
      =================================================== */}

      <section className="w-full bg-white py-20 md:py-28">

        {/* Header */}

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="outfit text-[10px] md:text-xs uppercase tracking-[0.4em] text-neutral-500">
            Discover Your Ritual
          </p>

          <h2 className="desc-font text-4xl md:text-6xl text-neutral-900 mt-4">
            Build Your Routine
          </h2>

          <p className="outfit text-sm md:text-base text-neutral-500 leading-relaxed max-w-2xl mx-auto mt-5">
            Discover a considered skincare routine created around your
            skin, your concerns and the realities of everyday life.
          </p>

        </div>


        {/* =================================================
            CARDS
        ================================================= */}

        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-14 md:mt-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* =================================================
                ROUTINE BUILDER
            ================================================= */}

            <div className="border border-neutral-200 bg-[#faf9f7] p-8 md:p-12 min-h-[420px] flex flex-col justify-between">

              <div>

                <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                  Personalized Skincare
                </p>

                <h3 className="desc-font text-3xl md:text-4xl text-neutral-900 mt-5">
                  Advanced Routine Builder
                </h3>

                <p className="outfit text-sm md:text-base text-neutral-500 leading-relaxed max-w-md mt-5">
                  Answer a few thoughtful questions and discover an
                  Opal Morsel routine built around your skin needs.
                </p>

              </div>


              <button
                type="button"
                onClick={startBuilder}
                className="
                  w-full
                  md:w-fit
                  min-w-[240px]
                  bg-black
                  text-white
                  px-8
                  py-4
                  outfit
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.25em]
                  hover:bg-neutral-800
                  transition-colors
                "
              >
                Begin Assessment
              </button>

            </div>


            {/* =================================================
                CONSULTATION
            ================================================= */}

            <div className="border border-neutral-200 bg-[#f4f2ee] p-8 md:p-12 min-h-[420px] flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between">

                  <p className="outfit text-[10px] uppercase tracking-[0.35em] text-neutral-400">
                    Coming Soon
                  </p>

                  <span className="outfit text-[9px] uppercase tracking-[0.25em] border border-neutral-300 px-3 py-2">
                    1:1
                  </span>

                </div>


                <h3 className="desc-font text-3xl md:text-4xl text-neutral-900 mt-5">
                  Virtual Consultation
                </h3>

                <p className="outfit text-sm md:text-base text-neutral-500 leading-relaxed max-w-md mt-5">
                  Connect with an Opal Morsel skincare professional
                  for a more personal approach to your routine.
                </p>

              </div>


              <button
                type="button"
                disabled
                className="
                  w-full
                  md:w-fit
                  min-w-[240px]
                  bg-neutral-300
                  text-neutral-500
                  px-8
                  py-4
                  outfit
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[0.25em]
                  cursor-not-allowed
                "
              >
                Coming Soon
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROUTINE BUILDER OVERLAY
      ===================================================== */}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">

          {/* =================================================
              TOP BAR
          ================================================= */}

          <div className="relative w-full">

            {/* Back */}

            <button
              type="button"
              onClick={previousStep}
              className="
                absolute
                left-5
                md:left-8
                top-5
                md:top-7
                z-20
                flex
                items-center
                gap-2
                outfit
                text-sm
                md:text-base
                text-neutral-900
                hover:opacity-50
                transition-opacity
              "
            >
              <span className="w-7 h-7 border border-neutral-800 rounded-full flex items-center justify-center">
                <ArrowLeft size={14} strokeWidth={1.3} />
              </span>

              Back
            </button>


            {/* Progress */}

            {!showResults && (
              <div className="pt-6 text-center">

                <span className="outfit text-xs tracking-wider text-neutral-700">
                  {String(step + 1).padStart(2, "0")} /{" "}
                  {String(questions.length).padStart(2, "0")}
                </span>

              </div>
            )}

          </div>


          {/* =================================================
              RESULTS
          ================================================= */}

          {showResults ? (
            <RoutineResults
              answers={answers}
              onReset={resetBuilder}
              onClose={closeBuilder}
            />
          ) : (

            /* =================================================
               QUESTION
            ================================================= */

            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-5 py-16">

              <div className="w-full max-w-[760px] text-center">

                {/* Question */}

                <h1 className="desc-font text-3xl md:text-5xl lg:text-6xl leading-tight text-neutral-900">
                  {question.title}
                </h1>


                {/* Description */}

                <p className="outfit text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto mt-6">
                  {question.description}
                </p>


                {/* Multi Select Hint */}

                {question.type === "multi" && (
                  <p className="outfit text-[10px] uppercase tracking-[0.25em] text-neutral-400 mt-5">
                    Select up to {question.max}
                  </p>
                )}


                {/* =================================================
                    OPTIONS
                ================================================= */}

                <div
                  className={`
                    mt-10
                    ${
                      question.type === "multi"
                        ? "grid grid-cols-1 sm:grid-cols-2 gap-2"
                        : "flex flex-col gap-3"
                    }
                  `}
                >

                  {question.options.map((option) => {

                    const selected =
                      question.type === "multi"
                        ? (answers[question.id] || []).includes(option)
                        : answers[question.id] === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          if (question.type === "multi") {
                            selectMultiAnswer(option);
                          } else {
                            selectSingleAnswer(option);
                          }
                        }}
                        className={`
                          relative
                          min-h-[58px]
                          px-5
                          py-4
                          outfit
                          text-sm
                          font-medium
                          transition-all
                          duration-200
                          border
                          ${
                            selected
                              ? "bg-neutral-900 text-white border-neutral-900"
                              : "bg-black text-white border-black hover:bg-neutral-800"
                          }
                        `}
                      >

                        {option}

                        {selected && question.type === "multi" && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <Check size={16} />
                          </span>
                        )}

                      </button>
                    );
                  })}

                </div>


                {/* =================================================
                    NEXT BUTTON FOR MULTI
                ================================================= */}

                {question.type === "multi" && (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !(answers[question.id]?.length > 0)
                    }
                    className={`
                      mt-8
                      w-full
                      sm:w-[400px]
                      px-8
                      py-4
                      outfit
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      transition-all
                      ${
                        answers[question.id]?.length > 0
                          ? "bg-black text-white hover:bg-neutral-800"
                          : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                      }
                    `}
                  >
                    Next
                  </button>
                )}

              </div>

            </div>
          )}

        </div>
      )}
    </>
  );
}


/* =========================================================
   ROUTINE RESULTS
========================================================= */

function RoutineResults({
  answers,
  onReset,
  onClose,
}) {

  const recommendedProducts = [];


  /* -------------------------------------------------------
     Always consider protection
  ------------------------------------------------------- */

  recommendedProducts.push(products.protect);


  /* -------------------------------------------------------
     Oil / blemishes / congestion
  ------------------------------------------------------- */

  const concernText = [
    answers.topConcern,
    ...(answers.otherConcerns || []),
  ]
    .join(" ")
    .toLowerCase();

  if (
    concernText.includes("blemish") ||
    concernText.includes("pollution") ||
    answers.skinType === "Oily" ||
    (answers.ingredients || []).includes("Salicylic Acid") ||
    (answers.ingredients || []).includes("Niacinamide")
  ) {
    recommendedProducts.push(products.clarify);
  }


  /* -------------------------------------------------------
     Dehydration / sensitive skin
  ------------------------------------------------------- */

  if (
    answers.skinType === "Dehydrated" ||
    answers.sensitive === "Yes" ||
    concernText.includes("dehydrated") ||
    (answers.ingredients || []).includes("Hyaluronic Acid") ||
    (answers.ingredients || []).includes("Ceramides")
  ) {
    recommendedProducts.push(products.restore);
    recommendedProducts.push(products.hydrate);
  }


  /* -------------------------------------------------------
     Age / fine lines
  ------------------------------------------------------- */

  if (
    concernText.includes("fine lines") ||
    concernText.includes("wrinkles") ||
    ["35–44", "45–54", "55–64", "64+"].includes(
      answers.age
    ) ||
    (answers.ingredients || []).includes("Peptides") ||
    (answers.ingredients || []).includes("Bakuchiol")
  ) {
    recommendedProducts.push(products.renew);
  }


  /* -------------------------------------------------------
     Remove duplicates
  ------------------------------------------------------- */

  const uniqueProducts = recommendedProducts.filter(
    (product, index, array) =>
      array.findIndex(
        (item) => item.slug === product.slug
      ) === index
  );


  return (
    <div className="min-h-[calc(100vh-80px)] px-5 py-16 md:py-24">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="text-center">

          <p className="outfit text-[10px] uppercase tracking-[0.4em] text-neutral-400">
            Your Opal Morsel Routine
          </p>

          <h1 className="desc-font text-4xl md:text-6xl text-neutral-900 mt-4">
            Your Ritual, Considered.
          </h1>

          <p className="outfit text-sm md:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed mt-5">
            Based on the answers you shared, these formulations
            are the most relevant starting points for your routine.
          </p>

        </div>


        {/* Products */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">

          {uniqueProducts.map((product, index) => (
            <div
              key={product.slug}
              className="
                border
                border-neutral-200
                bg-[#faf9f7]
                p-7
                md:p-9
              "
            >

              <div className="flex justify-between items-center">

                <span className="outfit text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="outfit text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                  {product.category}
                </span>

              </div>


              <h2 className="desc-font text-2xl md:text-3xl text-neutral-900 mt-8">
                {product.name}
              </h2>

              <p className="outfit text-sm text-neutral-500 leading-relaxed mt-4">
                {product.description}
              </p>


              <a
                href={`/product/${product.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-7
                  outfit
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  border-b
                  border-neutral-900
                  pb-2
                "
              >
                Discover Formula

                <ArrowRight
                  size={14}
                  strokeWidth={1.3}
                />
              </a>

            </div>
          ))}

        </div>


        {/* Bottom */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">

          <button
            type="button"
            onClick={onReset}
            className="
              outfit
              text-[10px]
              uppercase
              tracking-[0.3em]
              border-b
              border-neutral-900
              pb-2
            "
          >
            Retake Assessment
          </button>


          <button
            type="button"
            onClick={onClose}
            className="
              bg-black
              text-white
              px-8
              py-4
              outfit
              text-[10px]
              uppercase
              tracking-[0.3em]
              hover:bg-neutral-800
              transition-colors
            "
          >
            Back To Opal Morsel
          </button>

        </div>

      </div>

    </div>
  );
}