import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Testimonials - Earl knighten Realty",
  description:
    "Read what Earl knighten's clients say about their real estate experience. Proven track record of satisfied buyers and sellers.",
  keywords: [
    "client testimonials",
    "real estate reviews",
    "Earl knighten",
    "satisfied clients",
    "success stories",
  ],
};

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Property Investor",
    location: "Beverly Hills, CA",
    content:
      "Earl helped me build a diverse property portfolio worth over $5M. His market insights and professional guidance were invaluable. He found off-market deals that I never would have discovered on my own.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Investment Portfolio",
    date: "December 2023",
  },
  {
    name: "Sarah Williams",
    role: "First-time Buyer",
    location: "Manhattan, NY",
    content:
      "As a first-time buyer, I was nervous about the entire process. Earl made everything smooth and stress-free. He explained every step, negotiated a great price, and even helped me find the best mortgage rates.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Luxury Condo",
    date: "November 2023",
  },
  {
    name: "David Chen",
    role: "Property Seller",
    location: "Malibu, CA",
    content:
      "Earl sold my waterfront property for $200K above asking price in just two weeks! His marketing strategy and negotiation skills are absolutely top-notch. I couldn't be happier with the results.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Waterfront Estate",
    date: "October 2023",
  },
  {
    name: "Jennifer Martinez",
    role: "Corporate Relocation",
    location: "Chicago, IL",
    content:
      "When my company relocated me to Chicago, Earl handled everything remotely. He found the perfect home for my family, coordinated virtual tours, and managed the entire closing process. Exceptional service!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Family Home",
    date: "September 2023",
  },
  {
    name: "Robert knighten",
    role: "Luxury Home Buyer",
    location: "Aspen, CO",
    content:
      "Earl has an incredible eye for luxury properties. He showed me homes that weren't even on the market yet and helped me secure my dream mountain retreat. His connections in the industry are unmatched.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Mountain Retreat",
    date: "August 2023",
  },
  {
    name: "Lisa Anderson",
    role: "Downsizing Seller",
    location: "San Francisco, CA",
    content:
      "After 30 years in our family home, Earl made the downsizing process emotional and financial manageable. He understood our needs and found us the perfect condo while getting top dollar for our old home.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Family Home to Condo",
    date: "July 2023",
  },
  {
    name: "James Wilson",
    role: "Commercial Investor",
    location: "Miami, FL",
    content:
      "Earl doesn't just handle residential properties - his commercial real estate expertise helped me acquire a prime office building in downtown Miami. His market analysis was spot-on.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Commercial Property",
    date: "June 2023",
  },
  {
    name: "Amanda Foster",
    role: "Luxury Condo Buyer",
    location: "Seattle, WA",
    content:
      "Earl found me the perfect penthouse with stunning city views. His attention to detail and understanding of luxury amenities made all the difference. The negotiation saved me $150K!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Luxury Penthouse",
    date: "May 2023",
  },
  {
    name: "Thomas Rodriguez",
    role: "Estate Sale",
    location: "Scottsdale, AZ",
    content:
      "Handling my father's estate was overwhelming, but Earl guided us through every step with compassion and professionalism. He achieved a quick sale at full asking price during a difficult time.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    propertyType: "Estate Property",
    date: "April 2023",
  },
];

const stats = [
  {
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers",
  },
  {
    number: "98%",
    label: "Success Rate",
    description: "Successful transactions",
  },
  { number: "$25M+", label: "Sales Volume", description: "In property value" },
  {
    number: "4.9/5",
    label: "Average Rating",
    description: "Client satisfaction",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Don't just take my word for it - hear directly from the clients
              I've helped achieve their real estate goals
            </p>
            <div className="flex justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-amber-500 fill-current"
                  />
                ))}
              </div>
              <span className="ml-4 text-2xl font-bold text-white">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What My <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real experiences from real clients who trusted me with their most
              important real estate decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-effect border-0 hover:bg-white/15 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-amber-500 mr-4" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-gray-700 pt-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-white">
                          {testimonial.location}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Property:</span>
                        <span className="text-white">
                          {testimonial.propertyType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Date:</span>
                        <span className="text-white">{testimonial.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Join My Success Stories?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let me help you achieve your real estate goals with the same
              dedication and expertise my clients rave about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me Today
              </a>
              <a
                href="mailto:Earl@Earlknightenrealty.com"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
