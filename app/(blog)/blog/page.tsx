import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate Blog - Earl Knighten Realty",
  description:
    "Expert real estate insights, market trends, and buying/selling tips from Earl Knighten. Stay informed with the latest industry knowledge.",
  keywords: [
    "real estate blog",
    "market trends",
    "buying tips",
    "selling advice",
    "Earl Knighten",
    "property insights",
  ],
};

const blogPosts = [
  {
    id: "1",
    title:
      "2024 Real Estate Market Predictions: What Buyers and Sellers Need to Know",
    excerpt:
      "As we move through 2024, the real estate market continues to evolve. Here are my predictions for interest rates, inventory levels, and pricing trends that will shape the market this year.",
    content:
      "The real estate market in 2024 is showing signs of stabilization after the volatility of recent years...",
    author: "Earl Knighten",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "2",
    title:
      "First-Time Homebuyer's Complete Guide: From Pre-Approval to Closing",
    excerpt:
      "Buying your first home can feel overwhelming. This comprehensive guide walks you through every step of the process, from getting pre-approved to holding the keys to your new home.",
    content:
      "Purchasing your first home is one of life's biggest milestones...",
    author: "Earl Knighten",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Buying Tips",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "3",
    title:
      "Staging Your Home for Maximum Sale Price: Professional Tips That Work",
    excerpt:
      "Home staging can increase your sale price by 10-15%. Learn the professional staging techniques I use to help my clients get top dollar for their properties.",
    content:
      "When it comes to selling your home, first impressions matter more than you might think...",
    author: "Earl Knighten",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Selling Tips",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "4",
    title: "Investment Property Analysis: How to Evaluate Rental Property ROI",
    excerpt:
      "Not all investment properties are created equal. Here's my framework for analyzing potential rental properties and calculating true return on investment.",
    content:
      "Real estate investment can be incredibly rewarding, but success requires careful analysis...",
    author: "Earl Knighten",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Investment",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: "5",
    title: "Luxury Home Features That Actually Add Value in 2024",
    excerpt:
      "Which luxury upgrades provide the best return on investment? I break down the high-end features that today's buyers are willing to pay premium prices for.",
    content:
      "In the luxury real estate market, not all upgrades are created equal...",
    author: "Earl Knighten",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Luxury Market",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: "6",
    title: "Negotiation Strategies: How to Win in Multiple Offer Situations",
    excerpt:
      "In competitive markets, multiple offers are common. Learn the strategies I use to help my clients win bidding wars without overpaying.",
    content:
      "Multiple offer situations have become increasingly common in today's market...",
    author: "Earl Knighten",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Buying Tips",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
];

const categories = [
  "All Posts",
  "Market Analysis",
  "Buying Tips",
  "Selling Tips",
  "Investment",
  "Luxury Market",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real Estate <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert analysis, market trends, and practical advice to help you
              make informed real estate decisions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "btn-primary"
                    : "border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in">
              Featured <span className="text-gradient">Articles</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="glass-effect border-0 overflow-hidden hover:bg-white/15 transition-all duration-300 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <Badge
                        variant="outline"
                        className="border-amber-500 text-amber-500"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-amber-500" />
                        <span className="text-gray-300">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center animate-fade-in">
            Latest <span className="text-gradient">Articles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={post.id}
                className="glass-effect border-0 overflow-hidden hover:bg-white/15 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="border-amber-500 text-amber-500 mb-3"
                  >
                    {post.category}
                  </Badge>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center text-sm font-semibold"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12 animate-fade-in">
            <Button className="btn-secondary">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest real estate insights and market updates delivered
              directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 h-12">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
