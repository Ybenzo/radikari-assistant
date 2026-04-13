import React, { useState } from 'react';

// --- UI COMPONENTS ---
import Sidebar from './components/Sidebar';
import UserHeader from './components/UserHeader';
import ChatAssistant from './components/ChatAssistant';
import MonitoringDashboard from './components/MonitoringDashboard';

// --- PAGES ---
import Login from './pages/Login'; 
import HRDashboard from './pages/HRDashboard'; 
import FinanceDashboard from './pages/FinanceDashboard';
import MarketingDashboard from './pages/MarketingDashboard';

// --- APPROVAL COMPONENTS ---
import AuditTable from './components/ApprovalDashboard/AuditTable';
import FilterBar from './components/ApprovalDashboard/FilterBar';
import StatsCards from './components/ApprovalDashboard/StatsCards';

export default function App() {
  const [user, setUser] = useState(null); 
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const [allLogs, setAllLogs] = useState([
    { id: "8821", action: "System Validation", user: "IT SUPPORT ADMIN", status: "Pending", request: "Pending approval for HR access request." },
    { id: "8825", action: "Database Migration", user: "DATABASE ENG", status: "Resolved", request: "Request to migrate legacy data." }
  ]);

  const handleLogout = () => {
    setUser(null);
    setActiveMenu('dashboard');
  };

  const renderContent = () => {
    if (activeMenu.endsWith('-approval')) return <ApprovalDashboard />;
    
    switch (activeMenu) {
      case 'dashboard': return <MonitoringDashboard user={user} />;
      case 'hr': return <HRDashboard />;
      case 'finance': return <FinanceDashboard />;
      case 'marketing': return <MarketingDashboard />;
      
      // --- MODE AI ASSISTANT ---
      case 'ai-assistant': 
        return (
          /* Di sini kita buat h-full supaya dia memenuhi layar container */
          <div className="h-full w-full animate-in fade-in duration-500">
             <ChatAssistant user={user} activeMenu={activeMenu} />
          </div>
        );

      default: return <MonitoringDashboard user={user} />;
    }
  };    

  if (!user) return <Login onLogin={(userData) => setUser(userData)} />;

  return (
    <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
      
      <Sidebar 
        userRole={user.role} activeMenu={activeMenu} setActiveMenu={setActiveMenu} 
        isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        {/* HEADER */}
        <header className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-[#020617]/80 backdrop-blur-xl z-40 shrink-0">
           <div className="flex flex-col">
            <h2 className="text-xl font-black uppercase italic text-white tracking-tighter leading-none">
              {activeMenu.replace('-', ' ')}
            </h2>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.3em]">Neural Link Active</p>
            </div>
          </div>
          <UserHeader user={user} onLogout={handleLogout} />
        </header>

        {/* UPDATE LOGIC: 
          1. Kalau activeMenu === 'ai-assistant', kita HAPUS 'p-8' dan 'overflow-y-auto'.
          2. Kita ganti jadi 'overflow-hidden' supaya scrollbar aplikasi tidak muncul.
          3. Dengan begini, ChatAssistant yang handle scroll-nya sendiri di dalam div.
        */}
        <div className={`flex-1 relative z-10 custom-scrollbar ${
          activeMenu === 'ai-assistant' 
          ? 'overflow-hidden p-0' 
          : 'overflow-y-auto p-8'
        }`}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

const ApprovalDashboard = () => <div className="text-white">Approval Dashboard Mode</div>;