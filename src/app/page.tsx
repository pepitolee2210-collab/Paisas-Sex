import HeroSection from "@/components/HeroSection";
import CategoriesStrip from "@/components/CategoriesStrip";
import FeaturedVideos from "@/components/FeaturedVideos";
import ModelsShowcase from "@/components/ModelsShowcase";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
import CreatorCTA from "@/components/CreatorCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesStrip />
      <FeaturedVideos />
      <ModelsShowcase />
      <CreatorCTA />
      <WhyUsSection />
      <PricingSection />
    </>
  );
}
