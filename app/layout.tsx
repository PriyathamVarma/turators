import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["600", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Turators — Where India's tourism people build together",
  description:
    "Turators is a community for guides, stays, startups, students and tourism bodies building India's tourism ecosystem. Starting in Visakhapatnam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
