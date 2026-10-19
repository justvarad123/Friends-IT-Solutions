import { useState, useEffect } from 'react';
import { Users, Mail, Phone, Clock, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, Download, Eye, Sparkles, LogOut, Lock } from 'lucide-react';
import { getStoredVisitors, getStoredLeads, VisitorLog, LeadInquiry } from '../data/tracker';
import { COMPANY_INFO } from '../data/content';

interface LiveLeadsDeskProps {
  adminUser: string | null;
  onLogout: () => void;
  onCallNow: () => void;
}

export function LiveLeadsDesk({ adminUser, onLogout, onCallNow }: LiveLeadsDeskProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'visitors'>('leads');
  const [visitors, setVisitors] = useState<VisitorLog[]>([]);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);

  const refreshData = () => {
    if (!adminUser) return;
    setVisitors(getStoredVisitors());
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    if (!adminUser) return;
    refreshData();
    const interval = setInterval(refreshData, 3000);
    return () => clearInterval(interval);
  }, [adminUser]);

  // If not logged in as admin, this desk is completely invisible to public users!
  if (!adminUser) {
    return null;
  }

  const exportCSV = () => {
    const header = 'ID,Name,Email,Phone,Service,Budget,SubmittedAt,AssignedTo\n';
    const rows = leads
      .map(
        (l) =>
          `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.service}","${l.budget}","${l.submittedAt}","${l.assignedTo}"`
      )
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Friends_IT_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm sm:max-w-md w-full px-2 sm:px-0">
      {/* Floating Pill Toggle Button - visible ONLY to authenticated admin */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-auto flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 text-white rounded-xl shadow-xl hover:bg-slate-800 transition-all border border-blue-500/50 active:scale-95 text-xs font-semibold ring-2 ring-blue-500/20"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold">Admin Portal ({adminUser})</span>
          <span className="text-[10px] bg-blue-600 px-1.5 py-0.5 rounded font-mono">
            {leads.length} Leads
          </span>
          <ChevronUp className="w-4 h-4 text-slate-400" />
        </button>
      )}

      {/* Expanded Admin Modal Box */}
      {isOpen && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[82vh] transition-all animate-in fade-in slide-in-from-bottom-4 duration-150">
          {/* Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                FIT
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold">Admin Console · {adminUser}</h4>
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                    AUTHORIZED
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">
                  Friends IT Solutions · Karvenagar, Pune
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={exportCSV}
                title="Export Leads to CSV"
                className="p-1.5 text-slate-300 hover:text-white rounded-md hover:bg-slate-800 transition-colors text-xs"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onLogout}
                title="Lock & Log out of Admin"
                className="p-1.5 text-rose-400 hover:text-rose-300 rounded-md hover:bg-slate-800 transition-colors text-xs"
              >
                <LogOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                aria-label="Minimize"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center border-b border-slate-100 bg-slate-50/80 p-1.5 gap-1.5 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('leads')}
              className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'leads'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Customer Inquiries ({leads.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('visitors')}
              className={`flex-1 py-1.5 px-3 rounded-lg font-semibold transition-all text-center flex items-center justify-center gap-1.5 ${
                activeTab === 'visitors'
                  ? 'bg-white text-blue-600 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Who Visited ({visitors.length})</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
            {activeTab === 'leads' ? (
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-blue-50/80 border border-blue-100 text-blue-900 text-[11px] flex items-center justify-between">
                  <span>⚡ Private Founder View: Live inquiry submissions from potential clients.</span>
                  <button
                    onClick={refreshData}
                    className="underline font-semibold ml-2 text-blue-700"
                  >
                    Refresh
                  </button>
                </div>

                {leads.map((lead) => (
                  <div
                    key={lead.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-slate-800 text-[11px]">{lead.id}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {lead.emailSentStatus}
                      </span>
                    </div>

                    <div>
                      <h5 className="font-bold text-slate-900 text-xs">{lead.name}</h5>
                      <p className="text-[11px] text-slate-600">{lead.company || 'Direct Client'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1 border-t border-slate-200/60">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Email:</span>
                        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline truncate block">
                          {lead.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Phone:</span>
                        <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline font-mono">
                          {lead.phone}
                        </a>
                      </div>
                    </div>

                    <div className="pt-1 text-[11px] text-slate-700">
                      <p><strong className="text-slate-500">Service:</strong> {lead.service}</p>
                      <p><strong className="text-slate-500">Budget:</strong> {lead.budget}</p>
                      <p className="text-slate-600 italic mt-1 line-clamp-2 bg-white p-2 rounded border border-slate-200">
                        "{lead.details}"
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Assigned: <strong className="text-slate-700">{lead.assignedTo}</strong></span>
                      <span>{lead.submittedAt}</span>
                    </div>

                    {/* Immediate Call / WhatsApp to Client */}
                    <div className="pt-2 flex items-center gap-2">
                      <a
                        href={`tel:${lead.phone}`}
                        className="flex-1 py-1 px-2 text-center text-[10px] font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                      >
                        Call Client
                      </a>
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(lead.name)},%20this%20is%20${encodeURIComponent(adminUser)}%20from%20Friends%20IT%20Solutions%20following%20up%20on%20your%20inquiry.`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-1 px-2 text-center text-[10px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-emerald-50/80 border border-emerald-100 text-emerald-900 text-[11px]">
                  <strong>Real-time Visitor Tracker:</strong> Shows which potential clients are currently browsing the Friends IT Solutions website and what sections they viewed.
                </div>

                {visitors.map((v) => (
                  <div
                    key={v.id}
                    className="p-3 rounded-xl border border-slate-200 bg-white text-xs space-y-1.5 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-700 font-semibold text-[11px]">{v.id}</span>
                      <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {v.status}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-600 flex items-center justify-between">
                      <span>📍 {v.location}</span>
                      <span className="text-slate-400 font-mono text-[10px]">{v.lastActive}</span>
                    </div>

                    <div className="text-[10px] text-slate-500 font-mono">
                      <span>{v.device} · {v.browser}</span>
                    </div>

                    {v.viewedSections.length > 0 && (
                      <div className="pt-1 text-[10px] text-slate-500 flex flex-wrap gap-1">
                        <span className="text-slate-400">Viewed:</span>
                        {v.viewedSections.map((sec, i) => (
                          <span key={i} className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">
                            {sec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer inside drawer */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 gap-2">
            <span className="truncate">Admin: <strong>{adminUser}</strong></span>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={onLogout}
                className="px-2.5 py-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-md transition-colors text-[10px]"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
