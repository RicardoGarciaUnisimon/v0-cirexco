import Image from "next/image"

export function SuccessCases() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Casos de éxito</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Congreso Coaching Comercial Perú, 2022"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-sm text-gray-600">Congreso Coaching Comercial Perú, 2022</p>
          </div>

          <div className="text-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Congreso Coaching Comercial Chile, 2022"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-sm text-gray-600">Congreso Coaching Comercial Chile, 2022</p>
          </div>

          <div className="text-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="4to Congreso Coaching Comercial Ecuador, 2024"
              width={400}
              height={300}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <p className="text-sm text-gray-600">4to Congreso Coaching Comercial Ecuador, 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
