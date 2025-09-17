import type { Metadata } from "next";
import { MarketReports } from "@/components/market-reports";
import { NeighborhoodGuides } from "@/components/neighborhood-guides";
import { InvestmentAnalysis } from "@/components/investment-analysis";
import { BlogArticles } from "@/components/blog-articles";
import { MarketDataVisualizations } from "@/components/market-data-visualizations";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Market Insights | Premium Real Estate",
  description:
    "Stay informed with comprehensive market reports, neighborhood guides, investment analysis, and expert insights from our premium real estate professionals.",
};

export default function MarketInsightsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-stone-900 mb-6 text-balance">
            Market Insights
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed text-pretty">
            Stay ahead of the premium real estate market with our comprehensive
            analysis, expert insights, and data-driven reports.
          </p>
        </div>
      </section>

      {/* Market Data Visualizations */}
      <MarketDataVisualizations />

      {/* Market Reports */}
      <MarketReports />

      {/* Neighborhood Guides */}
      <NeighborhoodGuides />

      {/* Investment Analysis */}
      <InvestmentAnalysis />

      {/* Blog Articles */}
      <BlogArticles />

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  );
}
