import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZenFlow Yoga | Yoga & Mindfulness Studio in Boulder, CO",
  description:
    "Discover inner peace at ZenFlow Yoga, Boulder's premier yoga and mindfulness studio. Offering Vinyasa, Hatha, Hot Yoga, Yin, Prenatal, and Meditation classes for all levels. Book your first class today.",
  keywords: [
    "yoga studio Boulder CO",
    "mindfulness Boulder",
    "Vinyasa yoga",
    "Hatha yoga",
    "Hot yoga Boulder",
    "Yin yoga",
    "Prenatal yoga",
    "Meditation classes",
    "yoga classes near me",
    "ZenFlow Yoga",
  ],
  authors: [{ name: "ZenFlow Yoga" }],
  openGraph: {
    title: "ZenFlow Yoga | Yoga & Mindfulness Studio in Boulder, CO",
    description:
      "Discover inner peace at ZenFlow Yoga. Offering diverse yoga and meditation classes for all levels in the heart of Boulder, Colorado.",
    url: "https://zenflow-yoga.com",
    siteName: "ZenFlow Yoga",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenFlow Yoga | Boulder, CO",
    description:
      "Boulder's premier yoga and mindfulness studio. Classes for all levels.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zenflow-yoga.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#7c9a7e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
