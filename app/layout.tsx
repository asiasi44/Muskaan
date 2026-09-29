import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Electric Toothbrush in Nepal | Muskaan",
    template: "%s | Muskaan Nepal",
  },
  description:
    "Shop the Muskaan Sonic X3 electric toothbrush for Rs. 499. Explore six brushing modes, IPX7 waterproofing, and delivery in Kathmandu and across Nepal.",
  applicationName: "Muskaan",
  keywords: [
    "electric toothbrush Nepal",
    "best electric toothbrush Nepal",
    "toothbrush Nepal",
    "sonic toothbrush Nepal",
    "buy electric toothbrush in Nepal",
    "electric toothbrush price in Nepal",
    "Muskaan Sonic X3",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    siteName: "Muskaan",
    title: "Electric Toothbrush in Nepal | Muskaan",
    description:
      "Shop the Muskaan Sonic X3 electric toothbrush for Rs. 499. Explore six brushing modes, IPX7 waterproofing, and delivery in Kathmandu and across Nepal.",
  },
  twitter: {
    card: "summary",
    title: "Electric Toothbrush in Nepal | Muskaan",
    description:
      "Shop the Muskaan Sonic X3 electric toothbrush for Rs. 499. Explore six brushing modes, IPX7 waterproofing, and delivery in Kathmandu and across Nepal.",
  },
  verification: {
    "google": "ghwIf8nrN70AXGjWe1dXf0L7tj0V6HvG-jobUla85EA",

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
