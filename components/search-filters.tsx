import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  DollarSign,
  Home,
  Bed,
  Bath,
  Square,
  Calendar,
  Star,
} from "lucide-react";

export default function SearchFilters() {
  return (
    <div className="space-y-6">
      <Card className="p-6 border-stone-200 shadow-lg">
        <h3 className="font-serif text-2xl font-light mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-amber-600" />
          Search Filters
        </h3>

        {/* Location */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium">Location</Label>
          <Input
            placeholder="City, neighborhood, or ZIP code"
            className="border-stone-300 focus:border-amber-500"
          />
        </div>

        <Separator className="my-6" />

        {/* Price Range */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Price Range
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <Select>
              <SelectTrigger className="border-stone-300">
                <SelectValue placeholder="Min Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="500000">$500K</SelectItem>
                <SelectItem value="1000000">$1M</SelectItem>
                <SelectItem value="2000000">$2M</SelectItem>
                <SelectItem value="5000000">$5M</SelectItem>
                <SelectItem value="10000000">$10M+</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-stone-300">
                <SelectValue placeholder="Max Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000000">$1M</SelectItem>
                <SelectItem value="2000000">$2M</SelectItem>
                <SelectItem value="5000000">$5M</SelectItem>
                <SelectItem value="10000000">$10M</SelectItem>
                <SelectItem value="unlimited">No Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Property Type */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium flex items-center gap-2">
            <Home className="w-4 h-4" />
            Property Type
          </Label>
          <div className="space-y-2">
            {["House", "Condo", "Penthouse", "Villa", "Townhouse", "Land"].map(
              (type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type.toLowerCase()} />
                  <Label
                    htmlFor={type.toLowerCase()}
                    className="text-sm text-stone-600"
                  >
                    {type}
                  </Label>
                </div>
              )
            )}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bedrooms & Bathrooms */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label className="text-stone-700 font-medium flex items-center gap-2">
              <Bed className="w-4 h-4" />
              Beds
            </Label>
            <Select>
              <SelectTrigger className="border-stone-300">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-stone-700 font-medium flex items-center gap-2">
              <Bath className="w-4 h-4" />
              Baths
            </Label>
            <Select>
              <SelectTrigger className="border-stone-300">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Square Footage */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium flex items-center gap-2">
            <Square className="w-4 h-4" />
            Square Footage
          </Label>
          <div className="grid grid-cols-2 gap-2">
            <Input placeholder="Min Sq Ft" className="border-stone-300" />
            <Input placeholder="Max Sq Ft" className="border-stone-300" />
          </div>
        </div>

        <Separator className="my-6" />

        {/* Year Built */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Year Built
          </Label>
          <Select>
            <SelectTrigger className="border-stone-300">
              <SelectValue placeholder="Any Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020+</SelectItem>
              <SelectItem value="2010">2010+</SelectItem>
              <SelectItem value="2000">2000+</SelectItem>
              <SelectItem value="1990">1990+</SelectItem>
              <SelectItem value="1980">1980+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator className="my-6" />

        {/* Premium Features */}
        <div className="space-y-4 mb-6">
          <Label className="text-stone-700 font-medium flex items-center gap-2">
            <Star className="w-4 h-4" />
            Premium Features
          </Label>
          <div className="space-y-2">
            {[
              "Pool",
              "Ocean View",
              "Wine Cellar",
              "Home Theater",
              "Gym",
              "Guest House",
              "Smart Home",
              "Elevator",
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox id={feature.toLowerCase().replace(" ", "-")} />
                <Label
                  htmlFor={feature.toLowerCase().replace(" ", "-")}
                  className="text-sm text-stone-600"
                >
                  {feature}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          Apply Filters
        </Button>
      </Card>

      {/* Active Filters */}
      <Card className="p-4 border-stone-200">
        <h4 className="font-medium text-stone-700 mb-3">Active Filters</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            Beverly Hills
          </Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            $2M - $5M
          </Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            3+ Beds
          </Badge>
        </div>
      </Card>
    </div>
  );
}
