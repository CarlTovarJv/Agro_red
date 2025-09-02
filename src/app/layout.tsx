"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/pre-navbar';
import Nav from './components/navbar';
import Footer from './components/footer';
import AppMui from "@/theme/AppMui";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode & { type?: { hideHeader?: boolean } };
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname(); // esto ya es reactivo y seguro en cliente
  const hideHeaderProp = (children as any)?.type?.hideHeader;

  if (!pathname) return null; // evita renderizar nada hasta que pathname exista

  const showNav = !hideHeaderProp && !pathname.startsWith("/login") && !pathname.startsWith("/register");
  const showSpecialNav = pathname.startsWith("/login") || pathname.startsWith("/register");

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppMui>
          {showNav && <Header />}
          {showSpecialNav && <Nav active="Seasonal products" />}
          <main>{children}</main>
          <Footer />
        </AppMui>
      </body>
    </html>
  );
}
