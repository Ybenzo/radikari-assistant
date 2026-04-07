import React from 'react';

export default function HRDashboard() {
  // Simulasi data SOP dari backend
  const sopFiles = [
    { 
      id: 1, 
      title: "SOP Perekrutan Karyawan Layanan", 
      version: "v2.1", 
      date: "12 Maret 2026", 
      category: "Recruitment" 
    },
    { 
      id: 2, 
      title: "Prosedur Onboarding Staff Baru", 
      version: "v1.0", 
      date: "05 Februari 2026", 
      category: "Training" 
    },
    { 
      id: 3, 
      title: "Kebijakan Cuti & Izin Operasional", 
      version: "v3.2", 
      date: "20 Januari 2026", 
      category: "Operational" 
    }
  ];

  return (
    <div className="flex-1 bg-[#0f172a] p-8 overflow-y-auto text-slate-200">
      {/* Header Halaman */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">HR - Dokumen SOP</h1>
        <p className="text-sm text-slate-400 mt-1">
          Daftar panduan standar operasional untuk divisi Human Resources.
        </p>
      </div>

      {/* Kontainer Kartu SOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sopFiles.map((file) => (
          <div 
            key={file.id} 
            className="bg-[#1e293b] border border-slate-700 p-6 rounded-2xl hover:border-red-500/50 transition-all group shadow-lg"
          >
            {/* Ikon File */}
            <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Informasi File */}
            <h3 className="font-bold text-white text-lg mb-1 leading-tight">
              {file.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">
                {file.category}
              </span>
              <span className="text-[10px] text-slate-500">
                Ver {file.version}
              </span>
            </div>

            <div className="text-[11px] text-slate-500 mb-6 italic">
              Terakhir diperbarui: {file.date}
            </div>

            {/* Tombol Action */}
            <button className="w-full bg-slate-800 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}