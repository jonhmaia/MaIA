import React from 'react';

export default function SolutionsSection() {
  return (
    <section className="bg-[#050505] min-h-screen py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#00f0c0] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      {/* Grid Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6 fade-in-section">
          
          {/* Card 1: Top Left - Global / Globe */}
          <div className="bg-[#0a0a0a] border border-white/[0.03] rounded-[2rem] p-10 h-[400px] md:h-[460px] flex flex-col relative overflow-hidden group hover:border-white/[0.08] transition-colors">
            {/* Background Dotted Grid (Subtle) */}
            <div className="absolute inset-0 opacity-[0.1]" style={{
              backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-2xl font-semibold mb-3">
                Agentes <span className="text-gray-500">Multilíngues</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Implante atendimento de ponta que conversa fluentemente em dezenas de idiomas com perfis super customizados.
              </p>
            </div>

            {/* Glowing Globe Graphic */}
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full border border-white/10 group-hover:border-[#00f0c0]/30 flex items-center justify-center transition-all duration-700">
               {/* Globe Grid Base */}
               <div className="w-[300px] h-[300px] rounded-full border border-white/5 right-12 relative flex items-center justify-center border-dashed group-hover:rotate-[30deg] transition-transform duration-[2s]">
                 <div className="w-[200px] h-[200px] border border-white/5 rounded-full rotate-45"></div>
                 <div className="w-[200px] h-[200px] border border-white/5 rounded-full -rotate-45 absolute"></div>
               </div>

               {/* Floating Orbs & Pills */}
               <div className="absolute w-6 h-6 rounded-full bg-gradient-to-tr from-[#00f0c0] to-blue-500 shadow-[0_0_20px_#00f0c0] left-[60px] top-[100px] group-hover:-translate-y-4 transition-transform duration-700"></div>
               <div className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-green-400 to-[#00f0c0] shadow-[0_0_15px_#00f0c0] bottom-[150px] right-[80px] group-hover:translate-x-4 transition-transform duration-700"></div>
               
               <div className="absolute top-[80px] left-[0px] bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,240,192,0.2)] transition-shadow">
                 <span className="material-icons text-[#00f0c0] text-[14px]">language</span> Español
               </div>
               <div className="absolute bottom-[100px] left-[50px] bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,240,192,0.2)] transition-shadow">
                 <span className="material-icons text-[#00f0c0] text-[14px]">language</span> English
               </div>
            </div>
          </div>

          {/* Card 2: Bottom Left - Integrated Tools */}
          <div className="bg-[#0a0a0a] border border-white/[0.03] rounded-[2rem] p-10 h-[220px] md:h-[260px] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-white/[0.08] transition-colors">
             <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-[#111111] rounded-[2rem] flex items-center justify-center border border-white/5 shadow-2xl relative group-hover:scale-105 transition-transform duration-500 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f0c0]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500"></div>
                <span className="material-icons text-5xl md:text-6xl text-[#00f0c0] drop-shadow-[0_0_15px_rgba(0,240,192,0.5)] transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">precision_manufacturing</span>
             </div>
             <div className="flex flex-col relative z-10 w-full">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Ferramentas <span className="text-gray-500">Integradas</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Gerencie todos os aspectos do atendimento, desde a triagem de leads até os agendamentos, tudo em um só lugar.
                </p>
             </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 fade-in-section delay-200">

          {/* Card 3: Top Right - Analytics */}
          <div className="bg-[#0a0a0a] border border-white/[0.03] rounded-[2rem] p-10 h-[220px] md:h-[260px] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-white/[0.08] transition-colors order-2 lg:order-1">
             <div className="flex flex-col relative z-10 w-full order-2 md:order-1">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Análise <span className="text-gray-500">Avançada</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Obtenha insights profundos sobre o desempenho da automação e comportamento do usuário para tomar decisões melhores.
                </p>
             </div>
             
             {/* 3D Bar Chart Visual */}
             <div className="w-32 h-32 shrink-0 flex items-end justify-center gap-2 order-1 md:order-2 relative group-hover:scale-110 transition-transform duration-500 z-10">
                <div className="w-6 h-12 bg-white/10 rounded-full flex flex-col justify-end overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-[#00f0c0]/10 to-[#00f0c0]/30 rounded-full"></div>
                </div>
                <div className="w-6 h-24 rounded-full flex flex-col justify-end overflow-hidden p-[1px] bg-gradient-to-t from-transparent to-[#00f0c0] shadow-[0_0_15px_rgba(0,240,192,0.4)]">
                   <div className="w-full h-full bg-[#0a0a0a] rounded-full">
                     <div className="w-full h-full bg-gradient-to-t from-[#00f0c0]/20 to-[#00f0c0] rounded-full opacity-80"></div>
                   </div>
                </div>
                <div className="w-6 h-16 bg-white/10 rounded-full flex flex-col justify-end overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-t from-[#00f0c0]/10 to-[#00f0c0]/50 rounded-full"></div>
                </div>
             </div>
          </div>

          {/* Card 4: Bottom Right - Quick Operations */}
          <div className="bg-[#0a0a0a] border border-white/[0.03] rounded-[2rem] p-10 h-[400px] md:h-[460px] flex flex-col relative overflow-hidden group hover:border-white/[0.08] transition-colors order-1 lg:order-2">
             <div className="relative z-10">
                <h3 className="text-white text-2xl font-semibold mb-3">
                  Resolução <span className="text-gray-500">Ultrarrápida</span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                  Sem mais gargalos. Responda instantaneamente simultaneamente para milhares de usuários com inteligência de verdade.
                </p>
             </div>

             {/* Lightning Bolt Visual */}
             <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-end overflow-hidden pb-10">
                {/* Huge 3D Bolt Graphic using Material Icons and dropshadows */}
                <div className="relative z-0 group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700">
                  <span className="material-icons text-[#00f0c0] text-[200px] leading-none drop-shadow-[0_0_40px_rgba(0,240,192,0.6)]">bolt</span>
                </div>
                
                {/* Floating Pills */}
                <div className="absolute top-[50%] left-[15%] bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 group-hover:-translate-y-4 group-hover:-translate-x-2 transition-transform duration-700 delay-100 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="material-icons text-[#00f0c0] text-[14px]">home</span> Backend
                </div>
                <div className="absolute bottom-[20%] right-[10%] bg-white/5 backdrop-blur-md border border-white/10 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 group-hover:translate-y-2 group-hover:translate-x-4 transition-transform duration-700 delay-200 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="material-icons text-[#00f0c0] text-[14px]">cloud_sync</span> Cloud
                </div>
             </div>
          </div>

        </div>

      </div>

    </section>
  );
}
