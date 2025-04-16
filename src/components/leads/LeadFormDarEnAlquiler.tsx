"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function LeadFormDarEnAlquiler() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    tipoPropiedad: "",
    metros: "",
    habitaciones: "",
    banos: "",
    precioAlquiler: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.apellido || !form.email || !form.telefono || !form.direccion || !form.tipoPropiedad || !form.metros || !form.habitaciones || !form.banos || !form.precioAlquiler) {
      setError("Por favor completa los campos obligatorios.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...form,
        tipo: "dar-en-alquiler",
        createdAt: serverTimestamp(),
      });
      setEnviado(true);
    } catch (err) {
      setError("Ocurrió un error al enviar el formulario. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (enviado) {
    return (
      <div className="max-w-md mx-auto mt-10 p-8 rounded-2xl bg-green-100 text-green-900 text-center shadow-lg flex flex-col items-center gap-4">
        <svg className="h-12 w-12 text-green-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        <h2 className="text-2xl font-bold">¡Gracias por tu interés!</h2>
        <p className="text-base">Hemos recibido tu solicitud y nos pondremos en contacto a la brevedad.</p>
        <a href="/" className="mt-2 inline-block rounded bg-primary px-4 py-2 text-white font-semibold shadow hover:bg-primary-700 transition">Volver al inicio</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 rounded-lg bg-white shadow">
      <h1 className="text-2xl font-bold mb-6 text-primary">Formulario: Quiero alquilar mi propiedad</h1>
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
        <label className="block mb-1 font-medium">Dirección de la propiedad *</label>
        <input name="direccion" value={form.direccion} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
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
        <label className="block mb-1 font-medium">M² aproximados *</label>
        <input name="metros" value={form.metros} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Habitaciones *</label>
          <input name="habitaciones" value={form.habitaciones} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Baños *</label>
          <input name="banos" value={form.banos} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Precio de alquiler mensual deseado *</label>
        <input name="precioAlquiler" value={form.precioAlquiler} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
      </div>
      <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-700 transition" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  );
} 