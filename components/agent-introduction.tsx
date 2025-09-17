"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MessageCircle,
  Award,
  Star,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const agent = {
  name: "Earl Knighten",
  title: "Premium Real Estate Specialist",
  image: "/earl-knighten.webp",
  specialties: [
    "Premium Estates",
    "Waterfront Properties",
    "Investment Properties",
  ],
  experience: "15+ Years",
  sales: "$500M+",
  rating: 5.0,
  reviews: 127,
  bio: "Earl Knighten has established himself as Tampa's premier premium real estate specialist with an unparalleled commitment to excellence and white-glove service. His deep market knowledge and personalized approach have facilitated over $500 million in premium transactions.",
  achievements: [
    "Top 1% premium Agent in Tampa",
    "premium Real Estate Excellence Award",
    "Client Choice Award Winner",
  ],
  contact: {
    phone: "(813) 648-0377 ",
    email: "info@earlknighten.com",
  },
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Mitchell Holdings",
    content:
      "Earl's expertise and attention to detail made our $8M estate purchase seamless. His market knowledge of Tampa's premium market is unmatched.",
    rating: 5,
    property: "Tampa Bay Waterfront Estate",
  },
  {
    name: "Robert Chen",
    role: "Investment Manager",
    content:
      "Earl helped us build a $25M premium portfolio in Tampa. His strategic insights and local network are invaluable.",
    rating: 5,
    property: "Hyde Park Premium Collection",
  },
  {
    name: "Diana Rodriguez",
    role: "Tech Entrepreneur",
    content:
      "Earl delivered beyond expectations. Professional, discreet, and results-driven from start to finish.",
    rating: 5,
    property: "Westshore Modern Estate",
  },
];

export function AgentIntroduction() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-amber-100 text-amber-800 mb-4 px-4 py-2 text-sm font-medium">
              Meet Earl Knighten
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 text-balance">
              Your Tampa Premium Real Estate Expert
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto text-pretty">
              Combining years of experience with unparalleled market knowledge
              to deliver exceptional results for discerning clients in Tampa's
              premium market.
            </p>
          </div>

          {/* Agent Profile */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-[30rem] w-full rounded-lg overflow-hidden">
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority // optional: load crisp right away
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white flex items-center px-2 py-1 text-sm">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    {agent.rating}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">
                    {agent.title}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-light text-slate-900">
                        {agent.experience}
                      </div>
                      <div className="text-sm text-slate-600">Experience</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-light text-slate-900">
                        {agent.sales}
                      </div>
                      <div className="text-sm text-slate-600">Total Sales</div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {agent.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {agent.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <Award className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`tel:${agent.contact.phone}`}>
                    <Button className="flex-1 bg-slate-900 hover:bg-amber-600 text-white transition-colors duration-300">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                  <Link href={`mailto:${agent.contact.email}`}>
                    <Button
                      variant="outline"
                      className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Testimonials */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-slate-900 mb-4">
                What My Clients Say
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Discover why discerning clients trust Earl with their most
                important real estate decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600 mb-2">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-amber-600 font-medium">
                        {testimonial.property}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-0 text-white inline-block">
              <CardContent className="p-12">
                <h3 className="text-3xl font-light mb-4">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                  Schedule a private consultation with Earl and discover your
                  perfect premium property in Tampa today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-amber-600 hover:bg-amber-700 px-8 py-4 text-lg font-medium"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
