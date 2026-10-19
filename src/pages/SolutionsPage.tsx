import { useState } from 'react';
import { SOLUTIONS, SolutionItem } from '../data/content';
import { ProjectCardVisual } from '../components/ProjectCardVisual';
import { ProjectModal } from '../components/ProjectModal';
import { useRouter } from '../context/RouterContext';
import { Sparkles, Code2, ArrowUpRight, CheckCircle2, Cpu, ExternalLink } from 'lucide-react';

export function SolutionsPage() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [viewMode, setViewMode] = useState<Record<string, 'preview' | 'arch'>>({});

  const categories = [
    { id: 'all', label: 'All Blueprints (6)' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'Custom AI & LLMs' },
    { id: 'logistics', label: 'Operations & DevOps' },
  ];

  const filteredSolutions = SOLUTIONS.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'web') return s.category.toLowerCase().includes('web') || s.category.toLowerCase().includes('commerce');
    if (activeCategory === 'mobile') return s.category.toLowerCase().includes('mobile') || s.category.toLowerCase().includes('health');
    if (activeCategory === 'ai') return s.category.toLowerCase().includes('ai') || s.category.toLowerCase().includes('agent');
    if (activeCategory === 'logistics') return s.category.toLowerCase().includes('logistics') || s.category.toLowerCase().includes('cloud');
    return true;
  });

  const toggleViewMode = (id: string, mode: 'preview' | 'arch') => {
    setViewMode((prev) => ({ ...prev, [id]: mode }));
  };

  const handleSelectForQuote = (projectTitle: string) => {
    setSelectedSolution(null);
    navigate('estimator', { solution: projectTitle });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Blueprints</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Tested architectures ready for rapid deployment.
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Instead of starting from scratch, explore our pre-engineered, benchmarked blueprints. Each architecture includes modular database schemas, battle-tested API controllers, and sleek UI frontends.
        </p>

        {/* Categories */}
        <div className="pt-2 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === c.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSolutions.map((sol) => {
          const currentMode = viewMode[sol.id] || 'preview';
          return (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Visual Area with Toggle */}
              <div>
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-slate-100 text-[11px]">
                  <span className="font-semibold text-blue-600">{sol.category}</span>
                  <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-[10px]">
                    <button
                      type="button"
                      onClick={() => toggleViewMode(sol.id, 'preview')}
                      className={`px-2 py-0.5 rounded font-medium transition-all ${
                        currentMode === 'preview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      UI Preview
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleViewMode(sol.id, 'arch')}
                      className={`px-2 py-0.5 rounded font-medium transition-all ${
                        currentMode === 'arch' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      Tech Specs
                    </button>
                  </div>
                </div>

                <div className="h-48 bg-slate-50 overflow-hidden relative border-b border-slate-100">
                  {currentMode === 'preview' ? (
                    <ProjectCardVisual id={sol.id} category={sol.category} />
                  ) : (
                    <div className="p-4 h-full flex flex-col justify-between bg-slate-900 text-white font-mono text-[11px]">
                      <div>
                        <div className="text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5" />
                          <span>Architecture Diagram</span>
                        </div>
                        <p className="text-slate-300 text-[10px] leading-relaxed line-clamp-4">
                          {sol.architectureHighlight}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[10px] text-slate-400">Core Services:</div>
                        <div className="flex flex-wrap gap-1">
                          {sol.techStack.map((t, idx) => (
                            <span key={idx} className="bg-slate-800 text-blue-300 px-1.5 py-0.5 rounded text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">{sol.categoryLabel}</span>
                    <span className="font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                      {sol.estimatedSprint}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {sol.summary}
                  </p>

                  <div className="space-y-1 pt-2">
                    {sol.coreFeatures.slice(0, 2).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedSolution(sol)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Inspect Blueprint</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectForQuote(sol.title)}
                  className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors shadow-xs"
                >
                  <span>Deploy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Blueprint Detail Modal */}
      {selectedSolution && (
        <ProjectModal
          project={selectedSolution}
          isOpen={Boolean(selectedSolution)}
          onClose={() => setSelectedSolution(null)}
          onSelectForQuote={handleSelectForQuote}
        />
      )}
    </div>
  );
}
