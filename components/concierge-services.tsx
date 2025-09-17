import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Car, Utensils, Plane, Home, Sparkles } from "lucide-react";

const conciergeServices = [
  {
    icon: Crown,
    title: "Personal Concierge",
    description:
      "Dedicated personal concierge services for all your lifestyle and property-related needs.",
  },
  {
    icon: Car,
    title: "Transportation Services",
    description:
      "Premium transportation coordination including private drivers, yacht charters, and jet services.",
  },
  {
    icon: Utensils,
    title: "Dining & Entertainment",
    description:
      "Exclusive restaurant reservations, private chef services, and entertainment event planning.",
  },
  {
    icon: Plane,
    title: "Travel Coordination",
    description:
      "Complete travel planning including premium accommodations, private jet bookings, and itinerary management.",
  },
  {
    icon: Home,
    title: "Home Services",
    description:
      "Premium home services including housekeeping, landscaping, security, and maintenance coordination.",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Management",
    description:
      "Comprehensive lifestyle management including personal shopping, event planning, and exclusive access.",
  },
];

export function ConciergeServices() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-amber-700 border-amber-200"
          >
            Concierge Services
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
            Premium Lifestyle
            <span className="text-amber-600"> Concierge Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Experience the ultimate in premium living with our exclusive
            concierge services designed to enhance your lifestyle and property
            ownership experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conciergeServices.map((service, index) => (
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

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-12 mt-16 text-center">
          <h3 className="font-serif text-3xl font-light text-white mb-4">
            Experience Premium Living
          </h3>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Our concierge services are exclusively available to our premium
            property clients, providing unparalleled lifestyle support and
            convenience.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-700 hover:bg-stone-100 px-8 py-4"
          >
            Explore Concierge Services
          </Button>
        </div>
      </div>
    </section>
  );
}
