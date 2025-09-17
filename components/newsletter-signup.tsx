import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, TrendingUp, FileText, Users, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Market Updates",
    description: "Weekly premium market trends and analysis",
  },
  {
    icon: FileText,
    title: "Exclusive Reports",
    description: "First access to comprehensive market reports",
  },
  {
    icon: Users,
    title: "Expert Insights",
    description: "Professional advice from our premium specialists",
  },
];

const recentTopics = [
  "Q3 2025 Premium Market Outlook",
  "Waterfront Property Investment Guide",
  "Smart Home Technology Trends",
  "International Market Opportunities",
];

export function NewsletterSignup() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-white">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-6">
              Stay Informed
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-balance">
              Get Exclusive Market Insights
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              Join over 5,000 premium real estate professionals and investors
              who rely on our weekly insights to stay ahead of market trends.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <benefit.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-stone-300 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Topics */}
            <div>
              <h3 className="font-serif text-xl font-light text-white mb-4">
                Recent Newsletter Topics:
              </h3>
              <div className="space-y-2">
                {recentTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-stone-300"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signup Form Side */}
          <div>
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <Mail className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-stone-600">
                    Get weekly market insights delivered to your inbox
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder="First Name"
                      className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                    <Input
                      type="text"
                      placeholder="Last Name"
                      className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                  />

                  <Input
                    type="text"
                    placeholder="Company (Optional)"
                    className="border-stone-300 focus:border-amber-500 focus:ring-amber-500"
                  />

                  {/* Interest Checkboxes */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-stone-700">
                      I'm interested in: (Select all that apply)
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Market Reports & Trends",
                        "Investment Opportunities",
                        "Neighborhood Guides",
                        "Premium Property Listings",
                      ].map((interest, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-2 text-sm text-stone-600"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-stone-300 text-amber-600 focus:ring-amber-500"
                          />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-3">
                    Subscribe to Newsletter
                  </Button>

                  <p className="text-xs text-stone-500 text-center">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe
                    at any time.
                  </p>
                </form>

                {/* Social Proof */}
                <div className="mt-6 pt-6 border-t border-stone-200 text-center">
                  <p className="text-sm text-stone-600 mb-2">
                    Trusted by premium real estate professionals
                  </p>
                  <div className="flex justify-center items-center gap-4 text-xs text-stone-500">
                    <span>5,000+ Subscribers</span>
                    <span>•</span>
                    <span>Weekly Insights</span>
                    <span>•</span>
                    <span>No Spam</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
