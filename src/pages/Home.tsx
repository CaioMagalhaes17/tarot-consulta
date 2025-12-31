export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gradient px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-mystic-200">
          Consulta Tarológica
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-mystic-300">
          Descubra os mistérios que o futuro reserva para você
        </p>
        <div className="mystic-card max-w-md mx-auto">
          <p className="text-mystic-100 mb-6 text-lg">
            Entre em contato através do WhatsApp para agendar sua consulta
          </p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mystic-button inline-block"
          >
            📱 Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

