import React from 'react';
import { Play, Flame, Wrench, Calendar, Building2, TrendingUp } from 'lucide-react';
import { CardSkeleton } from './CardSkeleton';

export function CurrentProjects({ currentProjects = [], onOpenVideo }) {
  if (!currentProjects) {
    return <CardSkeleton count={3} />;
  }

  return (
    <section id="highlights" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 mb-3">
            <Building2 className="w-4 h-4" />
            <span>Professional Work & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Engineering Highlights
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Key accomplishments, production features, and optimization systems shipped at Vlocity AI.
          </p>
        </div>

        {/* Empty state check */}
        {currentProjects.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 font-medium">No experience highlights listed.</p>
          </div>
        ) : (
          /* Grid: 1 col on mobile, 2 on tablet, 2 on desktop */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <div
                key={project.id || project.title}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div>
                  {/* Top Metadata Header: Company & Date */}
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
                      <Building2 className="w-3.5 h-3.5" />
                      {project.company} {project.role ? `• ${project.role}` : ''}
                    </span>
                    {project.date && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </span>
                    )}
                  </div>

                  {/* Title & Type Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                        project.type === 'bugfix'
                          ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                      }`}
                    >
                      {project.type === 'bugfix' ? (
                        <>
                          <Wrench className="w-3 h-3" /> Optimization
                        </>
                      ) : (
                        <>
                          <Flame className="w-3 h-3" /> Feature System
                        </>
                      )}
                    </span>
                  </div>

                  {/* Clean 3-Line Problem -> Solution -> Impact Layout */}
                  <div className="space-y-3 mb-6 text-sm">
                    {project.problem && (
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                        <span className="font-semibold text-rose-600 dark:text-rose-400 block mb-0.5">
                          🚨 Challenge:
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    {project.solution && (
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800/80">
                        <span className="font-semibold text-teal-600 dark:text-teal-400 block mb-0.5">
                          🛠️ Engineering Solution:
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    )}

                    {project.impact && (
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/25">
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mb-0.5">
                          <TrendingUp className="w-4 h-4" /> Business & Technical Impact:
                        </span>
                        <p className="text-slate-800 dark:text-slate-100 font-semibold leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Tags + Video Facade Trigger */}
                <div>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Video Trigger Button (if video exists) */}
                  {project.videoUrl && (
                    <button
                      onClick={() => onOpenVideo(project.videoUrl, project.title)}
                      className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <Play className="w-4 h-4 fill-emerald-600 dark:fill-emerald-400" />
                      <span>Watch Demo Video</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
