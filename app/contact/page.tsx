import type { Metadata } from "next";
import ContactHero from "@/components/contact-hero";
import ContactForms from "@/components/contact-forms";
import DirectContact from "@/components/direct-contact";
import OfficeLocationsContact from "@/components/office-locations-contact";
import AgentContactCards from "@/components/agent-contact-cards";
import SocialMediaLinks from "@/components/social-media-links";

export const metadata: Metadata = {
  title: "Contact Us | Luxury Real Estate",
  description:
    "Get in touch with our luxury real estate experts. Multiple contact options for personalized service.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <ContactHero />
      <ContactForms />
      <DirectContact />
      {/* <OfficeLocationsContact /> */}
      {/* <AgentContactCards /> */}
      <SocialMediaLinks />
    </main>
  );
}
