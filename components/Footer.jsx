"use client";

import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-crimson text-ivory">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-gold">
              Kyal Misthan Bhandar
            </div>

            <div className="text-xs uppercase tracking-[0.3em] text-ivory/70 mt-1">
              Fatehpur · Rajasthan
            </div>

            <p className="mt-4 text-sm text-ivory/80 italic max-w-xs">
              Premium Rajasthani mithai crafted with pure desi ghee — a legacy of taste.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-display text-sm uppercase tracking-widest text-gold mb-3">
              Explore
            </div>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#sweets" className="hover:text-gold">
                  Our Sweets
                </Link>
              </li>
              <li>
                <Link href="/#hampers" className="hover:text-gold">
                  Gift Boxes
                </Link>
              </li>
              <li>
                <Link href="/#legacy" className="hover:text-gold">
                  Legacy
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display text-sm uppercase tracking-widest text-gold mb-3">
              Connect
            </div>

            <a
              href={`tel:+${PHONE_DISPLAY}`}
              className="inline-flex items-center gap-2 text-sm hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>

            <a
              href={`tel:+917742841548`}
              className="flex items-center gap-2 text-sm hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              +91 77428 41548
            </a>

            <div className="mt-4 flex gap-3">

              <a
                href="https://www.instagram.com/kyal_misthan_bhandar.official?igsh=eDA1ejhwdmdlb2ty"
                target="_blank"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded border border-(--gold)/40 hover:bg-(--gold)/15"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              <a
                href="https://www.facebook.com/share/1FKvR72gd7/"
                target="_blank"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded border border-(--gold)/40 hover:bg-(--gold)/15"
              >
                <FaFacebook className="h-4 w-4" />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="gold-divider mt-10" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/70">
          <div>
            © {new Date().getFullYear()} Kyal Misthan Bhandar. All rights reserved.
          </div>

          <div className="italic">
            Crafted with love · Fatehpur, Rajasthan
          </div>
        </div>

      </div>
    </footer>
  );
}