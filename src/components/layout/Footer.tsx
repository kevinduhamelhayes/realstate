"use client";

import Link from "next/link";
import { LuMail, LuPhone, LuMapPin, LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu";
import { HiHome } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <HiHome className="h-6 w-6" />
              <span>InmoEstate</span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Encontrá tu hogar perfecto con InmoEstate. Ofrecemos una amplia selección de propiedades para compra y alquiler en las mejores ubicaciones.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <LuFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <LuInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <LuTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                <LuLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/properties" className="text-gray-400 transition-colors hover:text-white">
                  Propiedades en venta
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="text-gray-400 transition-colors hover:text-white">
                  Propiedades en alquiler
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-gray-400 transition-colors hover:text-white">
                  Nuestros agentes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Tipos de propiedades</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/properties?propertyType=house" className="text-gray-400 transition-colors hover:text-white">
                  Casas
                </Link>
              </li>
              <li>
                <Link href="/properties?propertyType=apartment" className="text-gray-400 transition-colors hover:text-white">
                  Apartamentos
                </Link>
              </li>
              <li>
                <Link href="/properties?propertyType=townhouse" className="text-gray-400 transition-colors hover:text-white">
                  Casas adosadas
                </Link>
              </li>
              <li>
                <Link href="/properties?propertyType=land" className="text-gray-400 transition-colors hover:text-white">
                  Terrenos
                </Link>
              </li>
              <li>
                <Link href="/properties?propertyType=commercial" className="text-gray-400 transition-colors hover:text-white">
                  Comercial
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <LuMapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                <span>Av. Corrientes 1234, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <LuMail className="h-5 w-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:info@inmoestate.com" className="hover:text-white">info@inmoestate.com</a>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              <Link href="/legal" className="block text-xs text-gray-400 hover:text-white underline">Aviso legal</Link>
              <Link href="/privacidad" className="block text-xs text-gray-400 hover:text-white underline">Política de privacidad</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} InmoEstate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 