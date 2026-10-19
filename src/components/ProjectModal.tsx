import { X, CheckCircle, ExternalLink, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { ProjectItem } from '../data/content';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilarProject: (projectTitle: string) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilarProject }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="max-w-2xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-bold text-blue-600 font-mono uppercase">
              Case Study · {project.categoryLabel}
            </span>
            <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Visual Showcase */}
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <ProjectCardVisual id={project.id} category={project.category} />
          </div>

          {/* Quantified Impact Banner */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-800 font-medium">Attributable Client Impact</p>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">{project.impactDetail}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-blue-700 font-mono tabular-nums">
                {project.impactMetric}
              </span>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1.5">
                The Business Challenge
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1.5">
                The Engineering Solution
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">
              Technology Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-800 rounded-md border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              const title = project.title;
              onClose();
              onRequestSimilarProject(title);
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
          >
            <span>Request Similar System</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
