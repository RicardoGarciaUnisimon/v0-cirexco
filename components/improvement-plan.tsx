import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ImprovementPlan() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Sales improvement plan"
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Un plan de mejora personalizado para cada vendedor.</h2>
            <p className="text-gray-700 mb-6">
              Sabemos cuáles son tus fortalezas y debilidades, por lo que podemos elaborar un plan de acción adaptado a
              tus necesidades. Con estrategias y recomendaciones específicas para mejorar cada una de tus habilidades.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">¡Hacer test!</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
