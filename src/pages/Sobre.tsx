export default function Sobre() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-gradient px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-mystic-200">
          Sobre
        </h1>
        <div className="mystic-card">
          <div className="space-y-6 text-mystic-100">
            <p className="text-lg leading-relaxed">
              Bem-vindo ao mundo da consulta tarológica. Aqui você encontrará orientação e 
              insights através das cartas do tarot.
            </p>
            <p className="text-lg leading-relaxed">
              Nossa consultora possui anos de experiência em leitura de tarot, ajudando 
              pessoas a encontrarem respostas e direcionamento em suas vidas.
            </p>
            <div className="pt-6 border-t border-mystic-700">
              <p className="text-mystic-200 font-semibold mb-2">
                Entre em contato para agendar sua consulta:
              </p>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mystic-button inline-block mt-4"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

