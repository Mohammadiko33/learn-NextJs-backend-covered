import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

const episode = "34";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Parallel Intercepting Routes`,
    template: `${episode} - %s`,
  },
  description: "Next.js v.15 Tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
