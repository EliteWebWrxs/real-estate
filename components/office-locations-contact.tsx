import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const office = {
  name: "Tampa",
  address: "123 Westshore Boulevard, Suite 2500",
  city: "Tampa, FL 33607",
  phone: "+1 (813) 648-0377 ",
  email: "tampa@luxury.com",
  hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
  mapUrl: "https://maps.google.com/?q=Westshore+Boulevard+Tampa+FL",
  image: "/luxury-tampa-office.jpg",
};

export default function OfficeLocationsContact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience our premium service in person at our premium Tampa
            location
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-neutral-200 overflow-hidden">
            <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-2xl font-medium">
                  {office.name}
                </h3>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-neutral-900">
                      {office.address}
                    </p>
                    <p className="text-neutral-600">{office.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <a
                    href={`tel:${office.phone}`}
                    className="text-neutral-900 hover:text-amber-600 transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-neutral-900 hover:text-amber-600 transition-colors"
                  >
                    {office.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-neutral-600 text-sm">{office.hours}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <Button
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                  asChild
                >
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Map
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
