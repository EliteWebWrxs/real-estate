import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Home,
  Calendar,
  BarChart3,
} from "lucide-react";

const marketData = [
  {
    title: "Median Home Price",
    value: "$2.8M",
    change: "+12.5%",
    trend: "up",
    period: "YoY",
    description: "Luxury market median",
  },
  {
    title: "Days on Market",
    value: "28",
    change: "-15%",
    trend: "down",
    period: "vs Last Quarter",
    description: "Average listing time",
  },
  {
    title: "Inventory Levels",
    value: "2.1M",
    change: "+8.3%",
    trend: "up",
    period: "Month over Month",
    description: "Available properties",
  },
  {
    title: "Price per Sq Ft",
    value: "$1,245",
    change: "+18.7%",
    trend: "up",
    period: "Annual Growth",
    description: "Luxury segment average",
  },
];

const chartData = [
  { month: "Jan", price: 2.4, volume: 145 },
  { month: "Feb", price: 2.5, volume: 132 },
  { month: "Mar", price: 2.6, volume: 158 },
  { month: "Apr", price: 2.7, volume: 167 },
  { month: "May", price: 2.8, volume: 189 },
  { month: "Jun", price: 2.9, volume: 201 },
  { month: "Jul", price: 2.8, volume: 178 },
  { month: "Aug", price: 2.9, volume: 195 },
  { month: "Sep", price: 3.0, volume: 212 },
  { month: "Oct", price: 3.1, volume: 198 },
  { month: "Nov", price: 3.0, volume: 185 },
  { month: "Dec", price: 2.8, volume: 167 },
];

export function MarketDataVisualizations() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Real-Time Market Data
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with live market data and interactive visualizations
            of luxury real estate trends and performance metrics.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((metric, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-stone-100 rounded-lg">
                    {index === 0 && (
                      <DollarSign className="h-5 w-5 text-stone-600" />
                    )}
                    {index === 1 && (
                      <Calendar className="h-5 w-5 text-stone-600" />
                    )}
                    {index === 2 && <Home className="h-5 w-5 text-stone-600" />}
                    {index === 3 && (
                      <BarChart3 className="h-5 w-5 text-stone-600" />
                    )}
                  </div>
                  <Badge
                    variant={metric.trend === "up" ? "default" : "secondary"}
                    className={`flex items-center gap-1 ${
                      metric.trend === "up"
                        ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {metric.change}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-stone-900">
                    {metric.value}
                  </h3>
                  <p className="font-medium text-stone-700">{metric.title}</p>
                  <p className="text-sm text-stone-500">{metric.description}</p>
                  <p className="text-xs text-stone-400">{metric.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Price Trends Chart */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-serif text-2xl font-light text-stone-900">
                Price Trends (2025)
              </CardTitle>
              <p className="text-stone-600">Monthly median price evolution</p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-6 flex items-end justify-between">
                {chartData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className="bg-amber-500 rounded-t-sm transition-all duration-300 hover:bg-amber-600"
                      style={{
                        height: `${(data.price / 3.2) * 180}px`,
                        width: "20px",
                      }}
                    />
                    <span className="text-xs text-stone-600 font-medium">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                <span>$2.4M</span>
                <span className="font-medium text-stone-700">
                  Average: $2.8M
                </span>
                <span>$3.1M</span>
              </div>
            </CardContent>
          </Card>

          {/* Sales Volume Chart */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="font-serif text-2xl font-light text-stone-900">
                Sales Volume (2025)
              </CardTitle>
              <p className="text-stone-600">Monthly transaction volume</p>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-6 flex items-end justify-between">
                {chartData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div
                      className="bg-stone-600 rounded-t-sm transition-all duration-300 hover:bg-stone-700"
                      style={{
                        height: `${(data.volume / 220) * 180}px`,
                        width: "20px",
                      }}
                    />
                    <span className="text-xs text-stone-600 font-medium">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-stone-500">
                <span>132</span>
                <span className="font-medium text-stone-700">
                  Average: 177 sales
                </span>
                <span>212</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Summary */}
        <Card className="mt-8 bg-gradient-to-r from-amber-50 to-stone-50">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="font-serif text-3xl font-light text-stone-900 mb-4">
                Market Summary
              </h3>
              <p className="text-lg text-stone-600 max-w-4xl mx-auto leading-relaxed">
                The luxury real estate market continues to show strong
                performance with a 12.5% year-over-year price increase and
                reduced time on market. Inventory levels are healthy, and buyer
                demand remains robust across all luxury segments.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  Strong Seller's Market
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  High Buyer Demand
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  Healthy Inventory
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
