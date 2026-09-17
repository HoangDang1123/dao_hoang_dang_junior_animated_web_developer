import { Footer } from "@/components/layout/Footer";
import { BrandSection } from "@/components/sections/BrandSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { QualitiesSection } from "@/components/sections/QualitiesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisibilitySection } from "@/components/sections/VisibilitySection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <BrandSection />
        <FeaturesSection />
        <VisibilitySection />
        <QualitiesSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
