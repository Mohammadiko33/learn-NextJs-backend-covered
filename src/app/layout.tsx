import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "67";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Fetching Data in Client Components`,
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
