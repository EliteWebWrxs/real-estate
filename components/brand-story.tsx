"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Home, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    icon: Home,
    number: "200+",
    label: "Luxury Properties Sold",
    description: "Exclusive homes worth over $500 million",
  },
  {
    icon: Users,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Decades of luxury market expertise",
  },
  {
    icon: TrendingUp,
    number: "$35M+",
    label: "Average Annual Sales",
    description: "Top 1% of luxury real estate agents",
  },
];

export function BrandStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/luxury-pattern.jpg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Brand Story Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-amber-600 text-white mb-6 px-4 py-2 text-sm font-medium">
                  My Story
                </Badge>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">
                  Redefining Luxury
                  <span className="block text-amber-400">
                    Real Estate in Tampa
                  </span>
                </h2>
                <p className="text-xl text-slate-300 font-light leading-relaxed mb-8 text-pretty">
                  For over fifteen years, I have been the trusted partner for
                  discerning clients seeking exceptional properties in Tampa's
                  luxury market. My commitment to excellence, unparalleled
                  market knowledge, and white-glove service has established me
                  as the premier luxury real estate specialist in the Tampa Bay
                  area.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Exclusive Access
                    </h3>
                    <p className="text-slate-300">
                      Private listings and off-market opportunities available
                      only to my select clientele.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-slate-300">
                      Dedicated concierge-level service tailored to your unique
                      preferences and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Market Expertise
                    </h3>
                    <p className="text-slate-300">
                      Deep understanding of Tampa's luxury markets with proven
                      track record of optimal outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-light text-white mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-amber-400 mb-2">
                      {achievement.label}
                    </div>
                    <p className="text-sm text-slate-300">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
