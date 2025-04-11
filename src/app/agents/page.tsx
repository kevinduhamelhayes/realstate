import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { LuMail, LuPhone, LuStar } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title: "Nuestros Agentes | InmoEstate",
  description: "Conoce a nuestro equipo de agentes inmobiliarios profesionales dedicados a ayudarte a encontrar tu hogar ideal.",
};

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Agentes</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Conoce a nuestro equipo de profesionales dedicados a ayudarte a encontrar la propiedad perfecta
        </p>
      </div>
      
      {/* Agents Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <div key={agent.id} className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="relative h-64 w-full">
              <Image
                src={agent.profileImage || "https://via.placeholder.com/400x400?text=Agent"}
                alt={agent.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="mb-1 text-xl font-bold">{agent.name}</h2>
              <p className="mb-3 text-sm text-gray-500">{agent.title}</p>
              
              {agent.rating && (
                <div className="mb-3 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <LuStar
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(agent.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {agent.rating} ({agent.reviewCount} reseñas)
                  </span>
                </div>
              )}
              
              <p className="mb-4 line-clamp-3 text-gray-700">
                {agent.bio}
              </p>
              
              <div className="mb-4 space-y-2">
                <div className="flex items-center gap-2">
                  <LuPhone className="h-4 w-4 text-gray-500" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="h-4 w-4 text-gray-500" />
                  <a href={`mailto:${agent.email}`} className="text-primary hover:underline">
                    {agent.email}
                  </a>
                </div>
              </div>
              
              {agent.specialties && agent.specialties.length > 0 && (
                <div className="mb-4">
                  <p className="mb-2 text-sm font-medium">Especialidades:</p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button asChild variant="default">
                  <Link href={`/agents/${agent.id}`}>
                    Ver perfil
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/contact?agent=${agent.id}`}>
                    Contactar
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Join Our Team */}
      <div className="mt-16 rounded-lg bg-primary-50 p-8 text-center lg:p-12">
        <h2 className="mb-4 text-2xl font-bold">¿Interesado en unirte a nuestro equipo?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-700">
          Estamos siempre buscando agentes talentosos y motivados para unirse a InmoEstate. Si te apasiona el sector inmobiliario y quieres desarrollar tu carrera con nosotros, nos encantaría conocerte.
        </p>
        <Button asChild size="lg">
          <Link href="/careers">
            Ver oportunidades
          </Link>
        </Button>
      </div>
    </div>
  );
} 