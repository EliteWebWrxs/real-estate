import { Search, MapPin, Filter } from "lucide-react";

export default function SearchHero() {
  return (
    <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-24">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
            Find Your Perfect
            <span className="block text-amber-400 font-normal">
              Premium Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 mb-8 font-light leading-relaxed text-pretty">
            Search through our exclusive collection of premium properties with
            advanced MLS integration
          </p>

          {/* Quick Search Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-400" />
              <span className="text-stone-300">Advanced Search</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-stone-300">Interactive Maps</span>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-amber-400" />
              <span className="text-stone-300">Smart Filters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
