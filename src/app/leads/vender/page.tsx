import LeadFormVender from "@/components/leads/LeadFormVender";

export default function VenderLeadPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">Vender una propiedad</h1>
      <p className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
        Completa el siguiente formulario y nos pondremos en contacto contigo para ayudarte 
        a vender tu propiedad de la manera más eficiente y al mejor precio.
      </p>
      <LeadFormVender />
    </div>
  );
} 