import React, { useState, useRef, useEffect } from 'react';

export default function Chatbox() {
  const [isOpened, setIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Transition to opened state if it's the first message
    if (!isOpened) {
      setIsOpened(true);
    }

    const newUserMsg = {
      role: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: "Eu sou a MaIA. Como posso te auxiliar com seus projetos hoje?",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 2500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-sans transition-all duration-500 ease-in-out">
      {/* Outer Container mimicking Brabaflow design */}
      <div 
        className={`relative flex flex-col bg-[#050505] border border-white/5 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          isOpened ? "rounded-2xl h-[600px]" : "rounded-3xl h-[450px]"
        }`}
      >
        {/* State 1: Closed / Initial */}
        {!isOpened && (
          <div className="flex-1 flex flex-col items-center justify-center relative p-8 fade-in-section">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <img src="/images/LOGO.svg" alt="MaIA" className="h-10 md:h-14 object-contain opacity-100" />
            </div>
            
            <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight my-auto text-center">
              Como posso <span className="text-gray-300">te ajudar?</span>
            </h2>
          </div>
        )}

        {/* State 2: Opened / Messages */}
        {isOpened && (
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a] shrink-0 fade-in-section">
              <div className="w-16"></div> {/* Spacer for centering */}
              
              <div className="flex items-center justify-center">
                <img src="/images/LOGO.svg" alt="MaIA" className="h-[40px] md:h-14 object-contain opacity-100" />
              </div>
              
              <div className="flex items-center gap-3 w-16 justify-end text-gray-500">
                <button 
                  onClick={() => setIsOpened(false)} 
                  className="hover:text-white transition-colors"
                  title="Minimizar"
                >
                  <span className="material-icons text-[18px]">open_in_full</span>
                </button>
                <button 
                  className="hover:text-white transition-colors"
                  title="Fechar"
                >
                  <span className="material-icons text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 md:px-10 flex flex-col gap-6 custom-scrollbar bg-[#050505]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'user' ? (
                    <div className="flex items-start gap-4 max-w-[85%] flex-row-reverse fade-in-section">
                      <div className="w-10 h-10 rounded-full bg-[#00f0c0] flex items-center justify-center shrink-0">
                        <span className="material-icons text-black text-xl">person_outline</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                          <span className="text-white font-medium text-sm">Você</span>
                          <span className="text-[#00f0c0] text-[10px] opacity-70">{msg.time}</span>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed text-right">{msg.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-4 max-w-[85%] fade-in-section">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#0a0a0a] border border-white/10 p-1">
                        <img src="/images/simbolo.png" alt="MaIA" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col mt-2">
                        <p className="text-white text-base leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-3 fade-in-section mt-2">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#00f0c0] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-[#00f0c0] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-[#00f0c0] rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-[#00f0c0] text-sm">MaIA está respondendo</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </>
        )}

        {/* Input Area (Always Visible at bottom) */}
        <div className="w-full px-6 md:px-12 pb-6 pt-4 bg-[#050505] shrink-0">
          <div className="relative flex items-center bg-[#131211] border border-white/5 rounded-full overflow-hidden focus-within:border-white/20 transition-colors">
            <button className="pl-5 pr-3 text-gray-500 hover:text-[#00f0c0] transition-colors flex items-center justify-center">
              <span className="material-icons text-[22px]">mic_none</span>
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (!isOpened && messages.length > 0) setIsOpened(true);
              }}
              placeholder="Envie uma mensagem para MaIA..."
              className="flex-1 bg-transparent border-none py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-0 text-[15px]"
            />
            <button 
              onClick={handleSend}
              className={`mr-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                inputValue.trim() || isTyping ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-800 text-gray-400'
              }`}
            >
              {isTyping ? (
                <div className="w-2.5 h-2.5 bg-black rounded-[2px]"></div> // Stop icon
              ) : (
                <span className="material-icons text-[18px]">arrow_upward</span>
              )}
            </button>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-[#555] text-[11px] font-medium tracking-wide">
              O Agente de IA da MaIA pode cometer erros. Considere verificar informações importantes.<br />
              ©2026 | Desenvolvido por MaIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
