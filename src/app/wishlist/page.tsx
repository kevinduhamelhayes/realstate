"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LuHeart } from "react-icons/lu";

import { Property } from "@/types/property";
import { properties } from "@/data/properties";
import { useWishlist } from "@/context/WishlistContext";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlist();
  const [wishedProperties, setWishedProperties] = useState<Property[]>([]);
  
  // Find properties that are in the wishlist
  useEffect(() => {
    const foundProperties = properties.filter(property => wishlist.includes(property.id));
    setWishedProperties(foundProperties);
  }, [wishlist]);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
            <LuHeart className="h-8 w-8 text-rose-500" />
            Mis favoritos
          </h1>
          <p className="text-gray-600">Propiedades que has guardado como favoritas</p>
        </div>
        
        {wishlist.length > 0 && (
          <Button variant="outline" onClick={clearWishlist}>
            Limpiar favoritos
          </Button>
        )}
      </div>
      
      {wishedProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishedProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg bg-white p-12 shadow-md text-center">
          <LuHeart className="mx-auto mb-4 h-16 w-16 text-gray-300" />
          <h2 className="mb-2 text-2xl font-semibold">No tienes propiedades favoritas</h2>
          <p className="mb-6 text-gray-600">
            Cuando encuentres propiedades que te interesen, guárdalas como favoritas para verlas más tarde.
          </p>
          <Button asChild size="lg">
            <Link href="/properties">
              Explorar propiedades
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
} 