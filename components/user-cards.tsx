import { Card, CardContent } from "@/components/ui/card"

export function UserCards() {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-purple-300 to-purple-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-500 text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <path
                    d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 21C6 18.7909 8.68629 17 12 17C15.3137 17 18 18.7909 18 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Coaches</h3>
              <p className="text-sm">
                Para que entiendas cómo potenciar a tu equipo y mejorar el desempeño comercial a través de herramientas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-red-500 text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Líderes</h3>
              <p className="text-sm">
                Te ayudamos a entender cómo liderar mejor a tu equipo y obtener el máximo potencial de cada uno de tus
                equipos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-green-500 text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 12L12 20" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 8L12 12L19 8" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Vendedores</h3>
              <p className="text-sm">
                Te mostramos tus oportunidades de mejora para que puedas convertirte en un vendedor de alto rendimiento.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-amber-500 text-white overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <path
                    d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M6 21C6 18.7909 8.68629 17 12 17C15.3137 17 18 18.7909 18 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Invitados</h3>
              <p className="text-sm">
                Para que te hagas tu diagnóstico y conozcas tus fortalezas y áreas de mejora como vendedor.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
