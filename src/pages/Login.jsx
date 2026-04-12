import React from 'react';

export default function Login({ onLogin }) {
  const accounts = [
    { email: 'danar.hr@rajawaliberdikari.co.id', name: 'Danar Putera', role: 'HR' },
    { email: 'finance.lead@rajawaliberdikari.co.id', name: 'Sultan Finance', role: 'FINANCE' },
    { email: 'creative.mkt@rajawaliberdikari.co.id', name: 'Sakti Marketing', role: 'MARKETING' },
    { email: 'admin.it@rajawaliberdikari.co.id', name: 'IT Support Admin', role: 'SUPER_ADMIN' }
  ];

  return (
    <div className="h-screen bg-[#020617] flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 bg-slate-900/40 p-10 rounded-[3rem] border border-white/5 backdrop-blur-xl">
        <div className="text-center">
          <h1 className="text-2xl font-black italic text-white uppercase tracking-tighter">RADIKARI <span className="text-red-600">OS</span></h1>
          <p className="text-[9px] text-slate-500 uppercase tracking-[0.3em] mt-2 font-mono">Select Authorized Account</p>
        </div>
        <div className="space-y-3">
          {accounts.map((acc) => (
            <button
              key={acc.email}
              onClick={() => onLogin(acc)}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-red-600/50 hover:bg-red-600/5 transition-all text-left group"
            >
              <p className="text-[11px] font-black text-white uppercase group-hover:text-red-500">{acc.name}</p>
              <p className="text-[9px] text-slate-500 font-mono italic">{acc.email}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}