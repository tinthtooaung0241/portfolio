import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tint Htoo Aung",
  description: "Portfolio created by Tint Htoo Aung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${fredoka.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
