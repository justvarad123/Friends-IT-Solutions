import { useState } from 'react';
import { MessageCircle, Phone, X, Lock, Calendar, Calculator, Mail } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface QuickActionWidgetProps {
  onOpenQuote: () => void;
}

export function QuickActionWidget({ onOpenQuote }: QuickActionWidgetProps) {
  const { navigate } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl border border-slate-200 shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-2 duration-150 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Engineering Hub Online</span>
              </span>
              <p className="text-xs font-bold text-slate-900 mt-0.5">Quick Project Inquiry</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Close widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-500 leading-snug">
            Connect with our engineering studio in Karvenagar, Pune for quotes, blueprints, and calls:
          </p>

          <div className="space-y-1.5">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                navigate('contact');
              }}
              className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-between shadow-xs transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Us & Founder Phone</span>
              </span>
              <span className="text-[10px] font-mono opacity-80">Direct</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                navigate('book');
              }}
              className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                <span>Book 30-min Discovery</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-600">Free</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                navigate('estimator');
              }}
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-between transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-blue-400" />
                <span>Instant Cost Estimator</span>
              </span>
              <span className="text-[10px] font-mono text-slate-300">₹</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Karvenagar, Pune</span>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                navigate('admin');
              }}
              className="hover:text-blue-600 flex items-center gap-1 transition-colors"
            >
              <Lock className="w-2.5 h-2.5 text-amber-500" />
              <span>Founder 2FA Portal</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/25 transition-all active:scale-95 text-xs font-bold focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 outline-none"
        aria-label="Quick Actions"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-4 h-4" />
        <span>Quick Contact</span>
      </button>
    </div>
  );
}
