import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ExitIntentModal } from "@/components/layout/ExitIntentModal";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { site } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Derby Spotless | Premium Cleaning Services in Derby",
    template: "%s | Derby Spotless",
  },
  description:
    "Premium domestic and commercial cleaning across Derby. Same trusted cleaner, fixed arrival windows, online booking and a satisfaction guarantee.",
  keywords: [
    "cleaning services Derby",
    "domestic cleaner Derby",
    "end of tenancy cleaning Derby",
    "office cleaning Derby",
    "Airbnb cleaning Derby",
  ],
  openGraph: {
    title: "Derby Spotless | Premium Cleaning Services in Derby",
    description:
      "Premium domestic and commercial cleaning across Derby, delivered with consistency, professionalism and complete peace of mind.",
    url: site.url,
    siteName: "Derby Spotless",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derby Spotless | Premium Cleaning Services in Derby",
    description:
      "Premium domestic and commercial cleaning across Derby, delivered with consistency, professionalism and complete peace of mind.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
        <WhatsAppFloat />
        <ExitIntentModal />
      </body>
    </html>
  );
}
