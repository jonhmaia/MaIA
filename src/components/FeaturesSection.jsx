import React from 'react';

export default function FeaturesSection() {
  const badges = [
    "Consultoria especializada",
    "Suporte contínuo",
    "Relatórios de performance",
    "Desenvolvimento ágil",
    "Modelos personalizados",
    "Segurança de dados",
    "Treinamento de IA"
  ];

  return (
    <section id="features" className="bg-[#050505] min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center flex flex-col items-center mb-16 fade-in-section">
        <div className="flex items-center gap-2 text-[#00f0c0] font-medium text-sm mb-6 bg-[#00f0c0]/10 px-4 py-1.5 rounded-full border border-[#00f0c0]/20">
          <span className="material-icons text-base">stars</span> 
          O que você recebe
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold text-white tracking-tight max-w-4xl leading-tight">
          Resolvemos as ineficiências associadas aos processos manuais da sua empresa.
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="w-full max-w-6xl flex flex-col gap-6 relative z-10">
        
        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-section">
          
          {/* Card 1: Cost Effective */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col h-[380px] hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-full h-32 flex items-end justify-center gap-3">
                {[40, 60, 45, 80, 50, 95, 120].map((height, i) => (
                  <div key={i} className="w-6 rounded-t-sm bg-white/5 group-hover:bg-[#00f0c0] transition-all duration-500 relative" style={{ height: `${height}px`, transitionDelay: `${i * 50}ms` }}>
                    {i === 6 && (
                      <div className="absolute -top-8 -left-6 bg-[#00f0c0]/20 text-[#00f0c0] text-xs px-2 py-1 rounded border border-[#00f0c0]/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        +300% Crescimento
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-medium mb-3">Redução drástica de custos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As automações substituem trabalhos repetitivos, permitindo resultados de alta qualidade por uma fração do custo tradicional.
              </p>
            </div>
          </div>

          {/* Card 2: Tailor-made */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col h-[380px] hover:border-white/10 transition-colors group relative overflow-hidden">
            <div className="flex-1 flex items-center justify-center mb-6 relative">
              <div className="absolute w-[200px] h-[80px] bg-[#111] rounded-2xl border border-white/10 shadow-2xl flex items-center p-4 gap-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-10 h-10 bg-[#00f0c0]/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-icons text-[#00f0c0]">bolt</span>
                </div>
                <div>
                  <div className="px-2 py-0.5 bg-[#00f0c0] text-black text-[10px] font-bold rounded mb-1 inline-block">ATUALIZADO</div>
                  <h4 className="text-white text-sm font-medium">Fluxo sob medida</h4>
                </div>
              </div>
              <div className="absolute w-[180px] h-[80px] bg-[#0c0c0c] rounded-2xl border border-white/5 top-14 opacity-50 blur-[2px] scale-95 group-hover:scale-90 transition-transform duration-500"></div>
            </div>
            <div>
              <h3 className="text-white text-xl font-medium mb-3">Desenvolvimento sob medida</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Temos a expertise corporativa para transformar necessidades complexas em fluxos de automação hiper personalizadas.
              </p>
            </div>
          </div>

          {/* Card 3: Scalable */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col h-[380px] hover:border-white/10 transition-colors group relative overflow-hidden">
             <div className="flex-1 flex items-center justify-center mb-6 relative w-full h-full">
                {/* SVG Graph line pointing UP */}
                <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00f0c0" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#00f0c0" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  
                  {/* Glowing Line */}
                  <path 
                    d="M 10 90 Q 50 85, 80 60 T 150 20 L 190 10" 
                    fill="none" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(0,240,192,0.8)]"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                    style={{ animation: 'draw 2s ease-out forwards' }}
                  />
                  
                  {/* Point */}
                  <circle cx="150" cy="20" r="6" fill="#050505" stroke="#00f0c0" strokeWidth="3" className="group-hover:scale-150 transition-transform origin-center" />
                </svg>
                
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes draw { to { stroke-dashoffset: 0; } }
                `}} />
             </div>
             <div>
              <h3 className="text-white text-xl font-medium mb-3">Escalável com o seu crescimento</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nossas infraestruturas de IA e bancos de dados estão prontos para suportar desde 10 até 100.000 interações diárias.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Row: 2 Cards (60/40 split roughly) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 fade-in-section delay-100">
          
          {/* Card 4: Workflow */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 h-auto md:h-[240px] hover:border-white/10 transition-colors group">
            <div className="flex-1 flex flex-col order-2 md:order-1">
              <h3 className="text-white text-xl font-medium mb-3">Integração nativa de sistemas</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Conecte perfeitamente todos os seus aplicativos existentes. Da leitura do banco de dados ao disparo de mensagens no WhatsApp.
              </p>
            </div>
            
            <div className="w-full md:w-[40%] h-[120px] order-1 md:order-2 relative flex items-center justify-center">
               {/* Circle grid of icons */}
               <div className="relative w-40 h-40 group-hover:rotate-12 transition-transform duration-700">
                  <div className="absolute top-0 right-8 w-10 h-10 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center p-2 shadow-lg z-20">
                    <img src="/tecs/open.svg" alt="OpenAI" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute top-12 left-0 w-12 h-12 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center p-2 shadow-lg z-10">
                    <img src="/tecs/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute bottom-4 right-2 w-14 h-14 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center p-2 shadow-lg z-30">
                    <img src="/tecs/slack.png" alt="Slack" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="absolute bottom-12 left-10 w-9 h-9 bg-[#111] rounded-xl border border-white/10 flex items-center justify-center p-1.5 shadow-lg z-0 opacity-50">
                    <img src="/tecs/n8n.svg" alt="n8n" className="w-full h-full object-contain" />
                  </div>
               </div>
            </div>
          </div>

          {/* Card 5: Real-time */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] p-8 flex flex-col items-start justify-center h-[240px] hover:border-white/10 transition-colors group relative overflow-hidden">
             
             <div className="flex-1 w-full flex items-center justify-center mb-4 relative h-16">
                {/* Avatars Overlapping */}
                <div className="flex items-center justify-center relative w-full h-full">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-tr from-purple-500 to-pink-500 absolute left-[calc(50%-45px)] z-10 group-hover:-translate-x-2 transition-transform duration-500"></div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-tr from-blue-500 to-cyan-400 absolute left-[calc(50%-15px)] z-20 group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,192,0.4)]">
                    <span className="material-icons text-white text-sm">support_agent</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#00f0c0] bg-gradient-to-tr from-yellow-400 to-orange-500 absolute left-[calc(50%+15px)] z-30 group-hover:translate-x-2 transition-transform duration-500"></div>
                  
                  {/* Tooltip popping up on hover */}
                  <div className="absolute -top-8 left-[calc(50%+15px)] bg-white text-black text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4">
                    Humano
                  </div>
                </div>
             </div>

             <div>
              <h3 className="text-white text-xl font-medium mb-3">Handoff em tempo real</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transfira a conversa para um operador humano instantaneamente quando a IA detectar a necessidade.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Badges Footprint */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-3 mt-16 fade-in-section delay-200">
        {badges.map((badge, idx) => (
           <div key={idx} className="flex items-center gap-2 bg-[#0a0a0a] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-colors cursor-default rounded-full px-4 py-2 text-sm text-gray-300">
             <span className="material-icons text-[#00f0c0] text-[14px]">stars</span>
             {badge}
           </div>
        ))}
      </div>

    </section>
  );
}
