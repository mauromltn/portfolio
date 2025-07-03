import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/components/ui/Footer";
import { ReactLenis } from 'lenis/react'

export const metadata: Metadata = {
  title: "Mauro Montane",
  description: "Developer who cares about crafting beautiful things.",
  openGraph: {
    title: "Mauro Montane",
    description: "Developer who cares about crafting beautiful things.",
    url: "https://mauromontane.tech",
    images: [
      {
        url: "https://mauromontane.tech/og-image.png",
        width: 1470,
        height: 920,
        alt: "Mauro Montane Portfolio",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactLenis root />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}