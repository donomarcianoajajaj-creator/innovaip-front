import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto px-8 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 rounded-full bg-[#1B3A6B] flex items-center justify-center text-white text-xl font-bold">
            🏔️
          </div>
          <div className="leading-tight">
            <p className="font-bold text-[#1B3A6B] text-sm uppercase tracking-wide">Igualdad Para Todos</p>
            <p className="text-xs text-gray-500">Teatro Voces de los Andes</p>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`px-4 py-2 rounded-full text-sm font-medium no-underline transition-colors
              ${pathname === '/' ? 'bg-blue-100 text-[#1B3A6B]' : 'text-gray-600 hover:text-[#1B3A6B]'}`}
          >
            Inicio
          </Link>
          <Link
            to="/compartir"
            className={`px-4 py-2 text-sm font-medium no-underline transition-colors
              ${pathname === '/compartir' ? 'text-[#1B3A6B] font-semibold' : 'text-gray-600 hover:text-[#1B3A6B]'}`}
          >
            Compartir Historia
          </Link>
        </div>

        {/* Iniciar sesión */}
        <Link
          to="/moderador/login"
          className="flex items-center gap-2 bg-[#1B3A6B] text-white px-5 py-2 rounded-full text-sm font-medium no-underline hover:bg-[#2D5499] transition-colors"
        >
          <span>👤</span>
          Iniciar sesión
        </Link>

      </div>
    </nav>
  )
}
