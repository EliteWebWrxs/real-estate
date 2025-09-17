import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Trophy, Shield } from "lucide-react";

export function AwardsAndCertifications() {
  const awards = [
    {
      icon: Trophy,
      title: "Premium Real Estate Specialist of the Year",
      organization: "Tampa Bay Real Estate Association",
      year: "2024",
      description:
        "Recognized for outstanding service and market leadership in premium properties.",
    },
    {
      icon: Star,
      title: "Top 1% Real Estate Agent in Tampa",
      organization: "Real Estate Excellence Awards",
      year: "2023",
      description:
        "Ranked among the top performing real estate agents in the Tampa Bay area.",
    },
    {
      icon: Award,
      title: "Client Service Excellence Award",
      organization: "Premium Property Council",
      year: "2023",
      description:
        "Honored for exceptional client satisfaction and service quality.",
    },
    {
      icon: Shield,
      title: "Certified Premium Home Marketing Specialist",
      organization: "Institute for Premium Home Marketing",
      year: "Ongoing",
      description: "Certified in premium home marketing and client relations.",
    },
  ];

  const certifications = [
    "Certified Residential Specialist (CRS)",
    "Accredited Buyer's Representative (ABR)",
    "Graduate, REALTOR® Institute (GRI)",
    "Certified International Property Specialist (CIPS)",
    "Premium Home Marketing Specialist (CLHMS)",
    "Real Estate Negotiation Expert (RENE)",
    "Senior Real Estate Specialist (SRES)",
    "Resort & Second-Home Property Specialist (RSPS)",
  ];

  const memberships = [
    "National Association of REALTORS®",
    "Tampa Bay Real Estate Association",
    "International Premium Real Estate Association",
    "Premium Property Council",
    "Institute for Premium Home Marketing",
    "Florida Association of REALTORS®",
    "Urban Land Institute (ULI)",
    "International Real Estate Federation (FIABCI)",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {
              "My commitment to excellence has been recognized by industry leaders and professional organizations throughout Florida and beyond."
            }
          </p>
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h3 className="font-serif text-3xl font-bold text-slate-900 text-center mb-12">
            Recent Awards
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award) => {
              const IconComponent = award.icon;
              return (
                <Card
                  key={award.title}
                  className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-amber-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-serif text-xl font-semibold text-slate-900">
                            {award.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className="bg-amber-100 text-amber-800"
                          >
                            {award.year}
                          </Badge>
                        </div>
                        <p className="text-amber-600 font-medium mb-3">
                          {award.organization}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">
              Professional Certifications
            </h3>
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Memberships */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-slate-900 mb-8">
              Professional Memberships
            </h3>
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {memberships.map((membership) => (
                    <div
                      key={membership}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0" />
                      <span className="text-slate-700">{membership}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
