"use client"; 

import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/pre-navbar';
import Nav from './components/navbar';
import Footer from './components/footer';
import AppMui from "@/theme/AppMui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Nav solo en login y register
  const showNav = pathname === "/login" || pathname === "/register";

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppMui>
          {/* Header siempre visible */}
          <Header />

          {/* Nav solo en login y register */}
          {showNav && <Nav active="Seasonal products" />}

          <main>{children}</main>

          {/* Footer siempre visible */}
          <Footer />
        </AppMui>
      </body>
    </html>
  );
}
