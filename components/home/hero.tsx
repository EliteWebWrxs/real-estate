import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <Image
          src="/herobg.png?height=1080&width=1920"
          alt="Luxury home"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-gradient">Dream Home</span>
            <span className="block text-2xl md:text-3xl font-normal text-gray-300 mt-4">
              with Earl Knighten
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experienced real estate agent providing personalized service and
            expert guidance for your property needs
          </p>

          {/* Search Bar */}
          <div className="glass-effect rounded-2xl p-6 mb-8 max-w-2xl mx-auto animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="Enter location, property type, or keywords..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                />
              </div>
              <Button className="btn-primary h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/listings"
              className="btn-primary inline-flex items-center"
            >
              View All Listings
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/sell"
              className="btn-secondary inline-flex items-center"
            >
              Sell Your Property
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
