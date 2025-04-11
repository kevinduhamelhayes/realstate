"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export interface SearchFilters {
  location?: string;
  propertyType?: string;
  listingType?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minBathrooms?: number;
}

export default function SearchProperties({ className = "" }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<SearchFilters>({
    location: searchParams.get("location") || "",
    propertyType: searchParams.get("propertyType") || "",
    listingType: searchParams.get("listingType") || "",
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
    minBedrooms: searchParams.get("minBedrooms") ? Number(searchParams.get("minBedrooms")) : undefined,
    minBathrooms: searchParams.get("minBathrooms") ? Number(searchParams.get("minBathrooms")) : undefined,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create a URLSearchParams instance for building the query string
    const params = new URLSearchParams();
    
    // Add each filter to the query string if it has a value
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.append(key, String(value));
      }
    });
    
    // Navigate to the properties page with the filters applied
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className={`rounded-lg bg-white p-4 shadow-lg sm:p-6 ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <label htmlFor="location" className="mb-1 block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Ciudad, barrio o dirección"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-gray-700">
              Tipo de propiedad
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={filters.propertyType}
              onChange={handleInputChange}
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
            <label htmlFor="listingType" className="mb-1 block text-sm font-medium text-gray-700">
              Tipo de listado
            </label>
            <select
              id="listingType"
              name="listingType"
              value={filters.listingType}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
            >
              <option value="">Todos</option>
              <option value="sale">Venta</option>
              <option value="rent">Alquiler</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div>
            <label htmlFor="minPrice" className="mb-1 block text-sm font-medium text-gray-700">
              Precio mínimo
            </label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              value={filters.minPrice || ""}
              onChange={handleInputChange}
              placeholder="0"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="maxPrice" className="mb-1 block text-sm font-medium text-gray-700">
              Precio máximo
            </label>
            <input
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice || ""}
              onChange={handleInputChange}
              placeholder="Sin límite"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="minBedrooms" className="mb-1 block text-sm font-medium text-gray-700">
              Habitaciones (min)
            </label>
            <select
              id="minBedrooms"
              name="minBedrooms"
              value={filters.minBedrooms || ""}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
            >
              <option value="">Cualquiera</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="minBathrooms" className="mb-1 block text-sm font-medium text-gray-700">
              Baños (min)
            </label>
            <select
              id="minBathrooms"
              name="minBathrooms"
              value={filters.minBathrooms || ""}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
            >
              <option value="">Cualquiera</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button type="submit" size="lg" className="px-8">
            <LuSearch className="mr-2 h-5 w-5" />
            Buscar propiedades
          </Button>
        </div>
      </form>
    </div>
  );
} 