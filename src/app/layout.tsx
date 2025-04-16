import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import { WishlistProvider } from "@/context/WishlistContext";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InmoEstate | Tu inmobiliaria de confianza",
  description: "Encuentra tu hogar ideal con InmoEstate - La inmobiliaria líder en compra, venta y alquiler de propiedades",
  keywords: ["inmobiliaria", "propiedades", "casas", "apartamentos", "venta", "alquiler", "terrenos", "real estate"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <WishlistProvider>
            <MainLayout>{children}</MainLayout>
          </WishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
