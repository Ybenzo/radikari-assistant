import React from 'react';

export default function FinanceDashboard() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#020617] p-8">
      <div className="w-20 h-20 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mb-6"></div>
      <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">
        Finance <span className="text-amber-500">Under Maintenance</span>
      </h2>
      <p className="text-slate-500 font-mono text-[10px] mt-2 uppercase tracking-[0.4em]">
        Status: Encrypting Ledger Databases...
      </p>
    </div>
  );
}