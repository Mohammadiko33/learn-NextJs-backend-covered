import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";
import Navigation from "@/Components/Navigation";

const episode = "85";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Sign in and Sign out`,
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
