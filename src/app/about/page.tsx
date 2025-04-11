import Image from "next/image";
import { Metadata } from "next";
import { LuCheckCircle } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Sobre Nosotros | InmoEstate",
  description: "Conoce más sobre InmoEstate, tu inmobiliaria de confianza con años de experiencia en el mercado inmobiliario.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Sobre Nosotros</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Conoce más sobre InmoEstate, tu inmobiliaria de confianza con años de experiencia en el mercado inmobiliario.
        </p>
      </div>
      
      {/* About Us Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Nuestra Historia</h2>
          <p className="mb-4 text-gray-700">
            InmoEstate nació en 2010 con la visión de transformar la forma en que las personas compran, venden y alquilan propiedades. Desde entonces, nos hemos convertido en una de las inmobiliarias más reconocidas del país, con un enfoque centrado en el cliente y una pasión por conectar a las personas con su hogar ideal.
          </p>
          <p className="mb-4 text-gray-700">
            A lo largo de los años, hemos ayudado a miles de familias a encontrar el lugar perfecto para llamar hogar, y a inversores a desarrollar proyectos exitosos. Nuestra experiencia y conocimiento del mercado nos permiten ofrecer un servicio personalizado y de alta calidad.
          </p>
          <p className="text-gray-700">
            Hoy, InmoEstate cuenta con un equipo de profesionales altamente capacitados y una cartera diversa de propiedades en las mejores ubicaciones. Seguimos comprometidos con nuestra misión original: hacer que cada transacción inmobiliaria sea una experiencia positiva y satisfactoria.
          </p>
        </div>
        
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Equipo de InmoEstate"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Our Values */}
      <div className="my-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Nuestros Valores</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-primary">Integridad</h3>
            <p className="text-gray-700">
              Actuamos con honestidad y transparencia en cada operación, priorizando siempre los intereses de nuestros clientes.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-primary">Excelencia</h3>
            <p className="text-gray-700">
              Nos esforzamos por superar las expectativas, ofreciendo un servicio de la más alta calidad en todos los aspectos de nuestro trabajo.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-primary">Compromiso</h3>
            <p className="text-gray-700">
              Asumimos cada proyecto como propio, dedicando todo nuestro conocimiento y pasión para lograr los objetivos de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <LuCheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Experiencia Comprobada</h3>
              <p className="text-gray-700">
                Más de 10 años en el mercado inmobiliario y miles de operaciones exitosas avalan nuestra trayectoria.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <LuCheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Equipo Profesional</h3>
              <p className="text-gray-700">
                Contamos con agentes certificados y especialistas en distintas áreas del mercado inmobiliario.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <LuCheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Servicio Personalizado</h3>
              <p className="text-gray-700">
                Adaptamos nuestro enfoque a las necesidades específicas de cada cliente para garantizar su satisfacción.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              <LuCheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Tecnología Avanzada</h3>
              <p className="text-gray-700">
                Utilizamos las herramientas más innovadoras para ofrecer un servicio eficiente y de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div>
        <h2 className="mb-8 text-center text-2xl font-bold">Nuestro Equipo Directivo</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md text-center">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image 
                src="https://randomuser.me/api/portraits/men/76.jpg" 
                alt="Carlos Rodríguez" 
                width={128} 
                height={128} 
                className="h-full w-full object-cover" 
              />
            </div>
            <h3 className="mb-1 text-xl font-semibold">Carlos Rodríguez</h3>
            <p className="mb-3 text-sm text-gray-500">Director General</p>
            <p className="text-gray-700">
              Con más de 20 años de experiencia en el sector inmobiliario, Carlos lidera nuestra empresa con visión y compromiso.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md text-center">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="Ana Martínez" 
                width={128} 
                height={128} 
                className="h-full w-full object-cover" 
              />
            </div>
            <h3 className="mb-1 text-xl font-semibold">Ana Martínez</h3>
            <p className="mb-3 text-sm text-gray-500">Directora Comercial</p>
            <p className="text-gray-700">
              Especialista en estrategias de venta y desarrollo de mercado, Ana coordina nuestro equipo de agentes con excelencia.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow-md text-center">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
              <Image 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Javier López" 
                width={128} 
                height={128} 
                className="h-full w-full object-cover" 
              />
            </div>
            <h3 className="mb-1 text-xl font-semibold">Javier López</h3>
            <p className="mb-3 text-sm text-gray-500">Director de Operaciones</p>
            <p className="text-gray-700">
              Encargado de asegurar que cada proceso se desarrolle con eficiencia y calidad, garantizando la satisfacción del cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 