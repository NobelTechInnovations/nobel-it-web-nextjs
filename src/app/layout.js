import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nobel Tech Innovation",
  description: "Innovative technology solutions for a better future",
  keywords: ["technology", "innovation", "tech solutions", "Nobel Tech"],
  openGraph: {
    title: "Nobel Tech Innovation",
    description: "Innovative technology solutions for a better future",
    url: "https://nobeltechinnovation.com",
    siteName: "Nobel Tech Innovation",
    locale: "en_US",
    type: "website",
  },
  manifest: "/manifest.json",
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
