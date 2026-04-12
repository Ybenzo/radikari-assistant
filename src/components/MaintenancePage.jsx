import React from 'react';

export default function MaintenancePage({ moduleName }) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-500">
      <div className="relative mb-8">
        <div className="w-24 h-24 border-2 border-red-600/20 rounded-full flex items-center justify-center animate-pulse">
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 1113.5 17.25l-1.42-1.42M12 12a3 3 0 110-6 3 3 0 010 6z" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
      </div>

      <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">
        {moduleName} <span className="text-red-600">Under Construction</span>
      </h2>
      
      <div className="max-w-md space-y-4">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] leading-relaxed">
          The requested approval node is currently being integrated with the <span className="text-white">Central Database Service</span>. 
        </p>
        
        <div className="bg-black/40 border border-white/5 p-4 rounded-2xl font-mono text-[9px] text-left text-emerald-500/70">
          <p className="mb-1 uppercase tracking-widest text-emerald-500 font-bold underline">System Log:</p>
          <p>{`> DEPLOYING_APPROVAL_MODULE_${moduleName.replace(' ', '_')}...`}</p>
          <p>{`> STATUS: STAGING_PHASE`}</p>
          <p>{`> PENDING_BACKEND_INTEGRATION`}</p>
          <p className="animate-pulse">{`> _`}</p>
        </div>
      </div>
    </div>
  );
}