import { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/content';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export function Projects({ onSelectProjectForQuote }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'automation'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((item) => {
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
              <span>PORTFOLIO</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-600">FEATURED PAST WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 text-balance">
              Real Deployments Delivering Measurable Results
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explore recent platforms built by Ram Chavan & Varad Edke for clinics, advisory firms, and growing businesses.
            </p>
          </div>

          {/* Interactive filter segmented control buttons */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl overflow-x-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'web'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web Platforms
            </button>
            <button
              type="button"
              onClick={() => setFilter('mobile')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'mobile'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mobile Apps
            </button>
            <button
              type="button"
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'ai'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AI Agents
            </button>
            <button
              type="button"
              onClick={() => setFilter('automation')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === 'automation'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Automations
            </button>
          </div>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual UI canvas */}
                <div
                  className="cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <ProjectCardVisual id={project.id} category={project.category} />
                </div>

                <div className="p-6">
                  {/* Category and Client */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="text-blue-600 font-bold">{project.categoryLabel}</span>
                    <span className="text-slate-400 font-medium">{project.client}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer mb-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Quantified impact callout */}
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 mb-4 flex items-center justify-between">
                    <span className="text-[11px] text-blue-900 font-medium">Attributable Outcome</span>
                    <span className="text-sm font-bold text-blue-700 font-mono tabular-nums">
                      {project.impactMetric}
                    </span>
                  </div>

                  {/* Clean unboxed tech stack list */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 font-mono pt-3 border-t border-slate-100">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="text-slate-600">
                        {tech}
                        {i < project.techStack.length - 1 && <span className="text-slate-300 ml-1.5">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-50">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectProjectForQuote(project.title)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md transition-colors"
                >
                  Request Similar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onRequestSimilarProject={(title) => {
          onSelectProjectForQuote(title);
        }}
      />
    </section>
  );
}
