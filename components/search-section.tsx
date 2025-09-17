"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"

export function SearchSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4 text-balance">
              Find Your Perfect Property
            </h2>
            <p className="text-xl text-slate-600 font-light text-pretty">
              Advanced search tools to discover luxury homes that match your vision
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                  Location
                </label>
                <Input
                  placeholder="Enter city or neighborhood"
                  className="border-slate-200 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center">
                  <Home className="w-4 h-4 mr-2 text-amber-600" />
                  Property Type
                </label>
                <Select>
                  <SelectTrigger className="border-slate-200 focus:border-amber-500 focus:ring-amber-500/20">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-amber-600" />
                  Price Range
                </label>
                <Select>
                  <SelectTrigger className="border-slate-200 focus:border-amber-500 focus:ring-amber-500/20">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                    <SelectItem value="2m-5m">$2M - $5M</SelectItem>
                    <SelectItem value="5m+">$5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Bedrooms</label>
                <Select>
                  <SelectTrigger className="border-slate-200 focus:border-amber-500 focus:ring-amber-500/20">
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

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* Iframe placeholder for external search integration */}
          <div className="mt-12 bg-slate-100 rounded-2xl p-8 text-center">
            <p className="text-slate-600 mb-4">Advanced Search Integration</p>
            <div className="bg-white rounded-lg p-6 border-2 border-dashed border-slate-300">
              <p className="text-slate-500">External search iframe will be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
