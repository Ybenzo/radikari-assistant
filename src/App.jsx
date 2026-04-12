import React, { useState } from 'react';

// Import UI Components
import Sidebar from './components/Sidebar';
import UserHeader from './components/UserHeader';
import MaintenancePage from './components/MaintenancePage';
import MonitoringDashboard from './components/MonitoringDashboard';
import ChatAssistant from './components/ChatAssistant';

// Import Pages (Sudah dipindah ke folder pages)
import Login from './pages/Login'; 
import HRDashboard from './pages/HRDashboard'; 
import FinanceDashboard from './pages/FinanceDashboard';
import MarketingDashboard from './pages/MarketingDashboard';

export default function App() {
  const [user, setUser] = useState(null); 
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    setUser(null);
    setActiveMenu('dashboard');
  };

  const renderContent = () => {
    // Logic Sub-menu Approval
    if (activeMenu.endsWith('-approval')) {
      const divisionName = activeMenu.split('-')[0].toUpperCase();
      return <MaintenancePage moduleName={`${divisionName} APPROVAL`} />;
    }

    // Logic Render Halaman
    switch (activeMenu) {
      case 'dashboard': return <MonitoringDashboard user={user} />;
      case 'hr': return <HRDashboard />;
      case 'finance': return <FinanceDashboard />;
      case 'marketing': return <MarketingDashboard />;
      default: return <MonitoringDashboard user={user} />;
    }
  };

  // Jika belum login, tampilkan Login.jsx
  if (!user) {
    return <Login onLogin={(userData) => setUser(userData)} />;
  }

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      {/* SIDEBAR */}
      <Sidebar 
        userRole={user.role} 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        {/* HEADER */}
        <header className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-[#020617]/80 backdrop-blur-xl z-40">
          <div className="flex flex-col">
            <h2 className="text-xl font-black uppercase italic text-white tracking-tighter leading-none">
              {activeMenu.replace('-', ' ')}
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
              <p className="text-[8px] font-mono font-bold text-slate-500 uppercase tracking-[0.3em]">SECURE NODE ACTIVE</p>
            </div>
          </div>
          {/* PROFILE DENGAN DROPDOWN */}
          <UserHeader user={user} onLogout={handleLogout} />
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {renderContent()}
        </div>

        {/* CHAT AI (Menerima Data User untuk Greeting) */}
        <ChatAssistant user={user} />

        {/* BACKGROUND DECOR */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full"></div>
      </main>
    </div>
  );
}