import Image from "next/image"

export function CircleInfo() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Qué es CIREXCO?</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-700 mb-6">
              El círculo de excelencia comercial CIREXCO es un test para evaluar competencias comerciales y de
              liderazgo. Está basado en un modelo de competencias que hemos desarrollado a través de los programas de
              Coaching Comercial que hemos implementado en más de 500 empresas.
            </p>
            <p className="text-gray-700 mb-6">
              CIREXCO es el vehículo que llevará a tu equipo hacia la realidad comercial que deseas.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg flex items-center mt-8">
              <div className="mr-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Cursor icon" width={80} height={80} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">¡Interactúa!</h3>
                <p className="text-gray-600">
                  Pasa el cursor sobre cada sección disponible de la rueda CIREXCO para descubrir más detalles.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="w-full max-w-md mx-auto">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="CIREXCO Circle Diagram"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
