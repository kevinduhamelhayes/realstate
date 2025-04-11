"use client";

import Link from "next/link";
import { LuSearch, LuBuilding, LuUser, LuMenu, LuX } from "react-icons/lu";
import { HiHome } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <HiHome className="h-6 w-6" />
          <span>InmoEstate</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary">
            Inicio
          </Link>
          <Link href="/properties" className="text-sm font-medium text-gray-700 hover:text-primary">
            Propiedades
          </Link>
          <Link href="/agents" className="text-sm font-medium text-gray-700 hover:text-primary">
            Agentes
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary">
            Nosotros
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
            Contacto
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar propiedades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-64 rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-primary"
            />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-9 w-9 text-gray-400 hover:text-primary"
            >
              <LuSearch className="h-4 w-4" />
            </Button>
          </form>
          <Button variant="default" size="sm">
            <LuBuilding className="mr-2 h-4 w-4" />
            Publicar propiedad
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <LuX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="container mx-auto md:hidden">
          <div className="flex flex-col space-y-4 px-4 pb-6 pt-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 py-2 text-sm font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiHome className="h-5 w-5" />
              Inicio
            </Link>
            <Link 
              href="/properties" 
              className="flex items-center gap-2 py-2 text-sm font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LuBuilding className="h-5 w-5" />
              Propiedades
            </Link>
            <Link 
              href="/agents" 
              className="flex items-center gap-2 py-2 text-sm font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LuUser className="h-5 w-5" />
              Agentes
            </Link>
            <Link 
              href="/about" 
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              href="/contact" 
              className="py-2 text-sm font-medium text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Buscar propiedades..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-primary"
                >
                  <LuSearch className="h-4 w-4" />
                </Button>
              </form>
              <Button variant="default" size="sm" className="w-full justify-start">
                <LuBuilding className="mr-2 h-4 w-4" />
                Publicar propiedad
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 