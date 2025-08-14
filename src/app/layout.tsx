import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import Header from "@/Components/Header";
import "./globals.css";

const episode = "89";

export const metadata: Metadata = {
  title: {
    default: `Next.js - ${episode} - Read Session and User Data`,
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
