import type { Metadata } from "next";
import "./globals.css";
import { Sora } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
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
      <body className={`${sora.className}`}>
        <Navbar /> 
        <div className="container">
            {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
