import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DollarSign,
  TrendingUp,
  Camera,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Target,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sell Your Property - Earl knighten  Realty",
  description:
    "Get top dollar for your property with Earl knighten 's proven selling strategies. Free home valuation and expert marketing services.",
  keywords: [
    "sell home",
    "property valuation",
    "real estate agent",
    "Earl knighten ",
    "home selling",
  ],
};

const sellingProcess = [
  {
    step: 1,
    title: "Free Home Valuation",
    description:
      "I'll provide a comprehensive market analysis to determine your home's optimal listing price.",
    icon: DollarSign,
  },
  {
    step: 2,
    title: "Strategic Marketing Plan",
    description:
      "Professional photography, online listings, and targeted marketing to reach qualified buyers.",
    icon: Camera,
  },
  {
    step: 3,
    title: "Expert Negotiation",
    description:
      "I'll negotiate on your behalf to get you the best possible price and terms.",
    icon: Target,
  },
  {
    step: 4,
    title: "Smooth Closing",
    description:
      "I'll guide you through every step of the closing process to ensure a seamless transaction.",
    icon: CheckCircle,
  },
];

const whyChooseMe = [
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Average of 98% of listing price achieved for my clients",
    stat: "98%",
  },
  {
    icon: Clock,
    title: "Fast Sales",
    description: "Properties sell 40% faster than market average",
    stat: "40% Faster",
  },
  {
    icon: Users,
    title: "Expert Marketing",
    description:
      "Comprehensive marketing strategy reaches 1000+ potential buyers",
    stat: "1000+",
  },
  {
    icon: Shield,
    title: "Full Service",
    description: "Complete support from listing to closing",
    stat: "100%",
  },
];

export default function SellPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sell Your Home for{" "}
                <span className="text-gradient">Top Dollar</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With my proven marketing strategies and expert negotiation
                skills, I'll help you get the maximum value for your property in
                the shortest time possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Valuation
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Luxury home for sale"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Earl knighten </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My track record speaks for itself - I consistently deliver
              exceptional results for my clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseMe.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selling Process */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Proven <span className="text-gradient">Selling Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach that maximizes your property's value and
              minimizes time on market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellingProcess.map((process, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/15 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      0{process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {process.description}
                  </p>
                </div>
                {index < sellingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Valuation Form */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get Your Free{" "}
                <span className="text-gradient">Home Valuation</span>
              </h2>
              <p className="text-xl text-gray-400">
                Find out what your home is worth in today's market - completely
                free, no obligation
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 md:p-12 animate-slide-up">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Full Name *
                    </label>
                    <Input
                      placeholder="Enter your full name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Best Time to Call
                    </label>
                    <Input
                      placeholder="e.g., Weekday mornings"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Property Address *
                  </label>
                  <Input
                    placeholder="Enter your property address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Bedrooms
                    </label>
                    <Input
                      type="number"
                      placeholder="Number of bedrooms"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Bathrooms
                    </label>
                    <Input
                      type="number"
                      placeholder="Number of bathrooms"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Square Footage
                    </label>
                    <Input
                      type="number"
                      placeholder="Approximate sq ft"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Additional Information
                  </label>
                  <Textarea
                    placeholder="Tell me about any recent upgrades, unique features, or timeline for selling..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                </div>

                <div className="text-center">
                  <Button className="btn-primary px-12 py-4 text-lg">
                    Get My Free Valuation
                  </Button>
                  <p className="text-gray-400 text-sm mt-4">
                    I'll contact you within 24 hours with your personalized
                    market analysis
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Sell Your Home?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a customized selling strategy
              for your property
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
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
