import { useState } from 'react';
import { ArrowUpRight, Filter, Layers, CheckCircle2, Cpu, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { SOLUTIONS, SolutionItem } from '../data/content';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onSelectProjectForQuote: (solutionTitle: string) => void;
}

export function Projects({ onSelectProjectForQuote }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'automation'>('all');
  const [activeModalProject, setActiveModalProject] = useState<SolutionItem | null>(null);
  const [viewMode, setViewMode] = useState<'preview' | 'specs'>('preview');

  const filteredSolutions = SOLUTIONS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-blue-600 mb-3">
              <span>SOLUTIONS & ARCHITECTURES</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">PRODUCTION BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 text-balance">
              Engineered for Real-World Reliability & Scale
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explore dynamic software blueprints crafted by Ram Chavan & Varad Edke for clinics, retailers, logistics providers, and growing businesses.
            </p>
          </div>

          {/* Interactive filter and view mode toggles */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === 'all' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All (6)
              </button>
              <button
                type="button"
                onClick={() => setFilter('web')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === 'web' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Web
              </button>
              <button
                type="button"
                onClick={() => setFilter('mobile')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === 'mobile' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Mobile Apps
              </button>
              <button
                type="button"
                onClick={() => setFilter('ai')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === 'ai' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                AI Agents
              </button>
              <button
                type="button"
                onClick={() => setFilter('automation')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  filter === 'automation' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Automations
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl">
              <button
                type="button"
                onClick={() => setViewMode('preview')}
                className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                  viewMode === 'preview' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                UI Preview
              </button>
              <button
                type="button"
                onClick={() => setViewMode('specs')}
                className={`px-2.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                  viewMode === 'specs' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                }`}
              >
                Tech Specs
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual UI canvas or Architecture Specs */}
                {viewMode === 'preview' ? (
                  <div
                    className="cursor-pointer transition-transform group-hover:scale-[1.01]"
                    onClick={() => setActiveModalProject(solution)}
                  >
                    <ProjectCardVisual id={solution.id} category={solution.category} />
                  </div>
                ) : (
                  <div className="p-4 bg-slate-50 border-b border-slate-200 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-500 text-[10px]">
                      <span>ARCHITECTURE PATTERN</span>
                      <span className="text-blue-600 font-bold">{solution.estimatedSprint}</span>
                    </div>
                    <p className="text-slate-800 font-medium text-[11px] leading-relaxed">
                      {solution.architectureHighlight}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {solution.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-[10px] text-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Category and Solution Type */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="text-blue-600 font-bold">{solution.categoryLabel}</span>
                    <span className="text-slate-500 font-mono font-medium">{solution.solutionType}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(solution)}
                    className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {solution.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {solution.summary}
                  </p>

                  {/* Core Features list */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    {solution.coreFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {solution.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {solution.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-slate-50 text-slate-500 text-[10px] font-mono">
                        +{solution.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(solution)}
                  className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1 py-2"
                >
                  <span>Explore Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectProjectForQuote(solution.title)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition-all"
                >
                  Request Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deep-Dive Case Study / Architecture Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject as any}
            isOpen={!!activeModalProject}
            onClose={() => setActiveModalProject(null)}
            onSelectForQuote={onSelectProjectForQuote}
          />
        )}
      </div>
    </section>
  );
}
