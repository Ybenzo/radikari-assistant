export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col p-4 hidden md:flex">
      <div className="p-2 mb-8">
        <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          AI Divisi
        </h1>
      </div>
      <nav className="flex-1 space-y-2">
        <button className="w-full text-left p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-600/30">
          💬 IT Support
        </button>
        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800 text-slate-400 transition">
          📂 Network
        </button>
        <button className="w-full text-left p-3 rounded-xl hover:bg-slate-800 text-slate-400 transition">
          📂 Security
        </button>
      </nav>
    </aside>
  );
}