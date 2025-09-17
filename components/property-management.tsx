import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Users,
  Wrench,
  DollarSign,
  Calendar,
  Phone,
} from "lucide-react";

const managementServices = [
  {
    icon: Users,
    title: "Tenant Relations",
    description:
      "Professional tenant screening, lease management, and ongoing tenant relations for optimal occupancy.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "24/7 maintenance coordination with vetted contractors and emergency response services.",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description:
      "Comprehensive financial reporting, rent collection, and expense management with transparent accounting.",
  },
  {
    icon: Calendar,
    title: "Regular Inspections",
    description:
      "Scheduled property inspections and condition reports to maintain property value and compliance.",
  },
  {
    icon: Settings,
    title: "Property Optimization",
    description:
      "Strategic improvements and upgrades to maximize rental income and property appreciation.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description:
      "Round-the-clock support for both property owners and tenants with dedicated account management.",
  },
];

export function PropertyManagement() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Property Management
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Comprehensive Property
            <span className="text-amber-600"> Care & Management</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Protect and maximize your investment with our full-service property
            management solutions designed for premium properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementServices.map((service, index) => (
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

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4"
          >
            Learn About Management Services
          </Button>
        </div>
      </div>
    </section>
  );
}
