"use client";

import Image from "next/image";
import SearchProperties from "@/components/property/SearchProperties";

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
        <SearchProperties className="w-full max-w-4xl" />
      </div>
    </section>
  );
} 