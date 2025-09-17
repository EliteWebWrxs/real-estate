import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Download, Calendar, BarChart3 } from "lucide-react"

const reports = [
  {
    title: "Q4 2024 Luxury Market Report",
    description:
      "Comprehensive analysis of luxury property trends, pricing dynamics, and market forecasts for the upcoming quarter.",
    date: "December 2024",
    category: "Quarterly Report",
    trend: "+12.5%",
    trendLabel: "YoY Growth",
    downloadUrl: "#",
    featured: true,
  },
  {
    title: "Waterfront Properties Analysis",
    description:
      "Deep dive into waterfront luxury properties, including market performance and investment opportunities.",
    date: "November 2024",
    category: "Special Report",
    trend: "+8.3%",
    trendLabel: "Price Appreciation",
    downloadUrl: "#",
  },
  {
    title: "High-Rise Luxury Condos",
    description: "Market dynamics and trends in luxury high-rise condominium developments across prime locations.",
    date: "October 2024",
    category: "Market Analysis",
    trend: "+15.2%",
    trendLabel: "Demand Increase",
    downloadUrl: "#",
  },
  {
    title: "Estate Properties Report",
    description:
      "Analysis of large estate properties, including market trends and buyer preferences in the luxury segment.",
    date: "September 2024",
    category: "Quarterly Report",
    trend: "+6.7%",
    trendLabel: "Market Growth",
    downloadUrl: "#",
  },
]

export function MarketReports() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6">Market Reports & Trends</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive market reports and stay informed about the latest trends in luxury real estate
            markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 ${
                report.featured ? "ring-2 ring-amber-200 bg-gradient-to-br from-amber-50 to-white" : "hover:shadow-lg"
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={report.featured ? "default" : "secondary"} className="mb-2">
                    {report.category}
                  </Badge>
                  {report.featured && (
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Featured</Badge>
                  )}
                </div>
                <CardTitle className="font-serif text-2xl font-light text-stone-900 group-hover:text-amber-700 transition-colors">
                  {report.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-stone-600 leading-relaxed">{report.description}</p>

                <div className="flex items-center justify-between text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {report.date}
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">{report.trend}</span>
                    <span className="text-stone-500">{report.trendLabel}</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1 bg-stone-900 hover:bg-stone-800">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-stone-50 bg-transparent">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-stone-50 bg-transparent">
            View All Reports
          </Button>
        </div>
      </div>
    </section>
  )
}
