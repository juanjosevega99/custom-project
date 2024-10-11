import Link from 'next/link'
import { companyName, wpp } from '../utilities/constants';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="text-xl font-bold">
        <Link href="/">{companyName}</Link>
      </div>
      <ul className="flex space-x-4">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li>
          <Link href={`https://wa.me/${wpp}`} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </Link>
        </li>
      </ul>
    </nav>
  )
}
