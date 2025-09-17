"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Square, MapPin, Heart, Eye } from "lucide-react";
import {
  sanityClient,
  type Property,
  formatPrice,
  formatSquareFootage,
} from "@/lib/sanity";

export function FeaturedListings() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const featuredProperties = await sanityClient.getFeaturedProperties();
        setProperties(featuredProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="animate-pulse">
                <div className="h-8 bg-slate-200 rounded w-48 mx-auto mb-4"></div>
                <div className="h-12 bg-slate-200 rounded w-96 mx-auto mb-6"></div>
                <div className="h-6 bg-slate-200 rounded w-full max-w-3xl mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-slate-200 h-64 rounded-t-lg"></div>
                  <div className="bg-white p-6 rounded-b-lg border border-t-0">
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded w-32 mb-4"></div>
                    <div className="flex justify-between mb-6">
                      <div className="h-4 bg-slate-200 rounded w-16"></div>
                      <div className="h-4 bg-slate-200 rounded w-16"></div>
                      <div className="h-4 bg-slate-200 rounded w-16"></div>
                    </div>
                    <div className="h-10 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4 px-4 py-2 text-sm font-medium">
              Featured Properties
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
              Exceptional Premium Homes
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto text-pretty">
              Handpicked selection of the most prestigious properties, each
              offering unparalleled premium and sophisticated living
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-medium bg-transparent"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const [isLiked, setIsLiked] = useState(false);
  const mainImage = property.images[0]?.asset.url || "/placeholder.svg";

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={mainImage || "/placeholder.svg"}
          alt={property.images[0]?.alt || property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-slate-700 rounded-full p-2"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className={`h-4 w-4 ${
                isLiked ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 hover:bg-white text-slate-700 rounded-full p-2"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {property.featured && (
          <Badge className="absolute top-4 left-4 bg-amber-600 text-white">
            Featured
          </Badge>
        )}

        <Badge
          className={`absolute bottom-4 left-4 ${
            property.status === "available"
              ? "bg-green-600"
              : property.status === "pending"
              ? "bg-yellow-600"
              : "bg-red-600"
          } text-white`}
        >
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Badge>
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-2xl font-light text-amber-600">
            {formatPrice(property.price)}
          </span>
        </div>

        <div className="flex items-center text-slate-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {property.location.neighborhood &&
              `${property.location.neighborhood}, `}
            {property.location.city}, {property.location.state}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{formatSquareFootage(property.squareFootage)} sqft</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-600 line-clamp-2">
            {property.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="secondary" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-3">
          <Button className="flex-1 bg-slate-900 hover:bg-amber-600 text-white transition-colors duration-300">
            View Details
          </Button>
          <Button variant="outline" size="sm" className="px-4 bg-transparent">
            Contact Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
