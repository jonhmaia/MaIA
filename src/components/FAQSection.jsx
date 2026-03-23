import React, { useRef, useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "Como funciona a implementação do assistente de IA?",
    answer: "Nossa equipe realiza um mapeamento criterioso das suas necessidades e integra nativamente o agente autônomo com os sistemas que você já utiliza, em questão de dias."
  },
  {
    id: 2,
    question: "Em quanto tempo recupero o investimento?",
    answer: "A drástica redução em custos com triagem humana e atendimento massivo permite que você sinta o ROI e o aumento do NPS já no primeiro mês de uso ativo."
  },
  {
    id: 3,
    question: "A MaIA consegue lidar com arquivos como imagens, áudios e PDFs?",
    answer: "Absolutamente! A IA que implantamos tem capacidades multimodais completas, lidando com recepção, interpretação e envio de catálogos e áudios nativos no WhatsApp."
  },
  {
    id: 4,
    question: "Preciso abandonar o software que eu já utilizo?",
    answer: "De forma alguma. Operamos integrados ao seu ecossistema existente, desde CRMs líderes até planilhas personalizadas através das nossas automações."
  },
  {
    id: 5,
    question: "Meus dados confidenciais estão seguros?",
    answer: "Trabalhamos em instâncias isoladas aderentes à LGPD. Nenhum dado transacionado pela sua Agência IA é cedido para retreino global das empresas de base LLM."
  }
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState(1);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#050505] w-full py-32 px-4 md:px-12 lg:px-24 overflow-hidden fade-in-section">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-[400px]">
            <h2 className="text-5xl text-white leading-[1.1]" style={{ fontFamily: '"Georgia", "Times New Roman", serif', letterSpacing: '-0.02em' }}>
              Dúvidas<br/>
              <span className="text-[#00f0c0]">frequentes</span>
            </h2>
          </div>
          
          <div className="max-w-[350px] flex flex-col gap-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Encontre respostas para as perguntas mais comuns sobre o nosso processo de desenvolvimento de IA, tempo de integração e benefícios na prática.
            </p>
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                aria-label="Scroll left"
              >
                <span className="material-icons text-sm">arrow_back</span>
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white hover:bg-[#00f0c0] hover:text-black hover:border-[#00f0c0] transition-colors"
                aria-label="Scroll right"
              >
                <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL CARDS */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {faqData.map((faq) => {
            const isActive = activeId === faq.id;
            return (
              <div 
                key={faq.id}
                onClick={() => setActiveId(faq.id)}
                className={`shrink-0 h-[380px] rounded-[2rem] p-8 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer snap-start relative overflow-hidden group
                  ${isActive 
                    ? 'w-[320px] md:w-[460px] bg-gradient-to-br from-[#0c1815] to-[#050c0a] border border-[#00f0c0]/20 shadow-[0_0_30px_rgba(0,240,192,0.05)]' 
                    : 'w-[280px] md:w-[320px] bg-[#0a0a0a] border border-white/[0.04] hover:bg-[#111]'
                  }
                `}
              >
                {/* Visual Accent for Active Card */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0c0]/10 blur-[40px] rounded-full pointer-events-none transition-opacity duration-700"></div>
                )}
                
                <div className="flex flex-col h-full w-full">
                  {/* Smooth spacer to handle vertical alignment gracefully */}
                  <div className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'h-0 opacity-0' : 'h-full flex-1'}`}></div>
                  
                  <div className="flex flex-col z-10">
                    <h3 className={`font-medium transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive 
                        ? 'text-white text-[22px] md:text-2xl mb-4' 
                        : 'text-gray-400 text-lg group-hover:text-gray-200'
                    }`}>
                      {faq.question}
                    </h3>
                    
                    <div 
                      className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
                        isActive 
                          ? 'opacity-100 max-h-[300px] mt-2' 
                          : 'opacity-0 max-h-0 mt-0 pt-0'
                      }`}
                    >
                      <p className="text-[#a0a0a0] text-[14px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator when inactive */}
                {!isActive && (
                   <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="material-icons text-[#00f0c0] text-xl">arrow_outward</span>
                   </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
