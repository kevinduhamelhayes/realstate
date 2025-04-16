import { Metadata } from "next";
import { LuMapPin, LuPhone, LuMail, LuClock } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contacto | InmoEstate",
  description: "Ponte en contacto con nosotros para recibir asesoramiento inmobiliario personalizado o para cualquier consulta que tengas.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">Contacto</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Estamos aquí para ayudarte. Ponte en contacto con nosotros para recibir asesoramiento inmobiliario personalizado.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Envíanos un mensaje</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                  placeholder="+XX XXXX XXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="property-inquiry">Consulta sobre una propiedad</option>
                  <option value="sell-property">Vender una propiedad</option>
                  <option value="rent-property">Alquilar una propiedad</option>
                  <option value="valuation">Tasación</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                Acepto la <a href="#" className="text-primary hover:underline">política de privacidad</a>
              </label>
            </div>
            
            <Button type="submit" className="w-full">Enviar mensaje</Button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Información de contacto</h2>
          
          <div className="mb-8 space-y-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuMapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Dirección</h3>
                <p className="text-gray-700">Av. Corrientes 1234, Buenos Aires, Argentina</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuPhone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Teléfono</h3>
                <p className="text-gray-700">+54 11 1234-5678</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuMail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Correo electrónico</h3>
                <p className="text-gray-700">info@inmoestate.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                <LuClock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Horario de atención</h3>
                <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Sábados: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-700">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="h-[300px] w-full rounded-lg bg-gray-200 flex justify-center items-center">
            <p className="text-gray-500">Mapa no disponible</p>
          </div>
          <p className="mt-2 text-sm text-gray-500">Visítanos en nuestra oficina central o concerta una cita previa.</p>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Preguntas frecuentes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">¿Cómo puedo vender mi propiedad con InmoEstate?</h3>
            <p className="text-gray-700">
              Contacta con nosotros a través del formulario o llámanos. Un asesor te visitará para realizar una tasación gratuita y establecer una estrategia de venta personalizada.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">¿Cuánto tiempo lleva vender una propiedad?</h3>
            <p className="text-gray-700">
              El tiempo varía según el tipo de propiedad, ubicación y precio. En promedio, nuestras propiedades se venden en 45-60 días gracias a nuestra amplia red de clientes y estrategias de marketing.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">¿Qué documentos necesito para vender mi propiedad?</h3>
            <p className="text-gray-700">
              Generalmente necesitarás el título de propiedad, la información catastral, certificados de deudas, y documentación personal. Nuestro equipo te guiará durante todo el proceso.
            </p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">¿Ofrecen financiamiento para la compra?</h3>
            <p className="text-gray-700">
              Trabajamos con varias instituciones financieras y podemos asesorarte sobre las mejores opciones de crédito hipotecario disponibles según tu situación particular.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 