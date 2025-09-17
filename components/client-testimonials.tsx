import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export function ClientTestimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Tech Executive",
      location: "Westshore Penthouse Purchase",
      image: "/professional-woman-client.jpg",
      rating: 5,
      testimonial:
        "Earl exceeded every expectation. His attention to detail, market knowledge, and dedication to finding the perfect property was remarkable. The entire process was seamless and professional.",
      propertyValue: "$4.2M",
      date: "March 2024",
    },
    {
      name: "Robert Chen",
      role: "Investment Banker",
      location: "Hyde Park Estate Sale",
      image: "/professional-asian-man-client.jpg",
      rating: 5,
      testimonial:
        "Earl provided exceptional guidance throughout our property sale. His market analysis was spot-on, and we achieved 12% above asking price. Truly the best in Tampa premium real estate.",
      propertyValue: "$3.1M",
      date: "February 2024",
    },
    {
      name: "Elena Vasquez",
      role: "International Entrepreneur",
      location: "Tampa Bay Waterfront Condo",
      image: "/professional-latina-woman-client.jpg",
      rating: 5,
      testimonial:
        "Earl's expertise in premium transactions was invaluable. He understood our unique needs and made the entire process effortless. Highly recommended for Tampa premium properties.",
      propertyValue: "$2.8M",
      date: "January 2024",
    },
    {
      name: "David Thompson",
      role: "Hedge Fund Manager",
      location: "Davis Islands Estate",
      image: "/professional-man-client-executive.jpg",
      rating: 5,
      testimonial:
        "Earl provided outstanding investment analysis and market insights. His financial acumen really showed in his approach to our property acquisition. Exceptional service.",
      propertyValue: "$5.7M",
      date: "December 2023",
    },
    {
      name: "Maria Rodriguez",
      role: "Fashion Designer",
      location: "SoHo District Loft",
      image: "/professional-creative-woman-client.jpg",
      rating: 5,
      testimonial:
        "Earl understood my vision perfectly. He found a unique property that matched my creative needs and lifestyle. The negotiation process was handled expertly.",
      propertyValue: "$1.9M",
      date: "November 2023",
    },
    {
      name: "Alexander Petrov",
      role: "Real Estate Developer",
      location: "Commercial Property Portfolio",
      image: "/professional-man-developer-client.jpg",
      rating: 5,
      testimonial:
        "Working with Earl on our commercial acquisitions has been exceptional. His market knowledge and professional network are unmatched in the Tampa Bay area.",
      propertyValue: "$15M Portfolio",
      date: "October 2023",
    },
  ];

  const stats = [
    { label: "Client Satisfaction Rate", value: "98.5%" },
    { label: "Repeat Clients", value: "87%" },
    { label: "Referral Rate", value: "92%" },
    { label: "Average Review Rating", value: "4.9/5" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {
              "My clients' success stories speak to my commitment to excellence and the exceptional results I deliver in Tampa's premium real estate market."
            }
          </p>
        </div>

        {/* Client Satisfaction Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-slate-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-amber-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Property:</span>
                    <span className="text-sm text-slate-700">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Value:</span>
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800"
                    >
                      {testimonial.propertyValue}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Date:</span>
                    <span className="text-sm text-slate-700">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
