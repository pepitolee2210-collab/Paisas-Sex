import { Metadata } from "next";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Planes — PaisaSex",
  description: "Elige tu plan de suscripción y accede a contenido exclusivo desde $4.99/mes.",
};

export default function PricingPage() {
  return (
    <div className="pt-8">
      <PricingSection />
    </div>
  );
}
