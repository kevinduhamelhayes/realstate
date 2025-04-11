import Image from "next/image";
import Link from "next/link";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { LuHeart } from "react-icons/lu";

import { Property } from "@/types/property";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const primaryImage = property.images.find(img => img.isPrimary) || property.images[0];
  
  // Format price with currency symbol
  const price = formatPrice(property.price, property.listingType === 'rent');
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        {/* Badge for new or featured properties */}
        {property.isNew && (
          <div className="absolute left-4 top-4 z-10 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-white">
            Nuevo
          </div>
        )}
        {!property.isNew && property.featured && (
          <div className="absolute left-4 top-4 z-10 rounded-md bg-primary px-2 py-1 text-xs font-medium text-white">
            Destacado
          </div>
        )}
        
        {/* Favorite button */}
        <button className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm transition-colors hover:bg-white hover:text-rose-500">
          <LuHeart className="h-5 w-5" />
        </button>
        
        {/* Property image */}
        <Link href={`/properties/${property.id}`}>
          <div className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt || property.title}
              width={600}
              height={450}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </div>
      
      <CardContent className="p-4">
        {/* Price and type */}
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            {price}
            {property.listingType === 'rent' && <span className="text-sm font-normal text-gray-500">/mes</span>}
          </div>
          <div className="rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
            {property.propertyType === 'house' ? 'Casa' : 
             property.propertyType === 'apartment' ? 'Apartamento' : 
             property.propertyType === 'condo' ? 'Condominio' : 
             property.propertyType === 'townhouse' ? 'Casa adosada' : 
             property.propertyType === 'land' ? 'Terreno' : 
             property.propertyType === 'commercial' ? 'Comercial' : 'Industrial'}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold hover:text-primary">
          <Link href={`/properties/${property.id}`}>
            {property.title}
          </Link>
        </h3>
        
        {/* Address */}
        <p className="mb-3 line-clamp-1 text-sm text-gray-500">
          {property.address.street}, {property.address.city}, {property.address.state}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <BiBed className="h-5 w-5 text-gray-500" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Habitación' : 'Habitaciones'}</span>
            </div>
          )}
          
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <BiBath className="h-5 w-5 text-gray-500" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Baño' : 'Baños'}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <BiArea className="h-5 w-5 text-gray-500" />
            <span>{property.area} m²</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" variant="default">
          <Link href={`/properties/${property.id}`}>
            Ver detalles
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 