const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export async function enviarHistoria(datos) {
  const res = await fetch(`${BASE_URL}/api/historias/enviar/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(JSON.stringify(json))
  return json
}

export async function login(username, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(json.error || 'Error al iniciar sesión')
  return json
}

export async function listarHistorias(estado = 'todos') {
  const token = localStorage.getItem('innovaip_token')
  const url = estado === 'todos'
    ? `${BASE_URL}/api/historias/`
    : `${BASE_URL}/api/historias/?estado=${estado}`
  const res = await fetch(url, {
    headers: { 'Authorization': `Token ${token}` },
  })
  if (!res.ok) throw new Error('No autorizado')
  return res.json()
}

export async function cambiarEstado(id, estado) {
  const token = localStorage.getItem('innovaip_token')
  const res = await fetch(`${BASE_URL}/api/historias/${id}/estado/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    body: JSON.stringify({ estado }),
  })
  if (!res.ok) throw new Error('Error al cambiar estado')
  return res.json()
}
