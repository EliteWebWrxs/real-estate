import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, MapPin, Building, Globe } from "lucide-react";

export function MarketExpertise() {
  const expertiseAreas = [
    {
      icon: Building,
      title: "Premium Residential",
      description: "Exclusive estates, penthouses, and high-end condominiums",
      stats: "$2.5B+ in sales",
      // markets: ["Manhattan", "Beverly Hills", "Miami Beach", "Aspen"],
    },
    // {
    //   icon: Globe,
    //   title: "International Properties",
    //   description: "Global premium real estate across premier destinations",
    //   stats: "45+ countries",
    //   // markets: ["London", "Paris", "Tokyo", "Dubai"],
    // },
    {
      icon: TrendingUp,
      title: "Investment Properties",
      description: "Commercial and residential investment opportunities",
      stats: "15% avg. ROI",
      // markets: [
      //   "Commercial Districts",
      //   "Emerging Markets",
      //   "REITs",
      //   "Development",
      // ],
    },
    {
      icon: MapPin,
      title: "Waterfront Properties",
      description: "Oceanfront, lakefront, and riverfront premium homes",
      stats: "500+ waterfront sales",
      // markets: ["South Tampa", "Siesta Keys", "St. Pete"],
    },
  ];

  const marketInsights = [
    {
      metric: "$4.2B",
      label: "Total Sales Volume",
      change: "+12%",
      period: "Last 12 months",
    },
    {
      metric: "2,847",
      label: "Properties Sold",
      change: "+8%",
      period: "Career total",
    },
    {
      metric: "98.5%",
      label: "Client Satisfaction",
      change: "+2%",
      period: "Based on reviews",
    },
    {
      metric: "45 days",
      label: "Average Days on Market",
      change: "-15%",
      period: "vs. market average",
    },
  ];

  const marketTrends = [
    {
      title: "Premium Market Resilience",
      description:
        "High-end properties continue to show strong performance despite market fluctuations.",
      impact: "Positive",
    },
    {
      title: "Sustainable Premium Demand",
      description:
        "Growing interest in eco-friendly and energy-efficient premium properties.",
      impact: "Growing",
    },
    {
      title: "International Buyer Activity",
      description:
        "Increased activity from international buyers seeking US premium properties.",
      impact: "Increasing",
    },
    {
      title: "Technology Integration",
      description:
        "Smart home technology becoming standard in premium property expectations.",
      impact: "Essential",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Market Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {
              "Deep market knowledge and specialized expertise across premium real estate segments, backed by decades of experience and proven results."
            }
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={area.title}
                className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 mb-4"
                  >
                    {area.stats}
                  </Badge>
                  {/* <div className="space-y-1">
                    {area?.markets?.map((market) => (
                      <div key={market} className="text-sm text-slate-500">
                        {market}
                      </div>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Performance */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-slate-900 text-center mb-12">
            Market Performance
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketInsights.map((insight) => (
              <Card
                key={insight.label}
                className="border-slate-200 text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {insight.metric}
                  </div>
                  <div className="text-slate-600 mb-3">{insight.label}</div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        insight.change.startsWith("+")
                          ? "bg-green-100 text-green-800"
                          : insight.change.startsWith("-")
                          ? "bg-red-100 text-red-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {insight.change}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-500 mt-2">
                    {insight.period}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Trends */}
        <div>
          <h3 className="font-serif text-3xl font-bold text-slate-900 text-center mb-12">
            Current Market Trends
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {marketTrends.map((trend) => (
              <Card
                key={trend.title}
                className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-serif text-xl font-semibold text-slate-900">
                      {trend.title}
                    </h4>
                    <Badge
                      variant="secondary"
                      className={`${
                        trend.impact === "Positive" ||
                        trend.impact === "Growing" ||
                        trend.impact === "Increasing"
                          ? "bg-green-100 text-green-800"
                          : trend.impact === "Essential"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {trend.impact}
                    </Badge>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {trend.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
