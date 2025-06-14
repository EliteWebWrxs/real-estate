import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Earl Knighten - Premium Real Estate Agent",
    template: "%s | Earl Knighten Realty",
  },
  description:
    "Experienced real estate agent specializing in luxury properties. Expert guidance for buying, selling, and investing in premium homes.",
  keywords: [
    "real estate agent",
    "luxury homes",
    "property expert",
    "Earl Knighten",
    "buying",
    "selling",
  ],
  authors: [{ name: "Earl Knighten" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Earlknightenrealty.com",
    siteName: "Earl Knighten Realty",
    title: "Earl Knighten - Premium Real Estate Agent",
    description:
      "Experienced real estate agent specializing in luxury properties. Expert guidance for buying, selling, and investing in premium homes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earl Knighten - Premium Real Estate Agent",
    description:
      "Experienced real estate agent specializing in luxury properties. Expert guidance for buying, selling, and investing in premium homes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
