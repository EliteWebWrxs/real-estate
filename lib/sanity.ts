// Sanity client configuration for fetching property data
export interface Property {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  location: {
    city: string;
    state: string;
    neighborhood?: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  propertyType: "house" | "condo" | "penthouse" | "villa" | "townhouse";
  images: Array<{
    asset: {
      url: string;
    };
    alt?: string;
  }>;
  featured: boolean;
  description: string;
  amenities: string[];
  yearBuilt?: number;
  lotSize?: number;
  garage?: number;
  status: "available" | "pending" | "sold";
  listingAgent: {
    name: string;
    email: string;
    phone: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
}

// Mock Sanity client - replace with actual Sanity configuration
export class SanityClient {
  async getFeaturedProperties(): Promise<Property[]> {
    // This would be replaced with actual Sanity GROQ query
    // const query = `*[_type == "property" && featured == true] | order(_createdAt desc)[0...6]`

    // Mock data that matches Sanity structure
    return [
      {
        _id: "property-1",
        title: "Modern Waterfront Estate",
        slug: { current: "modern-waterfront-estate" },
        location: {
          city: "Malibu",
          state: "CA",
          neighborhood: "Point Dume",
        },
        price: 8500000,
        bedrooms: 5,
        bathrooms: 6,
        squareFootage: 6200,
        propertyType: "house",
        images: [
          {
            asset: {
              url: "/modern-waterfront-mansion-with-glass-walls-and-inf.jpg",
            },
            alt: "Modern waterfront estate exterior",
          },
        ],
        featured: true,
        description:
          "Stunning contemporary estate with panoramic ocean views and private beach access.",
        amenities: [
          "Ocean View",
          "Private Beach",
          "Infinity Pool",
          "Wine Cellar",
          "Home Theater",
        ],
        yearBuilt: 2021,
        lotSize: 1.2,
        garage: 3,
        status: "available",
        listingAgent: {
          name: "Sarah Mitchell",
          email: "sarah@luxuryrealty.com",
          phone: "(310) 555-0123",
        },
      },
      {
        _id: "property-2",
        title: "Premium Penthouse Suite",
        slug: { current: "luxury-penthouse-suite" },
        location: {
          city: "Manhattan",
          state: "NY",
          neighborhood: "Upper East Side",
        },
        price: 12900000,
        bedrooms: 4,
        bathrooms: 5,
        squareFootage: 4800,
        propertyType: "penthouse",
        images: [
          {
            asset: {
              url: "/luxury-penthouse-with-city-skyline-view-and-modern.jpg",
            },
            alt: "Premium penthouse with city views",
          },
        ],
        featured: true,
        description:
          "Exquisite penthouse with breathtaking city skyline views and premium finishes throughout.",
        amenities: [
          "City Views",
          "Private Elevator",
          "Rooftop Terrace",
          "Concierge",
          "Gym Access",
        ],
        yearBuilt: 2020,
        garage: 2,
        status: "available",
        listingAgent: {
          name: "Michael Chen",
          email: "michael@eliterealty.com",
          phone: "(212) 555-0456",
        },
      },
      {
        _id: "property-3",
        title: "Contemporary Villa",
        slug: { current: "contemporary-villa" },
        location: {
          city: "Beverly Hills",
          state: "CA",
          neighborhood: "Trousdale Estates",
        },
        price: 15200000,
        bedrooms: 6,
        bathrooms: 8,
        squareFootage: 8500,
        propertyType: "villa",
        images: [
          {
            asset: {
              url: "/contemporary-villa-with-minimalist-design-and-land.jpg",
            },
            alt: "Contemporary villa with minimalist design",
          },
        ],
        featured: true,
        description:
          "Architectural masterpiece featuring clean lines, premium materials, and resort-style amenities.",
        amenities: [
          "Mountain Views",
          "Resort Pool",
          "Tennis Court",
          "Guest House",
          "Smart Home",
        ],
        yearBuilt: 2022,
        lotSize: 2.1,
        garage: 4,
        status: "available",
        listingAgent: {
          name: "Isabella Rodriguez",
          email: "isabella@prestigerealty.com",
          phone: "(310) 555-0789",
        },
      },
    ];
  }

  async getAllProperties(filters?: {
    location?: string;
    propertyType?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }): Promise<Property[]> {
    // Mock implementation - would use GROQ query with filters
    const allProperties = await this.getFeaturedProperties();
    return allProperties; // In real implementation, would apply filters
  }

  async getPropertyBySlug(slug: string): Promise<Property | null> {
    const properties = await this.getFeaturedProperties();
    return properties.find((p) => p.slug.current === slug) || null;
  }
}

export const sanityClient = new SanityClient();

// Utility functions for formatting
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatSquareFootage(sqft: number): string {
  return new Intl.NumberFormat("en-US").format(sqft);
}
