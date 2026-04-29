"use client";

import Image from "next/image";

export function Legacy() {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.32 0.09 35), oklch(0.26 0.08 30))",
      }}
    >
      <div className="absolute inset-0 jali-pattern opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Generations of Craft
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-ivory">
            Our Legacy of Taste{" "}
          </h2>

          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Images */}
          <div className="reveal grid grid-cols-2 gap-5">

            {/* Image 1 */}
            <div className="relative">
              <div className="absolute -inset-2 bg-(--gold)/30 rounded-sm blur-xl" />

              <div className="relative border-4 border-gold/70 bg-ivory p-2 shadow-2xl -rotate-2">
                <div className="relative w-full aspect-4/5">
                  <Image
                    src="/image/shop.jpeg"
                    alt="Original Kyal sweet shop"
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    style={{ filter: "sepia(0.3) contrast(1.05)" }}
                  />
                </div>

                <div className="text-center text-xs text-foreground/70 italic py-2 font-display">
                  Fatehpur · Est. legacy
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative mt-12">
              <div className="absolute -inset-2 bg-(--gold)/30 rounded-sm blur-xl" />

              <div className="relative border-4 border-(--gold)/70 bg-ivory p-2 shadow-2xl rotate-2">
                <div className="relative w-full aspect-4/5">
                  <Image
                    src="/image/hemper1.jpeg"
                    alt="Traditional utensils"
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-all duration-300"
                    style={{ filter: "sepia(0.25)" }}
                  />
                </div>

                <div className="text-center text-xs text-foreground/70 italic py-2 font-display">
                  Gift Box
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="reveal text-ivory">
            <p className="font-display text-2xl md:text-3xl leading-relaxed text-ivory/95">
              "At Kyal Misthan Bhandar, we have been serving authentic taste and purity for years."
            </p>

            <p className="mt-6 font-body text-base md:text-lg text-ivory/85 leading-relaxed italic">
              Every sweet is crafted with love using premium ingredients and
              traditional recipes — the same copper kadhais, the same
              slow-stirring rhythm, the same uncompromising care. From a single
              storefront in Fatehpur to homes across Rajasthan, our story is one
              of patience, purity, and devotion.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border-2 border-gold bg-(--gold)/20 flex items-center justify-center text-gold font-display text-xl">
                K
              </div>

              <div>
                <div className="font-display text-lg text-ivory">
                  The Kyal Family
                </div>

                <div className="text-xs uppercase tracking-widest text-gold">
                  Custodians of taste · Fatehpur, Rajasthan
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}