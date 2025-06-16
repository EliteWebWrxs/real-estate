import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Earl Knighten - Real Estate Agent",
  description:
    "Get in touch with Earl Knighten for all your real estate needs. Available 7 days a week to help with buying, selling, or investing in properties.",
  keywords: [
    "contact Earl Knighten",
    "real estate agent contact",
    "property consultation",
    "real estate help",
  ],
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(555) 123-4567",
    description: "Available 7 days a week",
    action: "tel:5551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: "Earl@EarlKnightenrealty.com",
    description: "I respond within 2 hours",
    action: "mailto:Earl@EarlKnightenrealty.com",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Main Street, Suite 100",
    description: "City, State 12345",
    action: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri: 8AM-8PM",
    description: "Sat-Sun: 9AM-6PM",
    action: "#",
  },
];

const services = [
  "Buying a Home",
  "Selling a Home",
  "Investment Properties",
  "Market Analysis",
  "Property Valuation",
  "Relocation Services",
  "Commercial Real Estate",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Ready to start your real estate journey? I'm here to help you
              every step of the way. Reach out today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="btn-primary inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:Earl@EarlKnightenrealty.com"
                className="btn-secondary inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="glass-effect border-0 hover:bg-white/15 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-amber-500 font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="glass-effect rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Send Me a <span className="text-gradient">Message</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  Fill out the form below and I'll get back to you within 24
                  hours. Let me know how I can help with your real estate needs.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        First Name *
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Service Needed
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        {services.map((service) => (
                          <SelectItem
                            key={service}
                            value={service.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Timeline
                    </label>
                    <Select>
                      <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="When are you looking to buy/sell?" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="just-looking">
                          Just looking
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell me about your real estate needs, questions, or how I can help you..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full btn-primary py-4 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-gray-400 text-sm text-center">
                    I'll respond within 24 hours. For urgent matters, please
                    call directly.
                  </p>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Personal Info */}
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-6">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Earl Knighten"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Earl Knighten
                  </h3>
                  <p className="text-amber-500 font-semibold mb-4">
                    Licensed Real Estate Professional
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    With over 12 years of experience in real estate, I'm
                    committed to providing exceptional service and achieving the
                    best results for my clients.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-amber-500" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-amber-500" />
                    <span>Earl@EarlKnightenrealty.com</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-amber-500 mt-0.5" />
                    <span>
                      123 Main Street, Suite 100
                      <br />
                      City, State 12345
                    </span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-6 pt-6 border-t border-gray-700">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <Button className="w-full btn-primary justify-start">
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-500 justify-start"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Request Property Valuation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-amber-500 text-amber-500 justify-start"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Emergency Contact
                  </Button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-amber-500 font-semibold">
                      8:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-amber-500 font-semibold">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-amber-500 font-semibold">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Available for emergency calls 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visit My <span className="text-gradient">Office</span>
            </h2>
            <p className="text-xl text-gray-400">
              Located in the heart of the city, convenient for all your real
              estate needs
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 animate-slide-up">
            <div className="bg-gray-700 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <p className="text-white text-lg">
                  Interactive Map Coming Soon
                </p>
                <p className="text-gray-400">
                  123 Main Street, Suite 100, City, State 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
