import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-amber-600"></div>
              <span className="font-playfair text-xl font-bold">
                Luxury Estates
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Curating exceptional luxury properties for the most discerning
              clients. Your gateway to premium real estate experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-neutral-400 hover:text-amber-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/search"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Property Search
              </Link>
              <Link
                href="/about"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Our Services
              </Link>
              <Link
                href="/market-insights"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Market Insights
              </Link>
              <Link
                href="/contact"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link
                href="/services#buying"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Buying Services
              </Link>
              <Link
                href="/services#selling"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Selling Services
              </Link>
              <Link
                href="/services#investment"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Investment Consulting
              </Link>
              <Link
                href="/services#management"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Property Management
              </Link>
              <Link
                href="/services#analysis"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Market Analysis
              </Link>
              <Link
                href="/services#concierge"
                className="block text-neutral-300 hover:text-amber-400 transition-colors text-sm"
              >
                Concierge Services
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold">
              Stay Connected
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4 text-amber-400" />
                <span>(813) 648-0377 </span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>info@earlknighten.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4 text-amber-400 mt-0.5" />
                <span>
                  123 Westshore Boulevard
                  <br />
                  Tampa, FL 33607
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-neutral-300">
                Subscribe to our newsletter
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400"
                />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">
            © 2025 Luxury Estates. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-neutral-400 hover:text-amber-400 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
