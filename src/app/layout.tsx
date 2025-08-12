import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "64";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Client Component Placement`,
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
