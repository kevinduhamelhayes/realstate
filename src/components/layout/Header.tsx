"use client";

import Link from "next/link";
import { LuSearch, LuBuilding, LuUser, LuMenu, LuX, LuHeart } from "react-icons/lu";
import { HiHome } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";

export default function Header() {
  const router = useRouter();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    setWishlistCount(wishlist.length);
  }, [wishlist]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/properties?location=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-extrabold text-primary tracking-tight">
          <HiHome className="h-8 w-8 text-primary" />
          <span>InmoEstate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-10">
          <Link href="/" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/leads/comprar" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Comprar
          </Link>
          <Link href="/leads/vender" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Vender
          </Link>
          <Link href="/leads/busco-alquilar" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Quiero Alquilar
          </Link>
          <Link href="/leads/dar-en-alquiler" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Dar en Alquiler
          </Link>
          <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-6 md:flex">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar propiedades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-64 rounded-lg border border-gray-300 px-4 py-2 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-primary shadow-sm"
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-10 w-10 text-gray-500 hover:text-primary transition-colors"
            >
              <LuSearch className="h-5 w-5" />
            </Button>
          </form>
          <Link 
            href="/wishlist" 
            className="relative flex h-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:text-primary hover:bg-primary-50 transition-colors"
          >
            <LuHeart className="h-6 w-6" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Button variant="default" size="lg" asChild className="bg-primary hover:bg-primary-600 text-white font-bold shadow-md px-6 py-2">
            <Link href="/leads/dar-en-alquiler">
              <LuBuilding className="mr-2 h-5 w-5" />
              Publicar propiedad
            </Link>
          </Button>
          <ThemeSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-primary md:hidden transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <LuX className="h-7 w-7" />
          ) : (
            <LuMenu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={toggleMobileMenu}>
          <div 
            className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white/95 backdrop-blur-md shadow-2xl p-6 flex flex-col gap-4 animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-2 text-gray-600 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              <LuX className="h-7 w-7" />
            </button>
            <Link href="/" className="flex items-center gap-2 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              <HiHome className="h-6 w-6" /> Inicio
            </Link>
            <Link href="/leads/comprar" className="py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Comprar
            </Link>
            <Link href="/leads/vender" className="py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Vender
            </Link>
            <Link href="/leads/busco-alquilar" className="py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Quiero Alquilar
            </Link>
            <Link href="/leads/dar-en-alquiler" className="py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Dar en Alquiler
            </Link>
            <Link href="/contact" className="py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              Contacto
            </Link>
            <Link href="/wishlist" className="flex items-center gap-2 py-3 text-lg font-semibold text-gray-800 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
              <LuHeart className="h-6 w-6" /> Mis favoritos {wishlistCount > 0 && <span className="ml-1 rounded-full bg-primary px-2 py-0.5 text-xs text-white">{wishlistCount}</span>}
            </Link>
            <Button variant="default" size="lg" asChild className="bg-primary hover:bg-primary-600 text-white font-bold shadow-md w-full mt-2">
              <Link href="/leads/dar-en-alquiler">
                <LuBuilding className="mr-2 h-5 w-5" />
                Publicar propiedad
              </Link>
            </Button>
            <form onSubmit={handleSearch} className="relative mt-4">
              <input
                type="text"
                placeholder="Buscar propiedades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary shadow-sm"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-primary transition-colors"
              >
                <LuSearch className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
} 