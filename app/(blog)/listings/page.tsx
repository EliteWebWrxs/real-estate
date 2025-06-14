import type { Metadata } from "next";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Search,
  Filter,
  Eye,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Listings - Earl Knighten Realty",
  description:
    "Browse Earl Knighten's exclusive collection of luxury homes, condos, and investment properties. Find your perfect home with detailed listings and expert guidance.",
  keywords: [
    "luxury homes",
    "real estate listings",
    "Earl Knighten",
    "premium properties",
    "MLS listings",
  ],
};

// Mock data - replace with actual MLS API data
const listings = [
  {
    id: "1",
    title: "Modern Luxury Villa",
    price: 1250000,
    location: "Beverly Hills, CA",
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Single Family",
    yearBuilt: 2020,
    lotSize: "0.5 acres",
    featured: true,
  },
  {
    id: "2",
    title: "Downtown Penthouse",
    price: 890000,
    location: "Manhattan, NY",
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Condo",
    yearBuilt: 2018,
    lotSize: "N/A",
    featured: false,
  },
  {
    id: "3",
    title: "Waterfront Estate",
    price: 2100000,
    location: "Malibu, CA",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Single Family",
    yearBuilt: 2019,
    lotSize: "1.2 acres",
    featured: true,
  },
  {
    id: "4",
    title: "Historic Brownstone",
    price: 1450000,
    location: "Brooklyn, NY",
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Townhouse",
    yearBuilt: 1920,
    lotSize: "0.1 acres",
    featured: false,
  },
  {
    id: "5",
    title: "Mountain View Retreat",
    price: 750000,
    location: "Aspen, CO",
    beds: 3,
    baths: 2,
    sqft: 2200,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Single Family",
    yearBuilt: 2015,
    lotSize: "2.0 acres",
    featured: false,
  },
  {
    id: "6",
    title: "Urban Loft",
    price: 650000,
    location: "Chicago, IL",
    beds: 2,
    baths: 1,
    sqft: 1400,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Loft",
    yearBuilt: 2017,
    lotSize: "N/A",
    featured: false,
  },
  {
    id: "7",
    title: "Coastal Contemporary",
    price: 1850000,
    location: "San Diego, CA",
    beds: 4,
    baths: 3,
    sqft: 3800,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Single Family",
    yearBuilt: 2021,
    lotSize: "0.3 acres",
    featured: true,
  },
  {
    id: "8",
    title: "Executive Townhome",
    price: 925000,
    location: "Seattle, WA",
    beds: 3,
    baths: 3,
    sqft: 2600,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Townhouse",
    yearBuilt: 2019,
    lotSize: "0.05 acres",
    featured: false,
  },
  {
    id: "9",
    title: "Luxury High-Rise Condo",
    price: 1100000,
    location: "Miami, FL",
    beds: 2,
    baths: 2,
    sqft: 1950,
    image: "/placeholder.svg?height=300&width=400",
    status: "For Sale",
    type: "Condo",
    yearBuilt: 2022,
    lotSize: "N/A",
    featured: false,
  },
];

export default function ListingsPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Header */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Property <span className="text-gradient">Listings</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect home from my curated collection of premium
              properties. Each listing is personally selected and thoroughly
              vetted for quality and value.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto animate-slide-up">
            <div className="glass-effect rounded-2xl p-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search by location, property type, or MLS number..."
                      className="pl-12 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-amber-500"
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="single-family">Single Family</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="loft">Loft</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-500k">Under $500K</SelectItem>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m+">$2M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
                <p className="text-gray-300">
                  Showing{" "}
                  <span className="text-amber-500 font-semibold">
                    {listings.length}
                  </span>{" "}
                  premium properties
                </p>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, index) => (
              <div
                key={listing.id}
                className="group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
                        {listing.status}
                      </Badge>
                      {listing.featured && (
                        <Badge className="bg-gray-900/80 text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 text-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Eye className="w-4 h-4 inline mr-1" />
                        Virtual Tour
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                          {listing.title}
                        </h3>
                        <div className="flex items-center text-gray-400 mb-3">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{listing.location}</span>
                        </div>
                        <p className="text-3xl font-bold text-gradient">
                          ${listing.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-300 bg-white/5 rounded-lg p-3">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{listing.beds} beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{listing.baths} baths</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{listing.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-white/5 rounded-lg p-3">
                          <span className="text-gray-400 block">Type</span>
                          <span className="text-white font-medium">
                            {listing.type}
                          </span>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <span className="text-gray-400 block">Built</span>
                          <span className="text-white font-medium">
                            {listing.yearBuilt}
                          </span>
                        </div>
                      </div>

                      <Button asChild className="w-full btn-primary">
                        <Link href={`/listings/${listing.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16 animate-fade-in">
            <Button size="lg" className="btn-secondary">
              Load More Properties
            </Button>
            <p className="text-gray-400 mt-4 text-sm">
              Need help finding the perfect property?{" "}
              <Link
                href="/contact"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Contact Earl directly
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              I have access to exclusive off-market properties and can help you
              find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Contact Earl
              </Link>
              <Link
                href="/search"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                Advanced Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
