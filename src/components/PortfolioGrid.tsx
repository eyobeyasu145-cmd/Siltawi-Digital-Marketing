import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../data';
import { PortfolioItem } from '../types';
import { ExternalLink, CheckCircle, Smartphone, Layout, Palette, Film, X } from 'lucide-react';

export const PortfolioGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Websites', 'Branding', 'Social Media', 'Video'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Websites':
        return <Layout size={14} />;
      case 'Branding':
        return <Palette size={14} />;
      case 'Social Media':
        return <Smartphone size={14} />;
      case 'Video':
        return <Film size={14} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full select-none" id="portfolio-container">
      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all focus:outline-none ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-md shadow-primary/25 scale-[1.03]'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left flex flex-col justify-between"
            >
              {/* Project Image & Category floating tag */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay top-left category badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider font-mono">
                  {getCategoryIcon(project.category)}
                  <span className="ml-1">{project.category}</span>
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#06B6D4] font-bold mt-1 font-mono">
                  {project.industry}
                </span>
                
                <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mt-1 mb-2 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {project.description.slice(0, 100)}...
                </p>

                {/* View Project Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-accent/50 text-slate-800 dark:text-slate-200 font-bold tracking-wide hover:bg-slate-50 dark:hover:bg-slate-900 text-xs text-center flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none transition-colors mt-auto"
                >
                  View Case Study
                  <ExternalLink size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal glass background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Modal main sheet */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.45 }}
              className="relative z-10 w-full max-w-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Image banner */}
              <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Top Overlay Badge */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-white text-[10px] font-bold uppercase tracking-wider font-mono">
                  {selectedProject.category} Case Study
                </span>

                {/* Close Button top-right box */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Case Study Body Content */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6 text-left">
                {/* Meta details header Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 font-mono block">
                      Client
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 font-mono block">
                      Industry
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                      {selectedProject.industry}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 font-mono block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                      Addis Ababa
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 font-mono block">
                      Date
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 block">
                      2024 / 2025
                    </span>
                  </div>
                </div>

                {/* Challenge Summary */}
                <div>
                  <h4 className="text-xs font-bold font-display uppercase tracking-widest text-[#06B6D4] mb-2">
                    Project Overview
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Results Checklist */}
                <div>
                  <h4 className="text-xs font-bold font-display uppercase tracking-widest text-emerald-500 mb-3">
                    Project Performance & ROI
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={`${selectedProject.id}-res-${index}`} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle size={15} className="text-emerald-500 shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Framework integrations */}
                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold font-display uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                      Core Technologies & Channels
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={`${selectedProject.id}-tech-${tech}-${index}`} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/30 dark:border-slate-800/30 text-xs font-semibold text-slate-600 dark:text-slate-400 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom control CTAs */}
              <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-850 dark:hover:bg-slate-700 text-white font-semibold text-sm cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
