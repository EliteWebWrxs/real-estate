import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@luxuryrealestate",
    followers: "125K",
    description: "Stunning property photos and virtual tours",
    url: "https://instagram.com/luxuryrealestate",
    color: "hover:bg-pink-50 hover:border-pink-300",
  },
  {
    name: "Facebook",
    icon: Facebook,
    handle: "Luxury Real Estate",
    followers: "85K",
    description: "Market updates and community insights",
    url: "https://facebook.com/luxuryrealestate",
    color: "hover:bg-blue-50 hover:border-blue-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    handle: "Luxury Real Estate Group",
    followers: "45K",
    description: "Professional network and industry insights",
    url: "https://linkedin.com/company/luxuryrealestate",
    color: "hover:bg-blue-50 hover:border-blue-400",
  },
  {
    name: "YouTube",
    icon: Youtube,
    handle: "Luxury Properties TV",
    followers: "95K",
    description: "Property tours and market analysis videos",
    url: "https://youtube.com/luxuryproperties",
    color: "hover:bg-red-50 hover:border-red-300",
  },
  {
    name: "Twitter",
    icon: Twitter,
    handle: "@LuxuryRealEst",
    followers: "65K",
    description: "Real-time market updates and news",
    url: "https://twitter.com/luxuryrealestate",
    color: "hover:bg-sky-50 hover:border-sky-300",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    handle: "Direct Messaging",
    followers: "Available 24/7",
    description: "Instant communication for urgent inquiries",
    url: "https://wa.me/15551234567",
    color: "hover:bg-green-50 hover:border-green-300",
  },
];

export default function SocialMediaLinks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-4">
            Connect With Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Follow us on social media for the latest luxury listings, market
            insights, and exclusive content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className={`border-neutral-200 transition-all duration-200 ${platform.color}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-neutral-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-neutral-900 mb-1">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-1">
                        {platform.handle}
                      </p>
                      <p className="text-xs text-neutral-500 mb-3">
                        {platform.followers} followers
                      </p>
                      <p className="text-sm text-neutral-600 mb-4">
                        {platform.description}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full bg-transparent"
                        asChild
                      >
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Follow
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-lg text-neutral-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive listings, market reports,
            and luxury real estate insights delivered to your inbox
          </p>
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8"
          >
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
}
