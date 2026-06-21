import React from 'react';
import { motion } from 'motion/react';
import { teamData } from '../data';
import { Linkedin, Sparkles } from 'lucide-react';

export const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" id="team-roster-grid">
      {teamData.map((member, i) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left"
        >
          {/* Decorative accent top blur */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-2xl group-hover:from-primary/10 transition-all pointer-events-none" />

          <div>
            {/* Round Avatar Container with floating hover effect */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden mb-6 border border-slate-200/60 dark:border-slate-800/60 bg-slate-100 dark:bg-slate-900 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              
              {/* Regional branding overlay dot representing active/online availability */}
              <div className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950" />
            </div>

            {/* Name & Role titles */}
            <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white leading-snug">
              {member.name}
            </h3>
            
            <span className="text-xs text-primary dark:text-accent font-bold uppercase tracking-wider block mt-1 font-mono">
              {member.role}
            </span>

            {/* Concise Bio */}
            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm mt-3 leading-relaxed mb-6">
              {member.bio}
            </p>
          </div>

          {/* Social connection button */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-900/60 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">
              Siltawi Team Addis
            </span>
            
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-50 hover:bg-primary/10 dark:bg-slate-900/40 dark:hover:bg-accent/10 border border-slate-200/40 dark:border-slate-800/40 text-slate-600 dark:text-slate-450 hover:text-primary dark:hover:text-accent transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none"
              aria-label={`Visit ${member.name}'s LinkedIn profile`}
            >
              <Linkedin size={14} />
              <span className="text-[10px] font-bold font-display uppercase tracking-wider pr-1">
                Connect
              </span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
