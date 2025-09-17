"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Home,
  Calendar,
  ArrowRight,
} from "lucide-react";

const marketData = [
  {
    title: "Luxury Market Growth",
    value: "+12.5%",
    change: "vs last year",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Average Days on Market",
    value: "28",
    change: "-5 days vs Q3",
    trend: "down",
    icon: Calendar,
    color: "text-blue-600",
  },
  {
    title: "Median Sale Price",
    value: "$3.2M",
    change: "+8.3% YoY",
    trend: "up",
    icon: DollarSign,
    color: "text-amber-600",
  },
  {
    title: "Inventory Levels",
    value: "2.1",
    change: "months supply",
    trend: "stable",
    icon: Home,
    color: "text-slate-600",
  },
];

const insights = [
  {
    title: "Luxury Market Outlook 2025",
    excerpt:
      "Premium properties continue to show resilience with strong demand from high-net-worth individuals seeking trophy assets.",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Market Analysis",
  },
  {
    title: "Emerging Luxury Neighborhoods",
    excerpt:
      "Discover the next wave of prestigious locations attracting discerning buyers and commanding premium valuations.",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Trends",
  },
  {
    title: "Investment Strategies for Ultra-High-End Properties",
    excerpt:
      "Expert guidance on maximizing returns and building generational wealth through luxury real estate investments.",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Investment",
  },
];

export function MarketInsights() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4 px-4 py-2 text-sm font-medium">
              Market Insights
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
              Stay Ahead of the Market
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto text-pretty">
              Expert analysis and real-time data to help you make informed
              decisions in the luxury real estate market.
            </p>
          </div>

          {/* Market Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marketData.map((data, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center`}
                    >
                      <data.icon className={`h-6 w-6 ${data.color}`} />
                    </div>
                    {data.trend === "up" && (
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    )}
                    {data.trend === "down" && (
                      <TrendingDown className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="text-3xl font-light text-slate-900 mb-2">
                    {data.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">
                    {data.title}
                  </div>
                  <div className="text-xs text-slate-500">{data.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Insights Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Featured Insight */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                Featured Market Analysis
              </h3>
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src="/luxury-real-estate-market-analysis-charts-and-gra.jpg"
                    alt="Market Analysis"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8">
                  <Badge className="bg-blue-100 text-blue-800 mb-4">
                    Market Analysis
                  </Badge>
                  <h4 className="text-2xl font-semibold text-slate-900 mb-4">
                    Q3 2025 Luxury Real Estate Report
                  </h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Comprehensive analysis of luxury market trends, pricing
                    dynamics, and investment opportunities across major
                    metropolitan areas. Our quarterly report provides actionable
                    insights for buyers, sellers, and investors.
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <span>December 20, 2024</span>
                    <span>12 min read</span>
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-amber-600 text-white transition-colors duration-300">
                    Read Full Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Insights */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                Recent Insights
              </h3>
              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {insight.category}
                        </Badge>
                        <div className="text-xs text-slate-500">
                          {insight.readTime}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 hover:text-amber-600 transition-colors cursor-pointer">
                        {insight.title}
                      </h4>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {insight.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">
                          {insight.date}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-amber-600 hover:text-amber-700 p-0"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                >
                  View All Insights
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-light mb-4">Stay Informed</h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Get exclusive market insights, luxury property alerts, and
                  investment opportunities delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-3">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
