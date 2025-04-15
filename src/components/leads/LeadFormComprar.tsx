import { useState } from "react";

export default function LeadFormComprar() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    tipoPropiedad: "",
    zonas: "",
    presupuesto: "",
    habitaciones: "",
    banos: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica
    if (!form.nombre || !form.apellido || !form.email || !form.telefono || !form.tipoPropiedad || !form.zonas) {
      setError("Por favor completa los campos obligatorios.");
      return;
    }
    setError("");
    // TODO: Integrar con Firebase
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-green-50 text-green-800 text-center">
        <h2 className="text-2xl font-bold mb-2">¡Gracias!</h2>
        <p>Hemos recibido tu solicitud. Nos pondremos en contacto a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-white shadow">
      <h1 className="text-2xl font-bold mb-6 text-primary">Formulario: Me interesa comprar</h1>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nombre *</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Apellido *</label>
        <input name="apellido" value={form.apellido} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email *</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Teléfono *</label>
        <input name="telefono" value={form.telefono} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Tipo de propiedad *</label>
        <select name="tipoPropiedad" value={form.tipoPropiedad} onChange={handleChange} className="w-full border rounded px-3 py-2" required>
          <option value="">Selecciona una opción</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="terreno">Terreno</option>
          <option value="ph">PH</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Zona(s) de interés *</label>
        <input name="zonas" value={form.zonas} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Rango de presupuesto (opcional)</label>
        <input name="presupuesto" value={form.presupuesto} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Habitaciones (opcional)</label>
          <input name="habitaciones" value={form.habitaciones} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Baños (opcional)</label>
          <input name="banos" value={form.banos} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
      </div>
      <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-700 transition">Enviar</button>
    </form>
  );
} 