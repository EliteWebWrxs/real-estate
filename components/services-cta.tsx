import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function ServicesCTA() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6 text-balance">
          Ready to Experience
          <span className="text-amber-400">
            {" "}
            Luxury Real Estate Excellence?
          </span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Contact me today to discuss how my comprehensive services can help you
          achieve your luxury real estate goals in Tampa.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg bg-transparent"
          >
            View My Portfolio
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-slate-300">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-amber-400" />
            <span className="text-lg">(813) 648-0377 </span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-amber-400" />
            <span className="text-lg">info@earlknighten.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
