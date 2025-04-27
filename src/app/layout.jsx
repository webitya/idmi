import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarEl from "../components/Navbar/Navbar";
import FooterEl from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IDMITS DESIGNS | Construction & Interior Design",
  description: "Premium construction and interior design services",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarEl />
       <div className="mt-4">
       <main>{children}</main>
       </div>
        <FooterEl/>
        
      </body>
    </html>
  );
}
