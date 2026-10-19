import { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Code, Laptop, Smartphone, Database, Clock } from 'lucide-react';
import { SolutionItem } from '../data/content';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectModalProps {
  project: SolutionItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForQuote?: (projectTitle: string) => void;
  onRequestSimilarProject?: (projectTitle: string) => void;
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onSelectForQuote,
  onRequestSimilarProject,
}: ProjectModalProps) {
  const [modalTab, setModalTab] = useState<'overview' | 'simulation' | 'specs'>('overview');

  if (!isOpen || !project) return null;

  const handleTriggerQuote = () => {
    onClose();
    if (onSelectForQuote) {
      onSelectForQuote(project.title);
    } else if (onRequestSimilarProject) {
      onRequestSimilarProject(project.title);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-blue-600 font-mono uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 text-xs font-mono">{project.estimatedSprint}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 bg-slate-100/70 px-6 pt-2 gap-2 text-xs">
          <button
            type="button"
            onClick={() => setModalTab('overview')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all ${
              modalTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Architecture Overview
          </button>
          <button
            type="button"
            onClick={() => setModalTab('simulation')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all ${
              modalTab === 'simulation'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            UI Interface Preview
          </button>
          <button
            type="button"
            onClick={() => setModalTab('specs')}
            className={`pb-2.5 px-3 font-bold border-b-2 transition-all ${
              modalTab === 'specs'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Technical Specifications
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {modalTab === 'overview' && (
            <div className="space-y-6">
              {/* Visual Showcase */}
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
                <ProjectCardVisual id={project.id} category={project.category} />
              </div>

              {/* Architecture Highlight Banner */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-800 font-medium">Core Engineering Highlight</p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">{project.architectureHighlight}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    Production Ready
                  </span>
                </div>
              </div>

              {/* Core Deliverables */}
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">
                  Built-In Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {project.coreFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {modalTab === 'simulation' && (
            <div className="space-y-4">
              <div className="p-3 bg-slate-900 rounded-xl text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-200">Live Client Preview Simulation</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                  200 OK
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200">
                <ProjectCardVisual id={project.id} category={project.category} />
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <p className="font-bold text-slate-900">How Ram & Varad ship this to you:</p>
                <p className="text-slate-600 leading-relaxed">
                  Every deployment includes complete source code access, automated GitHub Actions deployment pipelines, full documentation, and 30 days of warranty support with direct WhatsApp access.
                </p>
              </div>
            </div>
          )}

          {modalTab === 'specs' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 font-mono text-xs font-semibold shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs">Target Delivery Sprint</h4>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-900">{project.estimatedSprint}</span>
                  <span className="text-slate-500">(Includes design approval, development & QA staging)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-xs">Deployment & Hosting Options</h4>
                <p className="text-slate-600 leading-relaxed">
                  Vercel / AWS / Google Cloud Run / DigitalOcean / Render. We configure SSL certificates, custom domain routing, and automated daily database backups.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to Solutions
          </button>
          <button
            type="button"
            onClick={handleTriggerQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all active:scale-95"
          >
            <span>Request Quote for This Solution</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
