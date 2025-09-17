import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { HeaderNavigation } from "@/components/header-navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Real Estate | Premium Properties",
  description:
    "Discover exceptional premium homes and premium real estate properties. Curated for the most discerning clients.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <HeaderNavigation />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
