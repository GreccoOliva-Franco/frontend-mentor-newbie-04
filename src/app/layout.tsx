import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/styles";

const font = Overpass({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Interactive rating component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>{children}</body>
    </html>
  );
}
