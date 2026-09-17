import type { Metadata } from "next";
import { Heebo, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DAO HOANG DANG - JUNIOR ANIMATED WEB DEVELOPER",
  description: "DAO HOANG DANG - JUNIOR ANIMATED WEB DEVELOPER",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${heebo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
