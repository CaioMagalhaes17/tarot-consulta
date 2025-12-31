import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-mystic-900 border-b border-mystic-700 shadow-mystic">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Home
          </Link>
          <Link to="/sobre" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Sobre nós
          </Link>
          <Link to="#" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Cartomante Online
          </Link>
          <Link to="#" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Tarot do sim ou não
          </Link>
          <Link to="#" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Blog
          </Link>
          <Link to="#" className="text-mystic-200 hover:text-mystic-100 transition-colors font-medium">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}

