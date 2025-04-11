import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { LuMail, LuPhone, LuStar, LuMapPin, LuBriefcase, LuCalendar, LuFileText } from "react-icons/lu";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { agents } from "@/data/agents";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/property/PropertyCard";
import { formatDate } from "@/lib/format";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const agent = agents.find(a => a.id === params.id);
  
  if (!agent) {
    return {
      title: "Agente no encontrado | InmoEstate",
      description: "El agente que estás buscando no existe o ha sido eliminado.",
    };
  }
  
  return {
    title: `${agent.name} | Agente InmoEstate`,
    description: agent.bio?.substring(0, 160) || `Conoce a ${agent.name}, agente inmobiliario profesional de InmoEstate.`,
  };
}

export default function AgentDetailPage({ params }: Props) {
  const agent = agents.find(a => a.id === params.id);
  
  if (!agent) {
    notFound();
  }
  
  // Get properties listed by this agent
  const agentProperties = properties.filter(property => property.agentId === agent.id);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <nav className="flex text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Inicio
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/agents" className="text-gray-500 hover:text-primary">
            Agentes
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{agent.name}</span>
        </nav>
      </div>
      
      {/* Agent Profile */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
              <Image 
                src={agent.profileImage || "https://via.placeholder.com/400x400?text=Agent"} 
                alt={agent.name} 
                width={200} 
                height={200} 
                className="h-full w-full object-cover" 
              />
            </div>
            
            <h1 className="mb-1 text-center text-2xl font-bold">{agent.name}</h1>
            <p className="mb-4 text-center text-sm text-gray-500">{agent.title}</p>
            
            {agent.rating && (
              <div className="mb-4 flex items-center justify-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <LuStar
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(agent.rating!) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {agent.rating} ({agent.reviewCount} reseñas)
                </span>
              </div>
            )}
            
            <div className="my-6 space-y-4">
              <div className="flex items-start gap-3">
                <LuPhone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Teléfono</p>
                  <p>{agent.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <LuMail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a href={`mailto:${agent.email}`} className="text-primary hover:underline">
                    {agent.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <LuBriefcase className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Especialidades</p>
                  <p>{agent.specialties?.join(", ") || "General"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <LuCalendar className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Se unió</p>
                  <p>{formatDate(agent.createdAt)}</p>
                </div>
              </div>
            </div>
            
            {agent.socialMedia && Object.values(agent.socialMedia).some(value => value) && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium text-gray-500">Redes sociales</p>
                <div className="flex justify-center space-x-4">
                  {agent.socialMedia.facebook && (
                    <a href={agent.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <FaFacebook className="h-6 w-6" />
                    </a>
                  )}
                  {agent.socialMedia.twitter && (
                    <a href={agent.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                      <FaTwitter className="h-6 w-6" />
                    </a>
                  )}
                  {agent.socialMedia.instagram && (
                    <a href={agent.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  )}
                  {agent.socialMedia.linkedin && (
                    <a href={agent.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            )}
            
            <div className="mt-6">
              <Button asChild className="w-full">
                <Link href={`/contact?agent=${agent.id}`}>
                  Contactar
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          {/* About the Agent */}
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Sobre {agent.name}</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">{agent.bio}</p>
              <p>
                Con amplia experiencia en el mercado inmobiliario, {agent.name} se ha establecido como un agente de confianza dedicado a encontrar la propiedad perfecta para cada cliente. Su profundo conocimiento del mercado local y su compromiso con el servicio al cliente garantizan una experiencia inmobiliaria excepcional.
              </p>
            </div>
          </div>
          
          {/* Agent Listings */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">Propiedades de {agent.name}</h2>
            
            {agentProperties.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {agentProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-6 shadow-md text-center">
                <LuFileText className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="mb-2 text-lg font-semibold">No hay propiedades disponibles</h3>
                <p className="text-gray-600">
                  Actualmente {agent.name} no tiene propiedades listadas. Por favor, vuelva a consultar más tarde.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 