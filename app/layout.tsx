import "../styles/global.scss";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Metor | Results summary component",
  description:
    "Challange from Frontend Mentor | https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
