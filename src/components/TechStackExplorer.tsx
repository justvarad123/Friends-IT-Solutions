import { useState } from 'react';
import { Layers, CheckCircle2, ArrowRight, Code2, Smartphone, Cpu, Cloud, Database } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'mobile' | 'backend' | 'ai' | 'cloud' | 'database';
  description: string;
  advantage: string;
}

export function TechStackExplorer() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'mobile' | 'backend' | 'ai' | 'cloud' | 'database'>('all');

  const techItems: TechItem[] = [
    {
      name: 'Next.js 15 & React 19',
      category: 'frontend',
      description: 'Server components, edge rendering, and sub-second Core Web Vitals.',
      advantage: 'Lightning-fast page loads and top Google SEO ranking for business portals.',
    },
    {
      name: 'Tailwind CSS v4',
      category: 'frontend',
      description: 'Modern utility tokens, zero runtime overhead, responsive fluid grids.',
      advantage: 'Pixel-perfect UI responsiveness on desktop, tablet, and mobile screens.',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      description: 'Strict type validation across all frontend and backend boundaries.',
      advantage: 'Prevents 90% of common production runtime bugs before deployment.',
    },
    {
      name: 'React Native & Expo',
      category: 'mobile',
      description: 'Unified cross-platform native compilation for iOS and Android.',
      advantage: 'Single codebase cuts mobile development cost and time in half.',
    },
    {
      name: 'Flutter',
      category: 'mobile',
      description: 'High-performance 60fps rendering engine for consumer mobile apps.',
      advantage: 'Silky smooth mobile animations and native hardware integration.',
    },
    {
      name: 'Python & FastAPI',
      category: 'backend',
      description: 'Asynchronous, high-throughput microservices and AI agent backends.',
      advantage: 'Ideal for machine learning endpoints and real-time data ingestion.',
    },
    {
      name: 'Node.js & Express',
      category: 'backend',
      description: 'Event-driven API gateways and real-time WebSocket communication.',
      advantage: 'High concurrency handling for live tracking and customer portals.',
    },
    {
      name: 'LangChain & Gemini LLM',
      category: 'ai',
      description: 'Autonomous multi-step reasoning, agent tool execution, and vector search.',
      advantage: 'Enables 24/7 WhatsApp AI customer bots with zero-hallucination guardrails.',
    },
    {
      name: 'PostgreSQL & pgvector',
      category: 'database',
      description: 'Relational ACID persistence combined with vector similarity embeddings.',
      advantage: 'Robust enterprise transactions and semantic document search in one database.',
    },
    {
      name: 'Supabase & Firebase',
      category: 'database',
      description: 'Real-time database sync, instant authentication, and secure file storage.',
      advantage: 'Accelerates MVP launch timeline from months to under 2 weeks.',
    },
    {
      name: 'AWS & Google Cloud',
      category: 'cloud',
      description: 'Containerized ECS, Cloud Run, serverless functions, and S3 asset buckets.',
      advantage: 'Auto-scaling from 10 to 100,000 users without server crashes.',
    },
    {
      name: 'Docker & GitHub Actions',
      category: 'cloud',
      description: 'Continuous integration, automated staging builds, and container images.',
      advantage: 'Zero-downtime weekly production releases every Friday.',
    },
  ];

  const filtered = techItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
              <span>MODERN ARCHITECTURE</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">ZERO LEGACY BLOAT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 text-balance">
              The Modern Tech Stack Powering Your Products
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We never use slow, bloated page builders or outdated frameworks. We build with strict modern standards: React 19, Next.js 15, TypeScript, Python, and scalable Cloud backends.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-2xs">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'mobile', label: 'Mobile' },
              { id: 'backend', label: 'Backend' },
              { id: 'ai', label: 'AI & LLM' },
              { id: 'database', label: 'Database' },
              { id: 'cloud', label: 'Cloud' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono text-[11px] font-bold text-blue-600 uppercase">
                    {item.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="text-[11px] text-slate-700 leading-snug">
                  <strong className="text-slate-900 font-semibold">Advantage: </strong>
                  {item.advantage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
