import { Hero } from "@/components/home/hero";
import { FeaturedListings } from "@/components/home/featured-listings";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedListings />
      <Testimonials />
      <CTA />
    </>
  );
}
