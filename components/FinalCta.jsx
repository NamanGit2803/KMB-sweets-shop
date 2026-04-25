"use client";

import Image from "next/image";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image/final-cta-family.jpg"
          alt="Family sharing sweets"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.25 0.08 35 / 0.85), oklch(0.32 0.12 50 / 0.75))",
        }}
      />

      {/* Pattern */}
      <div className="absolute inset-0 jali-pattern opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="reveal relative mx-auto max-w-4xl px-4 md:px-8 py-24 md:py-32 text-center text-ivory">

        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Craving Something Sweet?{" "}
          <span className="text-gold">😋</span>
          <br />
          Order Now.
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-ivory/85 italic">
          Freshly made today. Delivered with warmth.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">

          {/* WhatsApp */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex h-14 items-center justify-center rounded bg-[#B91C2C] px-10 text-[#F5C842] shadow-2xl hover:bg-[#D42030] w-full sm:w-auto"
          >
            WhatsApp
          </a>

          {/* Call */}
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="btn-lift inline-flex h-14 items-center justify-center rounded px-10 text-ivory border border-[#F5C842] hover:bg-[#F5C842]/20 w-full sm:w-auto"
          >
            📞 Call Now
          </a>

        </div>

        {/* Phone */}
        <div className="mt-6 text-sm text-ivory/70 tracking-wider">
          {PHONE_DISPLAY}
        </div>

      </div>
    </section>
  );
}