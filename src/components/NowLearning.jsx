import React from 'react';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export function NowLearning({ nowLearning = [] }) {
  if (!nowLearning || nowLearning.length === 0) {
    return (
      <section id="learning" className="py-12 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
          <p>No learning topics listed currently.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="learning" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Continuous Growth & Focus Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Now Learning
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-xl text-base">
            Architecture patterns, cloud tech, and advanced engineering topics currently exploring.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile / Chip Grid on Desktop */}
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {nowLearning.map((item) => (
            <a
              key={item.id || item.title}
              href={item.link || '#'}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="min-w-[280px] sm:min-w-0 flex-1 flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  {item.link && (
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span>Explore Topic</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
