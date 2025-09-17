import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Star } from "lucide-react";

const agent = {
  name: "Earl Knighten",
  title: "Luxury Real Estate Specialist",
  specialties: ["Tampa Bay", "Westshore", "Investment Properties"],
  phone: "+1 (813) 648-0377 ",
  email: "info@earlknighten.com",
  rating: 5.0,
  sales: "$500M+",
  image: "/professional-man-real-estate-agent.jpg",
  bio: "Specializing in ultra-luxury properties with 15+ years of experience in Tampa's high-end markets.",
};

export default function AgentContactCards() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Meet Earl Knighten
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Connect directly with Tampa's premier luxury real estate specialist
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-neutral-200 overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200">
              <img
                src={agent.image || "/placeholder.svg"}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-white/90 text-neutral-900">
                  <Star className="w-3 h-3 mr-1 fill-amber-400 text-amber-400" />
                  {agent.rating}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-medium text-neutral-900 mb-1">
                  {agent.name}
                </h3>
                <p className="text-amber-600 font-medium mb-2">{agent.title}</p>
                <p className="text-sm text-neutral-600 mb-3">{agent.bio}</p>
                <p className="text-lg font-semibold text-neutral-900">
                  {agent.sales} in Sales
                </p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-neutral-700 mb-2">
                  Specialties:
                </p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                    asChild
                  >
                    <a href={`tel:${agent.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent"
                    asChild
                  >
                    <a href={`mailto:${agent.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
