import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function OfficeLocations() {
  const office = {
    city: "Tampa",
    address: "123 Westshore Boulevard, Suite 2500",
    zipCode: "Tampa, FL 33607",
    phone: "+1 (813) 648-0377 ",
    email: "tampa@prestigeproperties.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 6:00 PM",
      sunday: "12:00 PM - 5:00 PM",
    },
    specialties: [
      "Waterfront Properties",
      "Downtown Condos",
      "Premium Estates",
    ],
    manager: "Victoria Sterling",
    image: "/luxury-real-estate-office-tampa.jpg",
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="text-center mt-16">
          <Card className="border-slate-200 bg-slate-900 text-white">
            <CardContent className="p-12">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                {
                  "Contact our Tampa office to schedule a consultation with our premium real estate experts. We're here to help you find your perfect property."
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
