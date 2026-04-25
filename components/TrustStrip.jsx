"use client";

import { Star, Users, Droplet } from "lucide-react";

const items = [
  { icon: Star, label: "4.8 Rating on Google", sub: "Trusted by hundreds" },
  { icon: Users, label: "5000+ Happy Customers", sub: "Across Rajasthan" },
  { icon: Droplet, label: "100% Pure Desi Ghee", sub: "No compromises" },
];

export function TrustStrip() {
  return (
    <section className="bg-white border-y border-(--gold)/30">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-(--gold)/25">
          {items.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={label}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal flex items-center justify-center gap-4 py-4 md:py-2 px-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--gold)/15 text-gold border border-(--gold)/40">
                <Icon className="h-6 w-6" />
              </div>

              <div className="text-left">
                <div className="font-display text-base md:text-lg font-semibold text-foreground">
                  {label}
                </div>
                <div className="text-xs text-muted-foreground italic">
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}