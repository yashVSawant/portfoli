import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Code2 className="w-4 h-4 text-emerald-500" />
          <span>© {currentYear} {profile.name || 'Yash Vinod Sawant'}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400 flex items-center gap-1">
            Built with React, Tailwind & <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" />
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Scroll back to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
