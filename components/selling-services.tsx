import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  TrendingUp,
  Globe,
  Users,
  Award,
  Handshake,
} from "lucide-react";
import Link from "next/link";

const sellingFeatures = [
  {
    icon: Camera,
    title: "Premium Marketing",
    description:
      "Professional photography, virtual tours, and premium marketing materials that showcase your property's finest features.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Pricing",
    description:
      "Data-driven market analysis and pricing strategy to maximize your property's value and minimize time on market.",
  },
  {
    icon: Globe,
    title: "Maximum Exposure",
    description:
      "Marketing reach through premium real estate networks and exclusive buyer databases.",
  },
  {
    icon: Users,
    title: "Qualified Buyer Network",
    description:
      "Access to our extensive network of pre-qualified premium buyers and international investors.",
  },
  {
    icon: Award,
    title: "Staging & Presentation",
    description:
      "Professional staging consultation and home preparation to ensure maximum appeal and value.",
  },
  {
    icon: Handshake,
    title: "Expert Negotiation",
    description:
      "Skilled negotiation to secure the best terms, price, and timeline for your premium property sale.",
  },
];

export function SellingServices() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Selling Services
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Maximize Your Property's
            <span className="text-amber-600"> Market Potential</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Our sophisticated selling approach combines market expertise with
            premium marketing to achieve exceptional results for your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sellingFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-stone-200"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
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
              Get Your Property Valuation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
