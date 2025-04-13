import Image from "next/image"
import { Button } from "@/components/ui/button"

export function TrainingSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entrenamientos exclusivos para potenciar tus ventas.
            </h2>
            <p className="text-gray-700 mb-6">
              Saber en qué mejorar es el primer paso, pero tener la guía es lo que marca la diferencia. Según tu
              evaluación, te entregamos recursos y pasos a seguir para potenciar tus fortalezas y potenciar tus
              habilidades comerciales.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">¡Ponte test!</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Sales training materials"
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
