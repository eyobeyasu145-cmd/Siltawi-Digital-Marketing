import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
        {/* Animated Pulsing Official Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.04, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut" 
          }}
          className="mb-8"
        >
          <img 
            src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg" 
            alt="Siltawi Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Subtitle / Tagline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-[#06B6D4] mt-2 font-display"
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
