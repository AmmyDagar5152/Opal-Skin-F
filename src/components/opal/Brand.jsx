// Server Component (static by default)

export default function BrandStory() {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-8xl px-6 md:py-20 py-15">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">


                    <div className="flex flex-col items-center justify-center gap-3 md:gap-5">
                        <h1 className="desc-font tracking-widest text-3xl ">OPAL MORSEL</h1>
                        <h2 className=" ban-txt text-3xl md:text-4xl  font-light tracking-wide text-black">
                            The Signature of Quiet Luxury
                        </h2>
                    </div>


                    <p className=" md:text-base outfit tracking-wide   leading-relaxed text-gray-600 ">
                        <span className="font-semibold">Opal Morsel fragrances invite you into a world of refined indulgence.</span> <br />

                        Each creation is a carefully composed expression of elegance—where rare ingredients, meticulous craftsmanship, and modern sophistication converge. From luminous fresh notes to deep, sensual accords, every scent is designed to linger, leaving behind a signature that is both intimate and unforgettable. <br/>
                        <span>A signature of refined craftsmanship, where exceptional ingredients meet enduring elegance.
                            Created for those who leave an impression without saying a word.</span>
                    </p>

                </div>
            </div>
        </section>
    );
}
