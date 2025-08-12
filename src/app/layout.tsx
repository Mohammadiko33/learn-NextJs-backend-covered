import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "70";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Sequential Data Fetching`,
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
      </body>
    </html>
  );
}
