import type { Metadata } from "next";
import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Coffeeroasters",
  description: "Great coffee made simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${barlow.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}