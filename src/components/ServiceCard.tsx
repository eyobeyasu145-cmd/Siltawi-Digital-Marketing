import React from 'react';
import { motion } from 'motion/react';
import { Service } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onLearnMore, index }) => {
  // Pastel accent colors depending on service/index to emulate the Bento design variety
  const getIconTheme = (idx: number) => {
    switch (idx % 3) {
      case 0: // blue
        return 'bg-blue-50 text-blue-600 dark:bg-blue-950/80 dark:text-blue-400';
      case 1: // cyan
        return 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/80 dark:text-cyan-400';
      case 2: // amber/orange
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/80 dark:text-amber-450';
      default:
        return 'bg-slate-50 text-slate-600 dark:bg-slate-900 dark:text-slate-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all text-left overflow-hidden"
    >
      <div>
        {/* Rounded Icon Encloser */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all duration-300 ${getIconTheme(index)}`}>
          <DynamicIcon name={service.icon} size={22} />
        </div>

        {/* Title */}
        <h3 className="font-display font-black text-xl text-slate-900 dark:text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-sans">
          {service.description}
        </p>
      </div>

      {/* Learn More Action wrapper */}
      <button
        onClick={() => onLearnMore(service)}
        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary dark:text-accent group-hover:text-primary/80 dark:group-hover:text-accent/80 cursor-pointer focus:outline-none w-fit group-hover:translate-x-1 transition-transform"
      >
        Learn More
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </motion.div>
  );
};
