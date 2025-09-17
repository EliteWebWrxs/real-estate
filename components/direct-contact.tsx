import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us Directly",
    primary: "+1 (813) 648-0377",
    secondary: "Available 24/7 for urgent inquiries",
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "luxury@realestate.com",
    secondary: "We respond within 2 hours",
    action: "mailto:luxury@realestate.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon-Fri: 8AM-8PM",
    secondary: "Sat-Sun: 9AM-6PM",
    action: null,
  },
  {
    icon: MapPin,
    title: "Visit Our Offices",
    primary: "3 Locations",
    secondary: "Beverly Hills, Manhattan, Miami",
    action: null,
  },
];

export default function DirectContact() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Direct Contact Options
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Reach out to us through your preferred method for immediate
            assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const content = (
              <Card
                key={index}
                className="h-full border-neutral-200 hover:border-amber-300 transition-colors duration-200"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-neutral-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-lg font-medium text-neutral-800 mb-2">
                    {method.primary}
                  </p>
                  <p className="text-sm text-neutral-600">{method.secondary}</p>
                </CardContent>
              </Card>
            );

            return method.action ? (
              <a key={index} href={method.action} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
