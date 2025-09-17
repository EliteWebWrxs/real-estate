import { CompanyHistory } from "@/components/company-history";
import { TeamBios } from "@/components/team-bios";
import { AwardsAndCertifications } from "@/components/awards-certifications";
import { MarketExpertise } from "@/components/market-expertise";
import { ClientTestimonials } from "@/components/client-testimonials";
import { OfficeLocations } from "@/components/office-locations";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">
            About Earl Knighten
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-pretty">
            {
              "Three decades of excellence in luxury real estate, built on trust, expertise, and unwavering commitment to our clients."
            }
          </p>
        </div>
      </section>

      <CompanyHistory />
      <TeamBios />
      <AwardsAndCertifications />
      <MarketExpertise />
      <ClientTestimonials />
      <OfficeLocations />
    </main>
  );
}
