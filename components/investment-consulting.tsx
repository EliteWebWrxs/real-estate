import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  PieChart,
  Calculator,
  Target,
  Shield,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

const investmentServices = [
  {
    icon: BarChart3,
    title: "Market Analysis",
    description:
      "Comprehensive market research and trend analysis to identify optimal investment opportunities.",
  },
  {
    icon: Calculator,
    title: "ROI Projections",
    description:
      "Detailed financial modeling and return on investment calculations for informed decision-making.",
  },
  {
    icon: Target,
    title: "Portfolio Strategy",
    description:
      "Customized investment strategies aligned with your financial goals and risk tolerance.",
  },
  {
    icon: PieChart,
    title: "Diversification Planning",
    description:
      "Strategic portfolio diversification across property types, locations, and investment vehicles.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Thorough risk analysis and mitigation strategies to protect your investment capital.",
  },
  {
    icon: Briefcase,
    title: "Ongoing Management",
    description:
      "Continuous portfolio monitoring and optimization to maximize long-term returns.",
  },
];

export function InvestmentConsulting() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Investment Consulting
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Strategic Real Estate
            <span className="text-amber-600"> Investment Guidance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Build wealth through strategic real estate investments with our
            expert guidance and comprehensive market intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-stone-200"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 mt-16 text-center">
          <h3 className="font-serif text-3xl font-light text-white mb-4">
            Ready to Build Your Real Estate Portfolio?
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our investment specialists to explore
            opportunities tailored to your financial objectives.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
            >
              Schedule Investment Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
