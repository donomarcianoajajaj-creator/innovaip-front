import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HeroSection() {
  return (
    <section
      className="w-full text-center"
      style={{ background: 'linear-gradient(180deg, #C5E8F7 0%, #A8D8F0 100%)' }}
    >
      <div className="w-full px-10 pt-16 pb-0">
        <h1 className="text-6xl lg:text-8xl font-extrabold text-[#1B3A6B] tracking-widest uppercase mb-5">
          Voces de los Andes
        </h1>
        <p className="text-2xl lg:text-3xl font-semibold text-[#2D5499] mb-5">
          Cada historia merece ser escuchada
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
          Un espacio seguro donde las experiencias de discriminación se transforman
          en obras teatrales para enseñar el respeto por la diversidad cultural.
        </p>
        <Link
          to="/compartir"
          className="inline-flex items-center gap-2 bg-[#E8821A] hover:bg-[#CF7015] text-white font-bold px-12 py-5 rounded-full text-xl no-underline transition-colors shadow-lg mb-12"
        >
          🤝 Compartir mi historia
        </Link>

        {/* Placeholder imagen niños */}
        <div className="w-full h-96 bg-white/40 border-2 border-dashed border-[#1B3A6B]/30 rounded-t-3xl flex items-center justify-center text-[#1B3A6B]/50 text-xl font-medium">
          [ Insertar imagen — ilustración de niños andinos ]
        </div>
      </div>
    </section>
  )
}

function ComoFuncionaSection() {
  const pasos = [
    {
      num: '1',
      icon: '✏️',
      titulo: 'Escribe tu historia',
      desc: 'Cuéntanos tu experiencia de discriminación relacionada con tu lugar de origen o tradiciones.',
    },
    {
      num: '2',
      icon: '👥',
      titulo: 'Nuestro equipo la revisa',
      desc: 'Moderadores y administradores leen tu historia de forma confidencial y protegen tu identidad.',
    },
    {
      num: '3',
      icon: '🎭',
      titulo: 'La convertimos en teatro',
      desc: 'Las historias pueden inspirar obras teatrales para educar a niños y promover el respeto.',
    },
  ]

  return (
    <section style={{ background: 'white', padding: '80px 40px', width: '100%' }}>
      <h2 className="text-4xl font-bold text-[#1B3A6B] text-center mb-12">
        ✨ ¿Cómo funciona? ✨
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
        {pasos.map((paso) => (
          <div
            key={paso.num}
            className="bg-amber-50 rounded-2xl p-8 text-center shadow-sm border border-amber-100"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-10 h-10 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {paso.num}
              </span>
              <span className="text-4xl">{paso.icon}</span>
            </div>
            <h3 className="font-bold text-[#1B3A6B] text-xl mb-3">{paso.titulo}</h3>
            <p className="text-gray-600 leading-relaxed">{paso.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function PrivacidadSection() {
  return (
    <section style={{ background: '#EBF8FF', padding: '60px 40px', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="w-52 h-52 shrink-0 bg-white/60 border-2 border-dashed border-[#1B3A6B]/30 rounded-2xl flex items-center justify-center text-[#1B3A6B]/40 text-sm font-medium text-center p-4">
          [ Insertar imagen — escudo ]
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold text-[#1B3A6B] mb-4">Tu privacidad es importante</h2>
          <p className="text-gray-600 mb-4 leading-relaxed text-lg">
            Solo los moderadores y administradores pueden leer tu historia.
            Nunca será publicada ni compartida con el público.
          </p>
          <p className="text-green-600 font-semibold">🔒 Tu identidad siempre estará protegida.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#1B3A6B] text-white py-12 px-10">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl shrink-0">
              🏔️
            </div>
            <div>
              <p className="font-bold uppercase tracking-wide">Igualdad Para Todos</p>
              <p className="text-sm text-blue-200 mb-2">Teatro Voces de los Andes</p>
              <p className="text-sm text-blue-200 leading-relaxed">
                Somos un proyecto que transforma experiencias en aprendizajes para
                construir una sociedad más respetuosa e inclusiva.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">Contacto</h4>
            <p className="text-blue-200 mb-2">✉️ hola@igualdadparatodos.org</p>
            <p className="text-blue-200">📍 Los Andes</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wide">Síguenos</h4>
            <div className="flex gap-3">
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors font-bold">f</span>
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">📷</span>
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">✉️</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#152E54] text-blue-300 text-sm text-center py-4 w-full">
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
