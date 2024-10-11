import Link from 'next/link'
import { companyName, wpp } from '../utilities/constants';

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700 text-gray-100">
      <div className="text-xm font-bold text-purple-300">
        <Link href="/" className="hover:text-purple-400 transition-colors">{companyName}</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-purple-300 transition-colors">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/servicios" className="hover:text-purple-300 transition-colors">
            Servicios
          </Link>
        </li>
        <li>
          <Link 
            href={`https://wa.me/${wpp}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full transition-colors"
          >
            WhatsApp
          </Link>
        </li>
      </ul>
    </nav>
  )
}
