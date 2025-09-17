import type { Metadata } from "next";
import { ServicesHero } from "@/components/services-hero";
import { BuyingServices } from "@/components/buying-services";
import { SellingServices } from "@/components/selling-services";
import { InvestmentConsulting } from "@/components/investment-consulting";
import { PropertyManagement } from "@/components/property-management";
import { MarketAnalysisServices } from "@/components/market-analysis-services";
import { ConciergeServices } from "@/components/concierge-services";
import { ServicesCTA } from "@/components/services-cta";

export const metadata: Metadata = {
  title: "Luxury Real Estate Services | Premium Property Solutions",
  description:
    "Comprehensive luxury real estate services including buying, selling, investment consulting, property management, market analysis, and exclusive concierge services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <BuyingServices />
      <SellingServices />
      <InvestmentConsulting />
      {/* <PropertyManagement /> */}
      <MarketAnalysisServices />
      {/* <ConciergeServices /> */}
      <ServicesCTA />
    </main>
  );
}
