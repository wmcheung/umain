import type { Metadata } from "next";

import { sfPro } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Munchies",
  description: "Unleash your inner chef with Munchies. Made by Umain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sfPro.variable}>
      <body>{children}</body>
    </html>
  );
}
