import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-mystic-900 border-b border-mystic-700 shadow-mystic">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-mystic-200 hover:text-mystic-100 transition-colors mystic-glow">
          🔮 Consulta Tarológica
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Home
          </Link>
          <Link to="/sobre" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  )
}

