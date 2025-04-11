import { Metadata } from "next";
import { LuFilter } from "react-icons/lu";

import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Propiedades | InmoEstate",
  description: "Explora nuestra amplia selección de propiedades en venta y alquiler",
};

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Propiedades</h1>
        <p className="text-gray-600">Explora nuestra colección de propiedades disponibles</p>
      </div>
      
      {/* Filters */}
      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-lg font-medium">
            <LuFilter className="mr-2 h-5 w-5" />
            Filtros
          </h2>
          <Button variant="outline" size="sm">
            Limpiar filtros
          </Button>
        </div>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <label htmlFor="listing-type" className="mb-1 block text-sm font-medium text-gray-700">
              Tipo de listado
            </label>
            <select
              id="listing-type"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
            >
              <option value="">Todos</option>
              <option value="sale">Venta</option>
              <option value="rent">Alquiler</option>
            </select>
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
              <option value="industrial">Industrial</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="price-min" className="mb-1 block text-sm font-medium text-gray-700">
              Precio mínimo
            </label>
            <input
              type="number"
              id="price-min"
              placeholder="0"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="price-max" className="mb-1 block text-sm font-medium text-gray-700">
              Precio máximo
            </label>
            <input
              type="number"
              id="price-max"
              placeholder="Sin límite"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-primary"
            />
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="bedrooms" className="mb-1 block text-sm font-medium text-gray-700">
              Habitaciones (mínimo)
            </label>
            <select
              id="bedrooms"
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
            <label htmlFor="bathrooms" className="mb-1 block text-sm font-medium text-gray-700">
              Baños (mínimo)
            </label>
            <select
              id="bathrooms"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
            >
              <option value="">Cualquiera</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          
          <div>
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
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button className="w-full sm:w-auto">
            Aplicar filtros
          </Button>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">{properties.length} propiedades encontradas</p>
        <select
          className="rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary"
        >
          <option value="newest">Más recientes</option>
          <option value="price-low">Precio: menor a mayor</option>
          <option value="price-high">Precio: mayor a menor</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      
      {/* Pagination */}
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
    </div>
  );
} 