import React, { useState } from 'react';
import { integrations } from '../data/integrations';

export default function IntegrationsSection() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Map backend categories to Clay-style categories
  const categoryMap = {
    'ALL': 'Todas',
    'COMMUNICATION': 'Comunicação',
    'PRODUCTIVITY': 'Produtividade',
    'SALES': 'Vendas',
    'SOCIAL': 'Social',
    'AI': 'IA',
    'DATABASE': 'Banco de Dados'
  };
  
  const categories = ['ALL', 'COMMUNICATION', 'PRODUCTIVITY', 'SALES', 'SOCIAL', 'AI', 'DATABASE'];

  const filteredIntegrations = integrations.filter((item) => {
    const activeMapped = categoryMap[activeTab];
    const matchesTab = activeTab === 'ALL' || item.category === activeMapped;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Separate integrations into 3 tiers for the 3D effect
  const frontRow = integrations.slice(0, 6); // 6 items
  const middleRow = integrations.slice(6, 13); // 7 items
  const backRow = integrations.slice(13, 19); // 6 items

  // Render a specific tier of icons
  const renderTier = (row, sizeClass, roundedClass, bgClass, opacityClass, zClass, isReflection = false) => (
    <div className={`flex justify-center gap-4 md:gap-6 ${zClass} ${opacityClass}`}>
      {row.map((tool, idx) => (
        <div 
          key={isReflection ? `ref-${tool.id}` : tool.id} 
          className={`${sizeClass} ${bgClass} ${roundedClass} flex items-center justify-center p-2 shadow-xl ${isReflection ? 'blur-[2px]' : 'hover:-translate-y-2 transition-transform duration-300'}`}
        >
          <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-[#050505] min-h-screen py-24 px-4 md:px-12 lg:px-24 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/10 via-[#00f0c0]/10 to-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mb-12 relative z-10 fade-in-section">
        <h2 
          className="text-4xl md:text-[44px] text-white mb-6"
          style={{ fontFamily: '"Georgia", "Times New Roman", serif', letterSpacing: '-0.02em' }}
        >
          Catálogo de integrações
        </h2>
        <p className="text-[#888] text-[15px] leading-relaxed max-w-xl mx-auto">
          Explore um catálogo completo de ferramentas que se integram perfeitamente com a MaIA — levando sua inteligência para onde sua equipe já trabalha.
        </p>
      </div>

      {/* 3D Floating Icons Carousel */}
      <div className="w-full max-w-5xl relative mb-24 fade-in-section flex flex-col items-center">
        
        <div className="relative flex flex-col items-center gap-4 w-full">
          {/* Main Icons (Front, Middle, Back) */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Back Row */}
            <div className="translate-y-8 scale-90 opacity-60">
              {renderTier(backRow, "w-10 h-10 md:w-12 md:h-12", "rounded-xl", "bg-[#161616]", "", "z-0")}
            </div>
            {/* Middle Row */}
            <div className="translate-y-4 scale-95 opacity-80">
              {renderTier(middleRow, "w-12 h-12 md:w-16 md:h-16", "rounded-2xl", "bg-[#181818]", "", "z-10")}
            </div>
            {/* Front Row */}
            <div className="z-20 drop-shadow-2xl">
              {renderTier(frontRow, "w-16 h-16 md:w-20 md:h-20", "rounded-[1.25rem]", "bg-[#1a1a1a]", "", "z-20")}
            </div>
          </div>

          {/* Reflection */}
          <div className="absolute top-[100%] left-0 w-full flex flex-col items-center scale-y-[-1] pointer-events-none opacity-40 mix-blend-screen -mt-2"
               style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 60%)' }}>
            {/* Front Row Reflected */}
            <div className="">
              {renderTier(frontRow, "w-16 h-16 md:w-20 md:h-20", "rounded-[1.25rem]", "bg-[#1a1a1a]", "", "z-20", true)}
            </div>
            {/* Middle Row Reflected */}
            <div className="-translate-y-4 scale-95">
              {renderTier(middleRow, "w-12 h-12 md:w-16 md:h-16", "rounded-2xl", "bg-[#181818]", "", "z-10", true)}
            </div>
            {/* Back Row Reflected */}
            <div className="-translate-y-8 scale-90">
              {renderTier(backRow, "w-10 h-10 md:w-12 md:h-12", "rounded-xl", "bg-[#161616]", "", "z-0", true)}
            </div>
          </div>
        </div>

      </div>

      {/* Controls: Segmented Tabs + Search */}
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center gap-6 mb-10 relative z-10 px-0 md:px-4 fade-in-section">
        
        {/* Tabs */}
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] transition-colors whitespace-nowrap ${
                activeTab === cat 
                ? 'bg-[#ffffff] text-black shadow-sm' 
                : 'text-[#666] hover:text-[#bbb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-60">
          <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#555] text-sm">search</span>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111] border border-transparent hover:border-white/5 text-gray-200 pl-9 pr-4 py-2 rounded-lg text-sm outline-none focus:border-white/10 transition-colors placeholder-[#555]"
          />
        </div>
      </div>

      {/* Grid of integration cards */}
      <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 px-0 md:px-4 fade-in-section">
        {filteredIntegrations.map((tool) => (
          <div key={tool.id} className="bg-[#0f0f0f] border border-white/[0.04] rounded-[1.25rem] p-6 flex flex-col items-start hover:bg-[#131313] transition-colors group cursor-default shadow-sm hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
               <div className="w-8 h-8 rounded-lg bg-[#000] border border-white/5 flex items-center justify-center p-1.5">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
               </div>
               <h3 className="text-gray-100 font-semibold text-[15px] tracking-tight">{tool.name}</h3>
            </div>
            <p className="text-[#777] text-[13px] leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}

        {filteredIntegrations.length === 0 && (
          <div className="col-span-full py-20 text-center text-[#555] text-sm">
            Nenhuma integração encontrada para "{searchQuery}".
          </div>
        )}
      </div>

    </section>
  );
}
