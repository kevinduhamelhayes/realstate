import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BiBed, BiBath, BiArea, BiCalendar } from "react-icons/bi";
import { LuMapPin, LuHeart, LuShare2, LuPrinter, LuCheckCircle, LuPhone, LuMail } from "react-icons/lu";

import { properties } from "@/data/properties";
import { agents } from "@/data/agents";
import { Button } from "@/components/ui/button";
import { formatPrice, formatDate } from "@/lib/format";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = properties.find(p => p.id === params.id);
  
  if (!property) {
    return {
      title: "Propiedad no encontrada | InmoEstate",
      description: "La propiedad que estás buscando no existe o ha sido eliminada.",
    };
  }
  
  return {
    title: `${property.title} | InmoEstate`,
    description: property.description.substring(0, 160),
  };
}

export default function PropertyDetailPage({ params }: Props) {
  const property = properties.find(p => p.id === params.id);
  
  if (!property) {
    notFound();
  }
  
  const agent = property.agentId ? agents.find(a => a.id === property.agentId) : null;
  const formattedPrice = formatPrice(property.price, property.listingType === 'rent');
  const primaryImage = property.images.find(img => img.isPrimary) || property.images[0];
  const otherImages = property.images.filter(img => img !== primaryImage);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <nav className="flex text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/properties" className="text-gray-500 hover:text-primary">
            Propiedades
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{property.title}</span>
        </nav>
      </div>
      
      {/* Property Title and Address */}
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">{property.title}</h1>
        <p className="flex items-center text-gray-600">
          <LuMapPin className="mr-1 h-5 w-5 text-gray-500" />
          {property.address.street}, {property.address.city}, {property.address.state}, {property.address.zipCode}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Button variant="outline" className="flex items-center">
          <LuHeart className="mr-2 h-5 w-5" />
          Guardar
        </Button>
        <Button variant="outline" className="flex items-center">
          <LuShare2 className="mr-2 h-5 w-5" />
          Compartir
        </Button>
        <Button variant="outline" className="flex items-center">
          <LuPrinter className="mr-2 h-5 w-5" />
          Imprimir
        </Button>
      </div>
      
      {/* Property Images */}
      <div className="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="relative h-[400px] overflow-hidden rounded-lg lg:col-span-2">
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt || property.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {otherImages.slice(0, 2).map((image) => (
            <div key={image.id} className="relative h-[190px] overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={image.alt || property.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* Property Overview */}
          <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Información general</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {property.bedrooms > 0 && (
                <div className="flex flex-col items-center rounded-lg border border-gray-200 p-4">
                  <BiBed className="mb-2 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">{property.bedrooms}</span>
                  <span className="text-sm text-gray-500">{property.bedrooms === 1 ? 'Habitación' : 'Habitaciones'}</span>
                </div>
              )}
              
              {property.bathrooms > 0 && (
                <div className="flex flex-col items-center rounded-lg border border-gray-200 p-4">
                  <BiBath className="mb-2 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">{property.bathrooms}</span>
                  <span className="text-sm text-gray-500">{property.bathrooms === 1 ? 'Baño' : 'Baños'}</span>
                </div>
              )}
              
              <div className="flex flex-col items-center rounded-lg border border-gray-200 p-4">
                <BiArea className="mb-2 h-8 w-8 text-primary" />
                <span className="text-xl font-semibold">{property.area}</span>
                <span className="text-sm text-gray-500">m²</span>
              </div>
              
              {property.yearBuilt && (
                <div className="flex flex-col items-center rounded-lg border border-gray-200 p-4">
                  <BiCalendar className="mb-2 h-8 w-8 text-primary" />
                  <span className="text-xl font-semibold">{property.yearBuilt}</span>
                  <span className="text-sm text-gray-500">Año construcción</span>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <h3 className="mb-3 text-xl font-semibold">Descripción</h3>
              <p className="text-gray-700">{property.description}</p>
            </div>
          </div>
          
          {/* Property Features */}
          <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Características</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {property.amenities.map(amenity => (
                <div key={amenity.id} className="flex items-center">
                  <LuCheckCircle className="mr-2 h-5 w-5 text-secondary" />
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Map Placeholder */}
          <div className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold">Ubicación</h2>
            <div className="h-[400px] w-full rounded-lg bg-gray-200 flex justify-center items-center">
              <p className="text-gray-500">Mapa no disponible</p>
            </div>
            <p className="mt-4 text-gray-700">
              <LuMapPin className="mr-1 inline h-5 w-5 text-gray-500" />
              {property.address.street}, {property.address.city}, {property.address.state}, {property.address.zipCode}
            </p>
          </div>
        </div>
        
        <div>
          {/* Property Price Card */}
          <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-3xl font-bold text-primary">{formattedPrice}</span>
              {property.listingType === 'rent' && (
                <span className="text-gray-500">/mes</span>
              )}
            </div>
            
            {property.previousPrice && property.previousPrice > property.price && (
              <p className="mb-4 text-sm text-gray-500">
                <span className="line-through">{formatPrice(property.previousPrice)}</span>
                {' '}
                <span className="font-medium text-green-600">
                  {Math.round((1 - property.price / property.previousPrice) * 100)}% de descuento
                </span>
              </p>
            )}
            
            <div className="mb-6 space-y-2 text-sm text-gray-700">
              <p className="flex justify-between">
                <span>Tipo de propiedad:</span>
                <span className="font-medium capitalize">{property.propertyType}</span>
              </p>
              <p className="flex justify-between">
                <span>Tipo de listado:</span>
                <span className="font-medium">{property.listingType === 'sale' ? 'Venta' : 'Alquiler'}</span>
              </p>
              <p className="flex justify-between">
                <span>Fecha de publicación:</span>
                <span className="font-medium">{formatDate(property.createdAt)}</span>
              </p>
            </div>
            
            <Button className="w-full">Contactar agente</Button>
          </div>
          
          {/* Agent Card */}
          {agent && (
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Agente inmobiliario</h3>
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-16 w-16 overflow-hidden rounded-full">
                  <Image 
                    src={agent.profileImage || "https://via.placeholder.com/150"} 
                    alt={agent.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{agent.name}</h4>
                  <p className="text-sm text-gray-500">{agent.title}</p>
                </div>
              </div>
              <div className="mb-4 space-y-2">
                <p className="flex items-center text-sm">
                  <LuPhone className="mr-2 h-4 w-4 text-gray-500" />
                  {agent.phone}
                </p>
                <p className="flex items-center text-sm">
                  <LuMail className="mr-2 h-4 w-4 text-gray-500" />
                  <a href={`mailto:${agent.email}`} className="text-primary hover:underline">
                    {agent.email}
                  </a>
                </p>
              </div>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/agents/${agent.id}`}>
                  Ver perfil completo
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 