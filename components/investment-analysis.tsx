import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, PieChart, Target, Calendar, ArrowRight } from "lucide-react"

const analyses = [
  {
    title: "Luxury Condo ROI Analysis",
    description: "Comprehensive return on investment analysis for luxury condominium properties across prime markets.",
    roi: "12.8%",
    timeframe: "5-Year Average",
    riskLevel: "Moderate",
    marketTrend: "Bullish",
    keyMetrics: [
      { label: "Appreciation Rate", value: "8.5% annually" },
      { label: "Rental Yield", value: "4.3% annually" },
      { label: "Market Liquidity", value: "High" },
    ],
    featured: true,
  },
  {
    title: "Waterfront Property Investment",
    description: "Analysis of waterfront luxury properties as long-term investment vehicles with scarcity premium.",
    roi: "15.2%",
    timeframe: "10-Year Outlook",
    riskLevel: "Low-Moderate",
    marketTrend: "Strong Bull",
    keyMetrics: [
      { label: "Scarcity Premium", value: "25-40%" },
      { label: "Climate Resilience", value: "High Priority" },
      { label: "Rental Demand", value: "Exceptional" },
    ],
  },
  {
    title: "Commercial Real Estate Opportunities",
    description: "Investment opportunities in luxury commercial properties including retail and office spaces.",
    roi: "9.7%",
    timeframe: "7-Year Projection",
    riskLevel: "Moderate-High",
    marketTrend: "Recovering",
    keyMetrics: [
      { label: "Cap Rate", value: "5.2-7.8%" },
      { label: "Occupancy Rate", value: "87%" },
      { label: "Lease Terms", value: "10-15 years" },
    ],
  },
]

const investmentTips = [
  {
    icon: Target,
    title: "Diversification Strategy",
    description: "Spread investments across different property types and locations to minimize risk.",
  },
  {
    icon: TrendingUp,
    title: "Market Timing",
    description: "Understanding market cycles helps optimize entry and exit points for maximum returns.",
  },
  {
    icon: PieChart,
    title: "Portfolio Balance",
    description: "Maintain optimal balance between growth properties and income-generating assets.",
  },
]

export function InvestmentAnalysis() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6">Investment Analysis</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Make informed investment decisions with our detailed analysis and market insights tailored for luxury real
            estate investors.
          </p>
        </div>

        {/* Investment Analyses */}
        <div className="space-y-8 mb-16">
          {analyses.map((analysis, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 ${
                analysis.featured ? "ring-2 ring-amber-200 bg-gradient-to-r from-amber-50 to-white" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">{analysis.title}</h3>
                        {analysis.featured && (
                          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-3">
                            Featured Analysis
                          </Badge>
                        )}
                      </div>
                      <Badge
                        variant={
                          analysis.marketTrend === "Bullish" || analysis.marketTrend === "Strong Bull"
                            ? "default"
                            : "secondary"
                        }
                        className="ml-4"
                      >
                        {analysis.marketTrend}
                      </Badge>
                    </div>

                    <p className="text-stone-600 leading-relaxed">{analysis.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {analysis.keyMetrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-stone-50 rounded-lg">
                          <div className="font-medium text-stone-900">{metric.value}</div>
                          <div className="text-xs text-stone-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                      <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="font-serif text-3xl font-light text-emerald-800 mb-1">{analysis.roi}</div>
                      <div className="text-sm text-emerald-600 font-medium">Expected ROI</div>
                      <div className="text-xs text-emerald-500 mt-1">{analysis.timeframe}</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-stone-600">Risk Level:</span>
                        <Badge variant="outline">{analysis.riskLevel}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-stone-600">Timeframe:</span>
                        <span className="text-sm font-medium text-stone-900">{analysis.timeframe}</span>
                      </div>
                    </div>

                    <Button className="w-full bg-stone-900 hover:bg-stone-800">
                      View Full Analysis
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Tips */}
        <div className="bg-stone-50 rounded-2xl p-8">
          <h3 className="font-serif text-3xl font-light text-stone-900 text-center mb-8">Investment Strategy Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investmentTips.map((tip, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <tip.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-serif text-xl font-light text-stone-900 mb-3">{tip.title}</h4>
                <p className="text-stone-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-stone-50 bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Investment Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
