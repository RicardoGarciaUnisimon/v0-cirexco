import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Social media marketing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Consultoría</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Certificación y asesorías</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Social media marketing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Consultoría</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Certificación y asesorías</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Social media marketing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Consultoría</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-purple-600 text-sm">Certificación y asesorías</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-purple-600 font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +57 300 4558567
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@cirexco.com
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c\
