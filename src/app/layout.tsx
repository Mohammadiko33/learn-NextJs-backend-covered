import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import ErrorWrapper from "./error-wrapper";

const episode = "33"

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Intercepting Routes`,
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
        <ErrorWrapper>{children}</ErrorWrapper>
        <Footer />
      </body>
    </html>
  );
}
