import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "The Future of Premium Real Estate: Trends Shaping 2025",
    excerpt:
      "Explore the emerging trends that will define premium real estate markets in 2025, from sustainable architecture to smart home technology.",
    author: "Sarah Mitchell",
    authorRole: "Senior Market Analyst",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Market Trends",
    image: "/luxury-real-estate-future-trends.jpg",
    featured: true,
  },
  {
    title: "Sustainable Premium: Green Building in High-End Properties",
    excerpt:
      "How premium developers are incorporating sustainable practices without compromising on elegance and comfort.",
    author: "Michael Chen",
    authorRole: "Sustainability Expert",
    date: "December 12, 2024",
    readTime: "6 min read",
    category: "Sustainability",
    image: "/sustainable-luxury-green-building.jpg",
  },
  {
    title: "Smart Home Technology in Premium Properties",
    excerpt:
      "The latest innovations in home automation and how they're transforming the premium living experience.",
    author: "Emma Rodriguez",
    authorRole: "Technology Specialist",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "/smart-home-luxury-technology.jpg",
  },
  {
    title: "International Premium Markets: Global Investment Opportunities",
    excerpt:
      "Analyzing premium real estate opportunities across international markets and emerging destinations.",
    author: "David Thompson",
    authorRole: "International Markets Director",
    date: "December 8, 2024",
    readTime: "10 min read",
    category: "Global Markets",
    image: "/international-luxury-real-estate-markets.jpg",
  },
  {
    title: "Premium Property Staging: Maximizing Appeal and Value",
    excerpt:
      "Professional insights on staging premium properties to attract discerning buyers and achieve optimal pricing.",
    author: "Isabella Foster",
    authorRole: "Premium Staging Expert",
    date: "December 5, 2024",
    readTime: "5 min read",
    category: "Staging & Design",
    image: "/luxury-property-staging-design.jpg",
  },
  {
    title: "Market Analysis: Premium Condo vs. Single-Family Homes",
    excerpt:
      "Comprehensive comparison of investment potential and lifestyle benefits between premium condos and estate homes.",
    author: "Robert Kim",
    authorRole: "Investment Advisor",
    date: "December 3, 2024",
    readTime: "9 min read",
    category: "Investment Analysis",
    image: "/luxury-condo-vs-single-family-homes.jpg",
  },
];

const categories = [
  "All Articles",
  "Market Trends",
  "Investment Analysis",
  "Technology",
  "Sustainability",
  "Global Markets",
  "Staging & Design",
];

export function BlogArticles() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Expert Insights & Articles
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert analysis, market insights, and
            professional advice from our team of premium real estate
            specialists.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={
                index === 0
                  ? "bg-stone-900 hover:bg-stone-800"
                  : "hover:bg-stone-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="mb-12 overflow-hidden hover:shadow-xl transition-all duration-300 ring-2 ring-amber-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
                Featured Article
              </Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-4">
                {articles[0].category}
              </Badge>
              <h3 className="font-serif text-3xl font-light text-stone-900 mb-4 text-balance">
                {articles[0].title}
              </h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-stone-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{articles[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{articles[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{articles[0].readTime}</span>
                </div>
              </div>
              <Button className="w-fit bg-stone-900 hover:bg-stone-800">
                Read Full Article
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm"
                >
                  {article.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-light text-stone-900 mb-3 group-hover:text-amber-700 transition-colors text-balance">
                  {article.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-stone-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-stone-500">
                      <div className="font-medium text-stone-700">
                        {article.author}
                      </div>
                      <div>{article.authorRole}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-stone-50"
                    >
                      <BookOpen className="h-4 w-4 mr-1" />
                      Read
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-stone-50 bg-transparent"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
