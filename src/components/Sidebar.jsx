import React from 'react';
import LogoPerusahaan from '../assets/RK-Logo.png'; 

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <aside className="w-64 bg-[#0f172a] h-screen shadow-md flex flex-col justify-between border-r border-slate-800">
      <div className="p-6">
        
        {/* HEADER LOGO */}
        <div className="flex items-center gap-3 mb-8 bg-white p-2 rounded-xl shadow-lg">
          <img src={LogoPerusahaan} alt="Logo" className="h-7 w-auto object-contain" />
          <h1 className="text-md font-bold text-slate-900">Radikari Assistant</h1>
        </div>

        <nav className="space-y-6">
          {/* MENU UTAMA */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
              MENU UTAMA
            </p>
            <button 
              onClick={() => setActiveMenu('dashboard')}
              className={`w-full flex items-center p-3 rounded-xl transition ${
                activeMenu === 'dashboard' 
                ? 'bg-red-600 text-white shadow-lg' 
                : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="font-medium text-sm px-2">Dashboard</span>
            </button>
          </div>

          {/* DIVISI TERKAIT */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
              DIVISI TERKAIT
            </p>
            <div className="space-y-2">
              
              {/* HR (SDM) */}
              <button 
                onClick={() => setActiveMenu('hr')}
                className={`w-full flex items-center p-3 rounded-xl transition group ${
                  activeMenu === 'hr' 
                  ? 'bg-red-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                <span className={`mr-3 ${activeMenu === 'hr' ? 'text-white' : 'text-blue-400'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm">HR (SDM)</span>
              </button>

              {/* Finance */}
              <button 
                className="w-full flex items-center p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition group"
              >
                <span className="mr-3 text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm">Finance</span>
              </button>

              {/* Marketing */}
              <button 
                className="w-full flex items-center p-3 text-slate-400 hover:bg-slate-800 rounded-xl transition group"
              >
                <span className="mr-3 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </span>
                <span className="text-sm">Marketing</span>
              </button>

            </div>
          </div>
        </nav>
      </div>

      {/* FOOTER */}
      <div className="p-4 text-center text-slate-600 text-[10px] border-t border-slate-800 uppercase tracking-widest">
        <p>DIVISI IT SUPPORT ASSISTANT</p>
      </div>
    </aside>
  );
}