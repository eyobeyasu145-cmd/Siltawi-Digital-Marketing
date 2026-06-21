import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statsData } from '../data';
import { Award, Users, Trophy, Smile } from 'lucide-react';

interface CounterProps {
  target: number;
  suffix: string;
  trigger: boolean;
}

const IndividualCounter: React.FC<CounterProps & { isHighlighted?: boolean }> = ({ target, suffix, trigger, isHighlighted }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500; // Animate over 1.5 seconds
    const incrementTime = Math.max(Math.floor(duration / target), 12);
    
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / incrementTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, trigger]);

  return (
    <span className={`font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight ${
      isHighlighted 
        ? 'text-cyan-400' 
        : 'text-slate-900 dark:text-white'
    }`}>
      {count}{suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const getMetricIcon = (id: string, className: string) => {
    switch (id) {
      case 'projects':
        return <Trophy className={className} size={32} />;
      case 'clients':
        return <Users className={className} size={32} />;
      case 'team':
        return <Award className={className} size={32} />;
      case 'satisfaction':
        return <Smile className={className} size={32} />;
      default:
        return <Trophy className={className} size={32} />;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-12 md:py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 select-none relative overflow-hidden"
    >
      {/* Absolute decor grids */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {statsData.map((stat, i) => {
            const isHighlighted = i === 0;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex flex-col items-center lg:items-start text-center lg:text-left p-6 md:p-8 rounded-3xl border transition-all duration-300 group ${
                  isHighlighted
                    ? 'bg-slate-900 dark:bg-slate-950 text-white border-transparent shadow-lg'
                    : 'bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-slate-250 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Icon Container with glowing theme hover */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-all ${
                  isHighlighted
                    ? 'bg-white/10 text-cyan-400'
                    : 'bg-slate-50 dark:bg-slate-900 text-primary dark:text-accent'
                }`}>
                  {getMetricIcon(stat.id, "group-hover:rotate-6 transition-transform")}
                </div>

                {/* Counter and Label */}
                <div className="flex flex-col gap-1 w-full">
                  <IndividualCounter 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    trigger={isInView}
                    isHighlighted={isHighlighted}
                  />
                  
                  <span className={`text-xs md:text-sm font-semibold mt-2 font-display ${
                    isHighlighted ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {stat.label}
                  </span>
                  
                  {isHighlighted && (
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden mt-3 w-full">
                      <div className="w-3/4 h-full bg-blue-500"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
