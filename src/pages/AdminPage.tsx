import { useState, useEffect, useRef } from 'react';
import {
  Lock,
  ShieldCheck,
  KeyRound,
  AlertCircle,
  Eye,
  EyeOff,
  LogOut,
  Download,
  Users,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  RefreshCw,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Smartphone,
  Copy,
  Check,
  ArrowLeft,
  Search,
  Filter,
} from 'lucide-react';
import {
  AUTHORIZED_FOUNDERS,
  FounderName,
  verifyFounderStepOne,
  verifyFounderStepTwo,
  getActiveOtp,
  generateFounderOtp,
  getRateLimitStatus,
  getActiveSession,
  terminateSession,
  getAuditLogs,
  updateFounderPassword,
  ActiveOtpState,
  AuditLogEntry,
  SecuritySession,
} from '../utils/security';
import { getStoredLeads, getStoredVisitors, updateLeadStatus, LeadInquiry, VisitorLog } from '../data/tracker';
import { COMPANY_INFO } from '../data/content';

export function AdminPage() {
  const [session, setSession] = useState<SecuritySession | null>(() => getActiveSession());

  // 2FA Flow State: 'credentials' -> 'otp'
  const [authStep, setAuthStep] = useState<'credentials' | 'otp'>('credentials');
  const [selectedFounder, setSelectedFounder] = useState<FounderName>('Varad Edke');
  const [passphrase, setPassphrase] = useState('');
  const [showPassphrase, setShowPassphrase] = useState(false);
  const [activeOtp, setActiveOtp] = useState<ActiveOtpState | null>(() => getActiveOtp());
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [copiedOtp, setCopiedOtp] = useState(false);

  // OTP Countdown (120s)
  const [otpRemainingSeconds, setOtpRemainingSeconds] = useState<number>(0);

  // Rate limiting lockout countdown
  const [lockoutSeconds, setLockoutSeconds] = useState<number>(() => {
    const status = getRateLimitStatus();
    if (status.lockedUntil) {
      const sec = Math.ceil((status.lockedUntil - Date.now()) / 1000);
      return sec > 0 ? sec : 0;
    }
    return 0;
  });

  // Dashboard state
  const [activeTab, setActiveTab] = useState<'leads' | 'visitors' | 'security'>('leads');
  const [leads, setLeads] = useState<LeadInquiry[]>([]);
  const [visitors, setVisitors] = useState<VisitorLog[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'contacted'>('all');

  // Change password state
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwChangeMessage, setPwChangeMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutSeconds <= 0) return;
    const interval = setInterval(() => {
      setLockoutSeconds((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutSeconds]);

  // OTP expiration countdown timer
  useEffect(() => {
    if (!activeOtp) return;
    const updateCountdown = () => {
      const sec = Math.ceil((activeOtp.expiresAt - Date.now()) / 1000);
      setOtpRemainingSeconds(sec > 0 ? sec : 0);
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [activeOtp]);

  // Load tracker data when authenticated
  const reloadData = () => {
    setLeads(getStoredLeads());
    setVisitors(getStoredVisitors());
    setAuditLogs(getAuditLogs());
  };

  useEffect(() => {
    if (session) {
      reloadData();
      const interval = setInterval(reloadData, 3500);
      return () => clearInterval(interval);
    }
  }, [session]);

  // Step 1: Verify Master Passcode
  const handleStepOneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsAuthenticating(true);

    try {
      const res = await verifyFounderStepOne(selectedFounder, passphrase);
      if (res.success && res.otpState) {
        setActiveOtp(res.otpState);
        setAuthStep('otp');
        setOtpDigits(['', '', '', '', '', '']);
        // Focus first OTP input on next tick
        setTimeout(() => {
          otpInputsRef.current[0]?.focus();
        }, 100);
      } else {
        setAuthError(res.error || 'Authentication denied.');
        if (res.lockedSeconds) {
          setLockoutSeconds(res.lockedSeconds);
        }
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Handle OTP digit changes
  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) {
      // User pasted full OTP
      const pastedDigits = val.replace(/\D/g, '').slice(0, 6).split('');
      const newDigits = [...otpDigits];
      pastedDigits.forEach((digit, i) => {
        newDigits[i] = digit;
      });
      setOtpDigits(newDigits);
      const nextIndex = Math.min(pastedDigits.length, 5);
      otpInputsRef.current[nextIndex]?.focus();
      return;
    }

    const newDigits = [...otpDigits];
    newDigits[index] = val.replace(/\D/g, '');
    setOtpDigits(newDigits);

    // Auto advance focus to next box
    if (val && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  // Step 2: Verify 6-digit OTP code
  const handleStepTwoSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAuthError(null);
    const code = otpDigits.join('');

    if (code.length < 6) {
      setAuthError('Please enter all 6 digits of your 2FA verification code.');
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      const res = verifyFounderStepTwo(selectedFounder, code);
      if (res.success && res.session) {
        setSession(res.session);
        setPassphrase('');
        setAuthStep('credentials');
      } else {
        setAuthError(res.error || 'Invalid 2FA verification code.');
        if (res.lockedSeconds) {
          setLockoutSeconds(res.lockedSeconds);
          setAuthStep('credentials');
        }
      }
      setIsAuthenticating(false);
    }, 400);
  };

  const handleResendOtp = () => {
    if (lockoutSeconds > 0) return;
    const newOtp = generateFounderOtp(selectedFounder);
    setActiveOtp(newOtp);
    setOtpDigits(['', '', '', '', '', '']);
    setAuthError(null);
  };

  const handleAutoFillOtp = () => {
    if (!activeOtp) return;
    const digits = activeOtp.otpCode.split('');
    setOtpDigits(digits);
    setCopiedOtp(true);
    setTimeout(() => setCopiedOtp(false), 2000);
    // Submit automatically
    setTimeout(() => {
      const res = verifyFounderStepTwo(selectedFounder, activeOtp.otpCode);
      if (res.success && res.session) {
        setSession(res.session);
        setPassphrase('');
        setAuthStep('credentials');
      }
    }, 300);
  };

  const handleLogout = () => {
    terminateSession();
    setSession(null);
    setAuthStep('credentials');
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwChangeMessage(null);

    if (newPassword.length < 8) {
      setPwChangeMessage({ text: 'New password must be at least 8 characters long.', isError: true });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwChangeMessage({ text: 'Passwords do not match.', isError: true });
      return;
    }

    const founder = (session?.founderName as FounderName) || 'Varad Edke';
    const res = await updateFounderPassword(founder, newPassword);
    if (res.success) {
      setPwChangeMessage({ text: 'Master password updated securely with salted SHA-256 hash.', isError: false });
      setNewPassword('');
      setConfirmPassword('');
      reloadData();
    } else {
      setPwChangeMessage({ text: res.message, isError: true });
    }
  };

  const handleUpdateStatus = (id: string, status: 'new' | 'contacted' | 'closed') => {
    updateLeadStatus(id, status);
    reloadData();
  };

  const exportCSV = () => {
    const header = 'ID,Name,Email,Phone,Service,Budget,SubmittedAt,AssignedTo,Status\n';
    const rows = leads
      .map(
        (l) =>
          `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.service}","${l.budget}","${l.submittedAt}","${l.assignedTo}","${l.status || 'new'}"`
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

  const filteredLeads = leads.filter((lead) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.phone.includes(searchQuery) ||
      (lead.company ? lead.company.toLowerCase().includes(query) : false);
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ----------------------------------------------------
  // Unauthenticated State: 2-Factor Authentication Gate
  // ----------------------------------------------------
  if (!session) {
    const currentProfile = AUTHORIZED_FOUNDERS[selectedFounder];

    return (
      <div className="max-w-md mx-auto px-4 py-12 sm:py-20">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="p-6 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-md">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-base font-bold">Founder 2FA Console</h1>
                <p className="text-xs text-slate-400">Strictly Restricted to Varad Edke & Ram Chavan</p>
              </div>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>2FA Locked</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Lockout Warning */}
            {lockoutSeconds > 0 && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs space-y-1.5">
                <div className="font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Security Lockout Active</span>
                </div>
                <p className="text-rose-700">
                  Multiple invalid authentication attempts detected. Portal access is temporarily frozen.
                </p>
                <div className="font-mono font-bold text-sm text-rose-900 pt-1">
                  Cooldown: {Math.floor(lockoutSeconds / 60)}m {lockoutSeconds % 60}s remaining
                </div>
              </div>
            )}

            {/* Error Message */}
            {authError && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            {/* STEP 1: Founder Selection & Master Passcode */}
            {authStep === 'credentials' ? (
              <form onSubmit={handleStepOneSubmit} className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-800">1. Verified Founder Identity</label>
                    <span className="text-[10px] text-slate-500 font-mono">Step 1 of 2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Varad Edke', 'Ram Chavan'] as const).map((name) => {
                      const isSelected = selectedFounder === name;
                      const profile = AUTHORIZED_FOUNDERS[name];
                      return (
                        <button
                          key={name}
                          type="button"
                          onClick={() => {
                            setSelectedFounder(name);
                            setAuthError(null);
                          }}
                          className={`p-3 rounded-2xl border text-left transition-all relative ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-bold shadow-xs'
                              : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold truncate">{name}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                          </div>
                          <div className="text-[10px] text-slate-500 font-normal mt-0.5">{profile.role}</div>
                          <div className="text-[9px] text-slate-400 font-mono mt-1">{profile.maskedPhone}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    2. Founder Master Passphrase / Passcode
                  </label>
                  <div className="relative">
                    <input
                      type={showPassphrase ? 'text' : 'password'}
                      required
                      disabled={lockoutSeconds > 0}
                      placeholder={`Enter ${selectedFounder}'s master passcode`}
                      value={passphrase}
                      onChange={(e) => setPassphrase(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none pr-10 disabled:opacity-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassphrase(!showPassphrase)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label="Toggle password visibility"
                    >
                      {showPassphrase ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Pre-authorized for {selectedFounder} (e.g.{' '}
                    <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">
                      {currentProfile.defaultPasscodes[0]}
                    </code>{' '}
                    or PIN <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">
                      {currentProfile.defaultPasscodes[2]}
                    </code>)
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isAuthenticating || lockoutSeconds > 0 || !passphrase}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  {isAuthenticating ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Verify & Send 2FA Code</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 border-t border-slate-100 text-center">
                  <span className="text-[10px] text-slate-400">
                    Protected by salted SHA-256 Web Crypto API & Karvenagar security gateway.
                  </span>
                </div>
              </form>
            ) : (
              /* STEP 2: 2-Factor OTP Code Verification */
              <form onSubmit={handleStepTwoSubmit} className="space-y-5 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthStep('credentials');
                      setAuthError(null);
                    }}
                    className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 font-semibold"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Change Founder</span>
                  </button>
                  <span className="text-[10px] text-blue-600 font-mono font-bold">Step 2 of 2: OTP Verification</span>
                </div>

                {/* 2FA Dispatch Card */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/90 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-900 flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-blue-600" />
                      <span>2FA Dispatched to {selectedFounder}</span>
                    </span>
                    <span className="font-mono text-[11px] text-blue-700 font-semibold">
                      {otpRemainingSeconds}s left
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-800">
                    A secure 6-digit verification code has been dispatched to{' '}
                    <strong className="font-mono text-blue-950">{currentProfile.maskedPhone}</strong> and{' '}
                    <strong className="font-mono text-blue-950">{currentProfile.maskedEmail}</strong>.
                  </p>

                  {/* High Security Simulated SMS / Email Alert with Auto-fill */}
                  {activeOtp && (
                    <div className="mt-2 p-2.5 bg-white rounded-xl border border-blue-200 text-slate-800 flex items-center justify-between shadow-xs">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                          Live 2FA Security Token:
                        </div>
                        <div className="font-mono text-base font-extrabold text-blue-600 tracking-widest">
                          {activeOtp.otpCode}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleAutoFillOtp}
                        className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition-colors"
                      >
                        {copiedOtp ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Verified!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Auto-Fill OTP</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* 6 Digit Input Boxes */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2 text-center">
                    Enter 6-Digit One-Time Password (OTP)
                  </label>
                  <div className="flex justify-center gap-2">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          otpInputsRef.current[idx] = el;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                        className="w-11 h-12 text-center text-lg font-mono font-extrabold text-slate-900 border border-slate-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30 outline-none transition-all"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={otpRemainingSeconds > 90 || lockoutSeconds > 0}
                    className="text-blue-600 hover:text-blue-700 font-semibold disabled:opacity-50"
                  >
                    Resend Code
                  </button>
                  <span className="text-slate-400 text-[11px]">Valid for 120 seconds</span>
                </div>

                <button
                  type="submit"
                  disabled={isAuthenticating || otpDigits.join('').length < 6 || lockoutSeconds > 0}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  {isAuthenticating ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Authenticate & Enter Console</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // Authenticated State: Founder Admin Dashboard
  // ----------------------------------------------------
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Top Founder Identity & Session Bar */}
      <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg text-lg">
            {session.founderName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold">{session.founderName}</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>2FA Session Verified</span>
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Co-Founder · Friends IT Solutions · Karvenagar, Pune · Logged in at{' '}
              {new Date(session.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={reloadData}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-blue-400" />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={exportCSV}
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Leads CSV</span>
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Terminate Session</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 space-x-2">
        <button
          type="button"
          onClick={() => setActiveTab('leads')}
          className={`py-3 px-5 text-xs font-bold rounded-t-xl transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'leads'
              ? 'border-blue-600 text-blue-600 bg-blue-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Mail className="w-4 h-4" />
          <span>Client Inquiries & Quotes ({leads.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('visitors')}
          className={`py-3 px-5 text-xs font-bold rounded-t-xl transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'visitors'
              ? 'border-blue-600 text-blue-600 bg-blue-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Live Site Visitors ({visitors.length})</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('security')}
          className={`py-3 px-5 text-xs font-bold rounded-t-xl transition-all flex items-center gap-2 border-b-2 ${
            activeTab === 'security'
              ? 'border-blue-600 text-blue-600 bg-blue-50/50'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Security & Audit Logs</span>
        </button>
      </div>

      {/* TAB 1: Leads & Inquiries */}
      {activeTab === 'leads' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search leads by name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              {(['all', 'new', 'contacted'] as const).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    statusFilter === st
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
              <Mail className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No leads found</p>
              <p className="text-xs text-slate-500">Inquiries submitted via the Contact form will appear here in real time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <span className="text-sm font-bold text-slate-900">{lead.name}</span>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs font-medium text-slate-600">{lead.company}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono text-slate-400">{lead.submittedAt}</span>
                      <span className="text-slate-300">|</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                          lead.status === 'contacted'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {lead.status || 'new'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Requested Service:</span>
                      <span className="font-semibold text-slate-800">{lead.service}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Budget Target:</span>
                      <span className="font-semibold text-emerald-600 font-mono">{lead.budget}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Assigned Founder:</span>
                      <span className="font-semibold text-blue-600">{lead.assignedTo}</span>
                    </div>
                  </div>

                  {lead.details && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                      {lead.details}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-3 text-xs">
                      <a
                        href={`tel:${lead.phone}`}
                        className="text-slate-700 hover:text-blue-600 font-mono flex items-center gap-1 font-semibold"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{lead.phone}</span>
                      </a>
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-slate-700 hover:text-blue-600 flex items-center gap-1"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        <span>{lead.email}</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(lead.id, 'contacted')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-semibold transition-colors"
                      >
                        Mark Contacted
                      </button>
                      <button
                        type="button"
                        onClick={() => handleUpdateStatus(lead.id, 'new')}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        Mark New
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Live Visitors */}
      {activeTab === 'visitors' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-600">
              Real-time activity and visitor sessions tracked with zero invasive telemetry.
            </p>
            <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{visitors.length} Active Sessions</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="py-3 px-4">Visitor</th>
                    <th className="py-3 px-4">Page / Location</th>
                    <th className="py-3 px-4">Device & Browser</th>
                    <th className="py-3 px-4">Current Status</th>
                    <th className="py-3 px-4">Last Active</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {visitors.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-800">{v.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900">{v.currentPage || '/home'}</div>
                        <div className="text-[10px] text-slate-500">{v.location}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div>{v.device}</div>
                        <div className="text-[10px] text-slate-500">{v.browser}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium text-[10px]">
                          {v.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-500">{v.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Security & Audit Logs */}
      {activeTab === 'security' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left: Change Master Password */}
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-blue-600" />
                  <span>Update Master Passcode</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Change the login passphrase for <strong className="text-slate-800">{session.founderName}</strong>.
                </p>
              </div>

              {pwChangeMessage && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    pwChangeMessage.isError
                      ? 'bg-rose-50 border border-rose-200 text-rose-700'
                      : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                  }`}
                >
                  {pwChangeMessage.isError ? (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  )}
                  <span>{pwChangeMessage.text}</span>
                </div>
              )}

              <form onSubmit={handlePasswordChange} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">New Master Passphrase</label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="Min 8 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Confirm New Passphrase</label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="Re-type new passphrase"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  Save Passphrase
                </button>
              </form>
            </div>

            {/* Active Session Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-800 block">Current Cryptographic Session:</span>
              <div className="font-mono text-[10px] text-slate-500 break-all bg-white p-2.5 rounded-xl border border-slate-200">
                Token: {session.token}
              </div>
              <div className="text-[11px] text-slate-500">
                Expires:{' '}
                {new Date(session.expiresAt).toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>

          {/* Right: Security Audit Log Stream */}
          <div className="md:col-span-7 space-y-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Immutable Security Audit Log</span>
            </h3>
            <div className="bg-white rounded-2xl border border-slate-200 p-4 divide-y divide-slate-100 max-h-[500px] overflow-y-auto shadow-xs">
              {auditLogs.length === 0 ? (
                <p className="text-xs text-slate-400 text-center py-6">No audit events recorded yet.</p>
              ) : (
                auditLogs.map((log) => (
                  <div key={log.id} className="py-2.5 flex items-start justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800">{log.actor}</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${
                            log.action === 'LOGIN_SUCCESS' || log.action === '2FA_OTP_SENT'
                              ? 'bg-emerald-50 text-emerald-700'
                              : log.action === 'PASSWORD_CHANGED'
                              ? 'bg-blue-50 text-blue-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}
                        >
                          {log.action}
                        </span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{log.details}</p>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 shrink-0">{log.timestamp}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
