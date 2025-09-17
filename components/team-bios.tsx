import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamBios() {
  const teamMember = {
    name: "Earl Knighten",
    role: "Luxury Real Estate Specialist",
    image: "/earl-knighten.webp",
    bio: "With over 15 years in luxury real estate, Earl founded his practice with a vision to redefine industry standards in Tampa's luxury market. His expertise in high-end properties and commitment to client excellence has established him as the premier luxury real estate specialist in the Tampa Bay area.",
    specialties: [
      "Luxury Estates",
      "Waterfront Properties",
      "Investment Advisory",
    ],
    achievements: [
      "$500M+ in career sales",
      "Top 1% in Tampa for 10 consecutive years",
      "Luxury Real Estate Excellence Award",
    ],
    contact: {
      email: "info@earlknighten.com",
      phone: "+1 (813) 648-0377 ",
      linkedin: "earl-knighten",
    },
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Earl Knighten
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {
              "Your dedicated luxury real estate professional bringing years of experience, unparalleled market knowledge, and unwavering dedication to serving discerning clients in Tampa."
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image
                    src={teamMember.image || "/placeholder.svg"}
                    alt={teamMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
                      {teamMember.name}
                    </h3>
                    <p className="text-amber-600 font-medium text-lg">
                      {teamMember.role}
                    </p>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {teamMember.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teamMember.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="secondary"
                          className="bg-amber-100 text-amber-800"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {teamMember.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link href={`mailto:${teamMember.contact.email}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 bg-transparent"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </Link>
                    <Link href={`tel:${teamMember.contact.phone}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 bg-transparent"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </Link>
                    <Link href={`${teamMember.contact.linkedin}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 bg-transparent"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
