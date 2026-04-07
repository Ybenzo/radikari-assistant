import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import HRDashboard from './components/HRDashboard'; // Komponen baru

export default function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex h-screen bg-[#0f172a]">
      {/* Kirim fungsi setActiveMenu ke Sidebar */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <main className="flex-1 flex flex-col">
        {/* Logika Ganti Konten */}
        {activeMenu === 'dashboard' && <ChatInterface />}
        {activeMenu === 'hr' && <HRDashboard />}
        {activeMenu === 'finance' && <div className="p-10 text-white">Konten Finance</div>}
      </main>
    </div>
  );
}