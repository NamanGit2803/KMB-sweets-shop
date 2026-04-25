"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Location() {
  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Heading */}
        <div className="reveal text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-crimson mb-4">
            Visit · Call · Order
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Find Us in <span className="gold-text">Fatehpur</span>
          </h2>

          <div className="gold-divider w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">

          {/* Map */}
          <div className="reveal lg:col-span-3 overflow-hidden rounded-2xl border-2 border-(--gold)/30 shadow-lg min-h-100">
            <iframe
              title="Kyal Misthan Bhandar location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.92%2C27.96%2C75.02%2C28.03&layer=mapnik&marker=27.9952%2C74.9692"
              className="w-full h-full min-h-100 border-0"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="reveal lg:col-span-2 flex flex-col gap-5">
            <InfoCard icon={MapPin} title="Address">
              Main Bazaar, Fatehpur Shekhawati,
              <br />
              Sikar, Rajasthan 332301
            </InfoCard>

            <InfoCard icon={Phone} title="Call Us">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="text-crimson font-semibold hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </InfoCard>

            <InfoCard icon={Clock} title="Open Daily">
              Monday – Sunday
              <br />
              7:00 AM – 10:00 PM
            </InfoCard>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ✅ Converted InfoCard (Removed TypeScript) */
function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-ivory p-6 border border-(--gold)/30">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--gold)/20 border border-(--gold)/40 text-crimson">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <div className="font-display text-lg font-semibold text-foreground">
          {title}
        </div>

        <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>

    </div>
  );
}