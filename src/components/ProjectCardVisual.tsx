interface ProjectCardVisualProps {
  id: string;
  category: string;
}

export function ProjectCardVisual({ id, category }: ProjectCardVisualProps) {
  if (id === 'finpulse') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-mono text-[11px] border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 border-b border-slate-200/80 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-slate-800 font-bold font-sans">FinPulse Web Portal</span>
          </div>
          <span className="text-emerald-700 font-bold tabular-nums">+₹42,90,120.00</span>
        </div>
        {/* Crisp Line Chart SVG */}
        <div className="py-2">
          <svg className="w-full h-20 overflow-visible" viewBox="0 0 300 80" fill="none">
            <path
              d="M0 60 Q 50 45, 90 55 T 160 30 T 230 40 T 300 15"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0 60 Q 50 45, 90 55 T 160 30 T 230 40 T 300 15 L 300 80 L 0 80 Z"
              fill="url(#blue-light-grad)"
              opacity="0.25"
            />
            <defs>
              <linearGradient id="blue-light-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span>REAL-TIME QUERIES</span>
          <span className="text-blue-600 font-semibold font-mono">LATENCY: 12ms</span>
          <span className="text-slate-700 font-semibold">SUB-SECOND</span>
        </div>
      </div>
    );
  }

  if (id === 'apexcare') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="font-bold text-slate-900">ApexCare Clinic Suite</span>
          <span className="text-indigo-600 text-[10px] font-mono font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            IOS & ANDROID
          </span>
        </div>
        <div className="flex items-center gap-3 my-auto">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold shrink-0">
            DR
          </div>
          <div className="space-y-1">
            <p className="text-slate-900 text-xs font-bold">Dr. Sunita Deshmukh, MD</p>
            <p className="text-[11px] text-slate-500">Baner Cardiology Clinic, Pune</p>
            <div className="flex items-center gap-1.5 text-[10px] text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Instant WhatsApp Prescription</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-slate-600 pt-2 border-t border-slate-200/80">
          <div>Next: 11:30 AM</div>
          <div>Token #14</div>
          <div className="text-indigo-600 font-bold">4.9 ★★★★★</div>
        </div>
      </div>
    );
  }

  if (id === 'synthetix-ai') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="text-emerald-700 font-bold text-xs flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>WhatsApp AI Customer Agent</span>
          </span>
          <span className="text-slate-400 text-[10px] font-mono">24/7 LIVE</span>
        </div>
        <div className="space-y-2 py-1 text-[11px]">
          <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs max-w-[85%]">
            "Hello! Can I see your catalog and pricing for Pune delivery?"
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-2xs ml-auto max-w-[85%] text-right">
            "Certainly! Here is our 2026 catalog with Karvenagar dispatch terms."
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-200/80">
          <span className="font-semibold text-slate-700">GEMINI & LANGCHAIN</span>
          <span className="text-emerald-700 font-bold font-mono">85% AUTO RESOLVED</span>
        </div>
      </div>
    );
  }

  if (id === 'logixflow') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="text-blue-700 font-bold">LogixFlow Order Dispatch</span>
          <span className="text-emerald-700 text-[10px] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            99.9% ACCURACY
          </span>
        </div>
        <div className="flex items-center justify-between py-2 text-slate-700">
          <div className="text-center p-2 rounded-lg bg-white border border-slate-200 flex-1 mx-1 text-[11px]">
            <div className="font-bold text-slate-900">Shopify</div>
            <div className="text-blue-600 text-[10px] mt-0.5">3.5k Orders</div>
          </div>
          <div className="text-slate-400 font-bold">→</div>
          <div className="text-center p-2 rounded-lg bg-white border border-slate-200 flex-1 mx-1 text-[11px]">
            <div className="font-bold text-slate-900">Webhook</div>
            <div className="text-indigo-600 text-[10px] mt-0.5">&lt;50ms</div>
          </div>
          <div className="text-slate-400 font-bold">→</div>
          <div className="text-center p-2 rounded-lg bg-white border border-slate-200 flex-1 mx-1 text-[11px]">
            <div className="font-bold text-slate-900">Tally / ERP</div>
            <div className="text-emerald-700 text-[10px] mt-0.5">Synced</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-200/80">
          <span>PARCELS: 3,500 / DAY</span>
          <span className="text-blue-600 font-bold font-mono">AUTOMATED DISPATCH</span>
        </div>
      </div>
    );
  }

  if (id === 'proptech-prime') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="text-indigo-700 font-bold">Aura Realty Portal</span>
          <span className="text-slate-500 text-[10px] font-mono">PUNE PROPERTIES</span>
        </div>
        <div className="py-2 text-center text-slate-600 flex items-center justify-center">
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-left w-full max-w-[240px]">
            <p className="text-xs font-bold text-slate-900">2 & 3 BHK Luxury Residences</p>
            <p className="text-[11px] text-slate-500">Karvenagar / Kothrud Pune</p>
            <p className="text-xs font-extrabold text-blue-600 font-mono mt-1">₹85 L – ₹1.45 Cr</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-200/80">
          <span>VIRTUAL TOURS</span>
          <span className="text-emerald-700 font-bold font-mono">+140% INQUIRIES</span>
        </div>
      </div>
    );
  }

  // OmniVoice AI
  return (
    <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
      <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
        <span className="text-teal-700 font-bold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-teal-500" />
          <span>LeadQual AI Caller</span>
        </span>
        <span className="text-slate-400 text-[10px] font-mono">&lt; 60 SEC CALLS</span>
      </div>
      <div className="flex items-center justify-center gap-1.5 py-4">
        {[25, 50, 80, 95, 65, 90, 45, 75, 100, 35, 60, 85, 45, 65].map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-teal-600/80 rounded-full"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-200/80">
        <span>INSTANT CALLBACK BOT</span>
        <span className="text-emerald-700 font-bold font-mono">2X CONVERSION</span>
      </div>
    </div>
  );
}
