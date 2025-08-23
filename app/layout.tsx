import type { Metadata } from "next";
import "./globals.css";
import Footer from "./sections/Footer";

export const metadata: Metadata = {
  title: "Neil Edriane Lerin | Portoflio",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-display`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
