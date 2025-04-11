import { Metadata } from "next";
import { LuFilter } from "react-icons/lu";

import PropertyCard from "@/components/property/PropertyCard";
import SearchProperties, { SearchFilters } from "@/components/property/SearchProperties";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Propiedades | InmoEstate",
  description: "Explora nuestra amplia selección de propiedades en venta y alquiler",
};

interface PropertiesPageProps {
  searchParams: {
    location?: string;
    propertyType?: string;
    listingType?: string;
    minPrice?: string;
    maxPrice?: string;
    minBedrooms?: string;
    minBathrooms?: string;
    sort?: string;
  };
}

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  // Parse the search parameters
  const filters: SearchFilters = {
    location: searchParams.location,
    propertyType: searchParams.propertyType,
    listingType: searchParams.listingType,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    minBedrooms: searchParams.minBedrooms ? Number(searchParams.minBedrooms) : undefined,
    minBathrooms: searchParams.minBathrooms ? Number(searchParams.minBathrooms) : undefined,
  };
  
  const sort = searchParams.sort || "newest";
  
  // Filter properties based on search parameters
  let filteredProperties = [...properties];
  
  if (filters.location) {
    const locationLower = filters.location.toLowerCase();
    filteredProperties = filteredProperties.filter(property => 
      property.address.city.toLowerCase().includes(locationLower) ||
      property.address.state.toLowerCase().includes(locationLower) ||
      property.address.street.toLowerCase().includes(locationLower)
    );
  }
  
  if (filters.propertyType) {
    filteredProperties = filteredProperties.filter(property => 
      property.propertyType === filters.propertyType
    );
  }
  
  if (filters.listingType) {
    filteredProperties = filteredProperties.filter(property => 
      property.listingType === filters.listingType
    );
  }
  
  if (filters.minPrice !== undefined) {
    filteredProperties = filteredProperties.filter(property => 
      property.price >= filters.minPrice!
    );
  }
  
  if (filters.maxPrice !== undefined) {
    filteredProperties = filteredProperties.filter(property => 
      property.price <= filters.maxPrice!
    );
  }
  
  if (filters.minBedrooms !== undefined) {
    filteredProperties = filteredProperties.filter(property => 
      property.bedrooms >= filters.minBedrooms!
    );
  }
  
  if (filters.minBathrooms !== undefined) {
    filteredProperties = filteredProperties.filter(property => 
      property.bathrooms >= filters.minBathrooms!
    );
  }
  
  // Sort properties
  switch (sort) {
    case "price-low":
      filteredProperties.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProperties.sort((a, b) => b.price - a.price);
      break;
    case "newest":
    default:
      filteredProperties.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      break;
  }
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Propiedades</h1>
        <p className="text-gray-600">Explora nuestra colección de propiedades disponibles</p>
      </div>
      
      {/* Search Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-lg font-medium">
            <LuFilter className="mr-2 h-5 w-5" />
            Filtros
          </h2>
          <Button variant="outline" size="sm" asChild>
            <Link href="/properties">Limpiar filtros</Link>
          </Button>
        </div>
        
        <SearchProperties className="mt-4" />
      </div>
      
      {/* Results */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">{filteredProperties.length} propiedades encontradas</p>
        <select
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
          value={sort}
          onChange={(e) => {
            // Create a new URLSearchParams with the current search params
            const params = new URLSearchParams(window.location.search);
            // Update the sort parameter
            params.set("sort", e.target.value);
            // Update the URL without refreshing the page
            window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
            // Reload the page to apply the new sort order
            window.location.reload();
          }}
        >
          <option value="newest">Más recientes</option>
          <option value="price-low">Precio: menor a mayor</option>
          <option value="price-high">Precio: mayor a menor</option>
        </select>
      </div>
      
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-white p-12 shadow-md text-center">
          <h3 className="mb-2 text-xl font-semibold">No se encontraron propiedades</h3>
          <p className="mb-6 text-gray-600">
            No hay propiedades que coincidan con tus criterios de búsqueda. Intenta con otros filtros.
          </p>
          <Button asChild>
            <Link href="/properties">Ver todas las propiedades</Link>
          </Button>
        </div>
      )}
      
      {/* Pagination - Show only if there are enough properties */}
      {filteredProperties.length > 9 && (
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className="rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Anterior
            </button>
            <button
              className="border-t border-b border-r border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-white"
            >
              1
            </button>
            <button
              className="border-t border-b border-r border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </button>
            <button
              className="rounded-r-md border-t border-b border-r border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 