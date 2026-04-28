"use client";

import Image from "next/image";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { FaWhatsapp, FaAward, FaLeaf, FaClock } from "react-icons/fa6";
import { FaRegCheckSquare } from "react-icons/fa";
import BottomCTA from "@/components/Bottom-CTA";

/* ---------------- DATA ---------------- */

const processSteps = [
    { num: "01", title: "Sourcing the Best", desc: "Every ingredient is hand-selected. Our ghee comes from local Rajasthani dairies where cows graze on natural pastures. Our dry fruits are sourced directly from trusted suppliers. We visit suppliers personally, tasting and testing before every order. Because the sweet is only as good as what goes into it.", image: "/image/step1.jpg" },
    { num: "02", title: "Slow Cooking in Kadai", desc: "Our kadhais are the same brass vessels that have been in the family for decades. Every batch is cooked on slow flame — never rushed, never mass-produced. The ghee is heated gently until it releases its aroma, and only then do we begin. Some sweets take four hours to reach perfection. We wait. Time is our secret ingredient.", image: "/image/step2.jpeg" },
    { num: "03", title: "Shaping by Hand", desc: "No machines touch our mithai. Every ladoo is rolled by hand, every katli sliced with a practised eye. Our karigars have been with us for decades — their hands know the exact pressure, the right moisture, the perfect shape. This human touch is what makes each piece unique and unmistakably Kyalji.", image: "/image/step3.jpeg" },
    { num: "04", title: "Garnishing with Love", desc: "The final touch is where art meets craft. Saffron strands are placed one by one. Silver leaf is laid with the lightest breath. Pistachios are sliced paper-thin. This isn't decoration — it's a signature. When you open a box of Kyalji mithai, you see the care before you taste it.", image: "/image/step-4.jpg" },
    { num: "05", title: "Packing the Legacy", desc: "We pack each box as if it were going to royalty. Clean, elegant, secure. Our packaging preserves freshness while honouring the tradition inside. Every box carries our name — and with it, 62 years of trust. When you give someone a Kyalji box, you're giving them a piece of Rajasthan.", image: "/image/step5.jpeg" },
];


const galleryImages = [
    { src: "/image/kaju-katli.jpeg", label: "Kaju Katli" },
    { src: "/image/ghevar.jpeg", label: "Fresh Ghewar" },
    { src: "/image/bundi-laddoo.jpeg", label: "Bundi Laddoo" },
    { src: "/image/kesar-peda.jpeg", label: "Kesar Peda" },
    { src: "/image/gulab-jamun.jpeg", label: "Gulab Jamun" },
    { src: "/image/sev.jpeg", label: "Sev(Bhujiya)" },
    { src: "/image/mathri.jpeg", label: "Mathri" },
    { src: "/image/hemper1.jpeg", label: "Wedding Hemper" },
    { src: "/image/shop.jpeg", label: "Our Storefront" },
];

const trustCards = [
    { icon: FaAward, title: "FSSAI Licensed", desc: "Certified by the Food Safety and Standards Authority of India. Your safety is our baseline, not our achievement." },
    { icon: FaRegCheckSquare, title: "100% Pure Ingredients", desc: "No hydrogenated oils, no artificial colours, no preservatives. We stake our 62-year reputation on it." },
    { icon: FaLeaf, title: "Made Fresh Daily", desc: "Every batch prepared the same morning it is sold. We do not store. We do not compromise." },
    { icon: FaClock, title: "Est. 1962 Heritage", desc: "Over six decades of trust built one mithai at a time. Our legacy is our certificate." },
];

/* ---------------- PAGE ---------------- */

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-ivory">

            {/* SECTION 1 — The Shop Story */}
            <section className="bg-ivory py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left — Timeline Card */}
                        <div className="reveal">
                            <div className="relative p-8 md:p-12" style={{ background: "linear-gradient(180deg, oklch(0.38 0.18 27), oklch(0.30 0.15 25))" }}>
                                <div className="absolute inset-0 jali-pattern opacity-10 pointer-events-none" />
                                <div className="relative">
                                    <div className="font-display text-[100px] leading-none font-bold text-gold opacity-25 select-none">1962</div>
                                    <div className="mt-8 space-y-6">
                                        {[
                                            { year: "1962", text: "Founded in Fatehpur" },
                                            { year: "1980s", text: "Grew to 20+ varieties" },
                                            { year: "2000s", text: "3rd generation joins" },
                                            { year: "Today", text: "40+ varieties, same recipes" },
                                        ].map((item) => (
                                            <div key={item.year} className="flex items-start gap-4">
                                                <div className="mt-1.5 h-3 w-3 rounded-full bg-gold shrink-0" />
                                                <div>
                                                    <span className="font-display font-bold text-gold text-lg">{item.year}</span>
                                                    <span className="text-ivory/80 ml-2" style={{ fontFamily: "var(--font-poppins)", fontSize: 14 }}>— {item.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Story Text */}
                        <div className="reveal reveal-delay-2">
                            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>✦ OUR STORY ✦</div>
                            <h2 className="font-display text-3xl md:text-[44px] font-bold text-foreground leading-tight">A Sweet Shop Born from Devotion</h2>
                            <div className="mt-8 space-y-6 text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                                <p>
                                    In 1962, in the painted town of Fatehpur in Rajasthan's Shekhawati region, a young man with a single brass kadhai and an unwavering belief in purity opened a small sweet stall. He had one recipe — his mother's — and one rule: never compromise on ghee. That man founded what the town would come to know as Kyal Misthan Bhandar.
                                </p>
                                <p>
                                    Over the decades, the family grew the business from a single counter to a beloved institution. But something remarkable stayed constant: the recipes. Every ladoo, every katli, every barfi is made today exactly as it was in 1962. The same slow-cooking methods, the same brass utensils, the same insistence on pure desi ghee. The second and third generations didn't just inherit a business — they inherited a philosophy.
                                </p>
                            </div>

                            {/* Pull quote */}
                            <blockquote className="my-8 border-l-4 border-crimson bg-ivory pl-6 py-4">
                                <p className="text-2xl text-gold leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
                                    "We never changed the recipe. The recipe is the promise."
                                </p>
                            </blockquote>

                            <p className="text-base text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                                Today, Kyalji is more than a sweet shop — it's a symbol of Rajasthani pride. Families trust us with their celebrations. Brides insist on our laddoos for their wedding trays. Children grow up knowing the taste. And visitors from across India seek out our shop in Fatehpur, drawn by word-of-mouth that has outlasted any advertisement. Because purity, once tasted, is never forgotten.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — The Founder */}
            <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "linear-gradient(180deg, oklch(0.38 0.18 27), oklch(0.30 0.15 25))" }}>
                <div className="absolute inset-0 jali-pattern opacity-15 pointer-events-none" />
                <div className="reveal relative mx-auto max-w-4xl px-4 md:px-8 text-center">
                    <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>✦ THE FOUNDER ✦</div>
                    <h2 className="font-display text-4xl md:text-[56px] font-bold text-gold leading-tight">Govind Prasad Ji Kyal</h2>
                    <p className="mt-2 text-sm text-(--gold)/80" style={{ fontFamily: "var(--font-poppins)" }}>Founder, Kyal Misthan Bhandar · Est. 1962</p>

                    {/* Founder image placeholder */}
                    <div className="mt-10 mx-auto w-64 h-64 md:w-100 md:h-100 border-[3px] border-gold flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.45 0.10 35), oklch(0.35 0.12 30))", boxShadow: "0 8px 40px -8px oklch(0.97 0.02 85 / 0.15)" }}>
                        <div className="relative w-full h-full">
                            <Image
                                src="/image/kayaalji.jpeg"   // 👈 put your image path here
                                alt="Profile"
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover" />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                        {[
                            { num: "62+", label: "Years in Business" },
                            { num: "3", label: "Generations" },
                            { num: "1", label: "Unchanging Recipe" },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <div className="font-display text-3xl md:text-4xl font-bold text-gold">{s.num}</div>
                                <div className="mt-1 text-xs uppercase tracking-widest text-ivory/70" style={{ fontFamily: "var(--font-poppins)" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Founder quote */}
                    <blockquote className="mt-12 max-w-xl mx-auto">
                        <p className="text-2xl md:text-[28px] text-ivory leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
                            "I started with one kadai, one recipe, and the belief that purity never goes out of style."
                        </p>
                    </blockquote>

                    <div className="mt-10 max-w-xl mx-auto text-left space-y-4 text-sm text-ivory/80 leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                        <p>
                            Born and raised in Fatehpur, Shri Kyal Ji grew up watching his mother transform simple ingredients — ghee, besan, sugar — into something extraordinary. He learned that the secret to great mithai wasn't a secret at all: it was patience, purity, and love.
                        </p>
                        <p>
                            In 1962, with borrowed capital and a single kadhai, he opened a modest stall. His philosophy was radical in its simplicity: use only the best ingredients, cook slowly, and never cut corners. That philosophy became the foundation of everything Kyalji stands for today.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — How We Make Our Sweets */}
            <section className="bg-ivory py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <div className="reveal text-center mb-16">
                        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>✦ OUR PROCESS ✦</div>
                        <h2 className="font-display text-3xl md:text-[44px] font-bold text-foreground leading-tight">How We Make Our Sweets</h2>
                        <div className="gold-divider w-24 mx-auto mt-6" />
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {processSteps.map((step, i) => (
                            <div
                                key={step.num}
                                className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                            >
                                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                                    <div className="relative aspect-square flex items-center justify-center" style={{ background: "linear-gradient(135deg, #fdf5e6, #f5e6d0)" }}>
                                        <div className="absolute top-4 left-4 font-display text-[80px] leading-none font-bold text-crimson opacity-[0.15] select-none">{step.num}</div>
                                        <Image
                                            src={step.image}   // 👈 put your image path here
                                            alt="step"
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                                    <h3 className="font-display text-2xl md:text-[28px] font-bold text-crimson">{step.title}</h3>
                                    <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Full-width banner */}
                    <div className="reveal mt-20 py-12 md:py-16 text-center relative" style={{ background: "linear-gradient(180deg, oklch(0.38 0.18 27), oklch(0.30 0.15 25))" }}>
                        <div className="absolute inset-0 jali-pattern opacity-10 pointer-events-none" />
                        <p className="relative max-w-2xl mx-auto text-xl md:text-[28px] text-gold leading-relaxed px-6" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
                            "Every batch is tasted before it leaves our kitchen. Always has been. Always will be."
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — Gallery, Video & Certificates */}
            <section className="py-20 md:py-28" style={{ background: "#f8f0e3" }}>
                <div className="mx-auto max-w-7xl px-4 md:px-8">

                    {/* Sub-section A — Photo Gallery */}
                    <div className="reveal mb-20">
                        <div className="text-center mb-12">
                            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>✦ FROM OUR KITCHEN ✦</div>
                            <h2 className="font-display text-3xl md:text-[40px] font-bold text-foreground">A Glimpse Inside Kyalji</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryImages.map((item, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-square overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:border-gold border-2 border-transparent cursor-pointer"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.label}
                                        loading="lazy"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent py-3 px-3">
                                        <span className="text-xs uppercase tracking-widest text-ivory" style={{ fontFamily: "var(--font-poppins)" }}>{item.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-center text-sm text-muted-foreground" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>
                            Photography coming soon — visit us in Rajasthan to see the magic in person.
                        </p>
                    </div>

                    {/* Sub-section B — Video */}
                    <div className="reveal mb-20">
                        <div className="text-center mb-12">
                            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>✦ WATCH US WORK ✦</div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">See How Our Mithai is Born</h2>
                        </div>
                        <div className="relative aspect-video border-2 border-gold flex items-center justify-center" style={{ background: "linear-gradient(135deg, oklch(0.38 0.18 27), oklch(0.30 0.15 25))", boxShadow: "0 0 30px -5px oklch(0.38 0.18 27 / 0.4)" }}>
                            <div className="text-center">
                                <div className="mx-auto w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold text-4xl mb-4">▶</div>
                                <p className="text-ivory text-lg font-display">Our Story — Coming Soon</p>
                            </div>
                        </div>
                        <p className="mt-4 text-center text-sm text-muted-foreground" style={{ fontFamily: "var(--font-poppins)", fontStyle: "italic" }}>
                            Shot in our kitchen in Rajasthan. No actors. No sets. Just our karigars.
                        </p>
                    </div>

                    {/* Sub-section C — Certificates & Trust */}
                    <div className="reveal">
                        <div className="text-center mb-12">
                            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>✦ OUR COMMITMENTS ✦</div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Why Rajasthan Trusts Kyalji</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trustCards.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div key={card.title} className="bg-white border border-(--gold)/20 p-6 text-center rounded">
                                        <Icon className="w-10 h-10 mx-auto mb-4 text-gold" />
                                        <h3 className="font-display text-lg font-bold text-foreground">{card.title}</h3>
                                        <p className="mt-2 text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>{card.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <BottomCTA title={'Want to Know More?'} description={'Visit us in Fatehpur, or reach out — we love talking about mithai.'} />

        </div>
    );
}