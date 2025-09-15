import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "./components/header-wrapper";
import Navbar from './components/navbar';
import Footer from './components/footer';
import AppMui from "@/theme/AppMui";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <AppMui>
            <HeaderWrapper /> {/* Client component handles pathname logic */}
            <main>{children}</main>
            <Footer />
          </AppMui>
        </body>
      </html>
    </ClerkProvider>
  );
}

