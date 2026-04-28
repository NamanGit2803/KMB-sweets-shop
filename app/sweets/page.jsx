"use client";

import Link from "next/link";
import Image from "next/image";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { categories, products } from "@/lib/sweet-data";
import BottomCTA from "@/components/Bottom-CTA";

export default function SweetsPage() {

    // ✅ Convert products → sections (group by category)
    const sections = categories
        .filter((c) => c.id !== "all")
        .map((cat) => ({
            id: cat.id,
            title: cat.label,
            bg: "bg-amber-50/30", // same UI feel
            products: products.filter((p) => p.category === cat.id),
        }));



    return (
        <div className="min-h-screen bg-ivory">

            {/* HERO */}
            <section
                className="relative flex items-center justify-center"
                style={{
                    height: "45vh",
                    minHeight: 340,
                    background:
                        "linear-gradient(180deg, oklch(0.38 0.18 27), oklch(0.30 0.15 25))",
                }}
            >
                <div className="absolute inset-0 jali-pattern opacity-15" />

                <div className="relative text-center px-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
                        ✦ OUR SWEETS ✦
                    </div>

                    <h1 className="font-display text-5xl md:text-[64px] font-bold text-gold">
                        The Complete Collection
                    </h1>

                    <p className="mt-4 text-lg text-ivory/85 max-w-xl mx-auto italic">
                        Pure and handcrafted since 1962.
                    </p>

                    <div className="mt-4 text-xs text-(--gold)/60">
                        <Link href="/">Home</Link> / Our Sweets
                    </div>
                </div>
            </section>

            {/* CATEGORY NAV */}
            <div className="sticky top-14 z-30 bg-ivory border-b border-(--gold)/20">
                <div className="mx-auto max-w-7xl px-4 py-3 overflow-x-auto">
                    <div className="flex gap-2 min-w-max md:flex-wrap md:justify-center">
                        {categories.map((c) => (
                            <a
                                key={c.id}
                                href={
                                    c.id === "all" ? "#top-of-products" : `#cat-${c.id}`
                                }
                                className="inline-flex h-10 items-center px-5 rounded text-xs font-semibold uppercase border bg-white hover:bg-[#B91C2C] hover:text-[#F5C842]"
                            >
                                {c.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRODUCTS */}
            <main id="top-of-products" className="pb-20">
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={`cat-${section.id}`}
                        className={`py-16 ${section.bg}`}
                    >
                        <div className="mx-auto max-w-7xl px-4">

                            {/* TITLE */}
                            <div className="text-center mb-12">
                                <div className="text-xs uppercase tracking-widest text-gold mb-3">
                                    ✦ {section.title} ✦
                                </div>

                                <h2 className="font-display text-3xl font-bold text-crimson">
                                    {section.title}
                                </h2>
                            </div>

                            {/* GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.products.map((p, i) => (
                                    <article
                                        key={p.name}
                                        style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                                        className="reveal card-hover group flex flex-col overflow-hidden rounded bg-white border border-gold/20 shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative h-60 flex items-center justify-center">
                                            {/* 🔥 fallback emoji (important because your data doesn't have emoji) */}
                                            <div className="relative w-full h-full overflow-hidden">
                                                <Image
                                                    src={p.image || "/placeholder.jpg"}
                                                    alt={p.name}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* 🔥 badge fix (your data has boolean, not string) */}
                                            {p.badge && (
                                                <span className="absolute top-3 right-3 rounded text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-crimson text-ivory">
                                                    Bestseller
                                                </span>
                                            )}
                                        </div>

                                        <div className="border-t-2 border-gold" />

                                        <div className="flex flex-1 flex-col p-5">
                                            <h3 className="font-display text-xl font-bold text-foreground">
                                                {p.name}
                                            </h3>

                                            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                                {p.desc}
                                            </p>


                                            <p className="mt-3 text-xs text-crimson italic">
                                                "{p.highlight}"
                                            </p>

                                            <div className="mt-auto pt-4">
                                                <div className="border-t border-(--gold)/15 pt-3">
                                                    <div className="text-[10px] uppercase tracking-widest text-(--gold)/70 text-center mb-3">
                                                        Pure · Handcrafted · No Preservatives
                                                    </div>

                                                    <a
                                                        href={p.outOfStock ? undefined : whatsappLink(p.name)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`btn-lift flex  h-11 items-center justify-center gap-2 rounded bg-[#B91C2C] text-[#F5C842] ${p.outOfStock ? 'opacity-80' : 'hover:bg-[#D42030]'}`}        
                                                    >
                                                        {p.outOfStock ? 'Out of Stock' : 'Order on WhatsApp'}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                        </div>
                    </section>
                ))}
            </main>

            {/* CTA */}
            <BottomCTA title={"Didn't find what you're looking for?"} description={'We take custom orders for weddings & events.'} />

        </div>
    );
}