import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Service } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  service: Service | null;
  onClose: () => void;
  onBookConsulation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, service, onClose, onBookConsulation }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Glass backdrop filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Container Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
          >
            {/* Header top banner */}
            <div className="p-6 md:p-8 border-b border-slate-100 dark:border-slate-900 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-accent/10 text-primary dark:text-accent flex items-center justify-center">
                  <DynamicIcon name={service.icon} size={24} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white leading-tight">
                    {service.title}
                  </h3>
                  <span className="text-xs text-primary dark:text-accent font-semibold tracking-wider uppercase font-mono">
                    Premium Agency Offer
                  </span>
                </div>
              </div>

              {/* Close Button top corner */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200/40 dark:border-slate-800/40 transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
              {/* Detailed Long Copy */}
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                  Service Overview & Strategy
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Targeted Features bullets checklist */}
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  Scope of Deliverables
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={`${service.id}-feat-${idx}`} 
                      className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom control CTAs */}
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-sans text-center sm:text-left">
                Ready to transform your brand? Get started in minutes.
              </span>
              
              <button
                onClick={() => onBookConsulation(service.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all cursor-pointer text-sm"
              >
                Book Service Consultation
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
