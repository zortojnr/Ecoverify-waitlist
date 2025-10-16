import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecoverify  Bold, Intelligent Sustainability",
  description: "Join the waitlist for Ecoverify, a futuristic eco-tech platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
