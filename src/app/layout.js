import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
  description:
    "Top IT company in Jaipur offering expert web development, SEO, mobile app development, and digital marketing services. Boost your online presence with our customized solutions. Contact us today!",
  keywords: [
    "IT company in Jaipur",
    "Best IT services Jaipur",
    "Web development Jaipur",
    "Mobile app development Jaipur",
    "Software development company Jaipur",
    "Affordable IT solutions Jaipur",
  ],
  openGraph: {
    title: "Best IT Company in Jaipur | Web Development, SEO & Digital Solutions | Nobel Tech Innovation",
    description:
      "Top IT company in Jaipur offering expert web development, SEO, mobile app development, and digital marketing services. Boost your online presence with our customized solutions. Contact us today!",
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
      <Head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <link rel="manifest" href={metadata.manifest} />
        {/* Google Tag Manager Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2MZ12YCCMX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2MZ12YCCMX');
            `,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
