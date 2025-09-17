"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-mansion-exterior-with-pool-at-sunset.jpg"
          alt="Premium Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight text-balance">
          Discover Your
          <span className="block font-normal text-amber-400">Dream Home</span>
        </h1>

        <p className="text-xl md:text-2xl font-light mb-12 text-gray-200 max-w-2xl mx-auto text-pretty">
          Exclusive premium properties curated for the most discerning clients.
          Experience unparalleled elegance and sophistication.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/search">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Tour
          </Button> */}
        </div>
      </div>
    </section>
  );
}
