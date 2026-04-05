import { Activity, Search, CheckCircle2, Clock, AlertCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { auditData } from "./data-logs";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 text-slate-900 font-sans selection:bg-indigo-100">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold flex items-center gap-3 tracking-tight">
              <Image 
                  src="/radikari-logo.png" 
                  alt="LOGO Radikari" 
                  width={40}  // Ukuran dalam pixel
                  height={40} 
                  className="rounded-full object-cover border-2 border-indigo-100 shadow-sm"
                />
              RADIKARI FE OPS
            </h1>
            <p className="text-slate-500 text-sm mt-1">Monitoring internal system & AI approvals for RADIKARI</p>
          </div>
          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border shadow-sm border-slate-200">
            <Activity className="text-green-500 animate-pulse" size={18} />
            <span className="text-sm font-semibold text-slate-700">System: Operational</span>
          </div>
        </div>

        {/* FILTER & SEARCH BAR */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 text-slate-400" size={18} />
            <Input placeholder="Search logs by ID or User..." className="pl-10 bg-white border-slate-200 focus:ring-indigo-500" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">Filter Status</Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-100">Refresh Logs</Button>
          </div>
        </div>

        {/* AUDIT TABLE SECTION */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50/50 border-b border-slate-100">
              <TableRow>
                <TableHead className="w-[120px] font-bold text-slate-600">LOG ID</TableHead>
                <TableHead className="font-bold text-slate-600">ACTION</TableHead>
                <TableHead className="font-bold text-slate-600">USER</TableHead>
                <TableHead className="font-bold text-slate-600">STATUS</TableHead>
                <TableHead className="text-right font-bold text-slate-600">DETAILS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditData.map((log) => (
                <TableRow key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  {/* 1. ID */}
                  <TableCell className="font-mono text-xs font-semibold text-indigo-600">{log.id}</TableCell>

                  {/* 2. ACTION & CATEGORY (BAGIAN YANG DIUPDATE) */}
                <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-700">{log.action}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                            {log.category}
                          </span>
                        </div>
                      </TableCell>

                      {/* 3. USER */}
                      <TableCell className="text-slate-600">{log.user}</TableCell>

                      {/* 4. STATUS */}
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {log.status === "Success" && <CheckCircle2 size={16} className="text-green-500" />}
                          {log.status === "Pending" && <Clock size={16} className="text-amber-500" />}
                          {log.status === "Error" && <AlertCircle size={16} className="text-red-500" />}
                          <span className={`text-sm font-semibold ${
                            log.status === 'Success' ? 'text-green-700' : 
                            log.status === 'Pending' ? 'text-amber-700' : 'text-red-700'
                          }`}>
                            {log.status}
                          </span>
                        </div>
                      </TableCell>
                      
                      {/* 5. MODAL / DETAILS (Sisanya tetap sama) */}
                      <TableCell className="text-right">
                        {/* ... kode Dialog kamu di sini ... */}
                      </TableCell>
                  <TableCell className="text-right">
                    
                    {/* MODAL APPROVAL / MESSAGE BUBBLE */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:bg-indigo-50 hover:text-indigo-600 rounded-full transition-all">
                          <Eye size={18} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] bg-white text-slate-900 border-none shadow-2xl rounded-3xl p-6">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold tracking-tight">Review Request</DialogTitle>
                          <DialogDescription className="text-slate-500 pt-1">
                            Tracking ID: <span className="font-mono font-bold text-indigo-600">{log.id}</span>
                          </DialogDescription>
                        </DialogHeader>

                        {/* MESSAGE BUBBLES AREA */}
                        <div className="flex flex-col gap-6 py-8 px-1 max-h-[400px] overflow-y-auto">
                          
                          {/* USER BUBBLE */}
                          <div className="flex flex-col items-end group">
                            <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] text-sm shadow-md leading-relaxed">
                              {log.request}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-black tracking-widest uppercase">{log.user} • {log.time}</span>
                          </div>

                          {/* AI BUBBLE */}
                          <div className="flex flex-col items-start group">
                            <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm border border-slate-200 shadow-sm leading-relaxed">
                              {log.aiResponse}
                            </div>
                            <span className="text-[10px] text-slate-400 mt-2 font-black tracking-widest uppercase">AI ASSISTANT</span>
                          </div>

                        </div>

                        <DialogFooter className="border-t border-slate-100 pt-6 flex gap-3 sm:justify-between">
                          <Button variant="outline" className="flex-1 rounded-xl h-11 border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700 font-bold transition-all">
                            Reject
                          </Button>
                          <Button className="flex-1 rounded-xl h-11 bg-indigo-600 text-white hover:bg-indigo-700 font-bold shadow-lg shadow-indigo-100 transition-all">
                            Approve & Deploy
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* FOOTER HINT */}
        <p className="text-center text-slate-400 text-xs mt-10 uppercase tracking-[0.2em] font-medium">
          Frontend Ops Dashboard • Built with Next.js & Shadcn UI
        </p>
      </div>
    </div>
  );
}