import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="w-full bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Cirexco Logo"
              width={120}
              height={40}
              className="h-10"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Talento comercial ▼
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Planes ▼
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Partners ▼
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Resultados
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Mi espacio
          </Link>
          <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
            Recursos ▼
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
            ¡Ponte al test!
          </Button>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Registrar
          </Button>
        </div>
      </div>
    </header>
  )
}
