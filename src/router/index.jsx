import { createBrowserRouter } from 'react-router-dom'
import InicioPage from '../pages/InicioPage'
import CompartirHistoriaPage from '../pages/CompartirHistoriaPage'
import LoginPage from '../pages/LoginPage'
import HistoriasPage from '../pages/HistoriasPage'

const router = createBrowserRouter([
  { path: '/', element: <InicioPage /> },
  { path: '/compartir', element: <CompartirHistoriaPage /> },
  { path: '/moderador/login', element: <LoginPage /> },
  { path: '/moderador/historias', element: <HistoriasPage /> },
])

export default router
