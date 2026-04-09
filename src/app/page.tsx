import HeroSection from "@/components/HeroSection";
import FeaturedVideos from "@/components/FeaturedVideos";
import ModelsShowcase from "@/components/ModelsShowcase";
import PricingSection from "@/components/PricingSection";
import SeductorasBanner from "@/components/SeductorasBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedVideos />
      <ModelsShowcase />
      <SeductorasBanner />
      <PricingSection />
    </>
  );
}
