import React, { useState, useEffect, useRef } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([{ id: 1, text: "Halo! Ada yang bisa dibantu untuk kendala IT hari ini?", sender: "ai" }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Database Jawaban
  const botData = {
    prompts: [
      ["hi", "hey", "hello", "halo"],
      ["apa kabar", "how are you"],
      ["siapa kamu", "who are you"],
      ["printer", "rusak", "error", "macet"],
      ["internet", "lemot", "wifi"]
    ],
    replies: [
      ["Halo! Siap membantu kendala IT kamu.", "Hi! Ada masalah apa hari ini?", "Hey! Senang melihatmu kembali."],
      ["Saya berfungsi dengan baik, siap membantu!", "Luar biasa, sistem saya berjalan normal."],
      ["Saya Radikari AI Assistant, spesialis IT Support.", "Hanya bot bantuan teknis milikmu."],
      ["Coba cek kabel power dan koneksi USB-nya.", "Pastikan kertas tidak terselip (paper jam)."],
      ["Coba restart routernya, atau lapor ke tim network jika masih lambat."]
    ],
    alternative: ["Maaf, saya tidak mengerti. Bisa jelaskan lebih detail?", "Pertanyaan menarik, coba tanyakan ke admin IT.", "Saya belum paham maksudnya, Bro."]
  };

  const getBotReply = (userInput) => {
    const text = userInput.toLowerCase().replace(/[^\w\s]/gi, "").trim();
    for (let i = 0; i < botData.prompts.length; i++) {
      if (botData.prompts[i].some(p => text.includes(p))) { // Menggunakan 'some' agar lebih fleksibel
        const responses = botData.replies[i];
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return botData.alternative[Math.floor(Math.random() * botData.alternative.length)];
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        const replyText = getBotReply(currentInput);
        setMessages(prev => [...prev, { id: Date.now() + 1, text: replyText, sender: "ai" }]);
        setIsTyping(false);
      }, 1200);
    }, 400);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    /* BAGIAN UTAMA: Menggunakan bg-[#0f172a] agar serasi dengan Sidebar */
    <div className="flex-1 flex flex-col bg-[#0f172a] text-slate-200">
      
      {/* Header Chat */}
      <div className="p-4 border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full p-1 flex items-center justify-center">
          <img src="https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png" className="w-8 h-8" alt="Bot icon" />
        </div>
        <div>
          <h2 className="font-bold text-white text-sm">AI Support Assistant</h2>
          <p className="text-[10px] text-emerald-400">● Online</p>
        </div>
      </div>

      {/* Chat Box Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 text-sm shadow-xl ${
              msg.sender === 'user' 
                ? 'bg-red-600 text-white rounded-2xl rounded-tr-none' 
                : 'bg-slate-800 text-slate-200 rounded-2xl rounded-tl-none border border-slate-700'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-pulse">
            <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none text-xs text-slate-400">
              Mengetik balasan...
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-800 bg-[#0f172a]">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input 
            className="flex-1 bg-slate-800 text-slate-200 p-3 rounded-xl outline-none border border-slate-700 focus:border-red-500 transition-all placeholder:text-slate-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ada kendala apa, Bro?"
          />
          <button 
            onClick={handleSend} 
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-red-900/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}