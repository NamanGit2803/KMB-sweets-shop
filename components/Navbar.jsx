"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Sweets", href: "/sweets" },
  { label: "About", href: "/about" },
  { label: "Legacy", href: "/#legacy" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="shrink-header sticky top-0 z-40 w-full border-b border-(--gold)/30 bg-ivory/85 backdrop-blur-md data-[scrolled=true]:bg-ivory/95"
    >
      <div className="absolute inset-0 jali-pattern opacity-40 pointer-events-none" />

      <div
        className={`relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8 transition-[height] duration-300 ${scrolled ? "h-14" : "h-20"
          }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <Image
            src="/image/logo2.png"
            alt="Kyal Misthan Bhandar"
            width={250}
            height={80}
            className={`transition-all duration-300
    ${scrolled
                ? "h-[75px] w-24 md:h-[80px] md:w-32"
                : "h-[100px] w-28 md:h-[110px] md:w-40"
              }`}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => {
            const isActive = !l.href.includes("#") && pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`font-body text-sm uppercase tracking-widest transition-colors ${isActive
                  ? "text-gold font-semibold"
                  : "text-foreground/80 hover:text-crimson"
                  }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-lift inline-flex items-center gap-2 rounded bg-[#B91C2C] font-semibold text-[#F5C842] shadow-md hover:bg-[#D42030] transition-all ${scrolled ? "px-4 py-2 text-xs" : "px-4 md:px-6 py-2.5 text-sm"
              }`}
            style={{
              fontFamily: "var(--font-poppins)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">Order</span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 flex items-center justify-center text-crimson"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-(--gold)/30 bg-ivory">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => {
              const isActive = !l.href.includes("#") && pathname === l.href;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 font-body text-sm uppercase tracking-widest border-b border-(--gold)/15 last:border-0 ${isActive
                    ? "text-gold font-semibold"
                    : "text-foreground/80"
                    }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}