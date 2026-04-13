import React, { useState, useEffect, useRef } from 'react';

export default function ChatAssistant({ user, activeMenu }) {
  const firstName = user?.name ? user.name.split(' ')[0] : 'User';
  const userRole = user?.role || 'GUEST';
  const chatEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { text: `Halo ${firstName}! Ada yang bisa dibantu untuk kendala IT hari ini?`, isBot: true }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Command diterima. Menganalisis sistem sebagai ${userRole}...`, 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    /* h-full + flex-col kunci layout biar gak bisa geser */
    <div className="flex flex-col h-full bg-[#020617]">
      
      {/* AREA PESAN: Ini satu-satunya yang boleh nge-scroll */}
      <div className="flex-1 overflow-y-auto p-10 space-y-6 custom-scrollbar bg-transparent">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'} animate-in fade-in duration-300`}>
            <div className={`max-w-[75%] p-5 text-sm leading-relaxed ${
              m.isBot 
                ? 'bg-slate-800/40 text-slate-200 border border-white/5 rounded-2xl rounded-tl-none' 
                : 'bg-red-600 text-white font-bold rounded-2xl rounded-tr-none shadow-lg shadow-red-900/20'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* AREA INPUT: DI LUAR DIV SCROLL (MATI DI BAWAH) */}
      <div className="shrink-0 p-8 border-t border-white/5 bg-[#0f172a]/80 backdrop-blur-xl">
        <form onSubmit={handleSend} className="max-w-6xl mx-auto flex items-center gap-4">
          
          {/* Tombol Upload File (+) */}
          <button 
            type="button"
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>

          {/* Input Bar */}
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ada kendala apa, Bro?"
            className="flex-1 bg-[#020617] border border-white/10 rounded-xl py-5 px-6 text-sm focus:outline-none focus:border-red-600 text-white shadow-inner"
          />

          {/* Tombol Kirim (Panah) */}
          <button 
            type="submit" 
            className="bg-red-600 hover:bg-red-700 w-14 h-14 rounded-xl flex items-center justify-center text-white transition-transform active:scale-95 shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </form>
        <p className="text-center text-[9px] text-slate-500 mt-4 font-bold uppercase tracking-[0.4em]">
          RADIKARI INTELLIGENCE NODE ACTIVE
        </p>
      </div>
    </div>
  );
}