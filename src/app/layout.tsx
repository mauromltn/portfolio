import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Mauro Montane",
  description: "Developer who cares about crafting beautiful things.",
  openGraph: {
    title: "Mauro Montane",
    description: "Developer who cares about crafting beautiful things.",
    url: "https://mauromontane.tech",
    images: [
      {
        url: "https://mauromontane.com/public/og-image.png",
        width: 1470,
        height: 920,
        alt: "Mauro Montane Portfolio",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}