import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let me guide you through every step of your real estate journey with
            personalized service and expert knowledge
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              href="/listings"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
