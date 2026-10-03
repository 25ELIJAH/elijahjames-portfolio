import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `${profile.name} | Software Engineer & Digital Marketer`,
  description: `Portfolio of ${profile.name}, software engineer and digital marketing strategist.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
