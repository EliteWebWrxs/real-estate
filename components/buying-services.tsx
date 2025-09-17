import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Search, FileText, Key, Shield, Users } from "lucide-react";
import Link from "next/link";

const buyingFeatures = [
  {
    icon: Search,
    title: "Exclusive Property Search",
    description:
      "Access to off-market listings and exclusive properties not available to the general public.",
  },
  {
    icon: FileText,
    title: "Due Diligence & Analysis",
    description:
      "Comprehensive property evaluation including market analysis, inspection coordination, and legal review.",
  },
  {
    icon: Shield,
    title: "Negotiation Expertise",
    description:
      "Strategic negotiation to secure the best terms and pricing for your premium property acquisition.",
  },
  {
    icon: Key,
    title: "Seamless Closing",
    description:
      "White-glove closing coordination with our network of trusted attorneys, lenders, and service providers.",
  },
  {
    icon: Users,
    title: "Relocation Services",
    description:
      "Complete relocation support including school research, neighborhood tours, and local connections.",
  },
  {
    icon: Home,
    title: "Post-Purchase Support",
    description:
      "Ongoing support with property management, renovations, and local service provider recommendations.",
  },
];

export function BuyingServices() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Buying Services
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Your Gateway to
            <span className="text-amber-600"> Premium Properties</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Our comprehensive buying services ensure you find and secure the
            perfect premium property with confidence and ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buyingFeatures.map((feature, index) => (
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
          <Link href="/search">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4"
            >
              Start Your Property Search
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
