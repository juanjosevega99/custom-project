import Head from 'next/head';
import Image from 'next/image';

import Servicios from './servicios/page';
import { companyName } from './utilities/constants';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Bienvenidos a {companyName}
            </h1>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            Ofrecemos servicios esotéricos para ayudarte con propósitos positivos y de crecimiento personal.
          </p>
          <p className="text-gray-600 mb-8">
            Consulta nuestros servicios o contáctanos por WhatsApp para más información.
          </p>
        </div>

        <Servicios />
      </main>
    </div>
  );
}
