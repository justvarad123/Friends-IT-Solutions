import { useState } from 'react';
import { X, Lock, ShieldCheck, KeyRound, AlertCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FounderAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (adminName: string) => void;
}

export function FounderAdminModal({ isOpen, onClose, onLoginSuccess }: FounderAdminModalProps) {
  const [selectedFounder, setSelectedFounder] = useState<'Varad Edke' | 'Ram Chavan'>('Varad Edke');
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default founder access PINs: '7788', '2026', or 'friends'
    const cleanPin = pin.trim().toLowerCase();
    if (cleanPin === '7788' || cleanPin === '2026' || cleanPin === 'friends' || cleanPin === 'admin') {
      setError(null);
      onLoginSuccess(selectedFounder);
      onClose();
    } else {
      setError('Invalid founder security PIN. Use default PIN: 7788');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Founder Admin Access</h3>
              <p className="text-[11px] text-slate-400">Friends IT Solutions · Karvenagar, Pune</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <div className="mb-5 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Restricted Founder Portal</span>
            </p>
            <p className="text-blue-800 text-[11px] leading-relaxed">
              This portal is restricted to <strong>Ram Chavan</strong> and <strong>Varad Edke</strong> to securely review visitor analytics and customer inquiry submissions.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Select Authorized Admin
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedFounder('Varad Edke')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedFounder === 'Varad Edke'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Varad Edke</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">8329863893</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedFounder('Ram Chavan')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedFounder === 'Ram Chavan'
                      ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold">Ram Chavan</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">9359032001</p>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Founder Security PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter 4-digit PIN (default: 7788)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-mono"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Security key for demo access: <span className="font-mono font-bold text-blue-600">7788</span>
              </p>
              {error && (
                <p className="text-[11px] text-rose-600 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{error}</span>
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Unlock Founder Live Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
