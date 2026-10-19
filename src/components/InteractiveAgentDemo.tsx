import { useState } from 'react';
import { MessageSquare, Smartphone, Globe, Send, Check, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export function InteractiveAgentDemo() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'web' | 'mobile'>('whatsapp');
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'user',
      text: 'Hi Friends IT Solutions! We need a custom web portal and mobile app for our business.',
      time: '11:42 AM',
    },
    {
      sender: 'bot',
      text: 'Hello! Welcome to Friends IT Solutions, Karvenagar, Pune. Co-founders Ram Chavan & Varad Edke specialize in Next.js web portals, React Native mobile apps, and custom AI agents. What is your target timeline or key requirement?',
      time: '11:42 AM',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    'What is your typical delivery timeline?',
    'Can we meet in Karvenagar, Pune?',
    'Do you build AI WhatsApp bots?',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botReply = 'Thanks for your query! Varad Edke (+91 83298 63893) and Ram Chavan (+91 93590 32001) can review this scope today.';
      const lower = text.toLowerCase();

      if (lower.includes('timeline') || lower.includes('fast') || lower.includes('days')) {
        botReply = 'Our average working MVP turnaround is 10 to 20 business days. We deploy live staging builds every Friday so you test real software every week!';
      } else if (lower.includes('pune') || lower.includes('meet') || lower.includes('karvenagar') || lower.includes('office')) {
        botReply = 'Yes! Our registered office is near Cummins College Road, Karvenagar, Pune. We welcome in-person discussions over coffee or online video calls.';
      } else if (lower.includes('whatsapp') || lower.includes('ai') || lower.includes('bot') || lower.includes('agent')) {
        botReply = 'Yes! We build automated WhatsApp AI support agents and custom LLM workflows integrated with your CRM, Google Sheets, or ERP databases.';
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('budget') || lower.includes('quote')) {
        botReply = 'Our projects start from ₹25,000 for fast MVPs up to ₹90,000+ for enterprise platforms. You can also use our Instant Estimator below!';
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-100 overflow-hidden">
      {/* Top Header */}
      <div className="p-3 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs text-slate-300 font-medium ml-1">
            Live Interactive Capabilities Demo
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
          TEST ME LIVE
        </span>
      </div>

      {/* Segmented Mode Selector */}
      <div className="flex items-center border-b border-slate-200 bg-slate-50 p-1.5 gap-1 text-xs">
        <button
          type="button"
          onClick={() => setActiveTab('whatsapp')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'whatsapp'
              ? 'bg-white text-emerald-700 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp AI Agent</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('web')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'web'
              ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span>Web Platform Speed</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('mobile')}
          className={`flex-1 py-1.5 px-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'mobile'
              ? 'bg-white text-indigo-700 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
          <span>Mobile UI Suite</span>
        </button>
      </div>

      {/* Tab 1: Interactive WhatsApp AI Chat */}
      {activeTab === 'whatsapp' && (
        <div className="p-4 bg-slate-50/60 flex flex-col h-[340px] justify-between">
          <div className="overflow-y-auto space-y-2.5 pr-1 max-h-[200px]">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right font-mono ${
                      msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono italic">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-slate-400">Agent typing...</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-200 space-y-2">
            {/* Quick interactive prompt pills */}
            <div className="flex flex-wrap gap-1.5">
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="text-[10px] font-medium text-slate-700 bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 px-2 py-1 rounded-md transition-colors"
                >
                  + {prompt}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask our AI agent a question..."
                className="flex-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Tab 2: Web Platform Benchmark */}
      {activeTab === 'web' && (
        <div className="p-5 bg-white space-y-4 h-[340px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Production Web Performance</span>
              <span className="text-[11px] font-mono text-emerald-600 font-bold">99/100 AUDIT</span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-4 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xl font-bold font-mono text-emerald-600">0.7s</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Largest Contentful Paint</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xl font-bold font-mono text-blue-600">12ms</span>
                <p className="text-[10px] text-slate-500 mt-0.5">Interaction Latency</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xl font-bold font-mono text-indigo-600">100%</span>
                <p className="text-[10px] text-slate-500 mt-0.5">SEO & Accessibility</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Next.js 15 Server-Side Rendering (Zero hydration delay)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Custom Tailwind Tokens & Fully Responsive Layout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Structured Schema.org JSON-LD for top Google Search rank</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-900 flex items-center justify-between">
            <span>Want a website that loads in under 1 second?</span>
            <a
              href="#contact"
              className="text-xs font-bold text-blue-700 underline underline-offset-2 shrink-0 ml-2"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      {/* Tab 3: Mobile UI Preview */}
      {activeTab === 'mobile' && (
        <div className="p-5 bg-white space-y-3.5 h-[340px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">Unified React Native & Flutter Apps</span>
              <span className="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                iOS + Android
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 my-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                <span>Clinic Patient & Telehealth Mobile App</span>
                <span className="text-emerald-700 font-mono text-[11px]">Active</span>
              </div>
              <p className="text-[11px] text-slate-600">
                Integrated with Razorpay UPI payments, biometric login, push notifications, and automated WhatsApp appointment reminders.
              </p>
              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 pt-1">
                <span>React Native</span>
                <span>·</span>
                <span>Node.js</span>
                <span>·</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Single codebase for Google Play Store & Apple App Store</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Offline caching & local SQLite sync</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-900 flex items-center justify-between">
            <span>Ready to launch on Play Store & App Store?</span>
            <a
              href="#estimator"
              className="text-xs font-bold text-indigo-700 underline underline-offset-2 shrink-0 ml-2"
            >
              Calculate Cost
            </a>
          </div>
        </div>
      )}

      {/* Bottom Footer Note */}
      <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
        <span>Engineered in Karvenagar, Pune</span>
        <span className="font-semibold text-slate-800">Ram Chavan & Varad Edke</span>
      </div>
    </div>
  );
}
