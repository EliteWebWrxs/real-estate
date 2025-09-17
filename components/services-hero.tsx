import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background image + dark overlay combined (recommended) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/luxury-real-estate-office-interior-modern.jpg')",
        }}
      />

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          <span className="text-amber-400 font-medium">Premium Services</span>
          <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
          Comprehensive Luxury
          <span className="block text-amber-400">Real Estate Services</span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          From exclusive property acquisition to white-glove concierge services,
          we provide unparalleled expertise in luxury real estate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
            >
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
