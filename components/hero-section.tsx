import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full bg-purple-700 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">¿Qué tan bueno eres realmente vendiendo?</h1>
          <p className="text-lg mb-6">
            Los mejores vendedores no nacen, se entrenan. El problema a superar es real: saber vendedor y cómo puedes
            mejorar.
          </p>
          <p className="text-lg mb-8">
            Convierte tus debilidades en oportunidades y lleva tus ventas al siguiente nivel.
          </p>
          <Button className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-8 py-2">¡Ponte al test!</Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
    </section>
  )
}
