import Gradient from "@/components/Gradient";
import BentoGrid from "@/pages/sections/Bento/BentoGrid";
import FAQ from "@/pages/sections/Faq/FAQ";
import Hero from "@/pages/sections/Hero/Hero";
import Sponsors from "@/pages/sections/Other/Sponsors";
import Pricing from "@/pages/sections/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Gradient />
      <Sponsors />
      <BentoGrid />
      <Pricing />
      <FAQ />
    </>
  );
}
