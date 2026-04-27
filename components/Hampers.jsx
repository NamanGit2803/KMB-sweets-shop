"use client";

import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { FaGift } from "react-icons/fa6";

const hampers = [
  {
    name: "Wedding Gift Box",
    desc: "An heirloom assortment for the most cherished celebrations — kaju katli, motichoor, ghewar, and silver-leaf burfis.",
    img: "/image/hamper-wedding.jpg",
  },
  {
    name: "Festive Combo",
    desc: "Diwali, Holi, Rakhi — a curated mix of seasonal favourites.",
    img: "/image/hamper-festive.jpg",
  },
  {
    name: "Corporate Hampers",
    desc: "Elegant, brand-friendly hampers for clients and teams.",
    img: "/image/hamper-corporate.jpg",
  },
];

export function Hampers() {
  return (
    <section id="hampers" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Curated Gifting
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Perfect Gift Hampers
          </h2>

          <div className="gold-divider w-24 mx-auto mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground italic">
            Royal presentation. Pure ingredients. Memorable moments — delivered.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hampers.map((h, i) => (
            <article
              key={h.name}
              className="reveal card-hover group flex flex-col overflow-hidden rounded bg-ivory border border-(--gold)/30"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={h.img}
                  alt={h.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {h.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground italic flex-1">
                  {h.desc}
                </p>

                <a
                  href={whatsappLink(h.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift mt-5 inline-flex h-11 items-center justify-center rounded bg-[#B91C2C] px-5 text-[#F5C842] hover:bg-[#D42030]"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded bg-[#B91C2C] px-6 py-3 text-sm font-semibold text-[#F5C842] shadow-lg">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Bulk orders available — Contact Now
          </div>
        </div>

      </div>
    </section>
  );
}