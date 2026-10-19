interface ProjectCardVisualProps {
  id: string;
  category: string;
}

export function ProjectCardVisual({ id, category }: ProjectCardVisualProps) {
  if (id === 'ecommerce-platform' || id === 'finpulse') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 border-b border-slate-200/80 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-slate-800 font-bold">Storefront & Checkout Engine</span>
          </div>
          <span className="text-emerald-700 font-bold font-mono text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            UPI & RAZORPAY LIVE
          </span>
        </div>

        {/* Realistic interactive checkout preview */}
        <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-700 font-medium">Cart: 3 Items (Express Dispatch)</span>
            <span className="font-bold text-slate-900 font-mono">₹3,450.00</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-[10px] font-semibold border border-blue-200">
              One-Tap Google Pay / PhonePe
            </span>
            <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-[10px] font-semibold border border-emerald-200">
              WhatsApp Alert Enabled
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span className="font-mono text-blue-600 font-semibold">CORE WEB VITALS: 99/100</span>
          <span className="text-slate-600 font-medium">NEXT.JS 15 SSR</span>
        </div>
      </div>
    );
  }

  if (id === 'clinic-telehealth' || id === 'apexcare') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="font-bold text-slate-900">Clinic Management & Patient App</span>
          <span className="text-indigo-600 text-[10px] font-mono font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
            IOS & ANDROID
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-2xs space-y-1.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-slate-900">Dr. S. Kulkarni, MD</span>
            <span className="text-emerald-600 font-mono text-[10px] font-bold">● Active OPD</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono bg-slate-50 p-1 rounded">
            <span>Next Available Slot: Today, 4:15 PM</span>
            <span className="text-blue-600 font-semibold">Token #18</span>
          </div>
          <p className="text-[10px] text-slate-500">Auto SMS & WhatsApp digital prescription sent upon consult</p>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span className="font-mono text-indigo-600 font-semibold">REACT NATIVE</span>
          <span className="text-slate-600">CROSS-PLATFORM</span>
        </div>
      </div>
    );
  }

  if (id === 'whatsapp-ai-agent' || id === 'synthetix-ai') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="text-emerald-700 font-bold text-xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>WhatsApp AI Customer Agent</span>
          </span>
          <span className="text-slate-500 text-[10px] font-mono font-semibold">24/7 AUTONOMOUS</span>
        </div>

        <div className="space-y-1.5 py-1 text-[11px]">
          <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-2xs max-w-[85%] text-[10px]">
            "Can you share pricing for full-stack web and mobile development in Pune?"
          </div>
          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-2xs ml-auto max-w-[85%] text-[10px]">
            "Hello! Friends IT Solutions in Karvenagar offers MVPs in 10-20 days starting from ₹25,000. Would you like a call with Varad or Ram today?"
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/80">
          <span className="font-semibold text-slate-700">GEMINI LLM + RAG</span>
          <span className="text-emerald-700 font-bold font-mono">LATENCY &lt; 2 SEC</span>
        </div>
      </div>
    );
  }

  if (id === 'erp-workflow-pipeline' || id === 'logixflow') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="font-bold text-slate-900">ERP & Automated Invoicing Pipeline</span>
          <span className="text-amber-700 text-[10px] font-mono font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
            EVENT QUEUE
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-2xs space-y-1.5 font-mono text-[10px]">
          <div className="flex items-center justify-between text-slate-700">
            <span>[Order #4921]</span>
            <span className="text-emerald-600 font-bold">✓ Synced to Tally</span>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <span>[GST Invoice INV-892]</span>
            <span className="text-blue-600 font-bold">✓ PDF Dispatched</span>
          </div>
          <div className="flex items-center justify-between text-slate-700">
            <span>[Warehouse Webhook]</span>
            <span className="text-indigo-600 font-bold">✓ AWB Generated</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span className="font-mono text-amber-700 font-semibold">AUTOMATED WEBHOOKS</span>
          <span className="text-slate-600">ZERO MANUAL ENTRY</span>
        </div>
      </div>
    );
  }

  if (id === 'real-estate-showcase' || id === 'proptech-prime') {
    return (
      <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
        <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
          <span className="font-bold text-slate-900">Property Showcase & Virtual Tour</span>
          <span className="text-blue-600 text-[10px] font-mono font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
            3D & EMI ENGINE
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-2xs space-y-1.5 text-[10px]">
          <div className="flex items-center justify-between font-bold text-slate-800">
            <span>Kothrud Skyline Heights · 3 BHK Luxury</span>
            <span className="text-blue-600 font-mono">₹1.45 Cr</span>
          </div>
          <div className="flex items-center justify-between text-slate-500 bg-slate-50 p-1 rounded font-mono">
            <span>EMI: ₹84,200/mo</span>
            <span>Interactive Floor Plan 3D</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Direct Site Visit Booked via WhatsApp</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span className="font-mono text-blue-600 font-semibold">HIGH-CONVERTING LEADS</span>
          <span className="text-slate-600">GOOGLE MAPS API</span>
        </div>
      </div>
    );
  }

  // Default / saas-analytics-dashboard
  return (
    <div className="w-full h-48 bg-slate-50 p-4 flex flex-col justify-between font-sans text-xs border-b border-slate-200 relative overflow-hidden select-none">
      <div className="flex items-center justify-between text-slate-600 pb-2 border-b border-slate-200/80">
        <span className="font-bold text-slate-900">Multi-Tenant Cloud Analytics</span>
        <span className="text-indigo-600 text-[10px] font-mono font-semibold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
          SAAS DASHBOARD
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[10px] text-slate-500 block">Monthly Revenue</span>
          <span className="font-mono font-bold text-slate-900 text-xs">₹18,40,000</span>
          <span className="text-[9px] text-emerald-600 font-medium block">+24% MoM</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[10px] text-slate-500 block">Active Tenants</span>
          <span className="font-mono font-bold text-slate-900 text-xs">142 Companies</span>
          <span className="text-[9px] text-blue-600 font-medium block">99.98% Uptime</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200/80">
        <span className="font-mono text-indigo-600 font-semibold">REACT 19 + POSTGRESQL</span>
        <span className="text-slate-600">ROLE RBAC</span>
      </div>
    </div>
  );
}
