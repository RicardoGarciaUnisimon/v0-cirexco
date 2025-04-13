import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DiagnosticSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un diagnóstico preciso de tus habilidades comerciales.
            </h2>
            <p className="text-gray-700 mb-6">
              Te hacemos preguntas específicas, sobre tus habilidades comerciales, para que puedas participar
              constructivamente en ventas, liderazgo persuasivo, negociación, cierre de ventas, manejo de objeciones,
              comunicación efectiva y más.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">¡Ponte test!</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team of sales professionals"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
