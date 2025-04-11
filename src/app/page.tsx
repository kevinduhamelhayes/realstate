import Image from "next/image";
import Link from "next/link";
import { LuBuilding, LuMapPin, LuUsers } from "react-icons/lu";
import { HiHome } from "react-icons/hi";

import Hero from "@/components/layout/Hero";
import PropertyCard from "@/components/property/PropertyCard";
import { Button } from "@/components/ui/button";
import { properties } from "@/data/properties";
import { agents } from "@/data/agents";

export default function Home() {
  // Get featured properties for the homepage
  const featuredProperties = properties.filter(property => property.featured).slice(0, 3);
  
  // Get featured agents for the homepage
  const featuredAgents = agents.slice(0, 3);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Properties Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Propiedades destacadas</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explora nuestras propiedades más exclusivas y encuentra tu próximo hogar de ensueño.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/properties">
                Ver todas las propiedades
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">¿Por qué elegirnos?</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Nos dedicamos a encontrar la propiedad perfecta para cada cliente con un servicio personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
                <HiHome className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Amplia selección</h3>
              <p className="text-gray-600">Ofrecemos una gran variedad de propiedades para todos los presupuestos y necesidades.</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuUsers className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Agentes expertos</h3>
              <p className="text-gray-600">Nuestro equipo de profesionales está altamente capacitado para asesorarte en todo el proceso.</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuMapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Mejores ubicaciones</h3>
              <p className="text-gray-600">Propiedades en las zonas más demandadas y con excelente potencial de inversión.</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuBuilding className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Inversiones seguras</h3>
              <p className="text-gray-600">Te ayudamos a encontrar propiedades con buen retorno de inversión y seguridad legal.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Agents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Agentes</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Profesionales dedicados a encontrar la propiedad perfecta para ti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAgents.map(agent => (
              <div key={agent.id} className="rounded-lg bg-white p-6 shadow-md text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image 
                    src={agent.profileImage || "https://via.placeholder.com/150"} 
                    alt={agent.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold">{agent.name}</h3>
                <p className="mb-3 text-sm text-gray-500">{agent.title}</p>
                <p className="mb-4 text-gray-600">{agent.bio?.substring(0, 120)}...</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/agents/${agent.id}`}>
                    Ver perfil
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/agents">
                Conoce a todos nuestros agentes
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">¿Listo para encontrar tu hogar ideal?</h2>
          <p className="mx-auto mb-8 max-w-2xl">
            Ponte en contacto con nosotros hoy mismo y déjanos ayudarte a encontrar la propiedad perfecta para ti.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/properties">
                Explorar propiedades
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Contactar ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
