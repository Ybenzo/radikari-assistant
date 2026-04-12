import React from 'react';

export default function MarketingDashboard() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-[#020617] p-8">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-purple-500/10 rounded-3xl animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center text-purple-500">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
      </div>
      <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">
        Marketing <span className="text-purple-500">Offline</span>
      </h2>
      <p className="text-slate-500 font-mono text-[10px] mt-2 uppercase tracking-[0.4em]">
        Action: Reconnecting Advertising APIs...
      </p>
    </div>
  );
}