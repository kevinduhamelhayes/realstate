import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-3xl font-semibold">Página no encontrada</h2>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">
            Volver al inicio
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/properties">
            Ver propiedades
          </Link>
        </Button>
      </div>
    </div>
  );
} 