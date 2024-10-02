import Head from 'next/head';
import Image from 'next/image';

import Servicios from './servicios/page';
import { companyName } from './utilities/constants';


export default function Home() {
  return (
    <div>
      <Head>
        <title>${companyName}</title>
        <meta name="description" content="Brujería positiva para ayudar a las personas con fines nobles y propósitos de crecimiento personal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen text-center p-4">
        <Image src="/images/hero.jpg" alt="Logo" className="object-cover w-full h-full" width={1000} height={500} />
        <h1 className="text-4xl font-bold mb-4">Bienvenidos a {companyName} ✨</h1>
        <p className="text-gray-600 mb-2">Ofrecemos servicios esotéricos para ayudarte con propósitos positivos y de crecimiento personal.</p>
        <p className="text-gray-600">Consulta nuestros servicios o contáctanos por WhatsApp para más información.</p>

        <Servicios />
      </main>
    </div>
  );
}
