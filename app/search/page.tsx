import type { Metadata } from "next";
import SearchHero from "@/components/search-hero";
import MLSSearchTool from "@/components/mls-search-tool";
import SearchFilters from "@/components/search-filters";
import SearchResults from "@/components/search-results";

export const metadata: Metadata = {
  title: "Property Search | Luxury Real Estate",
  description:
    "Search luxury properties with our advanced MLS search tool. Find your dream home with comprehensive filters and real-time market data.",
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <SearchHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Search Filters Sidebar */}
          {/* <div className="lg:col-span-1">
            <SearchFilters />
          </div> */}

          {/* Main Search Content */}
          <div className="lg:col-span-4">
            <MLSSearchTool />
            {/* <SearchResults /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
