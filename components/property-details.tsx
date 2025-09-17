"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Car,
  Heart,
  Share2,
  Phone,
  Mail,
} from "lucide-react";
import { type Property, formatPrice, formatSquareFootage } from "@/lib/sanity";

interface PropertyDetailsProps {
  property: Property;
}

export function PropertyDetails({ property }: PropertyDetailsProps) {
  const mainImage = property.images[0]?.asset.url || "/placeholder.svg";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={mainImage || "/placeholder.svg"}
          alt={property.images[0]?.alt || property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-6 right-6 flex gap-3">
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="bg-white/90 hover:bg-white"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-6 left-6">
          <Badge
            className={`${
              property.status === "available"
                ? "bg-green-600"
                : property.status === "pending"
                ? "bg-yellow-600"
                : "bg-red-600"
            } text-white mb-2`}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
          {property.featured && (
            <Badge className="bg-amber-600 text-white">Featured</Badge>
          )}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
                {property.title}
              </h1>
              <div className="flex items-center text-slate-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">
                  {property.location.neighborhood &&
                    `${property.location.neighborhood}, `}
                  {property.location.city}, {property.location.state}
                </span>
              </div>
              <div className="text-4xl font-light text-amber-600 mb-8">
                {formatPrice(property.price)}
              </div>
            </div>

            {/* Property Stats */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Bed className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                    <div className="text-2xl font-semibold text-slate-900">
                      {property.bedrooms}
                    </div>
                    <div className="text-sm text-slate-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                    <div className="text-2xl font-semibold text-slate-900">
                      {property.bathrooms}
                    </div>
                    <div className="text-sm text-slate-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <Square className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                    <div className="text-2xl font-semibold text-slate-900">
                      {formatSquareFootage(property.squareFootage)}
                    </div>
                    <div className="text-sm text-slate-600">Sq Ft</div>
                  </div>
                  {property.garage && (
                    <div className="text-center">
                      <Car className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                      <div className="text-2xl font-semibold text-slate-900">
                        {property.garage}
                      </div>
                      <div className="text-sm text-slate-600">Garage</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity) => (
                    <Badge
                      key={amenity}
                      variant="secondary"
                      className="justify-start"
                    >
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Property Type:</span>
                    <span className="font-medium capitalize">
                      {property.propertyType}
                    </span>
                  </div>
                  {property.yearBuilt && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Year Built:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                  )}
                  {property.lotSize && (
                    <div className="flex justify-between">
                      <span className="text-slate-600">Lot Size:</span>
                      <span className="font-medium">
                        {property.lotSize} acres
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-600">Status:</span>
                    <span className="font-medium capitalize">
                      {property.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Listing Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  {property.listingAgent.image && (
                    <img
                      src={
                        property.listingAgent.image.asset.url ||
                        "/placeholder.svg"
                      }
                      alt={property.listingAgent.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  <h3 className="font-semibold text-lg">
                    {property.listingAgent.name}
                  </h3>
                  <p className="text-slate-600">
                    Premium Real Estate Specialist
                  </p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <Phone className="mr-2 h-4 w-4" />
                    {property.listingAgent.phone}
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Agent
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Tour */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule a Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 mb-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Private Tour
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Virtual Tour
                </Button>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>Mortgage Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Property Price:</span>
                    <span className="font-medium">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Down Payment (20%):</span>
                    <span className="font-medium">
                      {formatPrice(property.price * 0.2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loan Amount:</span>
                    <span className="font-medium">
                      {formatPrice(property.price * 0.8)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Est. Monthly Payment:</span>
                    <span>
                      {formatPrice((property.price * 0.8 * 0.045) / 12)}
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent"
                >
                  Get Pre-Approved
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
