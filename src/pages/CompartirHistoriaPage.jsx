import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { enviarHistoria } from '../services/api'

const camposVacios = {
  nombre: '',
  titulo: '',
  lugar_origen: '',
  tradicion: '',
  historia: '',
  personajes: '',
}

export default function CompartirHistoriaPage() {
  const [form, setForm] = useState(camposVacios)
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setEstado('enviando')
    setErrorMsg('')
    try {
      await enviarHistoria(form)
      setEstado('ok')
      setForm(camposVacios)
    } catch (err) {
      setEstado('error')
      setErrorMsg('Hubo un problema al enviar tu historia. Intentá de nuevo.')
    }
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="flex-1 w-full py-14 px-6" style={{ background: 'linear-gradient(180deg, #EBF8FF 0%, #ffffff 100%)' }}>
        <div className="w-full max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-[#1B3A6B] mb-2">Comparte tu historia</h1>
            <p className="text-gray-500 text-lg">Tu voz puede inspirar un cambio.</p>
          </div>

          {/* Éxito */}
          {estado === 'ok' && (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center mb-8">
              <p className="text-4xl mb-3">🎭</p>
              <h2 className="text-2xl font-bold text-green-700 mb-2">¡Historia enviada!</h2>
              <p className="text-green-600 mb-6">Gracias por compartirla. Nuestro equipo la revisará pronto.</p>
              <Link
                to="/"
                className="inline-block bg-[#1B3A6B] text-white px-8 py-3 rounded-full font-semibold no-underline hover:bg-[#2D5499] transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          )}

          {/* Formulario */}
          {estado !== 'ok' && (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-6">

              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  Tu nombre <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Podés dejarlo en blanco si preferís el anonimato"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors"
                />
              </div>

              {/* Título */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  Título de tu historia <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="titulo"
                  value={form.titulo}
                  onChange={handleChange}
                  placeholder="Escribe un título breve"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors"
                />
              </div>

              {/* Lugar de origen */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  ¿De dónde eres? <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="lugar_origen"
                  value={form.lugar_origen}
                  onChange={handleChange}
                  placeholder="Ej. Cusco, Puno, Ayacucho..."
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors"
                />
              </div>

              {/* Tradición */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  ¿Qué tradición o costumbre quieres compartir? <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="tradicion"
                  value={form.tradicion}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu tradición o costumbre"
                  required
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors resize-none"
                />
              </div>

              {/* Historia */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  ¿Qué experiencia de discriminación viviste? <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="historia"
                  value={form.historia}
                  onChange={handleChange}
                  placeholder="Comparte tu experiencia..."
                  required
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors resize-none"
                />
              </div>

              {/* Personajes */}
              <div>
                <label className="block text-sm font-semibold text-[#1B3A6B] mb-1">
                  Personajes de la historia <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="personajes"
                  value={form.personajes}
                  onChange={handleChange}
                  placeholder="Ej. maestra, niño, vendedor (1-2 palabras cada uno)"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-[#1B3A6B] transition-colors"
                />
                <p className="text-xs text-gray-400 mt-1">Los usaremos para crear los muñecos del teatro.</p>
              </div>

              {/* Error */}
              {estado === 'error' && (
                <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={estado === 'enviando'}
                className="w-full bg-[#E8821A] hover:bg-[#CF7015] disabled:opacity-60 text-white font-bold py-4 rounded-full text-lg transition-colors"
              >
                {estado === 'enviando' ? 'Enviando...' : '📨 Enviar historia'}
              </button>

            </form>
          )}
        </div>
      </main>
    </div>
  )
}
