import Image from "next/image"

export function Partners() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Partners</h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <Image src="/placeholder.svg?height=60&width=120" alt="CIF Partner" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Coaching Partner" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Partner 3" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Partner 4" width={120} height={60} />
        </div>
      </div>
    </section>
  )
}
