import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, TrendingUp, Users } from "lucide-react";
import Image from "next/image";

const neighborhoods = [
  {
    name: "Beverly Hills",
    image: "/luxury-beverly-hills-neighborhood.jpg",
    description:
      "Iconic premium living with world-class shopping, dining, and entertainment in the heart of Los Angeles.",
    medianPrice: "$3.2M",
    priceChange: "+8.5%",
    rating: 4.9,
    highlights: ["Rodeo Drive", "Celebrity Homes", "Top Schools"],
    properties: 127,
  },
  {
    name: "Manhattan Upper East Side",
    image: "/manhattan-upper-east-side-luxury.jpg",
    description:
      "Prestigious neighborhood featuring premium condos, cultural institutions, and Central Park proximity.",
    medianPrice: "$2.8M",
    priceChange: "+12.3%",
    rating: 4.8,
    highlights: ["Central Park", "Museums", "Fine Dining"],
    properties: 89,
  },
  {
    name: "Malibu Beachfront",
    image: "/malibu-beachfront-luxury-homes.jpg",
    description:
      "Exclusive oceanfront properties with stunning Pacific views and private beach access.",
    medianPrice: "$4.1M",
    priceChange: "+15.7%",
    rating: 4.9,
    highlights: ["Ocean Views", "Private Beaches", "Celebrity Neighbors"],
    properties: 45,
  },
  {
    name: "Aspen Highlands",
    image: "/aspen-highlands-luxury-properties.jpg",
    description:
      "Mountain premium with world-class skiing, exclusive resorts, and breathtaking alpine scenery.",
    medianPrice: "$5.2M",
    priceChange: "+18.2%",
    rating: 4.8,
    highlights: ["Ski Access", "Mountain Views", "Resort Living"],
    properties: 62,
  },
];

export function NeighborhoodGuides() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-stone-900 mb-6">
            Neighborhood Guides
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most exclusive neighborhoods and understand what makes
            each location unique for premium living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={neighborhood.image || "/placeholder.svg"}
                  alt={neighborhood.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <h3 className="font-serif text-2xl font-light">
                      {neighborhood.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">
                        {neighborhood.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-stone-600 leading-relaxed">
                  {neighborhood.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-stone-200">
                  <div className="text-center">
                    <div className="font-serif text-lg font-medium text-stone-900">
                      {neighborhood.medianPrice}
                    </div>
                    <div className="text-xs text-stone-500">Median Price</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-600">
                      <TrendingUp className="h-3 w-3" />
                      <span className="font-medium">
                        {neighborhood.priceChange}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500">YoY Change</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-3 w-3 text-stone-600" />
                      <span className="font-medium text-stone-900">
                        {neighborhood.properties}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500">Properties</div>
                  </div>
                </div>

                <Button className="w-full bg-stone-900 hover:bg-stone-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  Explore Neighborhood
                </Button>
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
            View All Neighborhoods
          </Button>
        </div>
      </div>
    </section>
  );
}
