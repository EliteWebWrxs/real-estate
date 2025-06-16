import Link from "next/link";
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const navItems = [
  { name: "About me", href: "/about-earl" },
  { name: "Listings", href: "/listings" },
  { name: "Sell", href: "/sell" },
  { name: "Testimonials", href: "/testimonials" },
  ,
];

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">
                Earl Knighten
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted real estate partner. I provide exceptional service
              and expertise to help you find your dream home or sell your
              property with confidence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {navItems.map((item: any) => (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  className="block text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2">
              {[
                "Property Buying",
                "Property Selling",
                "Investment Consulting",
                "Market Analysis",
              ].map((service) => (
                <div key={service} className="text-gray-400 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>info@eliterealty.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <span>
                  123 Main Street
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Earl Knighten Realty. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
