import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Property Investor",
    content:
      "Elite Realty helped me build a diverse property portfolio. Their market insights and professional guidance were invaluable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sarah Williams",
    role: "First-time Buyer",
    content:
      "As a first-time buyer, I was nervous about the process. The team made everything smooth and stress-free.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "David Chen",
    role: "Property Seller",
    content:
      "They sold my property above asking price in just two weeks. Their marketing strategy and negotiation skills are top-notch.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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

              <div className="flex items-center">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
