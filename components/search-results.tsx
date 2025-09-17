import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, MapPin, Bed, Bath, Square, Calendar } from "lucide-react"
import Image from "next/image"

const sampleResults = [
  {
    id: 1,
    title: "Modern Beverly Hills Estate",
    price: "$4,250,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 6,
    sqft: "6,500",
    yearBuilt: 2019,
    image: "/luxury-modern-mansion-exterior-with-pool-at-sunset.jpg",
    status: "Available",
    views: 234,
    likes: 45,
  },
  {
    id: 2,
    title: "Waterfront Malibu Villa",
    price: "$8,900,000",
    location: "Malibu, CA",
    beds: 6,
    baths: 7,
    sqft: "8,200",
    yearBuilt: 2021,
    image: "/modern-waterfront-mansion-with-glass-walls-and-inf.jpg",
    status: "Pending",
    views: 456,
    likes: 89,
  },
  {
    id: 3,
    title: "Manhattan Penthouse",
    price: "$12,500,000",
    location: "Upper East Side, NY",
    beds: 4,
    baths: 5,
    sqft: "4,800",
    yearBuilt: 2020,
    image: "/luxury-penthouse-with-city-skyline-view-and-modern.jpg",
    status: "Available",
    views: 678,
    likes: 123,
  },
]

export default function SearchResults() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-3xl font-light text-stone-900">Search Results</h2>
        <p className="text-stone-600">Showing 1-3 of 247 properties</p>
      </div>

      <div className="grid gap-6">
        {sampleResults.map((property) => (
          <Card
            key={property.id}
            className="overflow-hidden border-stone-200 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Property Image */}
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={property.status === "Available" ? "default" : "secondary"}
                    className={
                      property.status === "Available"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-amber-600 hover:bg-amber-700"
                    }
                  >
                    {property.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4" />
                    <span className="ml-1 text-xs">{property.likes}</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                    <Eye className="w-4 h-4" />
                    <span className="ml-1 text-xs">{property.views}</span>
                  </Button>
                </div>
              </div>

              {/* Property Details */}
              <div className="md:col-span-3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-stone-900 mb-2">{property.title}</h3>
                    <p className="text-stone-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-light text-amber-600">{property.price}</p>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-600 mb-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">Beds</span>
                    </div>
                    <p className="font-semibold text-stone-900">{property.beds}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-600 mb-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">Baths</span>
                    </div>
                    <p className="font-semibold text-stone-900">{property.baths}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-600 mb-1">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">Sq Ft</span>
                    </div>
                    <p className="font-semibold text-stone-900">{property.sqft}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-stone-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Built</span>
                    </div>
                    <p className="font-semibold text-stone-900">{property.yearBuilt}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-amber-700 hover:bg-amber-800">View Details</Button>
                  <Button variant="outline" className="flex-1 border-stone-300 hover:bg-stone-50 bg-transparent">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="border-stone-300 hover:bg-stone-50 bg-transparent">
                    Schedule Tour
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center pt-8">
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" className="bg-amber-700 text-white hover:bg-amber-800">
            1
          </Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}
