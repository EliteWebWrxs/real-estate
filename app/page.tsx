import { HeroSection } from "@/components/hero-section";
import { SearchSection } from "@/components/search-section";
import { FeaturedListings } from "@/components/featured-listings";
import { BrandStory } from "@/components/brand-story";
import { MarketInsights } from "@/components/market-insights";
import { AgentIntroduction } from "@/components/agent-introduction";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <SearchSection /> */}
      <FeaturedListings />
      <BrandStory />
      <AgentIntroduction />
      <MarketInsights />
    </main>
  );
}
