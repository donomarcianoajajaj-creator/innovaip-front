import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HeroSection() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #C5E8F7 0%, #A8D8F0 100%)', width: '100%', textAlign: 'center' }}>
      <div style={{ width: '100%', padding: '48px 20px 0' }}>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl" style={{ fontWeight: 900, color: '#1B3A6B', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Voces de los Andes
        </h1>
        <p className="text-lg sm:text-2xl" style={{ fontWeight: 600, color: '#2D5499', marginBottom: '16px' }}>
          Cada historia merece ser escuchada
        </p>
        <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto 32px', fontSize: '16px', lineHeight: 1.7 }}>
          Un espacio seguro donde las experiencias de discriminación se transforman
          en obras teatrales para enseñar el respeto por la diversidad cultural.
        </p>
        <Link
          to="/compartir"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#E8821A', color: 'white',
            padding: '14px 32px', borderRadius: '999px',
            fontSize: '16px', fontWeight: 700,
            textDecoration: 'none', marginBottom: '40px',
            boxShadow: '0 4px 12px rgba(232,130,26,0.4)',
          }}
        >
          🤝 Compartir mi historia
        </Link>

        <div style={{
          width: '100%', height: '280px',
          background: 'rgba(255,255,255,0.4)',
          border: '2px dashed rgba(27,58,107,0.3)',
          borderRadius: '24px 24px 0 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(27,58,107,0.4)', fontSize: '16px', fontWeight: 500,
        }}>
          [ Insertar imagen — ilustración de niños andinos ]
        </div>
      </div>
    </section>
  )
}

function ComoFuncionaSection() {
  const pasos = [
    { num: '1', icon: '✏️', titulo: 'Escribe tu historia', desc: 'Cuéntanos tu experiencia de discriminación relacionada con tu lugar de origen o tradiciones.' },
    { num: '2', icon: '👥', titulo: 'Nuestro equipo la revisa', desc: 'Moderadores y administradores leen tu historia de forma confidencial y protegen tu identidad.' },
    { num: '3', icon: '🎭', titulo: 'La convertimos en teatro', desc: 'Las historias pueden inspirar obras teatrales para educar a niños y promover el respeto.' },
  ]

  return (
    <section style={{ background: 'white', padding: '64px 20px', width: '100%' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1B3A6B', textAlign: 'center', marginBottom: '40px' }}>
        ✨ ¿Cómo funciona? ✨
      </h2>
      {/* Grid responsive con Tailwind */}
      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {pasos.map((paso) => (
          <div key={paso.num} style={{ background: '#FFFBEB', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #FEF3C7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ width: '36px', height: '36px', background: '#1B3A6B', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
                {paso.num}
              </span>
              <span style={{ fontSize: '32px' }}>{paso.icon}</span>
            </div>
            <h3 style={{ fontWeight: 700, color: '#1B3A6B', fontSize: '17px', marginBottom: '10px' }}>{paso.titulo}</h3>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.6 }}>{paso.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function PrivacidadSection() {
  return (
    <section style={{ background: '#EBF8FF', padding: '56px 20px', width: '100%' }}>
      <div className="flex flex-col sm:flex-row" style={{ alignItems: 'center', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          width: '140px', height: '140px', flexShrink: 0,
          background: 'rgba(255,255,255,0.6)',
          border: '2px dashed rgba(27,58,107,0.3)',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'rgba(27,58,107,0.4)', fontSize: '12px', textAlign: 'center', padding: '12px',
        }}>
          [ Insertar imagen — escudo ]
        </div>
        <div className="text-center sm:text-left">
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1B3A6B', marginBottom: '12px' }}>Tu privacidad es importante</h2>
          <p style={{ color: '#4b5563', lineHeight: 1.7, marginBottom: '12px' }}>
            Solo los moderadores y administradores pueden leer tu historia.
            Nunca será publicada ni compartida con el público.
          </p>
          <p style={{ color: '#16a34a', fontWeight: 600 }}>🔒 Tu identidad siempre estará protegida.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ width: '100%' }}>
      <div style={{ background: '#1B3A6B', color: 'white', padding: '48px 20px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>🏔️</div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>Igualdad Para Todos</p>
              <p style={{ fontSize: '12px', color: '#93c5fd', marginBottom: '8px' }}>Teatro Voces de los Andes</p>
              <p style={{ fontSize: '12px', color: '#93c5fd', lineHeight: 1.6 }}>Somos un proyecto que transforma experiencias en aprendizajes para construir una sociedad más respetuosa e inclusiva.</p>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Contacto</h4>
            <p style={{ color: '#93c5fd', fontSize: '14px', marginBottom: '6px' }}>✉️ hola@igualdadparatodos.org</p>
            <p style={{ color: '#93c5fd', fontSize: '14px' }}>📍 Los Andes</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['f', '📷', '✉️'].map((icon, i) => (
                <span key={i} style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 700 }}>{icon}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#152E54', color: '#93c5fd', fontSize: '12px', textAlign: 'center', padding: '12px 20px' }}>
        © 2026 Igualdad Para Todos – Teatro Voces de los Andes. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default function InicioPage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, width: '100%' }}>
        <HeroSection />
        <ComoFuncionaSection />
        <PrivacidadSection />
      </main>
      <Footer />
    </div>
  )
}
