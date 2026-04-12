import React from 'react';
import logoRK from '../assets/RK-Logo.png'; 

export default function Sidebar({ activeMenu, setActiveMenu, isSidebarOpen, setIsSidebarOpen, userRole }) {
  // 1. DATA MENU DENGAN KONFIGURASI ROLE & APPROVAL
  const allMenus = [
    { id: 'dashboard', label: 'Dashboard', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', roles: ['SUPER_ADMIN', 'HR', 'FINANCE', 'MARKETING'] },
    { id: 'hr', label: 'HR Division', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', roles: ['SUPER_ADMIN', 'HR'], hasApproval: true },
    { id: 'finance', label: 'Finance', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', roles: ['SUPER_ADMIN', 'FINANCE'], hasApproval: true },
    { id: 'marketing', label: 'Marketing', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z', roles: ['SUPER_ADMIN', 'MARKETING'], hasApproval: true }
  ];

  // 2. FILTER MENU BERDASARKAN ROLE
  const filteredMenus = allMenus.filter(m => m.roles.includes(userRole));

  return (
    <div className={`h-full bg-[#0f172a] border-r border-slate-800/50 flex flex-col transition-all duration-300 shrink-0 relative ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      
      {/* TOMBOL BUKA-TUTUP (TOGGLE) */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute -right-3 top-10 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white border-2 border-[#0f172a] z-50 hover:scale-110 transition-transform shadow-lg"
      >
        <svg className={`w-4 h-4 transition-transform duration-300 ${isSidebarOpen ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* BRAND AREA */}
      <div className={`p-6 flex items-center shrink-0 h-24 ${isSidebarOpen ? 'justify-start' : 'justify-center'}`}>
        <div className="flex items-center gap-3">
          <img src={logoRK} alt="Logo RK" className="h-8 w-auto object-contain" />
          {isSidebarOpen && (
            <div className="flex flex-col leading-none animate-in fade-in duration-300">
              <h1 className="text-sm font-black uppercase italic text-white">Radikari</h1>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">Assistant</span>
            </div>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-3 space-y-2 mt-4 overflow-y-auto">
        {filteredMenus.map((menu) => (
          <div key={menu.id} className="space-y-1">
            <button
              onClick={() => setActiveMenu(menu.id)}
              className={`
                w-full flex items-center rounded-2xl transition-all duration-200 group relative
                ${activeMenu.startsWith(menu.id) 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-900/20 p-3.5' 
                  : 'text-slate-500 hover:bg-slate-800 hover:text-slate-200 p-3'}
                ${!isSidebarOpen ? 'justify-center' : 'gap-4 px-4'}
              `}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={menu.icon} />
              </svg>
              
              {isSidebarOpen && (
                <span className="text-[11px] uppercase tracking-widest font-black truncate">
                  {menu.label}
                </span>
              )}
            </button>

            {/* SUB-MENU: CENTER APPROVAL (HANYA MUNCUL JIKA AKTIF & SIDEBAR TERBUKA) */}
            {menu.hasApproval && activeMenu.startsWith(menu.id) && isSidebarOpen && (
              <button
                onClick={() => setActiveMenu(`${menu.id}-approval`)}
                className={`w-full flex items-center gap-3 p-2.5 ml-8 rounded-xl transition-all animate-in slide-in-from-left-2 duration-200 ${activeMenu === `${menu.id}-approval` ? 'text-white' : 'text-slate-600 hover:text-white'}`}
              >
                <div className={`w-1 h-1 rounded-full ${activeMenu === `${menu.id}-approval` ? 'bg-red-600' : 'bg-slate-700'}`}></div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Center Approval</span>
              </button>
            )}
          </div>
        ))}
      </nav>

      {/* FOOTER STATUS */}
      {isSidebarOpen && (
        <div className="p-6 border-t border-slate-800/50">
          <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-[9px] text-slate-500 font-mono uppercase tracking-tighter">Node Active</p>
          </div>
        </div>
      )}
    </div>
  );
}