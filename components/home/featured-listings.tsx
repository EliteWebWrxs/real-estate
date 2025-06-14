import Link from "next/link";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Penthouse",
    price: "$2,500,000",
    location: "Downtown District",
    beds: 3,
    baths: 2,
    sqft: "2,400",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Waterfront Villa",
    price: "$4,200,000",
    location: "Waterfront Estate",
    beds: 5,
    baths: 4,
    sqft: "4,800",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    price: "$1,800,000",
    location: "Suburban Heights",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
];

export function FeaturedListings() {
  return (
    <section className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-16 animate-fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Properties</span>
            </h2>
            <p className="text-xl text-gray-400">
              Discover our handpicked premium properties
            </p>
          </div>
          <Link
            href="/listings"
            className="hidden md:flex items-center text-amber-500 hover:text-amber-400 transition-colors font-semibold"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-lg font-bold">
                      {property.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/listings"
            className="btn-primary inline-flex items-center"
          >
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
