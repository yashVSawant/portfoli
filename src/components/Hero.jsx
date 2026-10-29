import React from "react";
import { Download, Mail, Sparkles, Terminal, Award } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Hero({ profile, allTechStacks = [] }) {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <Award className="w-3.5 h-3.5 text-emerald-500" />
          <span>3 Years Experience • Full Stack Software Developer</span>
        </div>

        {/* Main Name & Title Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            {profile.name || "Yash Sawant"}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 max-w-3xl">
          {profile.title}
        </p>

        {/* Tagline & Summary */}
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-3xl leading-relaxed font-normal">
          {profile.tagline}
        </p>
        <p className="text-base text-slate-500 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
          {profile.summary}
        </p>

        {/* CTA Buttons & Social Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
          {profile.resumeUrl && profile.resumeUrl !== "#" && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          )}

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Icon Row */}
        {allTechStacks.length > 0 && (
          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 justify-center md:justify-start">
              <Terminal className="w-4 h-4 text-emerald-500" />
              <span>Core Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {allTechStacks.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-emerald-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
