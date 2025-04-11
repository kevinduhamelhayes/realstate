"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
          alt="Luxury modern home with pool"
          fill
          priority
          className="object-cover object-center brightness-[0.7]"
        />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Encuentra tu lugar perfecto para llamar hogar
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white">
          Descubre propiedades excepcionales en las mejores ubicaciones. Tu futuro hogar está a solo un clic de distancia.
        </p>
        
        {/* Search Form */}
        <div className="w-full max-w-4xl rounded-lg bg-white p-4 shadow-lg sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
                Ubicación
              </label>
              <input
                type="text"
                id="location"
                placeholder="Ciudad, barrio o dirección"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="property-type" className="mb-1 block text-sm font-medium text-gray-700">
                Tipo de propiedad
              </label>
              <select
                id="property-type"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
              >
                <option value="">Todos</option>
                <option value="house">Casa</option>
                <option value="apartment">Apartamento</option>
                <option value="townhouse">Casa adosada</option>
                <option value="land">Terreno</option>
                <option value="commercial">Comercial</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="listing-type" className="mb-1 block text-sm font-medium text-gray-700">
                Tipo de listado
              </label>
              <select
                id="listing-type"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
              >
                <option value="sale">Venta</option>
                <option value="rent">Alquiler</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/properties">
                Buscar propiedades
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 