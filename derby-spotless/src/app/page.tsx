import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AreasCoveredSection } from "@/components/sections/AreasCoveredSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Premium Cleaning Services in Derby",
  description:
    "Professional, technology-enabled cleaning services across Derby and every surrounding suburb. Same trusted cleaner every time, fixed arrival windows, fully insured, satisfaction guaranteed. Get an instant online quote in under 2 minutes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <Hero />
      <SocialProofBar />
      <ServicesOverview />
      <WhatsIncluded />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsSection limit={6} />
      <AreasCoveredSection />
      <FaqSection faqs={generalFaqs} />
      <CtaBanner />
    </>
  );
}
