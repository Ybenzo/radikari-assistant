import React from 'react';

export default function HRDashboard() {
  // Data dummy buat ngisi konten biar gak kosong pas demo
  const stats = [
    { label: 'Total Personnel', value: '124', color: 'text-white' },
    { label: 'Active Node', value: '89', color: 'text-emerald-500' },
    { label: 'Pending Approval', value: '12', color: 'text-red-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER SECTION (Tanpa Tombol Chat Lama) */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-white uppercase italic tracking-tighter">
            Human Resources <span className="text-red-600">Operations</span>
          </h1>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] mt-2">
            Centralized Personnel Management System
          </p>
        </div>

        {/* Lu bisa taruh tombol Filter atau Export di sini kalau mau */}
        <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-slate-400 hover:text-white hover:bg-white/10 transition-all uppercase tracking-widest">
          Generate Report
        </button>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="p-6 bg-slate-900/40 border border-white/5 rounded-[2rem] hover:border-red-600/30 transition-all group">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-4xl font-black tracking-tighter ${stat.color} group-hover:scale-105 transition-transform`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* 3. MAIN CONTENT AREA (Contoh Table Karyawan) */}
      <div className="bg-slate-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
          <h3 className="text-[11px] font-black text-white uppercase tracking-widest">Recent Activity Log</h3>
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          </div>
        </div>
        
        <div className="p-10 text-center">
          <div className="inline-block p-4 rounded-full bg-red-600/10 mb-4">
             <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
          </div>
          <h4 className="text-white font-bold text-sm">Personnel Database Loaded</h4>
          <p className="text-[10px] text-slate-500 mt-1 max-w-xs mx-auto uppercase tracking-tighter">
            System ready for data entry and node synchronization. All requests are logged under current admin ID.
          </p>
        </div>
      </div>

    </div>
  );
}