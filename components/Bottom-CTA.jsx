'use client'

import { IoIosCall } from "react-icons/io";
import { whatsappLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { FaWhatsapp } from "react-icons/fa6";

const BottomCTA = ({title, description}) => {
    return (
        <section className="bg-ivory py-16 md:py-20">
            <div className="reveal mx-auto max-w-2xl px-4 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
                <p className="mt-4 text-lg text-muted-foreground" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}>{description}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={`tel:+${WHATSAPP_NUMBER}`}
                        className="inline-flex h-14 items-center justify-center px-8 rounded transition-all w-full sm:w-auto border-[1.5px] border-[#B91C2C] text-[#B91C2C] gap-1"
                        style={{ fontFamily: "var(--font-poppins)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500, fontSize: 13 }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#B91C2C"; e.currentTarget.style.color = "#F5C842"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B91C2C"; }}
                    >
                        <IoIosCall /> Call Us
                    </a>
                    <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-14 items-center justify-center px-8 rounded transition-all w-full sm:w-auto gap-1"
                        style={{ border: "1.5px solid #B91C2C", color: "#B91C2C", fontFamily: "var(--font-poppins)", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500, fontSize: 13 }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "#B91C2C"; e.currentTarget.style.color = "#F5C842"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B91C2C"; }}
                    >
                        <FaWhatsapp /> WhatsApp Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BottomCTA