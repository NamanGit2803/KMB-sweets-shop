import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import Loader from "@/components/Loader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kyal Misthan Bhandar — Premium Rajasthani Sweets, Fatehpur",
  description: "Order authentic Rajasthani mithai — Kaju Katli, Saffron Ghewar, Motichoor Laddoo and luxury gift hampers. Pure desi ghee, freshly made daily in Fatehpur.",
   keywords: ["sweets in Fatehpur", "mithai shop", "gift hampers", "best sweets shop", "mithai dukaan"],
};

export default async function RootLayout({ children }) {


  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
          <main className="flex-1">
            {children}
          </main>
         
      </body>
    </html>
  );
}



//  <body className="min-h-full flex flex-col">
//         <Loader>
//           <Header />
//           <main className="flex-1">
//             {children}
//           </main>
//           <Footer />
//           <FloatingWhatsapp />
//         </Loader>
//       </body>
