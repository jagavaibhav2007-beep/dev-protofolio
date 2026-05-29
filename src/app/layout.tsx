import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

const fontClassName = `${inter.variable} ${manrope.variable}`;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fontClassName}>{children}</body>
    </html>
  );
}
