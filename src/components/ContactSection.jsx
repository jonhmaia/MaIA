import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-32 px-4 md:px-12 lg:px-24 flex justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Volumetric Lighting (Matching User's Accent Color #00f0c0) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#00f0c0]/15 blur-[160px] rounded-full pointer-events-none mix-blend-screen opacity-60"></div>
      <div className="absolute top-1/3 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[800px] bg-[#00f0c0]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>
      
      {/* Central Interactive Light Rays / Static Stars representation from background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
         backgroundImage: 'radial-gradient(ellipse at top, white 1px, transparent 1px)',
         backgroundSize: '40px 40px'
      }}></div>

      {/* Main Glass/Dark Card Container */}
      <div className="w-full max-w-[1200px] bg-[#0c0c0c]/80 backdrop-blur-xl border border-white/[0.04] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 md:gap-24 relative z-10 shadow-[0_0_50px_rgba(0,240,192,0.03)] fade-in-section">
        
        {/* Left Column: Info & Details */}
        <div className="flex flex-col flex-1 max-w-[440px]">
          
          <div className="text-xs font-bold text-[#e1e1e1] tracking-[0.2em] uppercase mb-4">
            Contato
          </div>
          
          <h2 className="text-4xl md:text-[44px] text-white leading-[1.15] mb-6" style={{ fontFamily: '"Georgia", "Times New Roman", serif', letterSpacing: '-0.02em' }}>
            Transforme o seu atendimento <span className="text-[#00f0c0]">hoje</span>.
          </h2>
          
          <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
            Estamos prontos para entender a fundo o seu processo atual e desenhar agentes autônomos que operam em escala e com perfeição.
          </p>

          <ul className="flex flex-col gap-4 mb-12">
            {[
              'Automatização completa 24/7',
              'Redução imediata em custos operacionais',
              'Integração nativa com seu CRM e Banco de Dados',
              'Onboarding de equipe e suporte contínuo'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="material-icons text-[#00f0c0] text-[18px]">check_circle_outline</span>
                <span className="text-gray-200 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            <h3 className="text-white text-lg font-semibold border-b border-white/5 pb-4">
              Informações Diretas
            </h3>
            
            <div className="text-gray-400 text-[14px] leading-relaxed">
              Tem urgência ou quer conhecer nossa estrutura? Entre em contato por nossos canais diretos ou venha nos fazer uma visita.
            </div>

            <div className="flex flex-col gap-3">
               <div className="flex text-sm">
                 <span className="text-gray-300 w-20">Telefone:</span>
                 <span className="text-white">+55 (11) 99999-9999</span>
               </div>
               <div className="flex text-sm">
                 <span className="text-gray-300 w-20">E-mail:</span>
                 <span className="text-white">contato@agenciamaia.com</span>
               </div>
               <div className="flex mt-3 text-sm">
                 <span className="text-gray-300 w-20 shrink-0">Local:</span>
                 <span className="text-gray-400">Av. Engenheiro Luís Carlos Berrini<br/>São Paulo, Brazil</span>
               </div>
            </div>
          </div>

        </div>

        {/* Right Column: The Form */}
        <div className="flex flex-col flex-1 w-full">
           <form className="flex flex-col gap-6 w-full" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1: Names */}
              <div className="flex flex-col md:flex-row gap-6 w-full">
                 <div className="flex flex-col gap-2 w-full">
                   <label className="text-gray-300 text-[13px]">Nome</label>
                   <input type="text" placeholder="João" 
                          className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 h-12 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors placeholder:text-gray-600" />
                 </div>
                 <div className="flex flex-col gap-2 w-full">
                   <label className="text-gray-300 text-[13px]">Sobrenome</label>
                   <input type="text" placeholder="Silva" 
                          className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 h-12 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors placeholder:text-gray-600" />
                 </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-2 w-full">
                 <label className="text-gray-300 text-[13px]">E-mail de Trabalho</label>
                 <input type="email" placeholder="joao@minhaempresa.com.br" 
                        className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 h-12 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors placeholder:text-gray-600" />
              </div>

              {/* Row 3: Company */}
              <div className="flex flex-col gap-2 w-full">
                 <label className="text-gray-300 text-[13px]">Nome da Empresa</label>
                 <input type="text" placeholder="Ex: Acme Corp" 
                        className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 h-12 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors placeholder:text-gray-600" />
              </div>

              {/* Row 4: Dropdown Substitute */}
              <div className="flex flex-col gap-2 w-full relative">
                 <label className="text-gray-300 text-[13px]">Volume atual de atendimentos / mês</label>
                 <select className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 h-12 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors appearance-none cursor-pointer">
                   <option>Até 1.000 mensagens</option>
                   <option>De 1.000 a 10.000 mensagens</option>
                   <option>De 10.000 a 50.000 mensagens</option>
                   <option>Mais de 50.000 mensagens</option>
                 </select>
                 <span className="material-icons absolute right-5 top-[38px] text-gray-400 pointer-events-none text-sm">expand_more</span>
              </div>

              {/* Row 5: Message */}
              <div className="flex flex-col gap-2 w-full">
                 <label className="text-gray-300 text-[13px]">Como podemos ajudar?</label>
                 <textarea placeholder="Fale um pouco sobre onde estão as maiores ineficiências do seu negócio hoje..." 
                           className="w-full bg-[#161616] border border-white/5 text-gray-200 px-5 py-4 h-32 rounded-[1rem] text-[14px] outline-none focus:border-[#00f0c0]/50 transition-colors placeholder:text-gray-600 resize-none"></textarea>
              </div>

              {/* Row 6: Submit Container */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-6">
                 
                 {/* Terms Checkbox */}
                 <div className="flex items-center gap-3">
                   <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-400 bg-transparent text-[#00f0c0] focus:ring-[#00f0c0] cursor-pointer" />
                   <label htmlFor="terms" className="text-gray-400 text-xs">
                     Eu concordo com os <a href="#" className="text-white hover:text-[#00f0c0] transition-colors font-medium">Termos de Uso</a> e a <a href="#" className="text-white hover:text-[#00f0c0] transition-colors font-medium">Política de Privacidade</a> *
                   </label>
                 </div>

                 {/* Submit Button */}
                 <button type="submit" className="w-full md:w-auto bg-[#00f0c0]/10 border border-[#00f0c0]/30 hover:bg-[#00f0c0] text-white hover:text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 shrink-0">
                   Enviar Mensagem
                 </button>
              </div>

           </form>
        </div>

      </div>
    </section>
  );
}
