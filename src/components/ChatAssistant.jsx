import React, { useState } from 'react';

export default function ChatAssistant({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const firstName = user?.name ? user.name.split(' ')[0] : 'User';

  const [messages, setMessages] = useState([
    { text: `Halo ${firstName}! Ada yang bisa gue bantu di sistem Radikari?`, isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: `Siap ${firstName}, perintah lo lagi gue proses nih.`, 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 h-[450px] bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="p-5 bg-red-600 text-white flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="font-black italic uppercase text-[10px] tracking-widest">Radikari AI Assistant</span>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#020617]/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[10px] ${
                  m.isBot ? 'bg-slate-800 text-slate-300 border border-white/5' : 'bg-red-600 text-white font-bold'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-slate-900">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Tanya AI, ${firstName}...`}
              className="w-full bg-slate-800 border border-white/5 rounded-xl p-3 text-[10px] focus:outline-none focus:border-red-600 text-white"
            />
          </form>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-900/40 hover:scale-110 transition-all"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}