import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav style={{ background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <img src={logoImg} alt="Logo" style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ lineHeight: '1.2' }}>
            <p style={{ fontWeight: 700, color: '#1B3A6B', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Igualdad Para Todos</p>
            <p style={{ fontSize: '10px', color: '#6b7280', margin: 0 }}>Teatro Voces de los Andes</p>
          </div>
        </Link>

        {/* Links — ocultos en móvil pequeño */}
        <div className="hidden sm:flex" style={{ gap: '4px' }}>
          <Link
            to="/"
            style={{
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              background: pathname === '/' ? '#EBF8FF' : 'transparent',
              color: '#1B3A6B',
            }}
          >
            Inicio
          </Link>
          <Link
            to="/compartir"
            style={{
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: pathname === '/compartir' ? 600 : 400,
              textDecoration: 'none',
              color: '#1B3A6B',
            }}
          >
            Compartir Historia
          </Link>
        </div>

        {/* Iniciar sesión */}
        <Link
          to="/moderador/login"
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: '#1B3A6B', color: 'white',
            padding: '8px 16px', borderRadius: '999px',
            fontSize: '13px', fontWeight: 600,
            textDecoration: 'none', flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          👤 <span className="hidden sm:inline">Iniciar sesión</span>
          <span className="sm:hidden">Entrar</span>
        </Link>

      </div>
    </nav>
  )
}
