import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "68";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Fetching Data in Server Components`,
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
