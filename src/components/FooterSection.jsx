import React from 'react';

export default function FooterSection() {
  return (
    <div className="relative w-full bg-[#050505] mt-40">
      
      {/* OVERLAPPING CTA CARD */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-40 w-full max-w-[1100px] px-4 md:px-0 z-20">
        <div className="bg-[#0a0a0a] w-full h-[350px] rounded-[2rem] border border-white/5 flex items-center justify-between p-10 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Background Ambient Glow inside CTA */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00f0c0]/10 to-transparent blur-[80px] rounded-full pointer-events-none"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col gap-5 max-w-[400px]">
            <h2 className="text-3xl md:text-[40px] text-white leading-tight" style={{ fontFamily: '"Georgia", "Times New Roman", serif', letterSpacing: '-0.02em' }}>
              Experimente a automação inteligente da MaIA
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Mais de 15.000 horas economizadas para nossos parceiros.<br/>Implante fluxos de atendimento em dias, não meses.
            </p>
            <div>
              <button className="bg-white hover:bg-gray-200 text-black font-semibold text-sm px-6 py-3 rounded-full transition-colors inline-block">
                Começar agora
              </button>
            </div>
          </div>

          {/* 3D Dotted Wireframe Globe */}
          <div className="absolute -right-20 -bottom-20 md:-right-10 md:-bottom-24 w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full z-0 select-none pointer-events-none">
             
             {/* The Sphere Base */}
             <div className="w-full h-full rounded-full relative overflow-hidden"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(0, 240, 192, 0.05), transparent 60%)',
                    boxShadow: 'inset -50px -50px 80px rgba(0, 0, 0, 0.9), inset 20px 20px 50px rgba(0, 240, 192, 0.1)',
                  }}>
                
                {/* Globe Grid lines mapped onto a rotating container */}
                <div className="absolute inset-0 w-full h-full animate-[spin-slow_30s_linear_infinite]">
                  
                  {/* Longitudes (Vertical ellipses) */}
                  {[1, 0.8, 0.6, 0.4, 0.2].map((scale, i) => (
                    <div key={`long-${i}`} className="absolute inset-0 rounded-full border border-white/20" 
                         style={{ borderStyle: 'dotted', borderWidth: '2px', transform: `scaleX(${scale})` }}></div>
                  ))}
                  {/* The outer rim (equator edge) */}
                  <div className="absolute inset-0 rounded-full border-[2px] border-dotted border-white/20"></div>

                  {/* Latitudes (Horizontal ellipses) */}
                  {[0.8, 0.6, 0.4, 0.2].map((scale, i) => (
                    <div key={`lat-${i}`} className="absolute inset-0 rounded-full border border-white/20" 
                         style={{ borderStyle: 'dotted', borderWidth: '2px', transform: `scaleY(${scale})` }}></div>
                  ))}
                  
                  {/* Glowing Data Nodes (Cities/Satellites) */}
                  <div className="absolute top-[25%] left-[60%] w-2 h-2 bg-[#00f0c0] rounded-full shadow-[0_0_15px_#00f0c0] animate-pulse"></div>
                  <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-[#00f0c0] rounded-full shadow-[0_0_10px_#00f0c0]"></div>
                  <div className="absolute top-[55%] left-[70%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                  <div className="absolute top-[70%] left-[45%] w-1.5 h-1.5 bg-[#00f0c0] rounded-full shadow-[0_0_10px_#00f0c0] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-[#00f0c0] rounded-full shadow-[0_0_12px_#00f0c0]"></div>
                  
                  {/* Connections (Optional faint SVG lines) */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 50 }}>
                    <path d="M 60% 25% Q 50% 30% 30% 40%" stroke="rgba(0,240,192,0.3)" strokeWidth="1" fill="none" strokeDasharray="3 3"/>
                    <path d="M 60% 25% Q 65% 40% 70% 55%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" strokeDasharray="2 4"/>
                    <path d="M 30% 40% Q 40% 55% 45% 70%" stroke="rgba(0,240,192,0.2)" strokeWidth="1" fill="none" strokeDasharray="3 3"/>
                  </svg>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* FOOTER BASE */}
      <footer className="w-[95%] max-w-[1200px] mx-auto bg-[#000000] rounded-t-[3rem] pt-52 pb-12 px-6 md:px-12 lg:px-24 flex flex-col items-center border border-white/5 border-b-0">
         
         <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-start gap-16 border-b border-white/5 pb-16">
            
            {/* Left: Branding & Contact */}
            <div className="flex flex-col gap-6 max-w-sm">
               <div className="flex items-center gap-3">
                 <img src="/images/simbolo.png" alt="MaIA" className="w-8 h-8 object-contain" />
                 <span className="text-white text-xl font-bold tracking-widest">MaIA</span>
               </div>
               
               <div className="text-gray-400 text-sm leading-loose mt-2">
                 Av. Engenheiro Luís Carlos Berrini<br/>
                 Conjunto 101, Cidade Monções<br/>
                 São Paulo, SP, 04571-000<br/>
                 Brasil
               </div>

               <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4">
                 <div>
                   <div className="text-gray-500 text-xs mb-1">Telefone</div>
                   <div className="text-white text-sm font-medium">+55 (11) 99999-9999</div>
                 </div>
                 <div>
                   <div className="text-gray-500 text-xs mb-1">E-mail</div>
                   <div className="text-white text-sm font-medium">contato@agenciamaia.com</div>
                 </div>
               </div>
            </div>

            {/* Right: Link Columns */}
            <div className="flex flex-wrap gap-16 md:gap-24">
               {/* Quick Links */}
               <div className="flex flex-col gap-4">
                  <h4 className="text-white text-sm font-semibold mb-2">Links Rápidos</h4>
                  {['Início', 'Serviços', 'Integrações', 'Preços', 'FAQ'].map(link => (
                    <a key={link} href="#" className="text-gray-500 hover:text-[#00f0c0] text-sm transition-colors">{link}</a>
                  ))}
               </div>

               {/* Social */}
               <div className="flex flex-col gap-4">
                  <h4 className="text-white text-sm font-semibold mb-2">Social</h4>
                  {['Instagram', 'LinkedIn', 'WhatsApp', 'Twitter', 'YouTube'].map(link => (
                    <a key={link} href="#" className="text-gray-500 hover:text-[#00f0c0] text-sm transition-colors">{link}</a>
                  ))}
               </div>

               {/* Legal */}
               <div className="flex flex-col gap-4">
                  <h4 className="text-white text-sm font-semibold mb-2">Legal</h4>
                  {['Termos de Serviço', 'Política de Privacidade', 'Cookies'].map(link => (
                    <a key={link} href="#" className="text-gray-500 hover:text-[#00f0c0] text-sm transition-colors">{link}</a>
                  ))}
               </div>
            </div>
         </div>

         {/* Bottom Copyright */}
         <div className="w-full max-w-6xl mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-0 gap-4">
           <p className="text-gray-600 text-xs">© 2026 Agência MaIA. Todos os direitos reservados.</p>
         </div>

      </footer>
      
      {/* Helper animation style for the globe spinning */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
