import WhatsAppIcon from '../components/WhatsAppIcon'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Container com imagem de fundo - estilo modelo */}
      <div 
        className="relative min-h-[700px] flex items-center justify-center py-20"
        style={{
          backgroundImage: 'url(/image1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay com opacidade */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Conteúdo principal centralizado */}
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Lado esquerdo - Imagem */}
            <div className="shrink-0 order-2 lg:order-1">
              <img 
                src="/image2.webp" 
                alt="Dara Anamê" 
                className="rounded-lg w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl"
              />
            </div>
            
            {/* Lado direito - Conteúdo centralizado */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-1 lg:order-2">
              {/* Subtítulo pequeno */}
              <p className="text-sm md:text-base uppercase tracking-wider text-mystic-300 mb-4">
                Bem-vindo ao Tarot Consulta
              </p>
              
              {/* Título principal */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Revele os Mistérios</span>
                <span className="block text-mystic-400">da Sua Vida</span>
              </h1>
              
              {/* Descrição */}
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl">
                Tarot Consulta foi construído com muito carinho pela cartomante Dara Anamê. 
                Descubra respostas e direcionamento através das cartas do tarot.
              </p>
              
              {/* Botões do WhatsApp */}
              <div className="flex flex-col gap-4 items-center lg:items-start w-full max-w-md">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta de 10 minutos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button whatsapp-button-pulse w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>10 minutos R$29,90</span>
                </a>
                
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta de 30 minutos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>30 minutos R$69,90</span>
                </a>
                
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta de 60 minutos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>60 minutos R$129,90</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seção Páginas Principais */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-mystic-200">
            Páginas Principais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cartomante Online */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Cartomante Online" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Cartomante Online
              </button>
            </div>
            
            {/* Sim ou Não */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Sim ou Não" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Sim ou Não
              </button>
            </div>
            
            {/* Baralho cigano online */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Baralho cigano online" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Baralho cigano online
              </button>
            </div>
            
            {/* Tarot do amor */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Tarot do amor" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Tarot do amor
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Separador horizontal */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-mystic-700/50 my-12"></div>
      </div>
      
      {/* Seção Principais Artigos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-mystic-200">
            Principais Artigos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Horas Iguais */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Horas Iguais" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Horas Iguais
              </button>
            </div>
            
            {/* Significado de Sonhos */}
            <div className="flex flex-col">
              <div className="mystic-card cursor-pointer hover:scale-105 transition-transform overflow-hidden p-0">
                <img 
                  src="/image2.webp" 
                  alt="Significado de Sonhos" 
                  className="w-full h-72 object-cover"
                />
              </div>
              <button className="mystic-button w-full mt-4">
                Significado de Sonhos
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção Sobre o Site */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mystic-card p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-mystic-200">
              Sobre o Tarot Consulta
            </h2>
            
            <div className="space-y-6 text-mystic-100 text-lg leading-relaxed">
              <p>
                O Tarot Consulta é um portal dedicado ao universo esotérico, criado para quem busca orientação, 
                clareza e respostas seguras por meio do tarot online, da cartomancia, da numerologia e da astrologia. 
                Nosso objetivo é conectar pessoas que vivem momentos de dúvida, transição ou decisão a uma consulta 
                espiritual séria, responsável e personalizada.
              </p>
              
              <p>
                Aqui, o tarot é utilizado como uma ferramenta de autoconhecimento e direcionamento. Por meio das cartas, 
                é possível compreender padrões, identificar caminhos e enxergar oportunidades que muitas vezes não estão 
                claras no plano racional. No Tarot Consulta, cada conteúdo é desenvolvido para aprofundar o entendimento 
                sobre temas como tarot do amor, relacionamentos, vida profissional, finanças, espiritualidade e propósito de vida.
              </p>
              
              <p>
                A cartomante Dara Anamê é a profissional responsável pelos atendimentos oferecidos através da plataforma. 
                Com ampla experiência em consultas online, Dara atua com ética, sensibilidade e foco em orientar, nunca em 
                criar dependência. Suas leituras unem interpretação intuitiva, técnica e clareza na comunicação, tornando o 
                tarot acessível tanto para iniciantes quanto para quem já possui familiaridade com o mundo esotérico.
              </p>
              
              <p>
                Além das consultas, o Tarot Consulta reúne artigos sobre signos do zodíaco, previsões astrológicas, significados 
                das cartas do tarot, números e ciclos da numerologia, sempre com uma linguagem objetiva e fácil de entender. 
                Todo o conteúdo do site é pensado para ajudar você a tomar decisões mais conscientes e alinhadas com seu momento atual.
              </p>
              
              <p>
                Se você procura uma consulta de tarot online confiável, orientação espiritual e respostas diretas para suas dúvidas, 
                o Tarot Consulta é o seu ponto de partida. Aqui, o conhecimento esotérico é tratado com respeito, profundidade e responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

