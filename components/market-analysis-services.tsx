import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LineChart, Map, Database, FileBarChart, Zap, Eye } from "lucide-react";
import Link from "next/link";

const analysisServices = [
  {
    icon: LineChart,
    title: "Market Trends Analysis",
    description:
      "Real-time market data analysis and trend forecasting to inform your real estate decisions.",
  },
  {
    icon: Map,
    title: "Neighborhood Reports",
    description:
      "Comprehensive neighborhood analysis including demographics, amenities, and growth projections.",
  },
  {
    icon: Database,
    title: "Comparative Market Analysis",
    description:
      "Detailed CMA reports with comparable sales data and pricing recommendations.",
  },
  {
    icon: FileBarChart,
    title: "Investment Performance",
    description:
      "Portfolio performance tracking and market opportunity identification for investors.",
  },
  {
    icon: Zap,
    title: "Real-Time Alerts",
    description:
      "Instant notifications on market changes, new listings, and investment opportunities.",
  },
  {
    icon: Eye,
    title: "Custom Research",
    description:
      "Tailored market research and analysis based on your specific requirements and interests.",
  },
];

export function MarketAnalysisServices() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Market Analysis
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Data-Driven Market
            <span className="text-amber-600"> Intelligence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Make informed decisions with our comprehensive market analysis and
            real-time intelligence services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analysisServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-stone-200"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
            >
              Request Market Analysis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
