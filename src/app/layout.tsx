"use client"; 

import { usePathname } from "next/navigation";
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

  // Header solo en login y register
  const showHeader = pathname === "/login" || pathname === "/register";

  // Nav solo en páginas distintas de login y register
  const showNav = !showHeader;

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppMui>
          {showHeader && <Header />}
          {showNav && <Nav active="Seasonal products" />}
          <main>{children}</main>
          <Footer />
        </AppMui>
      </body>
    </html>
  );
}
