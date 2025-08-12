import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "62";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - context providers`,
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
