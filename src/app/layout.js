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
  title: "Nobel Tech Innovation | Best IT Company in Jaipur | Web Development, SEO & Digital Solutions",
  description: "Top IT company in Jaipur offering expert web development, SEO, mobile app development, and digital marketing services. Boost your online presence with our customized solutions. Contact us today!",
  keywords: ["IT company in Jaipur", "Best IT services Jaipur", "Web development Jaipur", "Mobile app development Jaipur","Software development company Jaipur","Affordable IT solutions Jaipur"],
  openGraph: {
    title: "Best IT Company in Jaipur | Web Development, SEO & Digital Solutions | Nobel Tech Innovation",
    description: "Top IT company in Jaipur offering expert web development, SEO, mobile app development, and digital marketing services. Boost your online presence with our customized solutions. Contact us today!",
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
