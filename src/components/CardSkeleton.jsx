import React from 'react';

export function CardSkeleton({ count = 3, type = 'project' }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <div 
          key={idx} 
          className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm animate-pulse flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            </div>
            <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-4"></div>
            <div className="space-y-3 mb-6">
              <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-4/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
            <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
