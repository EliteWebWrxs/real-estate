import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Home,
  Phone,
  Mail,
  Heart,
  Share2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

// This would typically come from your MLS API
async function getListingById(id: string) {
  // Mock data - replace with actual API call
  const listings = {
    "1": {
      id: "1",
      title: "Modern Luxury Villa",
      price: 1250000,
      location: "Beverly Hills, CA",
      fullAddress: "123 Luxury Lane, Beverly Hills, CA 90210",
      beds: 4,
      baths: 3,
      sqft: 3200,
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      status: "For Sale",
      type: "Single Family",
      yearBuilt: 2020,
      lotSize: "0.5 acres",
      parking: "2-car garage",
      heating: "Central Air/Heat",
      description:
        "This stunning modern luxury villa represents the pinnacle of contemporary design and sophisticated living. Featuring an open-concept layout with soaring ceilings, floor-to-ceiling windows, and premium finishes throughout. The gourmet kitchen boasts top-of-the-line appliances, custom cabinetry, and a large island perfect for entertaining. The master suite includes a spa-like bathroom and walk-in closet. Additional highlights include a private backyard oasis with pool and outdoor kitchen.",
      features: [
        "Gourmet Kitchen with Premium Appliances",
        "Master Suite with Spa Bathroom",
        "Private Pool and Outdoor Kitchen",
        "Smart Home Technology",
        "Hardwood Floors Throughout",
        "High-End Security System",
        "Energy Efficient Windows",
        "Custom Built-ins",
      ],
      mlsNumber: "MLS123456",
      listingDate: "2024-01-15",
    },
  };

  return listings[id as keyof typeof listings] || null;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const listing = await getListingById(params.id);

  if (!listing) {
    return {
      title: "Property Not Found - Earl Knighten Realty",
    };
  }

  return {
    title: `${listing.title} - ${listing.location} | Earl Knighten Realty`,
    description: `${listing.title} in ${listing.location}. ${listing.beds} beds, ${listing.baths} baths, ${listing.sqft.toLocaleString()} sqft. Listed at $${listing.price.toLocaleString()}.`,
  };
}

export default async function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = await getListingById(params.id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Back Navigation */}
      <div className="container-custom py-6">
        <Link
          href="/listings"
          className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Listings
        </Link>
      </div>

      {/* Image Gallery */}
      <section className="container-custom mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in">
          <div className="lg:row-span-2">
            <img
              src={listing.images[0] || "/placeholder.svg"}
              alt={listing.title}
              className="w-full h-96 lg:h-full object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {listing.images.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${listing.title} - Image ${index + 2}`}
                className="w-full h-44 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="animate-slide-in-left">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {listing.title}
                  </h1>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{listing.fullAddress}</span>
                  </div>
                  <p className="text-4xl font-bold text-gradient">
                    ${listing.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-amber-500 text-amber-500"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-amber-500 text-amber-500"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                  {listing.status}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-amber-500 text-amber-500"
                >
                  MLS# {listing.mlsNumber}
                </Badge>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Bed className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {listing.beds}
                  </div>
                  <div className="text-gray-400 text-sm">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Bath className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {listing.baths}
                  </div>
                  <div className="text-gray-400 text-sm">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Square className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {listing.sqft.toLocaleString()}
                  </div>
                  <div className="text-gray-400 text-sm">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {listing.yearBuilt}
                  </div>
                  <div className="text-gray-400 text-sm">Year Built</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                Property Description
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="glass-effect rounded-2xl p-8 animate-slide-up">
              <h2 className="text-3xl font-bold text-white mb-6">
                Property Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Property Type</span>
                    <span className="text-white font-medium">
                      {listing.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Lot Size</span>
                    <span className="text-white font-medium">
                      {listing.lotSize}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Parking</span>
                    <span className="text-white font-medium">
                      {listing.parking}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Heating/Cooling</span>
                    <span className="text-white font-medium">
                      {listing.heating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">Listed Date</span>
                    <span className="text-white font-medium">
                      {new Date(listing.listingDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-700">
                    <span className="text-gray-400">MLS Number</span>
                    <span className="text-white font-medium">
                      {listing.mlsNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <Card className="glass-effect border-0 animate-slide-in-right">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Earl Knighten"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Earl Knighten
                  </h3>
                  <p className="text-amber-500 font-semibold">
                    Your Real Estate Expert
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-amber-500" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-amber-500" />
                    <span>Earl@example.com</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full btn-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-500"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-500"
                  >
                    Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card
              className="glass-effect border-0 animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Mortgage Calculator
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Home Price
                    </label>
                    <input
                      type="text"
                      value={`$${listing.price.toLocaleString()}`}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Down Payment (%)
                    </label>
                    <input
                      type="number"
                      placeholder="20"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-2">
                      Interest Rate (%)
                    </label>
                    <input
                      type="number"
                      placeholder="6.5"
                      step="0.1"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button className="w-full btn-secondary">
                    Calculate Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="section-padding bg-gray-800 mt-16">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Similar <span className="text-gradient">Properties</span>
          </h2>
          <div className="text-center">
            <p className="text-gray-400 mb-8">
              Interested in seeing more properties like this one?
            </p>
            <Link
              href="/listings"
              className="btn-primary inline-flex items-center"
            >
              View Similar Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
