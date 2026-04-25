"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anjali Sharma",
    initial: "A",
    quote:
      "The Kaju Katli melts in your mouth. Ordered for my daughter's wedding — every guest asked where I got them from!",
  },
  {
    name: "Rohit Agarwal",
    initial: "R",
    quote:
      "Authentic Rajasthani Ghewar that reminds me of my grandmother's kitchen. Pure ghee, no shortcuts.",
  },
  {
    name: "Priya Mehta",
    initial: "P",
    quote:
      "Beautifully packed corporate hampers for our Diwali clients. Premium quality and on-time delivery.",
  },
];

export function Reviews() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Real People · Real Reviews
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="gold-text">Customers Say</span>
          </h2>

          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="reveal card-hover flex flex-col rounded-2xl bg-white p-7 border border-(--gold)/20 shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <div className="text-xs font-semibold text-muted-foreground tracking-wider">
                  GOOGLE
                </div>
              </div>

              {/* Quote */}
              <p className="font-display text-lg leading-relaxed text-foreground/90 italic flex-1">
                "{r.quote}"
              </p>

              {/* User */}
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-(--gold)/20">
                <div className="h-11 w-11 rounded-full bg-crimson text-ivory flex items-center justify-center font-display font-semibold">
                  {r.initial}
                </div>

                <div>
                  <div className="font-semibold text-foreground">
                    {r.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Verified customer
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}