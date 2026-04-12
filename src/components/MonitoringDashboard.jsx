import React from 'react';

export default function MonitoringDashboard({ user }) {
  if (!user) return null;

  const teamData = {
    HR: [
      { name: "Siti Aminah", role: "Recruiter", status: "Online" },
      { name: "Budi Santoso", role: "Payroll", status: "Away" }
    ],
    FINANCE: [
      { name: "Sultan Finance", role: "Treasurer", status: "Online" },
      { name: "Lestari", role: "Auditor", status: "Online" }
    ],
    MARKETING: [
      { name: "Sakti Marketing", role: "SEO Spec", status: "Online" },
      { name: "Indah Creative", role: "Content", status: "Online" }
    ],
    SUPER_ADMIN: [
      { name: "Danar Putera", role: "System Arch", status: "Online" }
    ]
  };

  const currentTeam = teamData[user.role] || teamData.SUPER_ADMIN;

  return (
    <div className="space-y-6 animate-in fade-in duration-700">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 p-8 rounded-[2.5rem] flex items-center gap-6">
        <div className="w-20 h-20 rounded-3xl bg-red-600 flex items-center justify-center text-3xl font-black text-white">{user.name.charAt(0)}</div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">{user.name}</h3>
          <p className="text-red-500 font-mono text-[9px] tracking-[0.3em] uppercase mt-1">Authorized {user.role} Node</p>
        </div>
      </div>
      <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8">
        <h5 className="text-[10px] font-black uppercase tracking-widest text-white mb-6 underline decoration-red-600 underline-offset-8">Team Directory</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentTeam.map((m, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">{m.name.charAt(0)}</div>
              <div>
                <p className="text-[10px] font-black text-white uppercase tracking-tight">{m.name}</p>
                <p className="text-[8px] text-slate-500 italic">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}