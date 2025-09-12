import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import Script from "next/script";
import Footer from "@/components/footer/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepgrids Landing Page",
  description: "This is the landing page for Deepgrids.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H0QRYV4BET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H0QRYV4BET');
          `}
        </Script>
      </head>
      <body className={`${sora.className}`}>
        <Navbar /> 
        <div className="container">
            {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
