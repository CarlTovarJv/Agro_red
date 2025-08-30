"use client"; 
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/header';
import Nav from './components/nav';
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

  const hideLayout = pathname === 
  "/login" || pathname === "/register";

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppMui>
          {!hideLayout && <Header />}
          {!hideLayout && <Nav active="Seasonal products" />}
          <main>{children}</main>
          {!hideLayout && <Footer />}
        </AppMui>
      </body>
    </html>
  );
}
