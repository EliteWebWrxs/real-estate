import {
  Home,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Search",
    description:
      "I'll help you find your perfect home with advanced search tools and personalized guidance.",
    features: [
      "Advanced filtering",
      "Market insights",
      "Personalized recommendations",
    ],
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description:
      "I'll maximize your property value with proven marketing strategies and expert negotiation.",
    features: [
      "Professional photography",
      "Market analysis",
      "Expert negotiation",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description:
      "Make informed investment decisions with my market expertise and analysis.",
    features: ["ROI analysis", "Market trends", "Portfolio optimization"],
  },
  {
    icon: Users,
    title: "Personal Support",
    description:
      "Dedicated support throughout your entire real estate journey.",
    features: ["Direct access to me", "Regular updates", "Post-sale support"],
  },
  {
    icon: Shield,
    title: "Legal Guidance",
    description:
      "Navigate complex legal processes with confidence and expert assistance.",
    features: ["Contract review", "Legal compliance", "Risk mitigation"],
  },
  {
    icon: Home,
    title: "Market Analysis",
    description:
      "Comprehensive market analysis to help you make informed decisions.",
    features: ["Comparative analysis", "Pricing strategy", "Market timing"],
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
