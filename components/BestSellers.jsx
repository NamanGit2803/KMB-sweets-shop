"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { whatsappLink } from "@/lib/whatsapp";
import { products } from "@/lib/sweet-data";

// 👉 Use public folder images instead of import
const sweets = [
  { name: "Kaju Katli", desc: "Premium cashews, pure ghee, edible silver leaf.", img: "/sweet-kaju-katli.jpg", category: "Burfis" },
  { name: "Saffron Ghewar", desc: "Rajasthan's pride — lattice ghee discs in saffron syrup.", img: "/sweet-ghewar.jpg", category: "Ghee Sweets" },
  { name: "Motichoor Laddoo", desc: "Tiny golden boondi pearls, slow-cooked to perfection.", img: "/sweet-motichoor.jpg", category: "Laddoos" },
  { name: "Rasgulla", desc: "Spongy chenna dumplings in delicate sugar syrup.", img: "/sweet-rasgulla.jpg", category: "Bengali" },
  { name: "Soan Papdi", desc: "Flaky, melt-in-mouth squares with pistachio.", img: "/sweet-soan-papdi.jpg", category: "Ghee Sweets" },
  { name: "Gulab Jamun", desc: "Dark golden khoya balls steeped in syrup.", img: "/sweet-gulab-jamun.jpg", category: "Bengali" },
  { name: "Besan Ladoo", desc: "Roasted gram flour, ghee, and cardamom.", img: "/sweet-besan-ladoo.jpg", category: "Laddoos" },
  { name: "Mawa Burfi", desc: "Rich khoya squares with ghee crumb.", img: "/sweet-kaju-katli.jpg", category: "Burfis" },
];


export function BestSellers() {
  const filtered = products.filter(p => p.badge);

  return (
    <section id="sweets" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Hand-crafted Daily
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Best Selling <span className="gold-text">Sweets</span>
          </h2>

          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Subtitle */}
        <div className="reveal text-center mb-6">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            ✦ FEATURED SELECTION ✦
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((s, i) => (
            <article
              key={s.name}
              className="reveal card-hover group flex flex-col overflow-hidden rounded bg-white border border-gold/20 shadow-sm hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {s.name}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground italic flex-1">
                  {s.desc}
                </p>

                <a
                  href={whatsappLink(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift mt-4 inline-flex h-11 items-center justify-center rounded bg-[#B91C2C] px-5 text-sm text-[#F5C842] hover:bg-[#D42030]"
                >
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground italic">
            No sweets in this category yet.
          </p>
        )}

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <a
            href="/sweets"
            className="inline-flex h-14 items-center justify-center w-full max-w-md mx-auto rounded border border-[#B91C2C] text-[#B91C2C] hover:bg-[#B91C2C] hover:text-[#F5C842] transition-all"
          >
            View All Products →
          </a>
        </div>

      </div>
    </section>
  );
}