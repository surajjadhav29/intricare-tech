import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google"; 
import FooterComponent from "@/components/ClientSideComponents/FooterComponent";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope", 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Bilgi Teknolojilerinde",
  description: "Bilgi Teknolojilerinde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
