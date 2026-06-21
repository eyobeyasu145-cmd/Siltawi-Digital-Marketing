import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md">
        {/* Animated Pulsing Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3, 
            ease: "easeInOut" 
          }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25 mb-6"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>

        {/* Agency Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-display font-medium tracking-wide bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
        >
          SILTAWI
        </motion.h1>

        {/* Subtitle / Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-accent mt-2 font-display"
        >
          Digital Marketing Agency
        </motion.p>

        {/* Ethiopia Accent */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.7 }}
          className="text-[10px] text-slate-400 tracking-wider mt-1 font-mono"
        >
          Addis Ababa, Ethiopia
        </motion.span>

        {/* Progress Bar Container */}
        <div className="w-48 h-[3px] bg-slate-800 rounded-full mt-10 overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-accent"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Numerical Counter */}
        <span className="text-[10px] font-mono mt-2 text-slate-500">
          Loading {Math.min(100, progress)}%
        </span>
      </div>
    </motion.div>
  );
};
