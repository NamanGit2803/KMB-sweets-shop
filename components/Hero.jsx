"use client";

import Image from "next/image";
import { ShoppingCart } from 'lucide-react';
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 jali-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 px-4 md:px-8 py-16 md:py-24 lg:py-28 items-center">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded border border-(--gold)/40 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-crimson">
            <span>🏆</span>
            <span>Most Trusted Premium Mithai</span>
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            A Royal Taste of <span className="gold-text">Rajasthan</span>,
            <br className="hidden sm:block" /> Crafted with Love.
          </h1>

          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 italic">
            Pure Desi Ghee · Freshly Made Daily · Perfect for Every Occasion
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

            {/* WhatsApp Button */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded bg-[#B91C2C] px-8 text-[#F5C842] shadow-lg hover:bg-[#D42030] w-full sm:w-auto"
              style={{
                fontFamily: "var(--font-poppins)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              Order on WhatsApp
            </a>

            {/* View Sweets Button */}
            <a
              href="#sweets"
              className="btn-lift inline-flex h-14 items-center justify-center gap-2 rounded px-8 text-[#B91C2C] w-full sm:w-auto transition-all border-[1.5px] border-[#B91C2C] hover:bg-[#B91C2C] hover:text-[#F5C842]"
              style={{
                fontFamily: "var(--font-poppins)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              <ShoppingCart className="h-4 w-4"/> View Sweets
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-6 rounded-full bg-(--gold)/15 blur-3xl" />

          <div className="relative overflow-hidden rounded border border-(--gold)/30 shadow-2xl">
            <Image
              src={'/image/hero-ghewar.jpg'}
              alt="Ghewar mithai"
              width={1600}
              height={1024}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}