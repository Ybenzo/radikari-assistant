import React, { useState } from 'react';

function MessageBubble({ text, sender }) {
  const isAI = sender === "ai";
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"} mb-4`}>
      <div className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
          isAI ? "bg-white text-slate-800 border border-slate-200" : "bg-emerald-600 text-white"
        }`}>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo Danar! Ada yang bisa saya bantu?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages([...messages, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now()+1, text: "Oke, saya proses ya!", sender: "ai" }]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8fafc]">
      <header className="h-16 bg-white border-b flex items-center px-6 shadow-sm">
        <h2 className="font-semibold text-slate-700">AI Helpdesk Assistant</h2>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="max-w-4xl mx-auto flex gap-2">
          <input 
            type="text" value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ketik pesan..."
            className="flex-1 bg-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button onClick={handleSend} className="bg-emerald-600 text-white px-6 py-2 rounded-xl">Kirim</button>
        </div>
      </div>
    </div>
  );
}