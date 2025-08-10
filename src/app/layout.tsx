import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

const episode = "51";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - React Server Components`,
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
