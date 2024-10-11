import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Servicios from './servicios/page';
import { companyName } from './utilities/constants';
import { wpp } from './utilities/constants';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        <title>{companyName}</title>
        <meta name="description" content="Brujería positiva para ayudar a las personas con fines nobles y propósitos de crecimiento personal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow flex flex-col items-center text-center p-4">
        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src="/images/9.jpeg"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-purple-300">
              Bienvenidos a {companyName}
            </h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 mb-4">
            Ofrecemos servicios esotéricos para ayudarte con propósitos positivos y de crecimiento personal.
          </p>
          <p className="text-gray-300 mb-8">
            Consulta nuestros servicios o contáctanos por WhatsApp para más información.
          </p>
        </div>

        <Servicios />
      </main>

      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">{companyName}</h3>
              <p className="text-sm">Iluminando tu camino espiritual desde 2010</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-300">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/servicios" className="hover:text-purple-300 transition-colors">Servicios</Link></li>
                {/* <li><Link href="/about" className="hover:text-purple-300 transition-colors">Sobre Nosotros</Link></li> */}
                <li><Link href={`https://wa.me/${wpp}`} className="hover:text-purple-300 transition-colors">Whatsapp</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {companyName}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
