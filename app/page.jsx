import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { BestSellers } from "@/components/BestSellers";
import { Hampers } from "@/components/Hampers";
import { Legacy } from "@/components/Legacy";
import { Reviews } from "@/components/Reviews";
import { Location } from "@/components/Location";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TrustStrip/>
      <BestSellers/>
      <Hampers/>
      <Legacy/>
      <Reviews/>
      <Location/>
      <FinalCta/>
    </div>
  );
}
