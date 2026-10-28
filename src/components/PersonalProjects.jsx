import React from 'react';
import { ExternalLink, Play, Star, Code } from 'lucide-react';
import { CardSkeleton } from './CardSkeleton';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function PersonalProjects({ personalProjects = [], onOpenVideo }) {
  if (!personalProjects) {
    return <CardSkeleton count={3} />;
  }

  const sortedProjects = [...personalProjects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 mb-3">
            <Code className="w-4 h-4" />
            <span>Featured Open Source & Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Independent software products, AI tools, and full-stack applications.
          </p>
        </div>

        {/* Empty state check */}
        {sortedProjects.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 font-medium">No personal projects listed yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <div
                key={project.id || project.title}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 ${
                  project.featured
                    ? 'border-emerald-500/40 dark:border-emerald-500/40 shadow-lg shadow-emerald-500/5 hover:border-emerald-500 dark:hover:border-emerald-500 ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar: Featured Badge & Actions */}
                  <div className="flex items-center justify-between mb-4">
                    {project.featured ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <Star className="w-3.5 h-3.5 fill-emerald-500" /> Featured Project
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Project
                      </span>
                    )}

                    {/* Links */}
                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          aria-label={`GitHub repository for ${project.title}`}
                          title="View GitHub Source"
                        >
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                          title="Open Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Problem / Solution section if specified */}
                  {(project.problem || project.solution) && (
                    <div className="space-y-2.5 mb-6 text-xs p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/80">
                      {project.problem && (
                        <p className="text-slate-600 dark:text-slate-300">
                          <strong className="text-rose-500">Problem:</strong> {project.problem}
                        </p>
                      )}
                      {project.solution && (
                        <p className="text-slate-600 dark:text-slate-300">
                          <strong className="text-teal-500">Solution:</strong> {project.solution}
                        </p>
                      )}
                      {project.impact && (
                        <p className="text-slate-800 dark:text-slate-200 font-semibold pt-1 border-t border-slate-200/50 dark:border-slate-800">
                          <strong className="text-emerald-500">Outcome:</strong> {project.impact}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer: Tech stack + Optional video button */}
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

                  {project.videoUrl && (
                    <button
                      onClick={() => onOpenVideo(project.videoUrl, project.title)}
                      className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <Play className="w-3.5 h-3.5 fill-emerald-600 dark:fill-emerald-400" />
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
